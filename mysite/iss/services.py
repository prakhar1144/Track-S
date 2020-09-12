import requests
import json
from datetime import datetime


def jprint(obj):
	text = json.dumps(obj, sort_keys= True, indent = 10)
	return text

def apod():
	response = requests.get('https://spaceflightnewsapi.net/api/v1/blogs?news_site=planetarysociety')
	response_json = response.json()
	T = []
	U = []
	I = []
	info =[]
	for i in response_json['docs']:
		T.append(i['title'])
		U.append(i['url'])
		I.append(i['featured_image'])
		
	for i,j,k in zip(T,U,I):
		info.append([i,j,k])

	return info
	# return  response_json['docs']