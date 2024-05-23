## Javascript
Es un lenguaje de programación de alto nivel interpretado y orientado a objetos que se utiliza para crear contenido dinámico e interactivo en sitios web.

Lenguaje de alto nivel:
- Está diseñado para ser fácil de leer y escribir para los humanos. 
Ej: console.log ("hola") en la consola quiero registrar un mensaje de hola, que es más fácil de leer para los humanos. 

Interpretado:
- se ejecuta línea por línea en tiempo real. No necesita ser compilado. 

```js
let numero=1;
console.log("Instrucción1 y número vale: ", numero); //imprime: Instrucción1 y número vale: 1

let numero= numero+1;
console.log("Instrucción1 y número vale: ", numero); //imprime: Instrucción1 y número vale: 2 

//es decir: let numero = 1 = numero es igual a 1. Y en la parte del console.log donde dice "numero" es igual a 1, por eso imprime eso. 

```

Orientado a Objetos:

JS utiliza un paradigma (OOP = Orientive Objetive Program), lo que significa que organiza el código en "objetos". Un objeto es una colección de propiedades y métodos que se pueden leer y manipular. 

un objeto puede ser un perro y puede tener propiedades (color= blanco, negro; nombre = Lasy) y luego tiene metodos que son funcionalidades que tiene el perro (ladrar = hacer un ruido fuerte; Ladrar = mover la cola demostrando su felicidad). 
Crear un objeto para tener ciertas propiedades y métodos. 
una propiedad es un valor: vale algo: edad, nombre, etc
métodos: pedazos de codigo con funciones, vamos a decirle que haga cosas. Cuando haga clic en un botón que haga X cosa. 

```js
let alumno = { //objeto 
    nombre: "Lucía", //propiedad
    edad: 35, //propiedad 
    saludar: function () { //método (saludar) + funcionalidad 
        console.log ("Hola, mi nombre es Lucía") //esto es lo que va a hacer Lucía ; entre el paréntesis puedo poner un mensaje o una funcionalidad.

    }
}

// quiero imprimir el nombre de mi alumno.
Console.log(alumno.nombre); //Lucía
console.log ("Me llamo", alumno.nombre, "y tengo", alumno.edad, "años");
//si quiero que el alumno salude:
alumno.saludar(): 
//para ejecutar un metodo se requiere (paréntesis), en las variables no se requiere. 


```

## Dónde probar/codificar JS

1. En el navegador: (en inspeccionar como habitualmente hacemos. En la parte de "Console", ahí se procesa nuestro código a tiempo real.)
- En la pestaña de consola escribiendo directamente. 
- Etiqueta de Script: `<script></script>` se hace al final del body pero dentro del body. 
- Se puede utilizar en un archivo .js externo y linkeado a nuestro HTML. Se hace igual que el readme.md o style.css pero con ".jss". Y el script se pone en lugar del head como en css por ejemplo, se pone al final, justo antes de donde empieza nuestro script. De esta manera:  <script src=".js/miweb.js"></script> y ya luego nuestro script. 
- con el button:

```js
<button onclick='
console.log("hola");'> haz click! </button>

```


- Se puede también codificar en sitios webs externos:
1. "playcode.io/javascript" 
2. "linangdata.com/javascript-tester"
3. "codepen.io"
4. "jsfiddie.net"

## Funcionalidades 
1. Manipulación del DOM (Document Object Model): agregar, modificar o eliminar elementos HTML y CSS. 
2. Procesar formularios: Verificar datos ingresados por el usuario y realizar formularios complejos de múltiples secciones. 
3. Manejo de animaciones: crear efectos visuales y animaciones en nuestra web. 
4. Manejo de eventos: responder a las acciones del usuario, como por ej: hacer click o desplazarse por la web. 
5. Comunicación asíncrona con servidores mediante AJAX/Fetch: enviar y recibir datos de un servidor sin tener que recargar la página. 

## Variables 
> Son como CAJAS que utilizamos para guardar información. Esta información puede ser un número, texto, una letra, una lista de cosas y muchos otros tipos más. Nos permiten almacenar datos y luego usarlos o modificarlos en diferentes partes de nuestro programa. 
> Definir una variable: Es como darle un nombre a esta caja con un rotulador para poder encontrarla más adelante. Tenemos un montón de cajas a cada una le voy a poner una cosa a las cajas, para poder identificarlas. Una vez que definimos una variable:
> Le vamos a poder asignar un valor = poner cosas dentro de la caja. Puede ser un número, lista, etc. 
> Usar la variable: Abrir la caja, y ver que hay dentro. Podemos ver las cosas y modificarlas. 

En JS las variables se declaran con la palabra `let` (se puede modificar) o `const` (no se puede modificar). Antes se definían con la palabra `var`, seguido del nombre de la variable y Opcionalmente un valor incial. 

```js
let nombre= "Juan"; //se puede modificar
let edad= 46; //se puede modificar 
const PI=3.14159; //no se puede modificar. Esto es porque son cosas que no quiero que cambien nunca. Y también va a ocupar menos espacio de memoria, va a estar más optimizado, ya que no va a cambiar. 

```

