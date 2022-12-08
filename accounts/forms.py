# accounts/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, AuthenticationForm
from captcha.fields import CaptchaField

from .models import CustomUser

class MyAuthenticationForm(AuthenticationForm):
    captcha = CaptchaField()

class CustomUserCreationForm(UserCreationForm):
    
    
    class Meta(UserCreationForm):
        model = CustomUser
        fields = (
            "username",
            "email",
            "age",
        )


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = (
            "username",
            "email",
            "age",
        )
