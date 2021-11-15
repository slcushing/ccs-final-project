from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Profile, Note
# Register your models here.


admin.site.register(User, UserAdmin)
admin.site.register(Profile)
admin.site.register(Note)