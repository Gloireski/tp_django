from django.urls import path
from . import views
from .views import CategoryList, ProductDetail, ProductList

urlpatterns = [
    path('', views.home, name='shop-home'),
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:id>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
]