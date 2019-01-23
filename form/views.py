from django.shortcuts import render
from django.db.models import Sum
from django.db.models import Avg
# Create your views here.

#  for coin in coincap.final_result:
#                 obj, created = Coincap.objects.update_or_create(
#                     symbol = coin['symbol'],
#                     name = coin['name'],
#                     defaults = {
#                         'price': coin['priceUsd'],
#                         'rank': coin['rank']})
#             for item in Coindetail.objects.filter(user = request.user).order_by('symbol','current_price','percent24hr').values('symbol','current_price','percent24hr').distinct().annotate(Sum('quantity')).annotate(avg_price = Avg('buy_price')):
#                 model2,created= Coincalculator.objects.update_or_create(
#                     symbol = item['symbol'],
#                     user= request.user,
#                     defaults={
#                         'total_quantity' : item['quantity__sum'],
#                         'total_value': float(item['avg_price'])*float(item['quantity__sum']),
#                         'profit': profit(float(item['avg_price']),float(item['current_price']),float(item['quantity__sum'])),
#                         'percentchange': float(format(item['percent24hr'],'.2f')) })