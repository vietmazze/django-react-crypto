from rest_framework import viewsets,permissions
from crypto.models import Coincap
from .serializers import CoincapSerializer

class CoincapViewSet(viewsets.ModelViewSet):
    permission_classes=[permissions.AllowAny,]
    serializer_class = CoincapSerializer
    queryset = Coincap.objects.order_by("rank")
    