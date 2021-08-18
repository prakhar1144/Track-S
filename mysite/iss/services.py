import requests
import json
from datetime import datetime


# def jprint(obj):
# 	text = json.dumps(obj, sort_keys= True, indent = 10)
# 	return text

def apod():
	response = requests.get('https://api.spaceflightnewsapi.net/v3/blogs')
	response_json = response.json()
	T = []
	U = []
	I = []
	info =[]
	for i in response_json:
		T.append(i['title'])
		U.append(i['url'])
		I.append(i['imageUrl'])
		
	for i,j,k in zip(T,U,I):
		info.append([i,j,k])

	return info
	# return  response_json['docs']