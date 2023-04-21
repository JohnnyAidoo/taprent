from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, UserViewSet, RegisterViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()

urlpatterns= [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

router.register(r'posts', PostViewSet, basename='posts')
router.register(r'users', UserViewSet, basename='users')
router.register(r'register', RegisterViewSet, basename='register')

urlpatterns += router.urls