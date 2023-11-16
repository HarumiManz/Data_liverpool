from flask import Flask, jsonify, request
from flask_cors import CORS
from uuid import uuid4
import csv
from database import Reader
import os
import joblib
from joblib import load 
from pymongo import MongoClient

#pip install catboost 
#pip install joblib 
q
app = Flask("Back Liverpool")
CORS(app)
loaded_model = joblib.load('modelo_Catboost.pkl') 


@app.route("/upload", methods=["POST"])
def upload():
    try:
        file = request.files["file"]
    except:
        return jsonify({"message": "Error, no file received", "error": True}), 400

    file_name = uuid4()
    file.save(f"./temp/{file_name}.csv")
    with open(f"./temp/{file_name}.csv", "r") as f:
        lines = f.readlines()
        headers = lines[0][:-1].split(",")
        headers = [word.lower() for word in headers]
        lines[0] = ",".join(headers) + "\n"

    with open(f"./temp/{file_name}.csv", "w") as f:
        f.writelines(lines)
        
    try :
        
        temp_reader = Reader("mongodb://localhost:27017/", "LiverpoolTestBack")
        with open(f'./temp/{file_name}.csv', "r") as f:
            dict_reader = csv.DictReader(f)
            line = 1
            for row in dict_reader:
                temp_reader.read_row(row)
                line += 1
        temp_reader.push_to_db(str(file_name))
        os.remove(f'./temp/{file_name}.csv')
        del temp_reader
        
        return (
            jsonify(
                {
                    "message": "archivo cargado",
                    "lines": len(lines) - 1,
                    "attributes": headers,
                    "id": file_name,
                    "error": False,
                }
            ),
            200,
        )
        
         
        
    except Exception as err :
        print(err)
        return (
            jsonify(
                {
                    "message": "error al cargar archivo",
                    "lines": 0,
                    "attributes": None,
                    "id": file_name,
                    "error": True,
                }
            ),
            500,
        )
        
    
@app.route("/getAllDocuments")
def getAllDocuments():
    try:
        temp_reader = Reader("mongodb://localhost:27017/", "LiverpoolTestBack")
        data = temp_reader.get_docs("Archivo")
        return jsonify({"message" : "success", "data" : data})
    except Exception as err:
        print(err)
        return jsonify({"message" : "error"}), 500
    
@app.route("/getLatestDocument")
def getLatestDocument():
    try:
        # Establecer conexión con MongoDB
        client = MongoClient("mongodb://localhost:27017/")
        db = client["LiverpoolTestBack"]
        collection = db["Archivo"]

        # Ordenar los documentos por fecha en orden descendente y obtener el primero (el último ingresado)
        latest_document = collection.find_one({}, sort=[("fecha", -1)])  # Reemplaza "fecha" con el nombre de tu campo de fecha

        return jsonify({"message": "success", "data": latest_document})
    
    except Exception as err:
        print(err)
        return jsonify({"message": "error"}), 500


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True)