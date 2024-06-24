# Contenido asíncrono
- Sincronía
- Asincronía
- Funciones callbacks
- Promesas
- Async/await 

## Síncrono vs. Asíncrono
síncrono: hasta que no termine no devuelve el paso. ESPERA
asíncrono: no espera, obtiene info sin esperar. NO ESPERA

## Funciones Callbacks 
Mandar una función a una función. 
Cuando finalices lo que vas a demorar, haz esta otra función. Al finalizar de hacer lo quete llevaba tiempo, ejectuar la función de callback. 

## Promesas 
Lo mismo que las callbacks pero más agradable. (Desventaja de callbacks, ejemplo de Goku: `callback hell`)

se usa `.then` y `.catch`

## Fetch

## Async/Await (uso para proyecto final, o proyectos propios)
La desventaja de las promesas es que se vuelven difíciles de entender cuando se anidan. Por eso se han creado las funciones `async` y `await`. 
Esto es para traer datos. 


MANERA 1: normal 
```js
//con la palabra async, decimos que esta función va a ser asíncrona. Es decir, que no la vamos a esperar.

async function traerDatos () {

    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //si esto se va a demorar, ponemos un await dentro.
    const datos = await response.json(); //este metodo convierte mis datos de JSON a JS y como se demora también, le pongo un await

    console.log(datos);
    console.log(datos [0].name) //traer el nombre del primer usuario
}

traerDatos()

```

MANERA 2: con try y catch 

```js
//con la palabra async, decimos que esta función va a ser asíncrona. Es decir, que no la vamos a esperar.

async function traerDatos () {
    try{

    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 

    const datos = await response.json(); 

    console.log(datos);
    console.log(datos [0].name) 
} catch (error) {
    console.error("tuve un error:", error);
}
   
}

traerDatos(); //cuando pongo esto en la console 

```

MANERA 3: con una variable

```js
//con la palabra async, decimos que esta función va a ser asíncrona. Es decir, que no la vamos a esperar.

let listaUsuarios;

async function traerDatos () {
    try{

    const response = await fetch("https://jsonplaceholder.typicode.com/users"); 

    const datos = await response.json(); 

    console.log(datos);
    console.log(datos [0].name) 
} catch (error) {
    console.error("tuve un error:", error);
}
   
}

listaUsuarios=traerDatos(); //cuando pongo esto en la console 

```

Ejemplo del restaurante:
```js
let plato="Ensalada";

console.log("Paso 1: solicitar a un camarero el plato", plato);

console.log ("Paso 2: el camarero va a buscar el plato de comida");

buscarPlato();

async function buscarPlato(){ 
    try{
        const responseJson = await fetch("http://restaurante.com/traerPlato");
        const datosJs = await responseJson.json(); 


        //qué hacer con los datos...
        console.log("Paso 4: el camarero lleva el plato de:", datosJs.plato)
        console.log("Paso 5: el comensal se come su comida")

    } catch (error){
        console.log("Mi error fue:", error)
    }
}
console.log("Paso 3: La persona se toma el vaso de agua")

```

Ejercicio: Obtener los 10 usuarios de jsonPlaceholder y mostrarlos en pantalla. 

VER INDEX DIA 40




