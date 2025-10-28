from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics

def home(request):
    return HttpResponse("Bienvenue dans mon projet Django 🚀")

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    