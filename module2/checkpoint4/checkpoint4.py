# Ejercicio 1:  Create a list, tuple, float, integer, decimal, and dictionary.
mi_lista = ["manzana", "banana", "cereza"]
mi_tupla = ("rojo", "verde", "azul")
mi_float = 5.7
mi_entero = 10

from decimal import Decimal
mi_decimal = Decimal("3.14")

mi_diccionario = {
    "nombre": "Daavii",
    "edad": 20,
    "ciudad": "Donosti"
}

# Ejercicio 2: Round your float up.
import math
float_redondeado = math.ceil(mi_float)

# Ejercicio 3: Get the square root of your float.
raiz_cuadrada = math.sqrt(mi_float)

# Ejercicio 4: Select the first element from your dictionary.
primer_elemento_diccionario = list(mi_diccionario.items())[0]

# Ejercicio 5: Select the second element from your tuple.
segundo_elemento_tupla = mi_tupla[1]