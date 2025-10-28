from django.db import models

class Product(models.Modal):
    name = models.CharField(max_lenght=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    stock = models.IntegerField()
    image = models.ImageField(upload_to='products/')
    
    def __str__(self):
        return self.name
