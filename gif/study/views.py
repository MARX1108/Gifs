from django.shortcuts import render

# Create your views here.
def index(request):
    var = (request.POST.get('step') == 1)
    return render(request, 'index.html', {
        'case_count':request.POST.get('step'),
        'sample_id':'08'
    })

