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

from djongo import models

class CustomerInfo(models.Model):
    customer = models.OneToOneField('Customer', on_delete=models.CASCADE, related_name='additional_info')
    children = models.JSONField(null=True, blank=True)
    birth_place = models.JSONField(null=True, blank=True)
    location_place = models.JSONField(null=True, blank=True)
    hobbies = models.JSONField(null=True, blank=True)
    sports = models.JSONField(null=True, blank=True)
    marital_status = models.JSONField(null=True, blank=True)
    categories_interested = models.JSONField(null=True, blank=True)