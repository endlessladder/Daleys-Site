"""daleys_django URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from daleys_store import views as store_views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', store_views.FrontPage),
    url(r'^sale/$', store_views.SaleShop),
    url(r'^men/$', store_views.MenShop),
    url(r'^women/$', store_views.WomenShop),
    url(r'^contact/$', store_views.ContactForm),
    url(r'^about/$', store_views.AboutPage),
]
