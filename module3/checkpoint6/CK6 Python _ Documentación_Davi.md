**BOTTEGA UNIVERSITY**![][image0.png]

# **DOCUMENTACIÓN DE PYTHON PARA PRINCIPIANTES**

## **ÍNDICE**

[**INTRODUCCIÓN	3**](#introducción)

[**1\. ¿PARA QUÉ USAMOS CLASES EN PYTHON?	4**](#1.-¿para-qué-usamos-clases-en-python?)

[**2\. ¿QUÉ MÉTODO SE EJECUTA AUTOMÁTICAMENTE CUANDO SE CREA UNA INSTANCIA DE UNA CLASE?	5**](#2.-¿qué-método-se-ejecuta-automáticamente-cuando-se-crea-una-instancia-de-una-clase?)

[**3\. ¿CUÁLES SON LOS TRES VERBOS DE API?	6**](#3.-¿cuáles-son-los-tres-verbos-de-api?)

[**4\. ¿ES MONGODB UNA BASE DE DATOS SQL O NOSQL?	7**](#4.-¿es-mongodb-una-base-de-datos-sql-o-nosql?)

[**5\.  ¿QUÉ ES UNA API?	8**](#5.-¿qué-es-una-api?)

[**6\. ¿QUÉ ES POSTMAN?	9**](#6.-¿qué-es-postman?)

[**7\.  ¿QUÉ ES EL POLIMORFISMO?	10**](#7.-¿qué-es-el-polimorfismo?)

[**8\.  ¿QUÉ ES UN MÉTODO DUNDER?	11**](#8.-¿qué-es-un-método-dunder?)

[**9\.  ¿QUÉ ES UN DECORADOR DE PYTHON?	12**](#9.-¿qué-es-un-decorador-de-python?)

# 

# **INTRODUCCIÓN** {#introducción}

Bienvenido a esta guía para estudio, pensada especialmente para quienes están comenzando en el mundo de la programación. El objetivo es ayudarte a entender, de forma clara y práctica, algunos de los conceptos fundamentales que necesitas dominar al inicio.

A lo largo de la documentación encontrarás explicaciones sobre Python, uno de los lenguajes más utilizados hoy en día, junto con una introducción a las APIs, bases de datos NoSQL como MongoDB y herramientas profesionales como Postman. También se incluyen conceptos clave de la Programación Orientada a Objetos, como el polimorfismo y los decoradores.

Cada apartado sigue una estructura sencilla que se explica el concepto, para qué sirve, por qué se utiliza y se acompaña de ejemplos prácticos. De esta forma, podrás avanzar paso a paso incluso si no tienes experiencia previa.

Python destaca por su facilidad y versatilidad, siendo útil en áreas como automatización, desarrollo web o análisis de datos. Además, comprender cómo funcionan las APIs es esencial, ya que permiten que diferentes aplicaciones se comuniquen entre sí.

# **1\. ¿PARA QUÉ USAMOS CLASES EN PYTHON?** {#1.-¿para-qué-usamos-clases-en-python?}

## **¿Qué es una Clase?**

Una clase en Python es un modelo que define la estructura y el comportamiento de un grupo de objetos similares. Puedes pensar en una clase como el plano de una casa. El plano en sí no es una casa, pero a partir de él puedes construir muchas casas con características comunes. De la misma manera, una clase define las propiedades, llamadas atributos, y las acciones, llamadas métodos, que tendrán todos los objetos creados a partir de ella. 

## **¿Para qué sirven las Clases?**

Las clases sirven para representar entidades del mundo real en nuestro programa. Por ejemplo, si estás desarrollando un sistema de gestión para una escuela, podrías tener una clase Alumno (con nombre, edad y nota), una clase Profesor (con nombre y asignatura) y una clase Aula (con número de plazas). Cada una de estas clases organiza datos y comportamientos relacionados en una sola unidad coherente.

Además, las clases ayudan a reutilizar el código. Cuando defines una clase, puedes crear muchos objetos (instancias) de esa clase sin repetir la lógica. Así evitas copiar código y reduces errores.

## **¿Por qué se utilizan?**

Se utilizan por cuatro razones principales que conforman los pilares de la POO.

* Encapsulamiento: agrupa datos y comportamientos en una sola unidad, protegiendo los detalles internos del resto del programa.  
* Herencia: permite crear nuevas clases a partir de clases existentes, reutilizando y extendiendo funcionalidades.  
* Polimorfismo: permite que objetos de diferentes clases respondan al mismo mensaje de forma distinta.  
* Abstracción: oculta la complejidad interna y expone solo lo necesario al usuario.

## **Sintaxis básica de una Clase en Python**

Para definir una clase en Python se usa la palabra reservada class, seguida del nombre de la clase (recomendado en CamelCase, es decir, con la primera letra de cada palabra en mayúscula) y dos puntos. El contenido de la clase va identificado dentro del bloque.

![][image2]

## **Ejemplo**

A continuación se muestra un ejemplo real de una clase Coche con sus atributos y métodos.

![][image3]

| 💡 Buena práctica: Siempre nombra tus clases en CamelCase (Coche, GestorDeArchivos, BaseDeDatos) y tus métodos y atributos en snake\_case (mostrar\_info, velocidad\_maxima). Esto mejora la legibilidad y sigue las convenciones oficiales de Python (PEP 8). |
| :---- |

# **2\. ¿QUÉ MÉTODO SE EJECUTA AUTOMÁTICAMENTE CUANDO SE CREA UNA INSTANCIA DE UNA CLASE?** {#2.-¿qué-método-se-ejecuta-automáticamente-cuando-se-crea-una-instancia-de-una-clase?}

## **El Método Constructor: \_\_init\_\_**

Cuando creas un objeto a partir de una clase en Python, hay un método especial que se ejecuta de forma automática e inmediata sin que tú tengas que llamarlo explícitamente. Este método se llama \_\_init\_\_ (con doble guion bajo antes y después, lo que en la comunidad Python se conoce como 'dunder' —de double underscore—). Su nombre completo sería 'initialize', que significa 'inicializar'.  
El método \_\_init\_\_ actúa como el constructor del objeto. Su principal responsabilidad es establecer el estado inicial del objeto, es decir, asignar valores a sus atributos en el momento en que es creado. Sin este método, todos los objetos de una clase nacerían 'vacíos', sin datos propios, lo que haría imposible distinguir unos de otros.

## **¿Por qué es necesario \_\_init\_\_?**

Imagina que tienes una clase Persona. Si creas a 'Ana' y a 'Luis' como objetos de esa clase, necesitas que cada uno tenga su propio nombre, edad y correo electrónico desde el primer momento. El método \_\_init\_\_ recibe estos datos como parámetros y los guarda en el objeto usando self. Sin él, todos los objetos compartirían los mismos datos, lo que provocaría errores lógicos graves en el programa.

## **El parámetro self**

Dentro de \_\_init\_\_ (y de cualquier método de instancia), el primer parámetro siempre es self. Este parámetro es una referencia al objeto actual que está siendo creado o manipulado. Gracias a self, Python sabe que self.nombre \= nombre significa 'guarda el valor del parámetro nombre dentro de este objeto específico, no en otro'. No es una palabra reservada de Python, podrías llamarla de otra manera, pero por convención universal se usa self.

## **Sintaxis**

![][image4]

## 

## **Ejemplo: Clase Persona**

![][image5]

| 📌 Recordatorio: El método \_\_init\_\_ NO crea el objeto (eso lo hace \_\_new\_\_, que Python gestiona internamente). \_\_init\_\_ simplemente inicializa el objeto ya creado, asignando sus atributos iniciales. Es el primer código que se ejecuta dentro del objeto. |
| :---- |

# **3\. ¿CUÁLES SON LOS TRES VERBOS DE API?** {#3.-¿cuáles-son-los-tres-verbos-de-api?}

## **¿Qué son los verbos HTTP?**

Cuando hablamos de APIs REST (el tipo más común de API web), la comunicación entre el cliente, por ejemplo, tu navegador o una aplicación móvil y el servidor se realiza mediante el protocolo HTTP (HyperText Transfer Protocol). Este protocolo define varios 'verbos' o métodos que indican la acción que el cliente quiere realizar sobre un recurso del servidor.  
Aunque HTTP tiene muchos verbos (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS...), los tres más fundamentales y más utilizados en el día a día del desarrollo de APIs son: GET, POST y DELETE. Conocerlos es imprescindible para trabajar con cualquier servicio web moderno.

## **1\. GET – Obtener información**

El verbo GET se utiliza para recuperar información del servidor sin modificar nada. Es una operación de solo lectura, por lo que nunca altera los datos existentes, solo los solicita. Imagina que tienes tu Pokédex y quieres consultar los primeros cinco Pokémon disponibles. Al enviar una petición GET a la API de Pokémon, el servidor nos devuelve una lista con los nombres y enlaces de esos Pokémon en formato JSON. En Python, esto se hace con requests.get(url). Podemos comprobar si la solicitud fue exitosa revisando el código de estado respuesta.status\_code, que será 200 si todo ha ido bien. Luego, con respuesta.json() transformamos la información en un diccionario de Python, lo que nos permite recorrer la lista y mostrar los nombres de cada Pokémon en la consola. Esta operación es ideal para obtener datos existentes, como consultar información de usuarios, artículos o cualquier recurso que no necesitemos modificar.

![][image6]

## **2\. POST – Enviar / Crear datos**

El verbo POST se utiliza para enviar datos al servidor y crear un nuevo recurso. Siguiendo con el ejemplo de Pokémon, supongamos que queremos agregar un nuevo Pokémon llamado “Pikachu” a nuestra colección virtual. Para ello, definimos un diccionario con toda la información relevante del Pokémon, como su tipo y nivel, y enviamos esos datos al servidor usando requests.post(url, json=datos). En este caso, los datos se envían en el cuerpo de la petición, en formato JSON, y el servidor los procesa para crear el recurso. Si todo sale bien, nos devuelve un código de estado 201, que indica que el recurso se creó correctamente, junto con la información del Pokémon recién agregado. Esto es muy similar a rellenar un formulario de registro en una web: estamos enviando información que el servidor almacenará y pondrá a disposición para futuras consultas.

![][image7]

## **3\. DELETE – Eliminar datos**

El verbo DELETE se utiliza para eliminar un recurso existente en el servidor. Por ejemplo, si queremos borrar un Pokémon concreto de nuestra colección, enviamos una petición DELETE a la URL correspondiente con su identificador. El servidor recibe la solicitud y elimina el recurso indicado. Si la operación tiene éxito, devuelve un código de estado 204, que significa que la eliminación se realizó correctamente, mientras que un 404 indicaría que el recurso no se encontró. Este verbo se debe usar con precaución, ya que la eliminación suele ser irreversible y no siempre existe un mecanismo de recuperación.

![][image8]

| ⚠️ IMPORTANTE: Esto es un código de ejemplo para simular. |
| :---- |

# **4\. ¿ES MONGODB UNA BASE DE DATOS SQL O NOSQL?** {#4.-¿es-mongodb-una-base-de-datos-sql-o-nosql?}

## **MongoDB**

MongoDB es una base de datos NoSQL (Not Only SQL), específicamente del tipo orientada a documentos. Esto significa que no almacena los datos en tablas con filas y columnas como lo hacen las bases de datos relacionales tradicionales como MySQL, PostgreSQL u Oracle, sino que los organiza en documentos con formato JSON (técnicamente BSON, una versión binaria de JSON) agrupados en colecciones.

Fue creada en 2007 por la empresa 10gen (ahora MongoDB Inc.) y desde entonces se ha convertido en una de las bases de datos más populares del mundo, especialmente en aplicaciones web modernas, APIs REST y arquitecturas de microservicios. Su nombre proviene de la palabra inglesa 'humongous', que significa 'enorme', reflejando su capacidad para manejar grandes volúmenes de datos.

## **¿Qué es NoSQL?**

El término NoSQL no significa 'sin SQL' sino 'Not Only SQL' (no solo SQL). Hace referencia a un conjunto de tecnologías de bases de datos que surgieron como alternativa a las bases de datos relacionales para resolver problemas específicos de escalabilidad, flexibilidad y rendimiento en aplicaciones modernas.

Existen varios tipos de bases de datos NoSQL, orientadas a documentos (MongoDB, CouchDB), de clave-valor (Redis, DynamoDB), columnares (Cassandra, HBase) y de grafos (Neo4j). Cada tipo está optimizado para un caso de uso particular.

## **Diferencias clave entre SQL y NoSQL (MongoDB)**

| Concepto | SQL (MySQL) | NoSQL (MongoDB) |
| :---- | :---- | :---- |
| Estructura | Tablas con filas y columnas | Colecciones con documentos JSON |
| Esquema | Fijo, definido previamente | Flexible, sin esquema rígido |
| Consultas | Lenguaje SQL estándar | API propia (find, aggregate...) |
| Escalado | Vertical (más hardware) | Horizontal (más servidores) |
| Relaciones | JOIN entre tablas | Datos embebidos o referencias |

## 

## **Ejemplo: Documento en MongoDB**

En MongoDB, un registro de usuario se almacenaría así en formato JSON/BSON.

![][image9]

| 🔍 ¿Cuándo usar MongoDB? MongoDB es ideal cuando los datos no tienen una estructura fija (por ejemplo, formularios con campos opcionales), cuando necesitas escalar horizontalmente, cuando trabajas con datos jerárquicos o anidados, o cuando tu aplicación requiere alta velocidad de lectura/escritura. No es la mejor opción cuando necesitas transacciones complejas o relaciones muy estrictas entre datos. |
| :---- |

# **5\.  ¿QUÉ ES UNA API?** {#5.-¿qué-es-una-api?}

## **Definición de API**

API son las siglas de Application Programming Interface, que en español se traduce como Interfaz de Programación de Aplicaciones. Una API es un conjunto de reglas, protocolos y herramientas que permiten que dos aplicaciones o sistemas de software se comuniquen entre sí de forma estandarizada, sin que ninguna de ellas necesite conocer los detalles internos de la otra.

En otras palabras, una API actúa como un intermediario o 'traductor' entre dos sistemas. Define un contrato claro 'si me envías esta petición en este formato, te devolveré esta respuesta en este otro formato'. Esto permite que equipos distintos, empresas distintas e incluso lenguajes de programación distintos puedan colaborar e integrarse sin fricciones.

## **Analogía del Restaurante**

Una de las analogías más utilizadas para explicar qué es una API es la del restaurante. Imagina que eres un cliente sentado en una mesa (la aplicación cliente). En la cocina hay un chef que prepara los platos (el servidor con sus datos y lógica). Tú no puedes ir directamente a la cocina a cocinar; necesitas comunicarte a través del camarero.

El camarero (la API) es quien recibe tu pedido (la petición), lo lleva a la cocina, espera a que el chef lo prepare y te trae el resultado (la respuesta). Tú no sabes exactamente cómo el chef prepara la comida, solo sabes qué puedes pedir y en qué formato te lo van a traer. Eso es exactamente lo que hace una API: abstrae la complejidad del sistema que hay detrás.

## **¿Para qué sirve una API?**

* **Integración de servicios:** permite que aplicaciones diferentes trabajen juntas. Por ejemplo, que una tienda online use la API de PayPal para procesar pagos o la API de Google Maps para mostrar ubicaciones.  
* **Reutilización:** evita reinventar la rueda. En lugar de desarrollar tu propio sistema meteorológico, puedes usar la API de OpenWeatherMap.  
* **Separación de responsabilidades:** en una arquitectura cliente-servidor, el frontend (interfaz) y el backend (lógica y datos) se comunican mediante API, pudiendo evolucionar de forma independiente.  
* **Acceso controlado:** las APIs permiten controlar quién puede acceder a tus datos y servicios, utilizando mecanismos como claves de API (API keys) o tokens de autenticación.

## **Tipos de APIs**

**Según el acceso**

Dependiendo de quién puede utilizarlas, las APIs se dividen en tres categorías principales.

* **APIs públicas:** Son accesibles para cualquier desarrollador externo. Se usan para que terceros puedan integrar servicios de manera segura y estandarizada. Por ejemplo, la Twitter API permite que cualquier aplicación lea tweets, publique contenido o gestione cuentas de manera programática, mientras que la GitHub API permite automatizar tareas como crear repositorios, obtener información de usuarios o administrar issues.  
* **APIs privadas:** Son exclusivas de una organización y se usan únicamente para uso interno. Por ejemplo, una empresa puede tener APIs que gestionan su base de datos de clientes o inventario, accesibles solo desde sus propios sistemas y sin exposición pública.  
* **APIs de partner:** Son compartidas de forma limitada con socios comerciales específicos. Esto permite que empresas colaboren intercambiando información o funcionalidades de manera controlada. Por ejemplo, un sistema de pagos podría dar acceso a su API solo a ciertos comercios autorizados para integrar sus servicios de cobro.

**Según la arquitectura**

Otro criterio para clasificar las APIs es cómo están diseñadas y cómo se comunican los sistemas.

* **REST (Representational State Transfer):** Es el estilo más común hoy en día. Las APIs REST usan HTTP y recursos identificables mediante URLs. Permiten operaciones como GET, POST, PUT y DELETE, lo que las hace muy intuitivas y fáciles de usar desde cualquier lenguaje de programación.  
* **SOAP (Simple Object Access Protocol):** Es un protocolo más antiguo que utiliza mensajes XML para comunicarse. Es más rígido y requiere estructuras estrictas, pero es útil en entornos empresariales donde la seguridad y las transacciones complejas son críticas.  
* **GraphQL:** Es un enfoque moderno donde el cliente puede especificar exactamente qué datos necesita en una sola petición. Esto evita el exceso de información y mejora la eficiencia en aplicaciones que requieren datos complejos o muy personalizados.  
* **gRPC:** Es un sistema de comunicación de alto rendimiento, basado en Protocol Buffers. Se usa sobre todo en arquitecturas de microservicios donde la velocidad y la eficiencia son clave. 

## **Ejemplo: Consumir una API con Python**

![][image10]

# **6\. ¿QUÉ ES POSTMAN?** {#6.-¿qué-es-postman?}

## **Definición**

Postman es una plataforma de colaboración para el desarrollo y prueba de APIs. Se trata de una aplicación (disponible como app de escritorio para Windows, Mac y Linux, y también como extensión de Chrome) que proporciona una interfaz gráfica intuitiva para enviar peticiones HTTP a APIs, visualizar las respuestas, organizar las pruebas y colaborar con equipos de desarrollo.

Fue creada en 2012 como una simple extensión de Chrome por el desarrollador indio Abhinav Asthana, y desde entonces ha crecido hasta convertirse en la herramienta estándar de la industria para trabajar con APIs. Hoy en día es utilizada por más de 20 millones de desarrolladores en todo el mundo.

## **¿Para qué sirve Postman?**

* **Probar APIs:** permite enviar peticiones GET, POST, PUT, DELETE y otros verbos HTTP a cualquier API y visualizar la respuesta de forma clara y estructurada, sin necesidad de escribir código.  
* **Depurar errores:** cuando una API no funciona como se espera, Postman permite inspeccionar cabeceras HTTP, códigos de estado, tiempos de respuesta y el cuerpo de la respuesta con facilidad.  
* **Documentar APIs:** genera documentación automática a partir de las colecciones de peticiones creadas.  
* **Automatizar pruebas:** permite escribir tests en JavaScript que verifican automáticamente que las respuestas son correctas.  
* **Simular APIs (Mock Servers):** crea servidores falsos que simulan respuestas de una API aún no desarrollada.

## **Conceptos clave en Postman**

Para usar Postman eficientemente, es importante conocer sus conceptos fundamentales.

**Colección:** Carpeta que agrupa peticiones relacionadas (ej: todas las peticiones de la API de usuarios)  
**Petición:** Una llamada HTTP individual con URL, método, cabeceras y body  
**Entorno:** Variables reutilizables (ej: {{base\_url}} \= https://api.ejemplo.com) Permite cambiar fácilmente entre entorno de desarrollo y producción  
**Variables:** Valores que se pueden reutilizar en múltiples peticiones ej: {{token}} almacena el token de autenticación  
**Tests:** Scripts JavaScript que validan la respuesta automáticamente

## **Ejemplo de test en Postman**

En la pestaña 'Tests' de una petición en Postman, puedes escribir código JavaScript para verificar automáticamente que la respuesta es correcta.

*// Test: verificar que el código de estado es 200*  
*pm.test('Estado es 200', function() {*  
    *pm.response.to.have.status(200);*  
*});*  
   
*// Test: verificar que la respuesta tiene el campo 'nombre'*  
*pm.test('Respuesta tiene campo nombre', function() {*  
    *const datos \= pm.response.json();*  
    *pm.expect(datos).to.have.property('nombre');*  
*});*  
   
*// Test: verificar que el tiempo de respuesta es menor a 500ms*  
*pm.test('Tiempo de respuesta aceptable', function() {*  
    *pm.expect(pm.response.responseTime).to.be.below(500);*  
*});*

| 🚀 ¿Por qué aprender Postman? En el entorno profesional, prácticamente todo sistema moderno expone o consume APIs. Saber usar Postman te permite trabajar de forma mucho más eficiente, probar endpoints en segundos, colaborar con el equipo compartiendo colecciones, y automatizar pruebas de regresión para detectar errores rápidamente. Es una habilidad muy valorada en entrevistas técnicas. |
| :---- |

# **7\.  ¿QUÉ ES EL POLIMORFISMO?** {#7.-¿qué-es-el-polimorfismo?}

## **Definición**

El polimorfismo es uno de los cuatro pilares fundamentales de la Programación Orientada a Objetos (junto con encapsulamiento, herencia y abstracción). La palabra proviene del griego: 'poly' (muchos) y 'morphos' (formas). En programación, el polimorfismo es la capacidad que tiene un objeto de tomar múltiples formas o comportarse de diferentes maneras dependiendo del contexto, manteniendo la misma interfaz, es decir, el mismo nombre de método o función.

En términos prácticos, el polimorfismo permite que objetos de diferentes clases respondan al mismo mensaje o llamada de método de forma distinta y específica a cada clase. Esto hace que el código sea más flexible, genérico y fácil de extender sin modificar el código existente.

## **¿Por qué es útil el polimorfismo?**

Sin polimorfismo, tendríamos que escribir condicionales (if/elif) para cada tipo de objeto, comprobando su tipo antes de llamar al método correspondiente. Esto hace el código rígido y difícil de mantener. 

Con el polimorfismo, podemos tratar todos los objetos de forma uniforme y dejar que cada uno sepa cómo comportarse.

## **Ejemplo sin polimorfismo (código rígido)**

![][image11]

## 

## **Ejemplo CON polimorfismo (código flexible)**

![][image12]

## **Polimorfismo con funciones built-in**

Python también implementa polimorfismo en sus funciones integradas. Por ejemplo, la función len() funciona con strings, listas, diccionarios y tuplas; el operador \+ suma números pero concatena strings; print() puede mostrar cualquier tipo de objeto. Esto es polimorfismo en acción a nivel del propio lenguaje.

![][image13]

# **8\.  ¿QUÉ ES UN MÉTODO DUNDER?** {#8.-¿qué-es-un-método-dunder?}

## **Definición**

En Python, los métodos dunder (también llamados métodos mágicos o métodos especiales) son métodos que tienen un nombre rodeado por doble guion bajo antes y después, como \_\_init\_\_, \_\_str\_\_ o \_\_len\_\_. La palabra 'dunder' precisamente viene de 'Double UNDERscore', es decir, doble guión bajo. Aunque su nombre pueda parecer extraño al principio, estos métodos son absolutamente fundamentales en Python y se usan constantemente, incluso sin saberlo.

Los métodos dunder no están pensados para ser llamados directamente por el programador (aunque se puede hacer). En cambio, Python los invoca automáticamente en situaciones específicas: al crear un objeto, al usar operadores como \+, \==, \<, al llamar a funciones como len() o print(), o al usar sintaxis especial como obj\[i\]. Son el mecanismo interno que hace que Python sea un lenguaje tan expresivo y consistente.

## **¿Por qué existen los métodos Dunder?**

Los métodos dunder existen para permitir que las clases que tú defines se integren de forma natural con el lenguaje Python. Gracias a ellos, tus propios objetos pueden comportarse exactamente igual que los tipos integrados de Python (listas, strings, números...). Por ejemplo, si defines \_\_len\_\_ en tu clase, Python permitirá usar len(tu\_objeto) de la misma manera que len(\[1,2,3\]). Si defines \_\_add\_\_, podrás usar el operador \+ entre dos de tus objetos.

Esto es lo que los programadores llaman 'protocolo de Python': un conjunto de métodos especiales que, si están definidos, permiten que el objeto participe en las operaciones del lenguaje. Es una de las razones por las que Python es tan elegante: todo funciona de forma uniforme, ya sea con tipos built-in o con tus propias clases.

## **El más importante: \_\_init\_\_**

Ya lo vimos en la sección 2, pero es el dunder por excelencia: el constructor. Se ejecuta automáticamente cuando se crea una instancia de la clase y sirve para inicializar los atributos del objeto. Es el punto de entrada de todo objeto en Python.

![][img/img8.1.png]

## 

## **\_\_str\_\_ y \_\_repr\_\_: cómo mostrar un objeto**

Cuando hacemos ***print(mi\_objeto)*** sin definir nada, Python muestra algo como ***\<\_\_main\_\_.Libro object at 0x7f...\>***, que no es muy útil. Aquí entran en juego los métodos:

* ***\_\_str\_\_*** define la representación amigable para el usuario, usada por ***print()***.  
* ***\_\_repr\_\_*** define la representación técnica para el desarrollador, útil para depuración y logs.

![][img/img8.2.png]

## **\_\_len\_\_: definir la longitud del objeto**

Este método permite que tu objeto responda a la función len(), devolviendo siempre un número entero no negativo. Es muy útil para colecciones personalizadas.

![][img/img8.3.png]

## **Sobrecarga de operadores: \_\_add\_\_, \_\_eq\_\_, \_\_lt\_\_**

Estos métodos permiten que los operadores matemáticos y de comparación funcionen con tus objetos, algo llamado sobrecarga de operadores:

![][img/img8.4.png]

## **Acceso e inclusión: \_\_getitem\_\_ y \_\_contains\_\_**

Con \_\_getitem\_\_ tu objeto puede soportar acceso por índice (obj\[i\]), y con \_\_contains\_\_ puede responder al operador in (elemento in objeto). Esto permite crear colecciones personalizadas muy flexibles.

![][img/img8.5.png]

## **Ejemplo integrador: clase con múltiples dunders**

![][img/img8.6.png]

| 💡 Consejo clave: No es necesario implementar todos los métodos dunder en cada clase. Solo define aquellos que tengan sentido para tu objeto. Si tu clase representa una colección, implementa *\_\_len\_\_*, *\_\_getitem\_\_* y *\_\_contains\_\_*. Si quieres que sea legible para el usuario, implementa *\_\_str\_\_*. Si necesitas sumar objetos, implementa *\_\_add\_\_*. Python es flexible: implementa lo que tu clase realmente necesite. |
| :---- |

# **9\.  ¿QUÉ ES UN DECORADOR DE PYTHON?** {#9.-¿qué-es-un-decorador-de-python?}

## **Definición**

Un decorador en Python es una función especial que recibe otra función como argumento, añade o modifica su comportamiento, y devuelve una nueva función con ese comportamiento extendido. Los decoradores son una de las características más elegantes y poderosas de Python, y se utilizan extensivamente en frameworks populares como Flask, Django y FastAPI.

Para entender los decoradores, es fundamental comprender que en Python las funciones son objetos de primera clase (first-class objects): esto significa que las funciones pueden pasarse como argumentos a otras funciones, devolverse como resultado de una función, asignarse a variables, y almacenarse en estructuras de datos. Los decoradores explotan esta capacidad al máximo.

## **¿Para qué sirven los decoradores?**

* **Añadir funcionalidad transversal:** como registro de logs, control de tiempo de ejecución, manejo de errores o caché, sin modificar el código de la función original.  
* **Control de acceso:** verificar si un usuario tiene permisos antes de ejecutar una función (muy común en APIs web).  
* **Validación de datos:** comprobar que los argumentos son del tipo correcto antes de ejecutar la función.  
* **Memorización:** guardar en caché los resultados de funciones costosas para evitar recalcularlos.

## **Sintaxis del decorador**

La sintaxis con el símbolo @ antes de una función es azúcar sintáctica (syntactic sugar): una forma abreviada de escribir algo que Python traduce internamente a una llamada de función. Estas dos formas son equivalentes.

![][img/img9.1.png]

## 

## **Cómo crear un decorador paso a paso**

![][img/img9.2.png]

## **Ejemplo real: Decorador de tiempo de ejecución**

![][img/img9.3.png]

## **Decoradores incorporados en Python**

Python incluye decoradores built-in muy utilizados en programación orientada a objetos.

![][img/img9.4.png]

| ⚡ Consejo avanzado: Cuando crees tus propios decoradores, usa functools.wraps para preservar el nombre y la documentación de la función original. Sin él, la función decorada perdería su identidad (\_\_name\_\_, \_\_doc\_\_). Añade 'from functools import wraps' y decora la función interna con '@wraps(funcion\_original)'. |
| :---- |