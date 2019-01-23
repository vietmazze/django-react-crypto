from django.db import models

class Coincap(models.Model):

    symbol = models.CharField(max_length= 200)

    name = models.CharField(max_length = 200)

    marketcap = models.DecimalField(max_digits=100, decimal_places= 10, null = True)

    maxSupply = models.DecimalField(max_digits=100, decimal_places= 10, null =True)

    price = models.DecimalField(max_digits=100, decimal_places= 10, null=True)

    rank = models.IntegerField(null=True)

    currentSupply= models.DecimalField(max_digits=100, decimal_places= 10,null=True)

    volume24hr = models.DecimalField(max_digits=100, decimal_places= 10,null=True)

    changepercent24hr = models.DecimalField(max_digits=100, decimal_places= 10,null=True)

    vwap24hr = models.DecimalField(max_digits=100, decimal_places= 10,null=True)

    update = models.DateField(blank =False, auto_now=True)

    def __str__(self):

        return self.name + " : " + self.symbol + " : " + str(self.marketcap) + " : " + str(self.maxSupply)  + " : " + str(self.marketcap) + " : " + str(self.price) + " : " + str(self.rank) + " : " + str(self.currentSupply) + " : " + str(self.volume24hr) + " : " + str(self.changepercent24hr)+ " : " + str(self.vwap24hr)+ " : " + str(self.update)

