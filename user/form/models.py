from django.db import models
from django.contrib.auth.models import User
import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver

class Coinform(models.Model):
    symbol = models.CharField(max_length= 200)
    price_entry = models.DecimalField(max_digits=100, decimal_places= 10, null=True)
    quantity = models.DecimalField(max_digits=100, decimal_places= 10, null=True)
    total_value = models.DecimalField(max_digits=100, decimal_places= 10, null=True)
    date_purchase = models.DateField(blank = False,auto_now=True)
    owner = models.ForeignKey(User, related_name = "coinform", on_delete=models.CASCADE, null=True)
    current_price = models.DecimalField(max_digits=100, decimal_places= 10, null=True)
    def __str__(self):
        return str(self.owner) + " : " + self.symbol + " : " + str(self.current_price) + " : " + str(self.price_entry) + " : " + str(self.quantity)
class Porfolio(models.Model):
    owner = models.ForeignKey(User,on_delete=models.CASCADE, null=True)
    symbol = symbol = models.CharField(max_length=50) 
    total_quantity= models.DecimalField(max_digits =30, decimal_places = 5,null=True)
    total_value =  models.DecimalField(max_digits =30, decimal_places =5,null=True)
    profit = models.DecimalField(max_digits =30, decimal_places =5,null=True)
    percentchange = models.FloatField(null=True)
    def __str__(self):
        return str(self.owner) + " : " + self.symbol + " : " + str(self.total_quantity) + " : " + str(self.total_value) + " : " + str(self.profit)   

