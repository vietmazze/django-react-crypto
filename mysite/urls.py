
from django.conf.urls import url, include
from django.urls import path, re_path
from django.contrib import admin
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/', include('crypto.api.urls')),
    path('api/', include('form.api.urls')),
    re_path(r'.*', TemplateView.as_view(template_name='index.html')),
]

