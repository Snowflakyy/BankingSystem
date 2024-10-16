from flask import Flask, jsonify, request
import numpy as np
import tensorflow as tf
import pickle
import json
import nltk
from nltk.stem import WordNetLemmatizer
import random
from keras.models import load_model

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

app = Flask(__name__)

# Load model and preprocessing files
model = tf.keras.models.load_model('chatbot_model.h5')
words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))

lemmatizer = WordNetLemmatizer()

intents = json.loads(open('intents.json').read())

# Load intents file
#with open('intents.json') as file:
#    intents_json = json.load(file)

# Utility functions for processing input
def clean_up_sentence(sentence):
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence, words):
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s: 
                bag[i] = 1
    return(np.array(bag))
#    for w in sentence_words:
#        for i, word in enumerate(words):
#            if word == w:
#                bag[i] = 1
#    return np.array(bag)

def predict_class(sentence, model):
    bow = bag_of_words(sentence, words)
    res = model.predict(np.array([bow]))[0]
    ERROR_THRESHOLD = 0.6
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list

def get_response(ints, intents_json):
    if not ints:
        return "Sorry, didn't understand you, could you rephrase the question?"
    tag = ints[0]['intent']
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if(i['tag']== tag):
            result = random.choice(i['responses'])
            break
    return result
#    if intents_list:
#        tag = intents_list[0]['intent']
#        for intent in intents_json['intents']:
#            if intent['tag'] == tag:
#                return random.choice(intent['responses'])
#    return "I don't understand!"

# Define the chatbot API endpoint
@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    data = request.json
    message = data.get("message")
    if message:
        ints = predict_class(message, model)
        response = get_response(ints, intents)
        return jsonify({"response": response})
    else:
        return jsonify({"response": "Please provide a message."})

if __name__ == '__main__':
    app.run(debug=True)
