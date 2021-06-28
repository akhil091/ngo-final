from django.contrib import admin
from .models import Gallery, Volunteer, Programme, Blog

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    pass

@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    pass

@admin.register(Programme)
class ProgrammeAdmin(admin.ModelAdmin):
    pass

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    pass
