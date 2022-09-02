import pymongo 
from pymongo import MongoClient
client = MongoClient('mongodb+srv://ellie:비밀번호@cluster0.xhjvgcr.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta
doc = {
    'name':'bob',
    'age':27
}

db.users.insert_one(doc)

db.users.insert_one({'name':'bobby','age':21})
db.users.insert_one({'name':'kay','age':27})
db.users.insert_one({'name':'john','age':30})

same_ages = list(db.users.find({},{'_id':False}))