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

class CustomerInfoSerializer(serializers.Serializer):
    numberOfChildren = serializers.IntegerField(default=0)
    children = serializers.ListField(child=serializers.JSONField(), default=[])
    placeOfBirth = serializers.DictField(child=serializers.JSONField(), default={})
    placeLocation = serializers.DictField(child=serializers.JSONField(), default={})
    hobbies = serializers.JSONField(required=False, allow_null=True)
    sports = serializers.JSONField(required=False, allow_null=True)
    categories = serializers.DictField(child=serializers.BooleanField(), default={})
    status = serializers.DictField(child=serializers.JSONField(), default={})
    id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):

        customer_id = validated_data.pop('id')
        customer_info = CustomerInfo(customer_id=customer_id, **validated_data)
        customer_info.save()

        return customer_info
