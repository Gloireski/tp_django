from django.urls import path
from . import views
from .views import ProductList

urlpatterns = [
    path('', views.home, name='shop-home'),
    path('products/', ProductList.as_view(), name='product-list'),
]