import pymongo 
from pymongo import MongoClient
client = MongoClient('mongodb+srv://ellie:mshee791008!@cluster0.xhjvgcr.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta
doc = {
    'name':'bob',
    'age':27
}

db.users.insert_one(doc)