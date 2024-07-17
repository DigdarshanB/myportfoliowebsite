from flask import Flask, request, render_template, redirect
import firebase_admin
from firebase_admin import credentials, firestore

app = Flask(__name__)

# Path to your service account key JSON file
cred = credentials.Certificate('config.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    #gets data from the form
    name=request.form('name')
    email=request.form('email')
    message=request.form('message')

#create dictionary with form data
    data={
        'name': name,
        'email': email,
        'message':message
        }

    db.collection('contacts').add(data)
    return redirect('/')

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)

if __name__ == '__main__':
    app.run(debug=True)
    