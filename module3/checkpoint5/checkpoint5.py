# Bucle for
for i in range(1, 6):
    print("Número:", i)

# Funcion suma
def suma(a, b, c):
    return a + b + c

print(suma(2, 3, 5))

# Funcion lambda
suma_lambda = lambda a, b, c: a + b + c

print(suma_lambda(2, 3, 5))

# Ejercicio lista
nombre = 'Enrique'

lista_nombre = ('Jessica', 'Paul', 'George', 'Henry', 'Adán')

if nombre in lista_nombre:
    print(nombre + " está en la lista")
else:
    print(nombre + " NO está en la lista")
