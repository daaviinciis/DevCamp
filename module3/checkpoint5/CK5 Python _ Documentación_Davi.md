# **BOTTEGA UNIVERSITY**

![Bottega](img/image0.png)

# **DOCUMENTACIÓN DE PYTHON PARA PRINCIPIANTES**

# **Introducción**

Esta documentación está pensada para personas que están empezando en Python. La idea es explicar los conceptos de forma clara, sencilla y con ejemplos prácticos para que se puedan entender fácilmente.

Python es un lenguaje de programación que es fácil de aprender. Se utiliza mucho para hacer sitios web, analizar datos, automatizar tareas, crear inteligencia artificial y muchas otras cosas. La forma en que se escribe el código es clara y fácil de entender, lo que lo hace ideal para personas que están empezando a programar.

# **1\. ¿Qué es un condicional?**

Un condicional es una estructura de control de flujo que permite que un programa ejecute distintos bloques de código dependiendo de si una determinada condición se evalúa como verdadera (True) o falsa (False). Es, en esencia, la forma en que Python toma decisiones, igual que las personas lo hacen en la vida cotidiana: "si llueve, cojo el paraguas; si no, no lo cojo".

En Python, los condicionales se basan en expresiones booleanas que se evalúan en tiempo de ejecución. El resultado siempre es True o False, y a partir de él el intérprete decide qué camino seguir dentro del programa.

## **¿Para qué sirven?**

Los condicionales son imprescindibles porque sin ellos todos los programas serían completamente lineales, ejecutando siempre las mismas instrucciones sin importar los datos de entrada o el estado del sistema. Con ellos, podemos:

* Validar datos de entrada del usuario (edades, contraseñas, formatos).  
* Controlar el flujo del programa según el estado de variables o resultados.  
* Implementar lógica de negocio (descuentos, permisos, clasificaciones).  
* Gestionar errores y casos especiales de forma controlada.  
* Crear menús interactivos y rutas distintas de ejecución.  
* Comparar valores y tomar acciones en función de los resultados.

  ## **Sintaxis en Python**

![img][img/image1_1.png]

**Ejemplo 1: Edad mínima**

![img][img/image1_2.png]

*En este caso, el programa comprueba la edad y muestra un mensaje dependiendo de si la condición edad \>= 18 es verdadera o falsa. Los condicionales también se pueden encadenar con elif para múltiples verificaciones.*

**Ejemplo 2: Calificación de estudiantes**

![img][img/image1_3.png]

En este caso, el programa evalúa la nota hasta que cumpla la condición. La primera condición como es verdadera detiene la evaluación de las demás.

## **Buenas prácticas**

* Evitar demasiadas capas de if anidados; usar funciones para simplificar.  
* Documentar cada condicional con comentarios claros.  
* Siempre contemplar un else final para manejar casos no previstos.

  ## **Errores comunes**

* No poner : al final de la condición.  
* Confundir \= (asignación) con \== (comparación).  
* No contemplar todos los posibles valores, generando errores lógicos.

# **2\. Tipos de bucles en Python**

Un bucle (o loop) es una estructura de control que permite ejecutar un bloque de código de forma repetida mientras se cumpla una determinada condición, o por un número determinado de veces. Sin bucles, si quisiéramos imprimir los números del 1 al 1.000, tendríamos que escribir 1.000 líneas de código. Con un bucle, lo hacemos en 2 líneas.  
Los bucles son la base de la automatización: permiten procesar grandes volúmenes de datos, recorrer colecciones, repetir tareas hasta obtener un resultado deseado, y mucho más.

## **¿Para qué se utilizan?**

* Recorrer listas, tuplas, diccionarios y cualquier colección de datos.  
* Leer ficheros línea a línea.  
* Repetir operaciones hasta que el usuario introduzca un valor correcto.  
* Procesar lotes de datos automáticamente.  
* Implementar algoritmos de búsqueda, ordenación y cálculo.  
* Crear animaciones, juegos y simulaciones.

  ## **Bucle for**

El bucle for se usa cuando conocemos de antemano el número de iteraciones, o cuando queremos recorrer una colección (lista, cadena, rango, diccionario, etc.). Python utiliza el concepto de iterables: cualquier objeto que se pueda recorrer elemento a elemento.

![][img/image2_1.png]

![][img/image2_2.png]

**Explicación:**  
*range(5) genera los números del 0 al 4 y el bucle imprime cada uno.*

**Ejemplo 2: Recorrer lista de nombres**

![][img/image2_3.png]

