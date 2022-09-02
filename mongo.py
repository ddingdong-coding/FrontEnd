from flask import Flask, render_template, jsonify, request
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main',methods=['GET'])
def main():
    return render_template('main.html')

# app.route('/main',methods=['POST'])
# def upload_modal():
#     content = request.form['content']
#     print(content)
#     doc ={
#         content:content
#     }
from pymongo import MongoClient
client = MongoClient('mongodb+srv://ellie:mshee791008!@cluster0.xhjvgcr.mongodb.net/?retryWrites=true&w=majority')
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
user = db.users.find_one({'name':'bobby'})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)