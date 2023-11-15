from rest_framework import serializers
from .models import Customer, CategoryProduct, Product, Order, OrderDetail, CustomerInfo

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields ='__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryProduct
        fields ='__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields ='__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields ='__all__'

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields ='__all__'

class CustomerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerInfo
        fields ='__all__'