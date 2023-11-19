from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from uuid import uuid4
from database import Reader
import os
import joblib
from pandas import read_csv, read_excel

# pip install openpyxl

##checar la url con mongo 
MONGO_URL = "mongodb://localhost:27017"

MOST_HEADERS = [
    "edad",
    "genero",
    "antiguedad",
    "cambios de puesto",
    "area",
    "tienda",
    "ubicacion",
    "generacion",
]

app = Flask("Back Liverpool")
CORS(app)

model = joblib.load("./model.pkl")

most_recent_file = ""


def verify_headers(h):
    for i in MOST_HEADERS:
        if i not in h:
            return False
    return True


@app.route("/upload", methods=["POST"])
def upload():
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

    if not verify_headers(headers):
        return (
            jsonify({"message": "Missing model necessary header", "error": True}),
            400,
        )

    output_file_path = f"./temp/{file_name}.csv"
    df.to_csv(output_file_path, index=False)

    try:
        new_data = read_csv(f"./temp/{file_name}.csv")
        predictions = model.predict(new_data)
        new_data["Estatus"] = predictions
        new_data.to_excel(f"./temp/{file_name}.xlsx", index=False, engine="openpyxl")

    except Exception as err:
        print(err)
        return (
            jsonify(
                {"message": "an error ocurred when predicitng the file", "error": True}
            ),
            500,
        )

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
            jsonify({"message": "success!", "fileId": file_name, "lines": lines}),
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



if __name__ == "__main__":
    app.run("0.0.0.0", debug=True, port=8082)