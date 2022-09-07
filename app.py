from flask import Flask, render_template, jsonify, redirect, request
app = Flask(__name__)

from dotenv import load_dotenv
import os
load_dotenv()
from bson import ObjectId

from pymongo import MongoClient
client = MongoClient(os.environ['DBURL'])
db = client.facebook



import certifi

ca = certifi.where()


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
        'today':today.strftime('%Y.%m.%d-%H-%M'),
    }
    db.posting.insert_one(doc)
        
    return jsonify(result={"status": 200})
######글 조회
@app.route('/main/post', methods=['GET'])
def listing():
    postings = objectIdDecoder(list(db.posting.find().sort('_id', -1)))
    print(postings)
    return jsonify({'listing': postings})

#######댓글 입력
@app.route('/main/comment/',methods=['POST'])
def comment_posting():
    comment = request.form['comment']
    postId = request.form['postId']
    print(comment,postId)
    today = datetime.now()
    doc ={
        'comment':comment,
        'postId':postId,
        'today':today.strftime('%Y.%m.%d-%H-%M')
    }
    db.posting.update_one({'_id': ObjectId(postId)}, {'$push': {'comment': doc}})
        
    return jsonify(result={"status": 200})


def objectIdDecoder(list):
    results = []
    for document in list:
        document['_id'] = str(document['_id'])
        results.append(document)
    return results


if __name__ == '__main__':
    app.run('0.0.0.0',os.environ['PORT'], debug=True)
