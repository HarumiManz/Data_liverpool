from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from uuid import uuid4
from database import Reader
import os
import joblib
import pandas as pd
from pandas import read_csv, read_excel
from catboost import CatBoostClassifier
import datetime

# pip install openpyxl

##checar la url con mongo
MONGO_URL = "mongodb://localhost:27017"


app = Flask("Back Liverpool")
CORS(app)

model: CatBoostClassifier = joblib.load("./model.pkl")
features_info = {
    "edad": {"default": 30, "type": int},
    "genero": {"default": "femenino", "type": str},
    "antiguedad": {"default": 2, "type": int},
    "area": {"default": "cajero", "type": str},
    "tienda": {"default": "liverpool", "type": str},
    "ubicacion": {"default": "nacional tultitlan", "type": str},
    "generacion": {"default": "millennial", "type": str},
}


@app.route("/upload", methods=["POST"])
def upload():
    # File save
    global most_recent_file
    try:
        file = request.files["file"]
    except:
        return jsonify({"message": "Error, no file received", "error": True}), 400

    file_extension = file.filename.rsplit(".", 1)[1].lower()
    file_name = uuid4()
    temp_file_path = f"./temp/{file_name}.{file_extension}"
    file.save(temp_file_path)

    if file_extension == "csv":
        df = read_csv(temp_file_path)
    elif file_extension in ["xls", "xlsx"]:
        df = read_excel(temp_file_path)
    else:
        return jsonify({"message": "Unsupported file format", "error": True}), 400

    df.columns = [header.lower() for header in df.columns]
    headers = df.columns.tolist()
    lines = len(df)
    output_file_path = f"./temp/{file_name}.csv"
    df.to_csv(output_file_path, index=False)

    return (
        jsonify(
            {
                "fileId": file_name,
                "message": "success",
                "fileHeaders": headers,
                "modelHeaders": model.feature_names_,
                "lines": lines,
            }
        ),
        200,
    )


def clasificar_generacion(fecha_nacimiento):
    fecha_nacimiento = datetime.datetime.strptime(fecha_nacimiento, "%Y-%m-%d")
    if 1946 <= fecha_nacimiento.year <= 1964:
        return "babyboomer"
    elif 1965 <= fecha_nacimiento.year <= 1979:
        return "generacionx"
    elif 1980 <= fecha_nacimiento.year <= 1999:
        return "millennial"
    elif 2000 <= fecha_nacimiento.year <= 2015:
        return "generacionz"


@app.route("/predict", methods=["POST"])
def transform():
    try:
        body = request.json
        feature_mapping = body["map"]
        file_name = body["fileId"]
    except:
        return jsonify({"message": "bad request"}), 403

    df = pd.read_csv(f"./temp/{file_name}.csv")

    df = df.applymap(lambda x: x.lower() if isinstance(x, str) else x)

    # Apply transformations first without creating new columns
    try:
        if feature_mapping["genero"]:
            df[feature_mapping["genero"]] = df[feature_mapping["genero"]].replace(
                {"hombre": "masculino", "mujer": "femenino"}
            )

        if feature_mapping["generacion"]:
            df[feature_mapping["generacion"]] = df[feature_mapping["generacion"]].apply(
                clasificar_generacion
            )
        if feature_mapping["ubicacion"]:
            df[feature_mapping["ubicacion"]] = df[
                feature_mapping["ubicacion"]
            ].str.replace(r"^\S+\s", "", regex=True)
        if feature_mapping["tienda"]:
            df[feature_mapping["tienda"]] = df[feature_mapping["tienda"]].apply(
                lambda x: x.split()[0]
            )
        if feature_mapping["area"]:
            df[feature_mapping["area"]] = df[feature_mapping["area"]].apply(
                lambda x: x.split()[0] if not pd.isna(x) else None
            )
    except Exception as err:
        print(err)
        print("little bug")

    # Rename columns as per the reverse mapping
    reverse_mapping = {v: k for k, v in feature_mapping.items()}
    df.rename(columns=reverse_mapping, inplace=True)

    # Ensure all model features are present, add defaults for missing ones
    for feature in model.feature_names_:
        if feature not in df.columns:
            worst_case = 0 if features_info[feature]["type"] == int else ""
            default_value = features_info[feature].get("default", worst_case)
            df[feature] = default_value

    # Keep only the model's expected features in the correct order and convert types
    df = df[model.feature_names_].astype(
        {feature: features_info[feature]["type"] for feature in model.feature_names_}
    )

    try:
        predictions = model.predict(df)
        proba_predicitons = model.predict_proba(df)
        proba_predicitons = [f"{num * 100:.2f}" for num in proba_predicitons[:, 1]]
        df["Probabilidad"] = proba_predicitons
        df["Estatus"] = predictions
        df.to_excel(f"./temp/{file_name}.xlsx", index=False, engine="openpyxl")

    except Exception as err:
        print(err)
        return (
            jsonify(
                {"message": "an error ocurred when predicitng the file", "error": True}
            ),
            500,
        )

    # Read and save predicted file
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        temp_reader.drop_collection("Archivo")

        df = read_excel(f"./temp/{file_name}.xlsx", engine="openpyxl")

        for _, row in df.iterrows():
            row_dict = row.to_dict()
            temp_reader.read_row(row_dict)

        temp_reader.push_to_db("Archivo")
        del temp_reader

        most_recent_file = file_name

        return (
            jsonify({"message": "exitoso!", "fileId": file_name}),
            200,
        )

    except Exception as err:
        print(err)
        return (
            jsonify(
                {"message": "an error ocurred when upoading to mongo", "error": True}
            ),
            500,
        )


@app.route("/download", methods=["POST"])
def download_file():
    fileId = request.form.get("fileId")
    if not fileId:
        return jsonify({"message": "no file id in request", "error": True}), 400
    file_path = f"./temp/{fileId}.xlsx"
    print(file_path)
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    return jsonify({"message": "file doesn't exists", "error": True}), 400


@app.route("/activos")
def getActivos():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_activos("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getAllDocuments")
def getAllDocuments():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_docs("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getFirstFiveDocuments")
def get_first_five_documents():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.getFirstFive("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/get5positions")
def get_5_positions():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get5positions("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getcambios")
def cambios_generacion():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_cambios_generacion("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getpuesto")
def cambios_puesto():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_cambios_puesto("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getcambiosAntiguedad")  # falta checarlo Harumi
def cambios_antiguedad():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_cambios_antiguedad("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getdoblebarra")
def doblebarra():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_gender_distribution("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


@app.route("/getlinea") 
def graficaLinea():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_tienda("Archivo")
        return jsonify({"message": "success", "data": data })
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


## Jorge graficas
@app.route("/getrazongenero")
def razon_genero():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_razon_genero("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


## Jorge graficas
@app.route("/getdispantiedad")
def disp_antiguedad_edad():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_disp_antiguedad_edad("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


## Jorge graficas
@app.route("/getcalorarea")
def calor_area():
    try:
        temp_reader = Reader(
            MONGO_URL,
            "LiverpoolTestBack",
        )
        data = temp_reader.get_calor_area("Archivo")
        return jsonify({"message": "success", "data": data})
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True, port=8082)