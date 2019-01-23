from django.urls import path
from crypto.api.views import CoincapViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'coincap', CoincapViewSet)

urlpatterns = router.urls