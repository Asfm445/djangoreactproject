from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Note
from .serializer import NoteSerilizer, userSerializer


class createUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = userSerializer
    permission_classes = [AllowAny]


class NoteListCreateView(generics.ListCreateAPIView):

    serializer_class = NoteSerilizer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(auther=user)

    def perform_create(self, serilizer):
        if serilizer.is_valid():
            serilizer.save(auther=self.request.user)
        else:
            print(serilizer.errors)


class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerilizer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(auther=user)
