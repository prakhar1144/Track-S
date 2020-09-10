import requests
import json
import time

def jprint(obj):
	text = json.dumps(obj, sort_keys= True, indent = 4)
	return text

def get_lonlat():
	response = requests.get('http://api.open-notify.org/iss-now.json')
	lon = response.json()['iss_position']['longitude']
	lat = response.json()['iss_position']['latitude']
	return lon,lat