from django.urls import path
from django.urls.conf import include
from . import views 
from django.views.generic.base import RedirectView

urlpatterns = [
    path('',views.home,name="home"),
    path('about/',views.about,name="about"),
    path('contact/',views.contact,name="contact"),
    path('gallery/',views.gallery,name='gallery'),
    path('volunteer/',views.volunteer,name='volunteer'),
    path('join_volunteer/',views.join_volunteer,name='join_volunteer'),
    path('campaign/',views.campaign,name='campaign'),
    path('fundraiser/',views.fundraiser,name='fundraiser'),
    path('campaign/<int:pk>',views.programme_campaign,name='programme_campaign'),
    path('fundraiser/<int:pk>',views.programme_fundraiser,name='programme_fundraiser'),
    path('blog/',views.blog,name='blog'),
    path('blog/<int:pk>',views.blog_detail,name='blog_detail'),
]
