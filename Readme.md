1) Agregar un endpoint que al realizarle una peticion GET que nos devuelva todos los superheroes

2) Agregar un endpoint que al realizarle una peticion POST cree e inserte un nuevo superheroe en la base de datos, y nos devuelva el superheroe creado

3) Agregar un endpoint que al realizarle una peticion PUT actualice un superheroe en la base de datos, y nos devuelva el superheroe actualizado

4) Agregar un endpoint que al realizarle una peticion DELETE borre un superheroe por ID en la base de datos, y nos devuelva el superheroe borrado

5) Agregar un endpoint que al realizarle una peticion DELETE borre un superheroe por Nombre del superheroe en la base de datos, y nos devuelva el superheroe borrado



1 nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
2 nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
3 edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco(trim), valor minimo 0 (no admite edad negativa)
4 poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y una longitud maxima de 60
5 Subir todo a su repositorio de github y cargarlo en la planilla, luego mover la tarjeta





1 Revisión de la estructura del proyecto: Asegurarse de que comprendan el esquema de MVC, el archivo de configuración de base de datos (dbConfig.mjs) y cómo se organiza la capa de repositorio y servicios.
2 Configuración de la base de datos: Configurar una base de datos MongoDB y asegurarse de que el archivo dbConfig.mjs esté correctamente configurado
3 Ejecutar el servidor: Verificar la conexión a la base de datos y probar los endpoints de superhéroes existentes para asegurarse de que el proyecto base funcione sin problemas.
4 Configurar EJS: Modificar el archivo de configuración (app.mjs) para asegurarse de que EJS está configurado como el motor de vistas.
5 Crear la vista principal del dashboard (views/dashboard.ejs): Mostrar la lista de superhéroes utilizando el endpoint /heroes.
6 Integrar con el controlador: Modificar el superheroesController.mjs para renderizar dashboard.ejs al llamar a obtenerTodosLosSuperheroesController
7 Crear formulario de agregar superhéroe (views/addSuperhero.ejs): Implementar un formulario con campos necesarios (nombreSuperheroe, nombreReal, edad, planetaOrigen, debilidad, etc.).
8 Crear endpoint para el formulario:
9  Definir una ruta POST /heroes/agregar en superheroesRoutes.mjs.
10     Implementar en el controlador (superheroesController.mjs) un método agregarSuperheroeController, que llame al servicio para agregar un nuevo superhéroe.
11 Agregar validación de datos: Validar los datos en el frontend y backend para asegurar que cumplen con el esquema y requerimientos
12 Crear la vista de edición (views/editSuperhero.ejs): Implementar un formulario similar al de agregar superhéroe, pero precargar los datos actuales del superhéroe.
13 Crear endpoint para editar:
14     Agregar una ruta PUT /heroes/:id/editar en superheroesRoutes.mjs.
15     Implementar en superheroesController.mjs un método editarSuperheroeController que permita actualizar los datos del superhéroe llamando al método de edición en el servicio.
16 Mostrar opción de editar: En la vista del dashboard, añadir un botón de edición para cada superhéroe que redirija a editSuperhero.ejs con los datos del superhéroe a modificar.
17 Añadir botón de eliminar en el dashboard: Incluir en dashboard.ejs un botón de eliminar para cada superhéroe.
18 Crear endpoint para eliminar:
19 Agregar una ruta DELETE /heroes/:id en superheroesRoutes.mjs.
20     Crear eliminarSuperheroeController en superheroesController.mjs para que llame al servicio y elimine el superhéroe seleccionado.
21 Confirmación de eliminación: Agregar una alerta de confirmación antes de eliminar el superhéroe para evitar eliminaciones accidentales.
22 Listar Superhéroes en el Dashboard. En el controlador (superheroesController.mjs), asegúrate de que obtenerTodosLosSuperheroesController renderiza dashboard.ejs y pasa la lista de superhéroes obtenida desde el servicio al archivo EJS. En dashboard.ejs, utiliza una estructura de bucle para mostrar cada superhéroe en una tabla o tarjeta. Incluye botones para editar y eliminar junto a cada superhéroe.
23 Integración del Formulario de Agregar Superhéroe: Configura un formulario en addSuperhero.ejs que envíe los datos al endpoint /heroes/agregar utilizando un método POST.  En el backend, verifica que agregarSuperheroeController recibe los datos y crea el nuevo superhéroe. Tras agregarlo, redirige de vuelta al dashboard para ver la lista actualizada.
24 Integración del Formulario de Editar Superhéroe:  Configura editSuperhero.ejs para cargar los datos actuales del superhéroe que se va a editar. Esto se hace al enviar una solicitud al backend para obtener el superhéroe por ID y precargar la información en el formulario.  Asegúrate de que el formulario envíe los datos al endpoint PUT /heroes/:id/editar con un método POST o PUT.  En el backend, el controlador editarSuperheroeController debe actualizar los datos del superhéroe en la base de datos. Tras editarlo, redirige al dashboard para ver los cambios reflejados.
25 Integración de la Función de Eliminar Superhéroe: Configura el botón de eliminar en dashboard.ejs para que realice una solicitud DELETE al endpoint correspondiente (/heroes/:id). En el backend, verifica que eliminarSuperheroeController reciba la solicitud y elimine el superhéroe de la base de datos. Tras eliminarlo, recarga la lista en el dashboard.
26 Refrescar el Dashboard Después de Cada Acción: Asegúrate de que, después de agregar, editar o eliminar un superhéroe, se redirija al usuario de nuevo al dashboard para ver los cambios.
27 Diseño de interfaz: Personalizar dashboard.ejs, addSuperhero.ejs, y editSuperhero.ejs para mejorar la experiencia de usuario.




// Crear un nuevo usuario 
    router.post('/', (req, res) => { 
    const nuevoUsuario = req.body;
    res.send(`Nuevo usuario creado con los datos: 
                ${JSON.stringify(nuevoUsuario)}`
        ); 
    }); 


// Actualizar un usuario por ID 
    router.put('/:id', (req, res) => { 
        const {id} = req.params; 
        const datos Actualizados = req.body; 
        res.send(`Usuario con ID: ${id} ha sido actualizado con los datos: 
                    ${JSON.stringify(datos Actualizados)}`
        ); 
    }); 
 
// Eliminar un usuario por ID 
    router.delete('/:id', (req, res) => { 
        const {id} = req.params; 
        res.send(`Usuario con ID: ${id} ha sido eliminado`);
    }); 
 