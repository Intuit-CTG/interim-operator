from flask import Flask, request
from flask.ext.cors import CORS
import json
import urllib
from data_parsing import main

app = Flask(__name__)
CORS(app)

@app.route('/send_terms', methods=["POST"])
def send_data():
    if request.method == 'POST':
        data = request.data
        url = urllib.unquote_plus(data).decode("utf-8")
        exec url
        blogNumbers = getBlogNumbers()
        a = open("data_parsing/output_data/" + blogNumbers[0], 'r')
        b = open("data_parsing/output_data/" + blogNumbers[1], 'r')
        return [a, b]
    return "Failure."

if __name__ == '__main__':
    app.debug = True
    app.run()

