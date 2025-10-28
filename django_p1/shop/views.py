from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render
from django.http import HttpResponse
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response

def home(request):
    return HttpResponse("Bienvenue dans mon projet Django 🚀")

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # Enable filtering and search
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'price']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'name']

class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'id'
    
    

class CategoryList(APIView):
    def get(self, request):
        # Get distinct categories from products
        categories = Product.objects.values_list('category', flat=True).distinct()
        # Return as list of dicts (with id and name)
        data = [{"id": idx + 1, "name": cat} for idx, cat in enumerate(categories)]
        return Response(data)