## Comentarios en JS

- Comentario simple: se utiliza `//` para comentar una sola línea de código. 
- Comentario simple en la misma línea: se puede agregar la `//` al final de una línea. 

```js
//este es un comentario de una sola línea
let nombre: "juan";
console.log ("imprimir nombre"); //comentario simple en la misma línea

``` 

- Comentario de Bloque: `/*...*/` para hacer comentarios de múltiples líneas. 
```js
/*soy un comentario
Multínea!
*/

``` 


- Comentario de Documentación: se utiliza `/**....*/` para iniciar un bloque de documentación. Este tipo de comentario se utiliza para funciones y clases. 
```js
/**
 * estos asteriscos se crean solos cuando le pincho al enter.
 * Ejemplo:
 * Esta es una función que suma 2 números. 
 * @param {number} a - el primer número: param=valor que necesita
 * @param {number} a - el segundo número: param=valor que necesita 
 * @return {number} - la suma de los 2 números: return=lo que la función devuelve
 * 
 **/ 

function sumar (a,b){
    return a+b;
}


``` 

## Tipos de datos 
- Números: enteros, decimales, positivos, negativos, etc. 
- Cadenas de Texto (strings): textos, palabras, frases, 1 letra. Va entre comillas simples '', dobles "" y backticks ``. 

```js
//PRIMITIVOS
let texto = "Hola Alumnos de CEI"
let textoConComillas= "I'm Tomi". 
let textoConComillasSimples= ' Hola estoy muy "bien" ' //si quiero escribir un texto entre comillas, tengo que usar las comillas contrarias, es decir, si quiero escribir ' "hola" la frase la pongo ' con estas comillas ' ' . Y viceversa. 
let texto = `Quiero comillas 'simples' y "dobles"`; //cuando en una misma frase quiero usar comillas simples y dobles. Esto en realidad se llama template String y es mucho más potente, ya veremos luego otras funciones

let numeros= 123; //numero
let numeros2="123" //texto, no puedo hacer calculos
numeros2= Number (numero2) //aqui convierto el texto en número 


let decimales= 22.30;
let negativo: -5;
const PI= 3.14159;
let miNumero = Number ("1234")
```


- Booleanos: verdadero o falso 
```js
//Booleanos 
let estaPrendido= false;
let isPrimary= true; 
let onActive= false

```



- Listas de cosas (Arrays): Se escribe con corchetes [] y separados con coma. 
```js
//REFERENCIALES: estamos apuntando hacia un lugar donde está esa caja. Estos pueden ser "Const" o "let". Los objetos con "const" son referencias a los objetos que hay dentro y estos objetos pueden cambiar, porque solo hacen referencia. Es como un puntero que apunta a un lugar. Yo cojo mis cajas y las pongo en el garaje (estoy apuntando hacia el garaje) y yo puedo cambiar mis cajas, porque estoy apuntando al garaje. 

//Podemos modificar los datos de arrays y objetos por más que sean constantes. En las primitivas no podemos modificar los datos. 

//arrays: es una referencia a un lugar. Da igual que sea una constante porque los arrays son referencialse. 
let alumnosDeDW = ["Nerea", "David", "Jenny", ...]; //en esta lista podría añadir: "Alba", "Eva", etc. Pero por ejemplo no podría poner: let alumnosDeDW = 25 
let edades = [25, 32, 18, 49]
let listaMixta = [1, "Juan", true] //booleano

const listaDeCompras = ["tomate", "lechuga", "patata"]



//COMO LEER ARRAYS:

//Ej de array: const listaDeCompras = ["tomate", "lechuga", "patata"] 
// Las listas empiezan con el indice 0 y se leen:

console.log(listaDeCompras [0]); //imprime tomate 
console.log(listaDeCompras [1]); //imprime lechuga 
console.log(listaDeCompras [2]); //imprime patata

console.log(listaDeCompras) [3]; //undefined, porque no hay más elementos en la lista. Solo hay 0-1-2. 
console.log(listaDeCompras) [-1]; //undefined, porque no hay más elementos en la lista. Solo hay 0-1-2. 



```


- Objetos (Objet): Colección de propiedades (características) y métodos (funcionalidades). Y se escriben con {llaves}. 
```js
//objetos: es una referencia a un lugar. Da igual que sea una constante porque los objetos son referencialse.
const alumnos= {
    nombre: "Mario";
    edad: 33;
    isRecibido: false,
    presentarProyecto: function () => { }, 
        isRecibido=true
    
};

//COMO LEER OBJETOS 

//Lectura de una variable: leyendola
console.log(estaPrendida);
let mi


//Lectura de una propiedad
console.log("La edad de Mario es: ", alumno.edad ); //imprime : "La edad de Mario es: 33"

//Lectura de un método

alumno.presentarProtecto();
console.log(); //esto quiere decir que imprime en pantalla 

```

## Cuándo usar ; o ,

En javascript: ";"
En objetos (listas o propiedades) ","

