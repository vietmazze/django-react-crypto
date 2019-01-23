from form.models import Coinform, Porfolio
from crypto.models import Coincap
from .serializers import CoinformSerializer, PorfolioSerializer
from rest_framework.response import Response
from rest_framework import permissions
from django.contrib.auth.models import User
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)

class PorfolioListView(ListAPIView):
    serializer_class = PorfolioSerializer
    permission_classes = (permissions.IsAuthenticated, )
    def get_queryset(self):
        return Porfolio.objects.filter(owner=self.request.user)
    # queryset = Porfolio.objects.all()

class CoinformListView(ListAPIView):
    serializer_class = CoinformSerializer
    permission_classes = (permissions.IsAuthenticated, )
    def get_queryset(self):
        return Coinform.objects.filter(owner=self.request.user)

class CoinformDetailView(RetrieveAPIView):
    queryset=Coinform.objects.all()
    serializer_class = CoinformSerializer
    permission_classes = (permissions.AllowAny, )


class CoinformCreateView(CreateAPIView):
    serializer_class = CoinformSerializer
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Coinform.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
     
class CoinformUpdateView(UpdateAPIView):
    serializer_class = CoinformSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_queryset(self):
        return Coinform.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CoinformDeleteView(DestroyAPIView):

    serializer_class = CoinformSerializer
    permission_classes = (permissions.IsAuthenticated, )
    def get_queryset(self):
        return Coinform.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



# class OrderListViewSet(UserResourceViewSet, ReadOnlyCacheResponseAndETAGMixin):
#     model_class = Order
#     lookup_field = 'unique_reference'
#     serializer_class = OrderSerializer
#     pagination_class = OrderPagination

#     def get_serializer_class(self):
#         if self.request.method == 'POST':
#             return CreateOrderSerializer

#         return super(OrderListViewSet, self).get_serializer_class()

#     def get_queryset(self, filters=None, **kwargs):
#         self.queryset = Order.objects.all()
#         return super(OrderListViewSet, self).get_queryset()

#     def perform_create(self, serializer):
#         if not self.request.user.is_authenticated:
#             _create_anonymous_user(self.request)
#         serializer.save(user=self.request.user)

#         return super(OrderListViewSet, self).perform_create(serializer)