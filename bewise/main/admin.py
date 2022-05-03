from django.contrib import admin
from .models import Questions

# Register your models here.


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'questions_num', 'description', 'date', 'done')
    list_display_links = ('id', 'questions_num')
    search_fields = ('id', 'questions_num')
    list_editable = ('done',)
    list_filter = ('done',)


admin.site.register(Questions, QuestionsAdmin)
