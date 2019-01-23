from form.models import Coinform,Porfolio
from crypto.models import Coincap
from django.contrib.auth.models import User
import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models import Sum
from django.db.models import Avg

def profit (buy_price, current_price,total_quantity):
   
    current= (float(total_quantity) * float(current_price))
    buy = (float(total_quantity) * float(buy_price))
    return current - buy


def testing(sender,instance,created, **kwargs):
    print("running inside signal %s" % (instance))

    for item in Coinform.objects.filter(owner = instance.owner).order_by('symbol','current_price').values('symbol','current_price').distinct().annotate(Sum('quantity')).annotate(avg_price = Avg('price_entry')):
                model2,created= Porfolio.objects.update_or_create(
                    symbol = item['symbol'] ,
                    owner = instance.owner,
                    defaults={
                        'total_quantity' : item['quantity__sum'],
                        'total_value': float(item['avg_price'])*float(item['quantity__sum']),
                        'profit': profit(float(item['avg_price']),float(item['current_price']),float(item['quantity__sum']))})
                       
post_save.connect(testing,sender=Coinform, dispatch_uid="my_unique_identifier")