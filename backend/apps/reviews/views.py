from django.shortcuts import render

# Create your views here.
from rest_framework import generics, filters
from .serializers import ReviewSerializer
from django_filters.rest_framework import DjangoFilterBackend
from .models import Review
# Create your views here.

class ReviewList(generics.ListAPIView):
    queryset=Review.objects.order_by('-created_at').filter(name="active").all()
    serializer_class = ReviewSerializer


class ReviewAdd(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer