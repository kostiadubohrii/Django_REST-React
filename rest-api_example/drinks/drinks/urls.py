from django.contrib import admin
from django.urls import path, include
from drinks import views
from rest_framework.urlpatterns import format_suffix_patterns
from django.conf.urls.static import static
from django.conf import settings
from users.views import users_list, user_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('drinks/', views.drink_list),
    path('drinks/<int:id>', views.drink_detail),
    path('users/', users_list),
    path('users/<int:id>/', user_detail)
    # path('users/', include('users.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)