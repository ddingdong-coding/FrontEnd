from flask import Flask, render_template, jsonify, redirect, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://sun:test@cluster0.kaeazlr.mongodb.net/?retryWrites=true&w=majority')
db = client.facebook

from dotenv import load_dotenv
import os
load_dotenv()

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
        'today':today.strftime('%Y.%m.%d-%H-%M')
    }
    db.posting.insert_one(doc)
        
    return jsonify(result={"status": 200})

@app.route('/main/post', methods=['GET'])
def listing():
    postings = (list(db.posting.find().sort('_id', -1)))
    print(postings)
    print("리스팅 성공")
    return jsonify({'listing': postings})

#댓글
# @app.route('/main/<postId>/comment',methods=['POST'])
# def comment_posting(postId):
#     postId= ObjectId(postId)
#     comment_content = request.form['comment_content']
#     print(comment_content)
#     today = datetime.now()
#     doc ={
#         'comment':comment_content,
#         'today':today.strftime('%Y.%m.%d-%H-%M')
#     }
#     db.comments.insert_one(doc)
        
#     return redirect('/{}'.format(postId))

# def objectIdDecoder(list):
#     results = []
#     for document in list:
#         document['_id'] = str(document['_id'])
#         results.append(document)
#     return results

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)