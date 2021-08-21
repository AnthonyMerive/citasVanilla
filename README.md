# citasVanilla

- Funcionamiento:

Se inicia en login, si se inicia por primera vez, el localstorage estara vacio, por lo cual solicitara al ingresar cualquier usuario y contraseña que se registre,
lo rediccionara a la pagina de registro, en registro se creara un usuario y contraseña, el cual sera guardado como un array en local storage, luego sera redireccionado
a login para inicio de sesion, en login se uso un filter con el nombre del usuario para buscar en el arreglo del localstorage si hay un usuario con ese nombre, luego
se valida la contraseña, de ser correcto redirecciona a el registro de citas, alli al agregar citas se visualizan en agenda y se guardan en localsotrage, si se busca
el nombre de la persona se conseguira el registro de cita y este podria ser borrado si se le da al boton cancelar cita, al cancelar se usa un splice para borrar ese objeto del 
arreglo citas, luego se debe subir la nueva informacion al localstorage para que se actualice y asi pueda visualizarse en agenda que esta fue borrada, para conservar las citas
en cada aspecto de creacion de elemenentos del arreglo, se valida primero lo guardado en localStorage, asi, si recargamos la pagina no comienza nuevamente a cargar nuevos
elementos borrando los anteriores, igual se hizo con las contraseñas y usuarios, se validan antes de cualquier modificacion para asi, no se borren al agregar nuevos registros

-queda pendiente:

personalizar cada usuario, que cada usuario entre a la interfaz y agregue arreglos que solo el pueda ver
