from django.http.response import HttpResponse
from django.shortcuts import render
from django.conf import settings
from .models import Study
from .serializers import StudySerializer
from rest_framework import generics
from rest_framework.decorators import api_view, renderer_classes

from django.http import JsonResponse

import json
import os

# Create your views here.


class StudyListCreate(generics.ListCreateAPIView):
    queryset = Study.objects.all()
    serializer_class = StudySerializer


def request_handler(request):
    # print('RECEIVED REQUEST: ' + request.method)
    if request.method == 'POST':
        print(request.POST.get("keyword"))
    return JsonResponse({
        "success": 1
    }
    )


def main_render(request):

    if request.session.get('step', None) == None:
        request.session['step'] = 0

    if request.POST.get('cmd') == 'reset':
        del request.session['step']

    if request.POST.get('cmd') == 'reset':
        return setup(request)
    elif request.session.get('step', None) >= 10:
        return end(request)
    else:
        return index(request)


def index(request):
    request.session['step'] = request.session['step']+1
    filename = "study/static/json/"+str(request.session['step']) + ".json"

    with open(os.path.join(settings.BASE_DIR, filename)) as file:
        sample = json.load(file)
    # print(sample[1].get('payload'))
    return render(request, 'index.html', {
        'case_count': request.POST.get('step'),
        'sample_id': '08',
        'sample': sample
    })


def setup(request):
    request.session['step'] = 0
    return render(request, 'start.html', {
        # 'case_count':request.POST.get('step'),
        # 'sample_id':'08'
    })


def end(request):
    return render(request, 'end.html', {
        # 'case_count':request.POST.get('step'),
        # 'sample_id':'08'
    })
