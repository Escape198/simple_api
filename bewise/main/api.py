from .models import Questions
from rest_framework import viewsets, permissions
from .serializers import QuestionsSerializer


class QuestionsViewSet(viewsets.ModelViewSet):
    queryset = Questions.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuestionsSerializer
