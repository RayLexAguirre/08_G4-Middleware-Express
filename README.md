![Logo](img/ucol-logo.jpg)

# Práctica 8: Middleware Express

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “4ºG”
- PROGRAMACIÓN WEB
- CATEDRATICO: ULIBARRI IRETA CARLOS
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

- Nodemon server
- Express module

> ENTREGA: MARTES 22 DE MARZO DEL 2022

## INFORMACIÓN ADICIONAL

- ¿Qué es un middleware?

  - Es un software que colma lagunas entre otras aplicaciones, herramientas y bases de datos con el fin de prestar servicios unificados a los usuarios. La gente suele referirse al middleware como el pegamento que conecta los distintos dispositivos y plataformas de software.

- ¿Cuál es el significado del término “MEAN stack”?

  - Se define como un conjunto de tecnologías basadas en JavaScript, recopiladas que se utilizan para desarrollar los sitios web complejos y las apps web (progresivas o receptivas). Para simplificar, MEAN se explica como un framework de JavaScript de full-stack, que simplifica y acelera el desarrollo de las apps y web.

- ¿Cuáles son las características/funcionalidades que Express ofrece como middleware?

  - Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
  - Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
  - Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
  - Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

- ¿Qué es una ruta en express?

  - Route middleware en Express es una forma de hacer algo antes de que una petición se procese. Este algo podrían ser cosas como comprobar si un usuario se ha autentificado (logueado con su cuenta por ejemplo), en definitiva, cualquier cosa que gustemos hacer antes de mandarle información al usuario.

- ¿Qué es un “route handler” en express y para qué se utiliza?

  - Un route handler en Express se escribe de la siguiente manera: app.get('/', (req, res) => { res.send({ hi: 'there', }); }); Y así es como lo interpreta Express internamente: app es un objeto que representa el servidor Express creado, al que vamos a asociar el manejador de ruta.

- ¿Cuáles son los 2 parámetros necesarios para crear una ruta para el método GET con express, ejemplo: app.get()?

  - El primero seria el directorio, el lugar en donde se encontrara el servidor asi como las direfentes direciones en las cuales se puede estar y tambien esta el request y resend dentro de un parentesis.

- ¿Qué es lo que hace la instrucción res.send?

  - La función res.send() básicamente envía la respuesta HTTP. El parámetro del cuerpo puede ser un objeto String o Buffer o un objeto o un Array.

- ¿Cuál es el motivo por el que express es tan popular?

  - Express.js es un framework para Node.js que sirve para ayudarnos a crear aplicaciones web en menos tiempo ya que nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, y un largo etc. A su vez, Express hace lo mismo con Connect, con lo que tenemos un framwork ligero, rápido y muy útil.

## EXPLICACIÓN DEL PROCESO

1. Crea una carpeta llamada "practica_9"

2. Inicializa NPM con npm init -y

3. Instala los paquete express con npm i express y nodemon con npm install -g nodemon

4. Crea un nuevo archivo app.js

5. Escribe el codigo donde se requiera express y donde una app lo mande a llamar

6. Ahora se realizara un route handler al iniciar el servidor y con un respond se imprimira el texto "Hello World, this is the root route"

7. El servidorse localizara en el puerto 3000

8. Ahora se realizara un route handler hacia la direción "uno" y con un respond se imprimira el texto "Hello World, frome route One"

9. Ahora en la linea instala 'npm install -g nodemon' y escribe "nodemon server"

10. Abre una nueva ventana en el navegador y escribe localhost:3000

11. Agrega un nuevo route handler propio y ademas otro que tenga la direccion "prueba" y que responda imprimiendo "Hello World, frome route Prueba"

12. Ahora la ruta prueba debera regresar un texto html

13. Se crea un archivo .gitignore conteniendo node_modules para evitar empujar la carpeta node_modules en github

## RECURSOS

- https://www.npmjs.com/
