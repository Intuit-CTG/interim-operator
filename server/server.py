from flask import Flask, request
app = Flask(__name__)

@app.route('/get_questions', methods=["GET"])
def get_data():
    arg = request.args.get('term')
    return arg

if __name__ == '__main__':
    app.run()

