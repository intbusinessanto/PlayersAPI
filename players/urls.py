from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from players import views
from players.views import MyView, PlayerListCreateAPIView, PlayerRetrieveUpdateDestroyAPIView



#api versioning
router = routers.DefaultRouter()
router.register(r'players', views.PlayerView, 'players')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Players API")),
    path('mi_ruta/', MyView.as_view(), name='mi_ruta'),
    path('players/', PlayerListCreateAPIView.as_view(), name='player-list-create'),
    path('players/<int:pk>/', PlayerRetrieveUpdateDestroyAPIView.as_view(), name='player-retrieve-update-destroy'),

]
 