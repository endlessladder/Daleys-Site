from django.shortcuts import render

# Create your views here.

def MenShop(request):
    return render(
        request,
        'shop_men.html',
    )

def WomenShop(request):
    return render(
        request,
        'shop_women.html',
    )

def SaleShop(request):
    return render(
        request,
        'shop_sale.html',
    )

def FrontPage(request):
    return render(
        request,
        'index.html',
    )

def ContactForm(request):
    return render(
        request,
        'contact_form.html',
    )

def AboutPage(request):
    return render(
        request,
        'about.html',
    )
