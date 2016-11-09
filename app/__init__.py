from flask import Flask, render_template, jsonify, Response
from urlparse import urljoin
import datetime
import json
import numpy as np
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
# @app.route('/api/workflows',method = ['POST'])
# def post_workflows:
#
# @app.route('/api/workflows',method = ['GET'])
# def get_workflows:

if __name__ == "__main__":
    app.run()