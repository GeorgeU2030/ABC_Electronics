from django.db import models

class CategoryProduct(models.Model):
    code = models.CharField(max_length=50, unique=True)
    description = models.TextField()

class Product(models.Model):
    category = models.ForeignKey(CategoryProduct, on_delete=models.CASCADE)
    description = models.TextField()
    quantity_available = models.IntegerField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    selling_price = models.DecimalField(max_digits=10, decimal_places=2)
    photo = models.ImageField(upload_to='products/', null=True, blank=True)

class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField()
    date_of_birth = models.DateField()
    email = models.EmailField()
    home_phone = models.CharField(max_length=20)
    cell_phone = models.CharField(max_length=20)

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_date = models.DateField()
    shipped_date = models.DateField(null=True, blank=True)
    payment_date = models.DateField(null=True, blank=True)

class OrderDetail(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

from djongo import models as mod



class CustomerInfo(mod.Model):
    numberOfChildren = mod.IntegerField(default=0)
    children = mod.JSONField(default=list)
    placeOfBirth = mod.JSONField(default=dict, max_length=255)
    placeLocation = mod.JSONField(default=dict)
    hobbies = mod.CharField(null=True, blank=True, max_length=255)
    sports = mod.CharField(null=True, blank=True, max_length=255)
    categories = mod.JSONField(default=dict)
    status = mod.JSONField(default=dict)
    customer = mod.ForeignKey(Customer, on_delete=models.CASCADE)
    
    