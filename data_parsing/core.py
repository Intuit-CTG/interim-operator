import nltk
from nltk.corpus import wordnet as wn
import re
import json

import config, preprocess

core_sets = ['home.n.01', 'purchase.n.01', 'buy.v.01']

def generate_synsets(data):
# data: body of description text

# regex out html and other garbage
# very primitive, even a better regex will improve this
# i don't know anything about regex
    temp = re.sub('<[^>]*>', '', data)
    nouns, verbs = [], []
# tag each word with its part of speech
    for word, token in nltk.pos_tag(temp):
        if 'NN' in token and token is not 'NNP':
            nouns.append(word)
        if 'VB' in token:
            verbs.append(word)
    synsets = []
# for each noun, use very primitive procedure to determine a fitting "synset"
    for word in nouns:
        meanings = wn.synsets(word)
        if len(meanings) > 0:
            found = False
            result = meanings[0]
            while not found:
                for meaning in meanings:
                    if str(meaning.pos()) is 'n':
                        found = True
                        result = meaning
                break
            synsets.append(result)
# repeat for verbs
    for word in verbs:
        meanings = wn.synsets(word)
        if len(meanings) > 0:
            found = False
            result = meanings[0]
            while not found:
                for meaning in meanings:
                    if str(meaning.pos()) is 'v':
                        found = True
                        result = meaning
                break
            synsets.append(result)
    return synsets

def calculate_heuristic(synsets):
# synsets: list of synsets

    sum, count = 0, 0
# use max path relevance with keywords (core_sets) as heuristic
    for i in synsets:
        temp = []
        for thing in core_sets:
            if i.path_similarity(wn.synset(thing)):
                temp.append(i.path_similarity(wn.synset(thing)))
        if temp != []:
            sum += max(temp)
            count += 1
# arithmetic mean... hahahahaha.
# essentially counts how many keywords are in the text
# as other words will have negligible heuristic values
    if count != 0: 
        return sum * 1.0 / count
# please never be 0. i cry every time
    else:
        return 0

def main():
    try:
        datafile = file(config.abs_path + "/" + config.processed_file, 'r+')
    except Error:
        datafile = file(config.abs_path + "/" + config.processed_file, 'w+')
    print "Loading data files..."
    values = {}
    for line in datafile:
        values[line[:line.index(':')]] = line[line.index(':')+1:]
    for i in range(preprocess.blog_total()):
        if "b" + str(i) not in values.keys():
            print "Loading " + str(i) + "..."
            try:
                inputfile = file(config.abs_path + "/" + config.outputpath + "/b" + str(i), "r+")
            except Error:
                print "This should never happen. Error " + str(i)
                break
            synsets = generate_synsets(json.load(inputfile)['body'])
            name = 'b' + str(i)
            values[name] = calculate_heuristic(synsets)
            datafile.write(name + ":" + str(values[name]) + "\n")
    datafile.close()
    print "Done."

if __name__ == "__main__":
    main()
