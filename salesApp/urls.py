from django.urls import path, include
from salesApp import views
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('lookup/', views.customer_lookup, name='customer_lookup'),
    path('products/<int:category_id>/', views.products_by_category, name='products_by_category'),
    path('product/<int:id>/', views.product, name='products_by_id'),
]