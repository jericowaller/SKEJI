from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.shortcuts import render
from django.http import HttpResponseRedirect
#this might not work untill later
from .forms import CustomUserCreationForm
from .forms import CaptchaUserCreationForm
# Create your views here.

def captcha(request):
    if request.POST:
        form = CaptchaUserCreationForm(request.POST)

        # Validate the form: the captcha field will automatically
        # check the input
        if form.is_valid():
            return HttpResponseRedirect('/?ok')
    else:
        form = CaptchaUserCreationForm()

    return render(request, 'registration/signup.html', {'form': form})

class SignUpView(CreateView):
    form_class = CaptchaUserCreationForm
    #form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = "registration/signup.html"


