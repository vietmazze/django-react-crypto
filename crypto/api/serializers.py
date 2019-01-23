from rest_framework import serializers
from crypto.models import Coincap


class CoincapSerializer(serializers.ModelSerializer):
    class Meta:
        model= Coincap
        fields = ('id', 'symbol', 'price', 'rank')
