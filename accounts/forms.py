<<<<<<< HEAD
=======
# accounts/forms.py
>>>>>>> 08168a508c322a5c8f5fd37615ae00f110538af6
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import CustomUser

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustomUser
<<<<<<< HEAD
        fields = (
            "username",
            "email",
            "age",
        )
=======
        fields = UserCreationForm.Meta.fields + ("age" ,)
>>>>>>> 08168a508c322a5c8f5fd37615ae00f110538af6


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
<<<<<<< HEAD
        fields = (
            "username",
            "email",
            "age",
        )
=======
        fields = UserChangeForm.Meta.fields
>>>>>>> 08168a508c322a5c8f5fd37615ae00f110538af6
