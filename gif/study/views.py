from django.shortcuts import render
from django.conf import settings

import json
import os

# Create your views here.


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
