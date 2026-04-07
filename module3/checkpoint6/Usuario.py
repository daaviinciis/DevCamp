# Definición de la clase Usuario
class Usuario:
    def __init__(self, nombre_usuario, contrasena):
        self.nombre_usuario = nombre_usuario
        self.contrasena = contrasena

    def __str__(self):
        return f"Usuario: {self.nombre_usuario}"

# Crear un objeto usando la clase
usuario1 = Usuario("davimede", "miContraseñaSegura*")

# Mostrar el usuario
print(usuario1)  # Salida: Usuario: davimede

# Acceder a atributos directamente
print("Nombre de usuario:", usuario1.nombre_usuario)
print("Contraseña:", usuario1.contrasena)