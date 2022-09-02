from flask import Flask, render_template, jsonify, request
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/main',methods=['GET'])
def main():
    return render_template('main.html')

app.route('/main',methods=['POST'])
def upload_modal():
    content = request.form['content']
    print(content)
    doc ={
        content:content
    }
    # db
    # db.articles.insert_one(doc)
if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)