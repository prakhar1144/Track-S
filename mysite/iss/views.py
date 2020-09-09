from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
	return render(request, 'iss/home.html')

def live(request):
	return render(request, 'iss/live.html')