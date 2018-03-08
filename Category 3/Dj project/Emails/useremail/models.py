# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    idUser = models.AutoField(primary_key=True)
    nameUser = models.CharField(max_length=50, null=False)
    emailUser = models.CharField(max_length=50, null=False)
    