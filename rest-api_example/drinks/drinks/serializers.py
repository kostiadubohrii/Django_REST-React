from rest_framework import serializers
from .models import Drink

class DrinkSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, required=False, allow_null=True)
    class Meta:
        model = Drink
        fields = ['id', 'name', 'description', 'image']

# class SpiritSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Spirit
#         fields = ['id', 'name', 'description', 'price']
