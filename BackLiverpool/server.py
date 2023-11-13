from flask import Flask, jsonify, request
from flask_cors import CORS
from uuid import uuid4
import csv
from database import Reader
import os

app = Flask("Back Liverpool")
CORS(app)

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

  
    return (
            jsonify(
                {
                    "message": "File saved successfully!",
                    "lines": len(lines) - 1,
                    "attributes": headers,
                    "id": file_name,
                    "error": False,
                }
            ),
            200,
        )
    
@app.route("/start-processing", methods=["POST"])
def handle_start_processing():
    try :
        fileId = request.form.get("fileId")
        print("Data", fileId)
        temp_reader = Reader("mongodb://localhost:27017/", "LiverpoolTestBack")
        with open(f'./temp/{fileId}.csv', "r") as f:
            dict_reader = csv.DictReader(f)
            line = 1
            for row in dict_reader:
                temp_reader.read_row(row)
                line += 1
        temp_reader.push_to_db("Archivo")
        os.remove(f'./temp/{fileId}.csv')
        del temp_reader
        return jsonify({"message" : "scucces"}), 200
    except Exception as err:
        print(err)
        return jsonify({"message" : "error"}), 500
    
@app.route("/getAllDocuments")
def getAllDocuments():
    try:
        temp_reader = Reader("mongodb://localhost:27017/", "LiverpoolTestBack")
        data = temp_reader.get_docs("Archivo")
        return jsonify({"message" : "success", "data" : data})
    except Exception as err:
        print(err)
        return jsonify({"message" : "error"}), 500
    
    

if __name__ == "__main__":
    app.run("0.0.0.0", debug=True)