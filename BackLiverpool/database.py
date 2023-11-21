
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
    
    # tabla de herramientas 
    def getFirstFive(self, collectionName):
        collection = self.db[collectionName]
        documents = list(collection.find().limit(5))
        for document in documents:
            document['_id'] = str(document['_id']) 
            print(document)
        return documents
    
    # grafica de pay 5 puestos con mas renuncias 
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

    # grafica 
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
        
    # grafica barras    
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
    
    def get_cambios_antiguedad(self, collectionName): 
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
    
    # grafica de doble barra 
    def get_gender_distribution(self, collectionName):
        collection = self.db[collectionName]
        
        pipeline_top_positions = [
            {"$match": {"Estatus": "renuncia"}},  # Filtra solo los documentos con estatus "renuncia"
            {"$group": {"_id": "$area", "total_resignations": {"$sum": 1}}},
            {"$sort": {"total_resignations": -1}},
            {"$limit": 5}
        ]

        top_positions = list(collection.aggregate(pipeline_top_positions))
        
        # Obtener la distribución por género para los puestos obtenidos
        gender_distribution_pipeline = [
            {"$match": {"Estatus": "renuncia", "area": {"$in": [item['_id'] for item in top_positions]}}},
            {"$group": {"_id": {"area": "$area", "genero": "$genero"}, "count": {"$sum": 1}}},
            {"$group": {
                "_id": "$_id.area",
                "genero_distribution": {
                    "$push": {
                        "genero": "$_id.genero",
                        "count": "$count"
                    }
                }
            }},
            {"$project": {
                "_id": 0,
                "area": "$_id",
                "genero_distribution": 1
            }}
        ]

        gender_distribution = list(collection.aggregate(gender_distribution_pipeline))
        return gender_distribution
    
    # grafica de lineas 
    def get_tienda(self, collectionName):
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
        tienda = list(collection.aggregate(pipeline))
        return tienda
        
    ##Jorge querys grafica de pay 
    def get_razon_genero(self, collectionName):
        collection = self.db[collectionName]

        pipeline = [
            {
                "$group": {
                    "_id": "$genero",
                    "count": { "$sum": 1 }
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "genero": "$_id",
                    "count": "$count"
                }
            }
        ]
        
        razon_genero = list(collection.aggregate(pipeline))
        return razon_genero
    
    ##Grafica de dispersion Jorge 
    def get_disp_antiguedad_edad(self, collectionName):
        collection = self.db[collectionName]

        pipeline = [
            {
                "$project": {
                    "_id": 0,
                    "x": "$antiguedad",
                    "y": "$edad"
                }
            },
            {"$limit": 500}
        ]
        
        disp_antiguedad_edad = list(collection.aggregate(pipeline))
        return disp_antiguedad_edad
    
    ##Grafica de calor Jorge 
    def get_calor_area(self, collectionName):
        collection = self.db[collectionName]

        pipeline = [
            {
                "$group": {
                    "_id": "$area",
                    "media_antiguedad": { "$avg": "$antiguedad" },
                    "count": { "$sum": 1 }
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "area": "$_id",
                    "media_antiguedad": "$media_antiguedad",
                    "cantidad_area": "$count"
                }
            }
        ]
        
        tienda = list(collection.aggregate(pipeline))
        return tienda


                    
            
