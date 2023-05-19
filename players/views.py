from rest_framework import viewsets
from rest_framework import generics
from .serializer import PlayerSerializer
from .models import Player
import requests
from django.http import JsonResponse
from django.views import View




class PlayerView(viewsets.ModelViewSet):
    serializer_class = PlayerSerializer
    queryset = Player.objects.all()
    

class MyView(View):
    def get(self, request):
        url = "https://free-nba.p.rapidapi.com/players"
        querystring = {"page": "0", "per_page": "25"}
        headers = {
            "X-RapidAPI-Key": "406ca5a703msh4835660d16dc845p1472fcjsn8c3b384b918f",
            "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
        }
        response = requests.get(url, headers=headers, params=querystring)
        data = response.json()
        return JsonResponse(data, safe=False)

class PlayerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayerRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer