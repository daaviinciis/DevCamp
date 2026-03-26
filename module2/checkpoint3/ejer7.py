text = "Hola Mundo"
num = 33
lista = ["manzana", "banana", "cereza"]
booleano = True

primeraPalabra = text.split()[0]
primeraMayusculas = primeraPalabra.upper()
otrascadena = ' '.join(text.split()[1:])
new_cadena = primeraMayusculas + ' ' + otrascadena

print (new_cadena);