**Explicación:**  
*Este comando recorre la lista de nombres e imprime una por una.*

## **Bucle while**

El bucle while repite un bloque de código mientras una condición sea verdadera. Se usa cuando no conocemos de antemano cuántas iteraciones serán necesarias: continuamos mientras se cumpla la condición y paramos cuando deja de cumplirse.

![][img/image2_4.png]

**Explicación:**  
*El bucle se ejecuta mientras la condición contador \< 5 sea verdadera.*

**Ejemplo práctico 2: Solicitar entrada válida**

![][img/image2_5.png]

**Explicación:**  
*El bucle continuará pidiendo datos hasta que el usuario escriba "salir".*

Los bucles son útiles porque evitan repetir código, hacen el programa más limpio y permiten trabajar con listas o datos fácilmente.

## **Sentencias de control de bucles**

| Sentencia | Descripción | Cuándo usarla |
| ----- | ----- | ----- |
| break | Detiene el bucle inmediatamente y sale de él. | Cuando encontramos lo que buscamos o se cumple un criterio de salida. |
| continue | Salta el resto de la iteración actual y pasa a la siguiente. | Cuando queremos omitir ciertos elementos (p.ej. filtrar negativos). |
| pass | No hace nada; marca un bloque vacío como intencional. | Para dejar un bloque vacío temporalmente sin error de sintaxis. |
| else | Bloque que se ejecuta si el bucle termina sin break. | Para confirmar que la búsqueda no encontró resultados. |

## **Comparativa for vs while**

| Característica | Bucle for | Bucle while |
| ----- | ----- | ----- |
| Número de iteraciones | Conocido de antemano | Desconocido, depende de condición |
| Uso principal | Recorrer colecciones/rangos | Repetir hasta que algo cambie |
| Riesgo de bucle inf. | Muy bajo | Alto si no se actualiza condición |
| Legibilidad | Muy alta para colecciones | Alta para lógica basada en estado |
| Ejemplo típico | for item in lista: | while not conexion\_establecida: |

## **Buenas prácticas**

* Evitar bucles infinitos.  
* Usar break o continuar con precaución para no dificultar la comprensión del flujo.  
* Documentar claramente el objetivo del bucle.

  ## **Errores comunes**

* Olvidar modificar la condición en while, creando bucles infinitos.  
* Usar for con variables no definidas o mal iteradas.

# **3\. ¿Qué es una lista por comprensión?**

Las listas por comprensión son una manera más rápida y clara de crear listas en Python. Permiten transformar, filtrar y generar listas nuevas a partir de otras existentes en una sola línea de código. Esto hace que el código sea un poco más limpio y legible en comparación con los bucles tradicionales.

Se usan mucho en procesamiento de datos, automatización y para generar resultados rápidamente sin necesidad de escribir múltiples líneas de código.

## **Para qué sirven**

* Crear nuevas listas a partir de datos existentes.  
* Aplicar operaciones a cada elemento de una colección sin necesidad de escribir un bucle completo.  
* Filtrar elementos según condiciones específicas (if).  
* Son ampliamente usadas en procesamiento de datos, automatización y desarrollo de scripts rápidos.

  ## **Sintaxis**

| \# Forma básica \[expresion for elemento in iterable\] \# Con filtro (condición) \[expresion for elemento in iterable if condicion\] \# Con transformación y filtro \[transformacion(elemento) for elemento in iterable if condicion\] \# Con doble bucle (producto cartesiano) \[expresion for x in iterable1 for y in iterable2\] |
| :---- |

**Ejemplo 1:**

Supongamos que tenemos una lista de edades y queremos crear otra lista con solo las edades mayores a 18 años:

![][img/image3_1.png]

**Ejemplo 2: Cuadrados de números**

![][img/image3_2.png]

**Explicación:**  
*Cada número de la lista números se eleva al cuadrado y se guarda en la nueva lista cuadrados.*

## **Beneficios**

* Código más limpio y conciso.  
* Menor riesgo de errores, ya que se reduce la cantidad de líneas de código.  
* Mejora la eficiencia en operaciones con listas grandes, ya que Python optimiza las operaciones internas.  
* Permite combinar operaciones complejas en una sola línea: cálculo \+ filtrado.

Las listas por comprensión pueden incluir condiciones (if) para filtrar elementos según criterios específicos, lo que las hace muy versátiles.

## **Buenas prácticas**

* Usar listas por comprensión para operaciones simples.  
* Evitar líneas demasiado largas; si la expresión es compleja, es mejor usar un bucle tradicional para mantener la claridad.  
* Siempre documentar qué hace la lista y cuál es el criterio de filtrado o transformación.

  ## **Errores comunes**

