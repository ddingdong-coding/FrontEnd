from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from dotenv import load_dotenv
import os
load_dotenv()

from pymongo import MongoClient
client = MongoClient('mongodb+srv://ellie:mshee791008!@cluster0.xhjvgcr.mongodb.net/?retryWrites=true&w=majority')
db = client.facebook

from datetime import datetime

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main',methods=['GET'])
def main():
    return render_template('main.html')

@app.route('/main',methods=['POST'])
def posting():
    content = request.form['content']
    print(content)
    today = datetime.now()
    doc ={
        'content':content,
        'today':today
    }
    db.posting.insert_one(doc)
        
    return jsonify(result={"status": 200})

@app.route('/main/post', methods=['GET'])
def listing():
    postings = list(db.posting.find({}, {'_id': False}))
    print(postings)
    print("리스팅 성공")
    return jsonify({'all_posts': postings})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)