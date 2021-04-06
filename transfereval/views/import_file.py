from django.shortcuts import render
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .load import *
from rest_framework import viewsets
from ..serializers import *
from ..models import MajorRequirement
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status


@api_view(['POST'])
def FileUploadView(request):
    import_data(request.data['file'])
    return Response(None, status=status.HTTP_201_CREATED)
