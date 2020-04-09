from flask import Flask, render_template, request, redirect, url_for, jsonify, abort, Response
from flask_cors import CORS, cross_origin
import requests
import json
import os

CORS(app, resources=r'/*')

@app.route('/api', methods=['GET'])
def api():
    return jsonify(response={"data": ""})

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
