from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Customer, Product, CustomerInfo, Order, OrderDetail
from .serializers import CustomerSerializer, ProductSerializer, CustomerInfoSerializer

@api_view(['POST'])
def customer_lookup(request):
    if request.method == 'POST':
        email = request.data.get('email')
        cell_phone = request.data.get('cell_phone')
        if email and cell_phone:
            try:
                customer = Customer.objects.get(email=email, cell_phone=cell_phone)
                serializer = CustomerSerializer(customer)
                return Response(serializer.data)
            except Customer.DoesNotExist:
                return Response({'error': 'Customer not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Both email and cell_phone are required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['GET'])
def products_by_category(request, category_id):
    try:
        products = Product.objects.filter(category=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'error': 'No hay productos para esta categoría'}, status=404)

@api_view(['GET'])
def product(request, id):
    try:
        product = Product.objects.filter(id=id)
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'error': 'No hay productos para esta categoría'}, status=404)
    
@api_view(['GET'])
def customer_info(request, customer_id):
    try:
        customer_info = CustomerInfo.objects.get(customer__id=customer_id)
        serializer = CustomerInfoSerializer(customer_info)
        return Response(serializer.data)
        
    except CustomerInfo.DoesNotExist:
        return Response({'error': 'CustomerInfo not found'}, status=404)
    
@api_view(['POST'])
def save_info_client(request):
    serializer = CustomerInfoSerializer(data=request.data)
    if serializer.is_valid():
        customer_info = serializer.save()
        print("CUSTOMER_INFO", customer_info)
        return Response({"message": "Datos guardados correctamente"}, status=status.HTTP_201_CREATED)
    else:
        print("error", serializer.errors)
        return Response({"error": "Datos no válidos"}, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def register_costumer(request): 
    data=request.data
    try:
        print("entro al try")
        new_customer=Customer(
            first_name = data['name'],
            last_name = data['lastname'],
            email = data['email'],
            cell_phone = data['cell_phone'],
            home_phone = data['homephone'],
            date_of_birth = data['birthdate'],
            address = data['address']
        )
        
        print("creadooooo")
        
        new_customer.save()
        
        return Response(status=status.HTTP_200_OK)
    except Exception as e:
        print(e)
        return Response({"error": "el id ya está registrado, o no se gititaron correctamente los campos"}, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['GET'])
def getOrdersById(request, customer_id): 
    try: 
        print("entra al try")
        user= Customer.objects.get(id=customer_id)
        userOrders = Order.objects.filter(customer=user)
        finalData=[]
        print("hizo los select iniciales de suer y orders")
        for order in userOrders: 
            print("order: ", order)
            orderDetails=OrderDetail.objects.get(order=order)
            print("orderDetails: ", orderDetails)
            finalData.append({'order_date': order.order_date, 'shipped_date': order.shipped_date, 'payment_date': order.payment_date, 'product': orderDetails.product.description, 'price': orderDetails.price})
        return Response(finalData)
        
    except Exception as e:
        print(e)
        return Response({"error": "hubo un error"}, status=status.HTTP_400_BAD_REQUEST)