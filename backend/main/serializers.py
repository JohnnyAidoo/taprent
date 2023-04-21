from .models import Post, User
from rest_framework.serializers import ModelSerializer


#Post Serializer
class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


#User Serializer
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'email','password')

#Register User Serializer

class RegisterSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'email','password')

    
    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])
        return user