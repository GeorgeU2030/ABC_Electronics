from django.contrib import admin

# Register your models here.

from .models import CustomerInfo, Customer

admin.site.register(Customer)