from django.shortcuts import render


def index(request):
    print("test")
    return render(request, 'frontend/index.html')
