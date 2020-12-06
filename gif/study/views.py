from django.shortcuts import render

# Create your views here.
def main_render(request):
    if not "step" in request.session:
        return setup(request)
    else: 
        return index(request)

def index(request):
    request.session['step'] = request.session['step']+1
    return render(request, 'index.html', {
        'case_count':request.POST.get('step'),
        'sample_id':'08'
    })

def setup(request):
    request.session['step'] = 0
    return render(request, 'start.html', {
        # 'case_count':request.POST.get('step'),
        # 'sample_id':'08'
    })