* Olvidar el for o el in en la expresión.  
* Intentar usar demasiadas condiciones anidadas en una sola línea, lo que dificulta la lectura.  
* Confundir la expresión de salida con la condición.

# **4\. ¿Qué es un argumento en Python?**

Un argumento es un valor que se pasa a una función para que ésta lo utilice en sus operaciones.  
Permiten que una misma función sea flexible y reutilizable, ya que no depende de valores fijos.

Por ejemplo, en lugar de crear una función específica para saludar a “Ana” y otra para “Luis”, se puede crear una función que reciba un argumento nombre y funcione para cualquier persona.

## **Para qué sirven**

* Hacen que las funciones sean generalizadas y reutilizables.  
* Facilitan la adaptación de código a distintos contextos sin modificar la función.  
* Permiten trabajar con cantidades variables de datos, muy útil en listas, formularios o APIs.

  ## **Beneficios**

* Evitan la duplicación de código.  
* Aumentan la legibilidad y mantenimiento del código.  
* Permiten funciones más versátiles, capaces de manejar distintos tipos y cantidades de datos.

  ## **Tipos de argumentos**

**Posicionales:** Se pasan en el mismo orden en que los parámetros están definidos en la función. Son los más comunes y su posición es lo que determina a qué parámetro corresponde cada valor.

![][img/image4_1.png]

**Por defecto:** Permiten asignar un valor predeterminado a un parámetro. Si al llamar la función no se proporciona ese argumento, se usa el valor por defecto. Esto hace la función más flexible y reduce la cantidad de argumentos obligatorios.

![][img/image4_2.png]

**Keyword (nombrados):** Permiten pasar los argumentos en cualquier orden especificando el nombre del parámetro. Esto mejora enormemente la legibilidad del código, especialmente en funciones con muchos parámetros

![][img/image4_3.png]

**Argumentos arbitrarios (\*args y \*\*kwargs):** permiten pasar múltiples valores sin definirlos previamente.

![][img/image4_4.png]

## **Buenas prácticas**

* Nombrar los argumentos de manera clara y significativa.  
* No abusar de \*args y \*\*kwargs si no es necesario, ya que puede dificultar la comprensión del código.  
* Siempre documentar los argumentos y sus posibles valores.

  ## **Errores comunes**

* No respetar el orden de los argumentos posicionales.  
* Confundir los argumentos con variables globales.  
* Mezclar argumentos por defecto y posicionales de forma incorrecta.

# **5\. ¿Qué es una función Lambda?**

Una función lambda es una función anónima, es decir, una función sin nombre que se define en una sola línea.  
Se utiliza principalmente para operaciones simples y rápidas, cuando no se necesita definir una función completa con def.

Las funciones lambda son muy útiles cuando se necesita una función temporal, por ejemplo para pasarla como argumento a otra función (map, filter, sorted) o realizar un cálculo sencillo.

## **Sintaxis**

![][img/image5_1.png]

**argumentos:** los valores que la función recibirá.  
**expresión:** la operación que se realiza con los argumentos. La función devuelve el resultado de esta expresión.

Una lambda solo puede contener una expresión (no instrucciones múltiples, no return explícito). El resultado de la expresión se devuelve automáticamente.

**Ejemplo**

![][img/image5_2.png]

**Explicación:**  
*Crea una función que suma dos números sin necesidad de definirla con def.*

Se usan mucho en combinación con otras funciones como map(), filter() y reduce() para aplicar operaciones a listas o colecciones de manera eficiente. Aunque son muy prácticas, no se recomienda mucho usarlas para operaciones complejas, ya que puede hacer que no se entienda muy bien el código.

## **Beneficios**

* Permiten ahorrar líneas de código y evitar definir funciones temporales innecesarias.  
* Son ideales para operaciones simples dentro de otras funciones.  
* Mejoran la legibilidad cuando se usan correctamente.

## **Usos comunes**

![][img/image5_3.png]

## **Lambda vs def — ¿Cuándo usar cada una?**

| Criterio | Lambda | def |
| ----- | ----- | ----- |
| Complejidad | Expresiones simples y cortas | Lógica compleja, múltiples líneas |
| Reutilización | Uso puntual, temporal | Funciones reutilizadas en varios lugares |
| Legibilidad | Alta para operaciones obvias | Siempre más explícita y documentable |
| Depuración | Difícil (sin nombre en trazas) | Fácil (aparece el nombre en errores) |
| Docstrings | No admite docstrings | Admite documentación completa |
| Testabilidad | Más difícil de testear sola | Fácil de testear de forma independiente |

