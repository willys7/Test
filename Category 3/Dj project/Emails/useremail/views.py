# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from .models import User
from django.core.mail import send_mail



def index(request):
    template = loader.get_template('useremail/index.html')
    users = User.objects.all()
    for x in users:
        print(x)
        print(x.emailUser)
        send_mail(
        'new email alert from www.fakedomain.com',
        'Hello <<User.nameUser>>, we came to say howdy!',
        'wilfuentes0320@gmail.com',
        [str(x.emailUser)],
        fail_silently=False,)


    context = {}
    return HttpResponse(template.render(context, request))