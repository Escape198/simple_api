from rest_framework import routers
from .api import QuestionsViewSet

router = routers.DefaultRouter()
router.register('api/questions', QuestionsViewSet, 'questions')

urlpatterns = router.urls