## **Buenas prácticas**

* Usarlas únicamente para operaciones sencillas.  
* Documentar claramente qué hace la función lambda, ya que al ser anónima puede ser menos clara que una función definida.  
* Evitar lambdas muy largas o con múltiples operaciones, porque dificultan la lectura.

  ## **Errores comunes**

* Intentar escribir varias instrucciones dentro de una lambda (solo permite una expresión).  
* Abusar de lambdas para lógica compleja.  
* Confundir argumentos con variables externas.

# **6\. ¿Qué es un paquete pip?**

pip (Pip Installs Packages) básicamente es el gestor de paquetes oficial de Python. Permite instalar, desinstalar, actualizar y gestionar librerías externas que no vienen incluidas en la instalación estándar de Python. pip descarga los paquetes desde PyPI (Python Package Index), el repositorio oficial de paquetes de Python, que actualmente alberga más de 500.000 paquetes desarrollados por la comunidad.

Usar pip es fundamental para proyectos más grandes, ya que permite integrar librerías como requests para manejar peticiones HTTP, numpy para matemáticas avanzadas, pandas para análisis de datos y muchas más. Es recomendable trabajar siempre dentro de entornos virtuales (venv) para no afectar la instalación global de Python.

![][img/image6_1.png]

**Ejemplo**

pip install requests

**Explicación:**  
*Esto instala la librería requests para trabajar con peticiones HTTP.*

## **Para qué sirve**

* Integrar librerías de terceros para distintos proyectos.  
* Facilitar el manejo de dependencias de manera centralizada.  
* Trabajar dentro de entornos virtuales (venv) para evitar conflictos entre proyectos.

**Ejemplos de librerías populares:**

* requests → para hacer peticiones HTTP.  
* numpy → cálculos matemáticos y álgebra lineal.  
* pandas → análisis de datos y manipulación de tablas.  
* matplotlib → creación de gráficos y visualizaciones.

  ## **Comandos esenciales de pip**

| Comando | Descripción |
| ----- | ----- |
| pip install nombre | Instala la última versión de un paquete. |
| pip install nombre==2.1.0 | Instala una versión específica. |
| pip install nombre\>=2.0 | Instala la versión 2.0 o superior. |
| pip uninstall nombre | Desinstala un paquete. |
| pip list | Muestra todos los paquetes instalados. |
| pip show nombre | Muestra información detallada de un paquete. |
| pip freeze | Lista paquetes con versión exacta (para requirements.txt). |
| pip freeze \> requirements.txt | Exporta las dependencias del proyecto a un fichero. |
| pip install \-r requirements.txt | Instala todas las dependencias desde el fichero. |
| pip install \--upgrade nombre | Actualiza un paquete a la última versión. |
| pip search nombre | Busca paquetes en PyPI por nombre o descripción. |

  ## **Librerías esenciales por categoría**

### **Desarrollo web**

| pip install flask          \# Microframework web ligero y flexible pip install django         \# Framework web completo y robusto pip install requests       \# Peticiones HTTP de forma sencilla pip install fastapi        \# API moderna con tipado y documentación automática |
| :---- |

### **Ciencia de datos y análisis**

| pip install numpy          \# Arrays multidimensionales y operaciones matemáticas pip install pandas         \# Análisis y manipulación de datos tabulares pip install matplotlib     \# Visualización de datos con gráficas pip install seaborn        \# Visualización estadística de alto nivel pip install scikit-learn   \# Machine learning y estadística |
| :---- |

### **Automatización y scripting**

| pip install selenium       \# Automatización de navegadores web pip install pyautogui      \# Automatización del teclado y ratón pip install schedule       \# Programar tareas periódicas pip install paramiko       \# Conexiones SSH y SFTP |
| :---- |

## **Beneficios**

* Facilita la gestión de dependencias en proyectos Python.  
* Permite compartir proyectos con librerías externas sin necesidad de que el usuario las instale manualmente.  
* Compatible con entornos virtuales, lo que mejora la organización y evita conflictos de versiones.

  ## **Buenas prácticas**

* Siempre crear un entorno virtual (venv) antes de instalar librerías.  
* Mantener un archivo requirements.txt que liste las dependencias del proyecto:

  ## **Errores comunes**

* No usar entornos virtuales y afectar la instalación global de Python.  
* Instalar versiones incompatibles de librerías que rompen el proyecto.  
* Olvidar actualizar pip y encontrarse con errores de instalación.