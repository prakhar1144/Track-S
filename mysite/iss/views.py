from django.shortcuts import render, redirect
import time

# Create your views here.
def home(request):
	return render(request, 'iss/home.html')

def live(request):
	return render(request, 'iss/live.html')
	
def passtime(request):
	return render(request, 'iss/passtime.html')

def isspassdata(request, data):
	lati = data['Lati']
	longi = data['Longi']
	print(lati,longi)
	return render(request, 'iss/passtime.html')