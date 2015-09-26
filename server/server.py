from flask import Flask, request
from flask.ext.cors import CORS
import json
import urllib

app = Flask(__name__)
CORS(app)

@app.route('/send_terms', methods=["POST"])
def get_data():
    if request.method == 'POST':
        data = request.data
        url = urllib.unquote_plus(data).decode("utf-8")
        exec url
        print url
        return "Success."
    return "Failure."

if __name__ == '__main__':
    app.debug = True
    app.run()

