from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the trained model
with open("classifier.pkl", "rb") as model_file:
    classifier = pickle.load(model_file)

with open("scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)

if not hasattr(scaler, "transform"):
    raise ValueError("The loaded scaler is not a valid StandardScaler object. Please check scaler.pkl.")

@app.route("/")
def home():
    return jsonify({"message": "Diabetes Prediction API is Running!"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid input, JSON expected"}), 400
        
        features = np.array([list(data.values())]).astype(float)
        features_scaled = scaler.transform(features)
        prediction = classifier.predict(features_scaled)[0]
        
        return jsonify({"prediction": int(prediction)})
    
    except Exception as e:
        print("❌ Prediction error:", str(e))
        return jsonify({"error": f"Could not get a prediction. Error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
