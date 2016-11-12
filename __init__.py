from flask import Flask, jsonify, Response, abort, request, make_response, send_file
from urlparse import urljoin
import datetime
import json
import numpy as np
app = Flask(__name__)

eventLog = []

app.debug = True

@app.route('/')
def index():
    # return send_file('templates/index.html')
    # disable cache index html file
    return make_response(open('templates/index.html').read())
@app.route('/api/v1.0/eventlog', methods = ['GET'])
def get_eventlog():
    return jsonify({"eventLog" : eventLog})

@app.route('/api/v1.0/eventLog/<int:event_id>', methods=['GET'])
def get_event(event_id):
    event = [event for event in eventLog if event['index'] == event_id]
    if len(event) == 0:
        abort(404)
    return jsonify({'event': event[0]})

@app.route('/api/v1.0/eventlog', methods = ['POST'])
def clear_eventlog():
    if not request.json or not 'caseID' in request.json:
        abort(400)
    event = {
        'index': eventLog[-1]['id'] + 1,
        'caseID': request.json['caseID'],
        'activity': request.json['activity'],
        'startTime': request.json['startTime'],
        'endTime': request.json['endTime'],
        'actstd': 0,
        'actknn': 0
    }
    eventLog.append(event)
    return jsonify({'event': event}), 201

@app.route('/api/v1.0/eventlog', methods = ['DELETE'])
def create_eventlog():
    eventLog[:] = []
    return jsonify({'result': True}), 201

import os
if __name__ == "__main__":
    app.run(host='0.0.0.0', port = int(os.environ.get('PORT', 5050)))