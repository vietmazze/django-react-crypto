from rest_framework import serializers
from form.models import Coinform, Porfolio

from crypto.models import Coincap

class CoinformSerializer(serializers.ModelSerializer):
    class Meta:
        model= Coinform
        fields = ('id','symbol', 'price_entry', 'quantity','owner','current_price')
    def create(self, validated_data):
        symbol = validated_data.get("symbol",None)
        price_entry = validated_data.get("price_entry",None)
        quantity = validated_data.get("quantity",None)
        owner = validated_data.get("owner",None)
        coin = Coincap.objects.filter(symbol=validated_data.pop("symbol")).values_list('price',flat=True)
        example = Coinform.objects.create(symbol=symbol,
                                        price_entry=price_entry,
                                        quantity=quantity,
                                        owner=owner,
                                        current_price=coin[0])
        print("running example  %s" % (example))
        return example
            

class PorfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Porfolio
        fields = ('owner','symbol','total_quantity','total_value','profit')

    