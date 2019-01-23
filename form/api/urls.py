from django.urls import path
from django.conf.urls import include, url
# from form.api.views import CoinformViewSet
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()

# router.register(r'coinform', CoinformViewSet,"coinform")

# urlpatterns = router.urls

from .views import (
    CoinformListView,
    CoinformDetailView,
    CoinformCreateView,
    CoinformUpdateView,
    CoinformDeleteView,
    PorfolioListView
)

urlpatterns = [
    path('coinform/',  CoinformListView.as_view()),
    path('coinform/create/',  CoinformCreateView.as_view()),
    path('coinform/<pk>',  CoinformDetailView.as_view()),
    path('coinform/<pk>/update/',  CoinformUpdateView.as_view()),
    path('coinform/<pk>/delete/',  CoinformDeleteView.as_view()),
    path('porfolio/', PorfolioListView.as_view()),
]