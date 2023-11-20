
import csv
from pymongo import MongoClient


# Class for handling data upload to the database
class Reader:
    # Constructor that user the Mongo Connection string and target database
    def __init__(self, uri, db_name):
        self.client = MongoClient(uri)
        self.db = self.client[db_name]
        self.knowledge = []

    def read_row(self, row: dict):
        self.knowledge.append(row)

    def push_to_db(self, collectionName):
        collection = self.db[collectionName]
        result = collection.insert_many(self.knowledge)
        inserted_ids = result.inserted_ids

        print(f"{len(self.knowledge)} rows inserted in NO SQL DB")
        
    def drop_collection(self, collectionName):
        collection = self.db[collectionName]
        collection.drop()
        print("Se borro coleccion")
        
    def get_docs(self, collectionName):
        collection = self.db[collectionName]
        documents = collection.find({})
        res = []
        for document in documents:
            document["_id"] = str(document["_id"])
            res.append(document)
        return res
    
    def getFirstFive(self, collectionName):
        collection = self.db[collectionName]
        documents = list(collection.find().limit(5))
        for document in documents:
            document['_id'] = str(document['_id']) 
            print(document)
        return documents
    
    def get5positions(self, collectionName):
        collection = self.db[collectionName]
        
        # Utilizando la agregación para obtener los 5 puestos con más renuncias
        pipeline = [
            {"$match": {"Estatus": "renuncia"}},  # Filtra solo los documentos con estatus "renuncia"
            {"$group": {"_id": "$area", "total_resignations": {"$sum": 1}}},
            {"$sort": {"total_resignations": -1}},
            {"$limit": 5}
        ]

        top_positions = list(collection.aggregate(pipeline))
        return top_positions

    def get_cambios_generacion(self, collectionName):
        collection = self.db[collectionName]

        pipeline = [
                {
                    "$group": {
                    "_id": "$genero",
                    "promedioAntiguedad": { "$avg": "$antiguedad" }
                    }
                },
                {
                    "$project": {
                    "_id": 0,
                    "genero": "$_id",
                    "promedioAntiguedad": 1
                }
            }
        ]      
        cambios_generacion = list(collection.aggregate(pipeline))
        return cambios_generacion
        
    def get_cambios_puesto(self, collectionName):
        collection = self.db[collectionName]

        pipeline = [
            {
                "$group": {
                    "_id": "$generacion",
                    "total_cambios_de_puesto": { "$sum": "$cambios de puesto" },
                    "count": { "$sum": 1 }
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "generacion": "$_id",
                    "promedio_cambios_de_puesto": { "$divide": ["$total_cambios_de_puesto", "$count"] }
                }
            }
        ]   
        cambios_generacion = list(collection.aggregate(pipeline))
        return cambios_generacion
    
    def get_cambios_antiguedad(self, collectionName): ## falta checarlo Harumi 
        collection = self.db[collectionName]

        pipeline = [
            {
                "$group": {
                    "_id": "$tienda",
                    "cambiosPuestoPromedio": { "$avg": "$cambios de puesto" },
                    "antiguedadPromedio": { "$avg": "$antiguedad" }
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "tienda": "$_id",
                    "cambiosPuestoPromedio": 1,
                    "antiguedadPromedio": 1
                }
            }
        ]

        resultado = collection.aggregate(pipeline)
        return resultado

                
        
