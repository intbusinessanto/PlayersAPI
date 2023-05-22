from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('nbaplayers/', include('players.urls')),
    # path('apiplayers/', include('players.urls'))
]
