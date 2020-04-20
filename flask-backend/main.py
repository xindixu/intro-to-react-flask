from flask import Flask, render_template, request, redirect, url_for, jsonify, abort, Response
from flask_cors import CORS, cross_origin
import requests
import json
import os

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})


casper_profile = {
    'name': 'Casper',
    'age': 21,
    'interests': ['kitty', 'toy'],
    'userId': 1
}


def update_profile(new_profile):
    casper_profile = new_profile

# This will be our API route 
@app.route('/api/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'GET':
        return jsonify(casper_profile)
    if request.method == 'POST':
        # some error checking ...
        update_profile(request.json)
        return jsonify(casper_profile)


@app.route('/')
def index():
    # Does this look familiar. 
    # What is index.html
    return render_template("index.html")

# Uncomment this, you will see an ugly 404 page
@app.route('/<path:path>')
def catch_all(path):
    # Any path directs to index.html
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
