
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
    
        