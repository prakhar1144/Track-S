from django.urls import path
from . import views

app_name = 'iss'

urlpatterns = [
	path('', views.home, name='home'),
	path('live/', views.live, name='live'),
	path('passtime/', views.passtime, name='passtime'),
	path('more/', views.more, name='more')

]