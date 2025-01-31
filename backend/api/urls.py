from django.urls import path

from . import views

urlpatterns = [
    path("notes/", views.NoteListCreateView.as_view(), name="listcreate"),
    path("note/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete"),
]
