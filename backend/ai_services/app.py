from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer, util
from transformers import pipeline

app = Flask(__name__)
CORS(app)

matching_model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
chatbot_pipeline = pipeline("text-generation", model="microsoft/DialoGPT-medium")

orphanages = [
    {"id": 1, "name": "Hope Orphanage", "location": "Mumbai", "food_needed": "Rice, Vegetables, Lentils"},
    {"id": 2, "name": "Bright Future Home", "location": "Delhi", "food_needed": "Bread, Fruits, Dairy"},
    {"id": 3, "name": "Sunshine Shelter", "location": "Bangalore", "food_needed": "Dal, Milk, Nuts"}
]

@app.route('/match_food', methods=['POST'])
def match_food():
    data = request.json  
    food_items = data['food']

    orphanage_embeddings = matching_model.encode([o["food_needed"] for o in orphanages])
    food_embedding = matching_model.encode(food_items)

    scores = util.cos_sim(food_embedding, orphanage_embeddings)[0].tolist()
    best_match_idx = scores.index(max(scores))
    best_match = orphanages[best_match_idx]

    return jsonify({
        "restaurant": data["restaurant"],
        "food": data["food"],
        "location": data["location"],
        "orphanage": best_match["name"],
        "orphanage_location": best_match["location"],
        "match_score": max(scores)
    })

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json  
    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({"error": "Message cannot be empty."}), 400

    try:
        response = chatbot_pipeline(user_message, max_length=150)[0]["generated_text"].strip()
        
        if not response or response.lower() in user_message.lower():
            response = "I'm sorry, I didn't understand that. Can you please rephrase?"
    except Exception as e:
        return jsonify({"error": f"An error occurred while generating the response: {str(e)}"}), 500

    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
