from django.urls import path, include
from salesApp import views
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('lookup/', views.customer_lookup, name='customer_lookup'),
    path('products/<int:category_id>/', views.products_by_category, name='products_by_category'),
    path('product/<int:id>/', views.product, name='products_by_id'),
    path('customerinfo/<int:customer_id>/', views.customer_info, name='customer_info'),
    path('save_info_client/', views.save_info_client, name='save_info_client'),
    path('register/', views.register_costumer, name='register')
]