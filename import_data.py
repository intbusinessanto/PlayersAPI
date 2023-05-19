import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_crud_api.settings')
django.setup()

import requests
from players.models import Player

url = "https://free-nba.p.rapidapi.com/players"
querystring = {"page": "0", "per_page": "25"}
headers = {
    "X-RapidAPI-Key": "406ca5a703msh4835660d16dc845p1472fcjsn8c3b384b918f",
    "X-RapidAPI-Host": "free-nba.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)
data = response.json()

for player_data in data["data"]:
    player = Player(
        id=player_data["id"],
        first_name=player_data["first_name"],
        height_feet=player_data["height_feet"],
        height_inches=player_data["height_inches"],
        last_name=player_data["last_name"],
        position=player_data["position"],
        team=player_data["team"]["id"],
        weight_pounds=player_data["weight_pounds"]
    )
    player.save()
