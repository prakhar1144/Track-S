from django.shortcuts import render
import time
from .services import apod

# Create your views here.
def home(request):
	return render(request, 'iss/home.html')

def live(request):
	return render(request, 'iss/live.html')
	
def passtime(request):
	return render(request, 'iss/passtime.html')

# def isspassdata(request, data):
# 	lati = data['Lati']
# 	longi = data['Longi']
# 	return render(request, 'iss/passtime.html')

def more(request):
	variable = apod()
	context = {'value':variable}
	return render(request, 'iss/more.html', context)