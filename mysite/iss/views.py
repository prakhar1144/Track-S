from django.shortcuts import render, redirect
import time

# Create your views here.
def home(request):
	return render(request, 'iss/home.html')

def live(request):
	return render(request, 'iss/live.html')
	