from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import AuthView

urlpatterns = {
    url(r'^auth/$', AuthView.as_view())
}

urlpatterns = format_suffix_patterns(urlpatterns)
