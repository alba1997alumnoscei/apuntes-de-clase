# Fecha Date () 

El objeto Date () devuelve una fecha específica. 

```js
let hoy = new Date(); //devuelve la fecha de hoy 

//SUMAR EL DÍA
const sumarUnDia = new Date (hoy);

hoy.getDate(); //10 (hoy es día 10/06/2024)
hoy.getDate() + 1; //11 (hoy es día 11/06/2024)

//ACTUALIZAR EL DIA 
sumarUnDia.setDate (hoy.getDate() + 1); // la fecha de mañana
console.log (sumarUnDia); 


//RESTAR 1 DIA
const restarUnDia = new Date(hoy);
restarUnDia.setDate(hoy.getDate () -1); // la fecha de ayer 

//RESTAR 2 HORAS
const restar2Horas = new Date (hoy);
restar2Horas.setHours(hoy.getHours () -2); //hace 2 horas 


//EJECUTAR UNA FUNCIÓN CON FECHAS 
function cambiarMinutos (fecha, minutos){
    const nuevaFecha = new Date (fecha);
    nuevaFecha.setMinutes(fecha.getMinutes () + minutos);
    return nuevaFecha;
}

const hoy = new Date();
const dentrode5minutos = cambiarMinutos (fecha, 5);
const hace15minutos = cambiarMinutos (fecha, -15)

```

# Math.random () entre 2 valores

Math.random () devuelve un número decimal entre 0 y 1. Ej: 0.284284698552

El siguiente ejemplo es para que de un valor entre un mínimo y un máximo. 

```js
function numberoRandomEntre(min,max){
    return Math.floor(Math.random () * (max-min +1) + min);
}

const min=2;
const max=15;
const numeroAleatorio = numeroRandomEntre (min, max); 
console.log(`Numero entre ${min} y ${max} es ${numeroAleatorio}`);


```

# BOM y Objeto Window

El Bom representa el navegador (chrome, safari, firefox, Brave, Edge, etc).
Window es el objeto prinicipal del BOM, y contiene métodos que nos permite interactuar con él. 

```js
//obtener la altura y el ancho de la ventana

const altrua = window.innerHeight;
const anchura = window.innerWidth; 

//si lo imprimo en pantalla con un console.log y le pregunto por: "altura" me devuelve "altura: 883px" y si pongo "anchura" me devuelve "anchura: 995px". 


//SI QUIERO OBTENER LA URL ACTUAL: si hago console.log me la devuelve 
const url = window.location.href;



//Redirigir a otra página

window.location.href = "https://google.com"; //la parte .href es una propiedad

//Recargar la página: como apretar F5
window.location.reload()                    //la parte .reload () es un método

//Historial de navegación 
window.history.back();
window.history.forward();

//Abrir una ventana nueva 

const nuevaVentana = window.open("https://google.com", "_blank", "width=600, height=400");
nuevaVentana.close(); //cuando haga un console.log debería cerrar la nueva ventana que he abierto antes. 

// Ejecutar una función cada vez que redimensiono mi pantalla 
window.addEventListener("resize", () => {
    console.log("Cambié el ancho de mi vnetana", anchura);
    if (anchura > 650) { 
        console.log ("estoy en el desktop");
         } else {
            console.log("estoy en el mobile");
         }
    
    }); 

//Para cuando quiero poner el script en el HEAD y queremos que primero lea el html y luego el script. 
window.addEventListerner("Load", () => {
    //comienza tu codigo. 
    console.log("La pagina se ha cargado")
})



```
# JSON

Es un SSSSTTTTTTTIIIIIIIINNNNNNNNNNNGGGGGGGG! `string` 

Es una representación de datos en forma de texto (String) que sigue una sintaxis específica. Es un formato que facilita la comunicación entre back-end y front-end, servidores, y es fácil de leer para el usuario, y fácil de crear para la máquina. 

```javascript
const alumno ={
    edad: 25,
    nombre: "Pepito",
    saludar: () => {alert("HOLAAAA");}
}

//--------------- convertir un objeto JS en string de JSON ---------------
const jsonString2= JSON.stringify(alumno);
console.log(jsonString2); 



//esto no existe, es solo para que lo veamos
{
    "edad": 25,
    "nombre": "Pepito",
}

//string de JSON 
const jsonString=`{"edad": 25, "nombre":"Pepito"}`


//--------------- convertir un string de JSON a un objeto de JS ---------------
const objeto = JSON.parse(jsonString);
console.log(objeto); //todo el objeto 
console.log(objeto.edad); //25


```
