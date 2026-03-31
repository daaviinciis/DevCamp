# Map – aplicar una función a cada elemento de una lista:
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
print(cuadrados)  # Salida: [1, 4, 9, 16, 25]

# Filter – filtrar elementos según una condición:
numeros = [1, 2, 3, 4, 5]
pares = list(filter(lambda x: x % 2 == 0, numeros))
print(pares)  # Salida: [2, 4]

# Sorted – ordenar una lista según una regla:
personas = [("Ana", 25), ("Luis", 30), ("Marta", 20)]
ordenadas = sorted(personas, key=lambda x: x[1])
print(ordenadas)  # Salida: [('Marta', 20), ('Ana', 25), ('Luis', 30)]