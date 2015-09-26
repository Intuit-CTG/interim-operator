import sys, io, json, codecs

import config


# definitions
filename = "data_parsing/testdata/tt_blog.json.txt"
b_total, qa_total = 0, 0

def filter_chars(text):
    return ''.join([i if ord(i) < 128 else ' ' for i in text])

def remove_html(text):
    while (text.index('<') > 0 and text.index('>') > 0):
        text = text[:text.index('<')] + text[text.index('>')+1:]
    return text

# fileread
predata = json.load(codecs.open(config.abs_path + "/" +  filename, "r+", 'utf-8'))

# preprocessing(?) for blog data
for i in range(len(predata)):
    data = predata[i]
    entry = {}
    body = data[u'body']
    
    entry['body'] = filter_chars(body)
    entry['category'] = data[u'category']
    entry['title'] = filter_chars(data[u'title'])
    outputfile = file(config.abs_path + "/" + config.outputpath + "/b" + str(i), "w")
    json.dump(entry, outputfile)
    outputfile.close()

def blog_total():
    return len(predata)
