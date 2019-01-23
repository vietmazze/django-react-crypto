from django.core.management.base import BaseCommand
import requests
import pandas as pd
from crypto.models import Coincap
import datetime


class Command(BaseCommand):
    help= "Start of collecting data"
    def handle(self,*args,**kwargs):
        self.stdout.write('\nScraping started\n')
        session = requests.Session()
        limit = {'limit':10}
        df = session.get('https://api.coincap.io/v2/assets', params = limit, verify =False)
        response= df.json()
        coin = response['data']
        database=pd.DataFrame(coin)
        result =database.drop(columns=['id'])
        result.round({'changePercent24Hr':2,'marketCapUsd':2,'maxSupply':2, 'price':6, 'volumeUsd24Hr':2, 'vwap24Hr':6,'currentSupply':5})
        result['marketCapUsd']=result['marketCapUsd'].astype(float).round(5)
        result['changePercent24Hr']=result['changePercent24Hr'].astype(float).round(8)
        result['maxSupply']=result['maxSupply'].astype(float).round(3)
        result['volumeUsd24Hr']=result['volumeUsd24Hr'].astype(float).round(2)
        result['vwap24Hr']=result['vwap24Hr'].astype(float).round(7)
        result['priceUsd']=result['priceUsd'].astype(float).round(7)
        result['supply']=result['supply'].astype(float).round(4)
        result['maxSupply']=result['maxSupply'].fillna(value = 0)
        final_result = result.to_dict('records')

        for coin in final_result:
            obj, created = Coincap.objects.update_or_create(
                symbol = coin['symbol'],
                name = coin['name'],
                defaults = {
                    'marketcap': coin['marketCapUsd'],
                    'maxSupply': coin['maxSupply'],
                    'price': coin['priceUsd'],
                    'rank': coin['rank'],
                    'update': datetime.datetime.now()})
        
