from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.views import View
from django.contrib.auth.views import LoginView
#this might not work untill later
from .forms import CustomUserCreationForm
from .forms import MyAuthenticationForm

# Create your views here.

class MyLoginView(LoginView):
    form_class = MyAuthenticationForm
  
class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = "registration/signup.html"

   