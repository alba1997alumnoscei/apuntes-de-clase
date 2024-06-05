# Objeto

Una colección de propiedades y todas tienen sus respectivos nombres (claves) y valores. Sus valores pueden ser de todo tipo: datos, variables, funciones, otros objetos, etc. En el caso de las funciones, a estas propiedades las llamamos métodos. 

```js
const miObjeto = {
    propiedad1 : "valor1",
    propiedad2: 2,
    propiedad3: false,
    propiedad4: function sumar (num1, num2) { //propiedad4 es una propiedad más pero como es una función la llamamos método. 
                return num1+num2;},
//Entonces para simplificar: llamamos "sumar" a "propiedad4" 
    metodoSumar: function (num1, num2) {
                return num1+num2;},
    
    metodo2: function ( ) { }, //despues de cada función va una coma, para separar funciones. 

}

```
Normalmente para leer datos utilizamos:

```js
console.log (coche.kmsRecorridos) //nombre del objeto "coche" + variable que quiere leer "kmsRecorridos"

```



Podemos acceder a las propiedades del objeto desde sus métodos usando la palabra clave `this`. El uso de `this` hace referencia a ÉL mismo para acceder a sus valores. 
Con mis palabras: nosotros tenemos un objeto que se llama COCHE. Y dentro del coche si yo quiero poner una variable, y me quiero referir al objeto, pues en lugar de poner coche.kmsRecorridos pues pongo this.kmsRecorridos. 

```js
const coche = {

    marca: "Tesla",
    modelo: "ModelX",
    kmsRecorridos: 7777,
    color: "Negro",

    //métodos
    encender: function () {
        //uso de "this" para acceder a los kms actuales 
        const kms = this.kmsRecorridos; // 7777
        console.log (`Arrancando el coche, con ${kms} kms`);




    },
    buscarme: function (positionGPS) {
        console.log (`Manejar automáticamente hasta la posición de GPS ${positionGPS}`)
    }


}

```
Entonces una vez que tenemos un objeto con sus propiedades y sus métodos quiero mostrar como leo estos valores, como actualizo los kms, cómo llamo a los métodos. 

```js
//leer 1 de las propiedades, por ejemplo: kms recorridos: objeto.propiedad que quiero leer. Del valor que obtengo 7777, este se almacena en una variable nueva que se llama "kilómetros"


//variable creada   =   objeto.propiedadquequieroleer   //variable que obtengo. 
const kilometros    =   coche.kmsRecorridos;            //7777 

// Una vez que tengo la variable creada, ahora quiero actualizar el dato:  Escribir nuevos kms recorridos:
coche.kmsRecorridos = kilometros + 5 ; //kmsRecorridos = 7782

// pintar el tesla de rojo
coche.color = "rojo"; 

//para ejecutar métodos tengo que ponerle () después

//encender el coche: 
coche.encender(); 

//solicitar que me venga a buscara mi casa, que tiene esas coordenadas. 
coche.buscarme("658947455., -0.33515544"); 

```
Eneontces ahora tenemos un método que le hemos dicho que nos venga a buscar a esa posición GPS. Entonces esa posición la recibió la función buscarme que teniamos escrito mas arriba (la pongo aqui abajo para ubicar) y dice "Manejar automáticamente hasta la posición de GPS. 

```js
    buscarme: function (positionGPS) {
        console.log (`Manejar automáticamente hasta la posición de GPS ${positionGPS}`)
    }
```