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
    return render_template("index.html")


@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
