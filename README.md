*Pre-entrega Proyecto de software NodeJS*

El desafío es integrar todo lo aprendido en un único programa. Manejar estructuras, APIs y lógica dinámica. El objetivo es construir una herramienta funcional para manejar productos de una tienda en línea desde la terminal. utilizando Fakestore

*Funcionalidades*
Consultar Todos los Productos:

Si ejecutas npm run start GET products, el programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.

Ejemplo: npm run start GET products

Consultar un Producto Específico:Si ejecutas npm run start GET products/<productId>, el programa debe obtener y mostrar el producto correspondiente al productId indicado.Ejemplo: npm run start GET products/15

Crear un Producto Nuevo:

Si ejecutas npm run start POST products <title> <price> <category>, el programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el resultado en la consola.

Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras

Eliminar un Producto:

Si ejecutas npm run start DELETE products/<productId>, el programa debe enviar una petición DELETE para eliminar el producto correspondiente al productId y devolver la respuesta en la consola.

Ejemplo: npm run start DELETE products/7

*Tips de Desarrollo*

Usa process.argv para capturar y procesar los comandos ingresados.

Implementa fetch para interactuar con la API de FakeStore (consulta su documentación para más detalles).

Aprovecha el uso de destructuring y spread para manipular los datos.

Utiliza métodos de arrays y strings para separar cadenas de texto y conjuntos de información y aprovechar solo lo que necesites.