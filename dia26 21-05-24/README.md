# Javascript 2 (Continuación)

## Más tipos de Datos

- Undefined: valor que se asigna a una variable que no tiene valor (se declara pero no se le asigno un valor). Se declara, pero no tiene valor.
```js

```

- Null: Valor que se le asigna a una variable para indicar que no tiene valor intencionalmente. 
```js
let varNula="texto"; //string 
varNula=null; //Null
```

- NaN (Not a Number): Valor que obtenemos cuando se esperaba un número pero no lo es. 
```js
let noEsNumero=NaN //Not a Number 
```

- Empty (vacío): un string con valor vacío '' o "". 
```js
let vacio=""//un string empty
```

- Funciones: 
```js
let saludar = function () {  
    //aqui escribimos lo que queremos que haga la funcion, por ej:
    console.log("Hola a todos!")
}

```

- Fechas: 
```js
let hoy = new Date(); //Fecha que en realidad es un objeto
```



Podemos ver qué tipo de dato es una variable utilizando el operador `typeof` para que nos diga qué tipo de valor es. Agarramos las variables (Después del let) y las ponemos dentro del paréntesis y en verde he comentado lo que devuelve cada cosa. 

```js
    console.log(typeof noDefinido); //undefined
    console.log(typeof varNula); // object
    console.log(typeof noEsNumero); //number
    console.log(typeof vacio);//string
    console.log(typeof saludar); //function
    console.log(typeof hoy); //object 

```

## Consola (Chrome Developers Tool)
La consola nos permite imprimir mensajes y depurar nuestro código. Podemos imprimir mensajes de diferentes tipos. 
También nos permite filtrar los mensajes según su tipo. 


```js
//Mensajes informativos
console.log("Este es un mensaje informativo")

//Mensajes de error
console.error ("Este es un mensaje de error")

//Mensaje de advertencia
console.warn ("Este es un mensaje de advertencia")

//Mensaje de información
console.info ("Este es un mensaje informativo")

//Mensaje de depuración (no verbose)
console.debug ("Este es un mensaje informativo de depuración")

//Tabla de datos
console.table ("Manzana", "Banana", "Cerezas")
```

## Operadores

Son símbolos que nos permiten hacer operaciones con JS. Hay distintos tipos, por ejemplo, tenemos operadores aritméticos (matemática), de asignación, de comparación, lógica, etc. 

### Operadores Aritméticos
Operaciones matemáticas

- Suma (+): Suma 2 valores
- Resta (-): Resta 2 valores
- Multiplicación (*): multiplica valores
- División (/): divide valores 
- Módulo (%): Devuelve el resto de la división de 2 valores.
        4/2= 2, 0 --> si divido 4 entre 2 me da 2, y de resto 0.
        5/2= 2, 1 --> si divido 5 entre 2 me da 2, y de resto 1. 2x2=4 ; 4+1=5
- Incremento (++): incremento en 1 el valor de la variable. 
- Decremento (--): Decrementa en 1 el valor de la variable. 

```js
let a = 10;
let b = 5;

let suma= a + b; //15
let resta= a - b; //5
let multiplicación = a * b; //50
let division = a / b; //2
let modulo = a % b;//0
let incremento = a++;//11
let decremento = b--; //4


//otro ejemplo
let miNumero=5; //si miNumero es 5
miNumero++ // miNumero++ es igual a 6


```

Un ejemplo de módulo muy común es para saber si un número es par o impar. 
Si el resto de la división de un número por 2 es igual a 0 es PAR. 
Si el resto de la división de un número por 2 es igual a 1 es IMPAR. 


```js
let numero =10;
let esPar = (numero % 2 === 0); // es par
let esImpar = (numero % 2 === 1); // es impar 

let esPar = (numero % 2 === 0); // es true --> los 3 iguales === preguntan si la parte de la derecha es igual a la de la izquierda. Si es igual es true (PAR)
let esImpar = (numero % 2 === 1); // es false --> Si es no es igual es false (PAR)



```

## Operadores Comparativos

Se utilizan para comparar 2 valores en JS. 
La respuesta siempre es true / false. 
- Igual `==`: Comparo si 2 valores son iguales. 
- Estrictamente Igual `===`: Compara si 2 valores son iguales y del mismo tipo. 
- Es distinto `!=`: compara si 2 valores son distintos. 
- Es distinto estricto: `!==`: Compara si 2 valores son distinto valor o tipo. 
- Mayor que `>`: Compara si un valor es mayor a otro.
- Menor que `<`: Compara si un valor es menor que otro. 
- Mayor o igual que `>=`: Compara si un valor es mayor o igual a otro.
- Menor o igual que `<=`: Compara si un valor es menor o igual a otro. 


```js

let a = 5
let b = "5";

let num1= 10;
let num2= 5

num1 == num2; // true
num1 === num2; // false, porque dan el mismo valor pero no son el mismo tipo, uno es número y otro es texto. 

//otro ejemplo

4=="4" //es true porque tienen el mismo valor (==)
4==="4" // es false porque tienen el mismo valor pero no el mismo tipo. 


let esIgual =               (a      ==      b   );    //true
let estrictamenteIgual =    (a      ===     b   );    //false 
let esDistinto =            (a      !=      b   );    //true
let estrictamenteDistinto=  (a      !==     b   );    //true 
let esMayor =               (num1   >       num2);    //true
let esMenor =               (num1   <       num2);    //false 


```

## FUNCIONES 

Una función es un bloque de código o algoritmo que realiza una operación específica. Puede recibir valores de entrada, y devolver un único resultado. 

```js
//cómo se llama la función? SALUDAR ; entre (paréntesis) puedo recibir instrucciones y {entre las llaves} el código que va a realizar mi función. 


//funcion       nombre de la función        (recibimos información  )
function        Saludar                     (nombre                 ) { 
//procesamos la información
console.log("hola a todos!!, mi nombre es" + nombre)
}

// Una vez está la función creada la podemos usar las veces que queramos: Llamamos a la función

//nombre de la función  //misma cantidad de elementos que tiene la función
Saludar                 ("Juancito", 18)
Saludar                 ("María", 20, "italiana")
Saludar                 ("Pedro", 50, "francesa")


```
## PASOS

```js

//Crear función: la función es Saludar 
function Saludar 

//Le doy instrucciones entre (  ), le doy un valor. ENVIO DATOS. 
(nombre, edad, nacionalidad) 

//código que va a realizar mi función rodeado entre {  }. RECIBO DATOS. 
{

console.log("hola a todos!!, mi nombre es" + nombre) // (texto + instrucción de arriba)
console.log("mi edad es" + edad) //(texto + instrucción de arriba)
console.log("mi nacionalidad es" + nacionalidad) //(texto + instrucción de arriba)
}

//Llamar a la función múltiples veces, cada vez que quiera imprimirla en pantalla

Saludar ("Juan", 18, "española")
Saludar ("María", 20, "italiana")
Saludar ("Pedro", 50, "francesa")


```
OTRO EJEMPLO

```js
function Camarero (cosa, lugar) {

"Llevar este ___cosa____ a ____lugar_____"


}

Camarero ("plato", "la cocina");
Camarero ("copa", "la sala");



```
1. Primero tengo que crear una función que se llama "Camarero". 
function Camarero () {

}

2. Después escribo la acción que va a hacer:
function Camarero () {

    Llevar "esta cosa" a "este lugar"
}

En este punto la función se guarda pero no se ejecuta, no va a hacer nada. 

3. Como quiero llevar una cosa a un lugar, tengo que darle instrucciones a mi función.
function Camarero (cosa, lugar) {

    Llevar "esta cosa" a "este lugar"
}

4. Después para que funcione con múltiples opciones tengo que LLAMAR a mi función:

function Camarero (cosa, lugar) {

    Llevar "esta cosa" a "este lugar"
}

Camarero ("este plato", "la cocina")
Camarero ("este vaso",  "la mesa")
Camarero ("este cafe",  "la calle")


MISMO EJEMPLO SUMANDOLE UNA VARIABLE

```js
let propinas=0;

function Camarero (cosa, lugar) {

"Llevar este ___cosa____ a ____lugar_____"
propinas++

}

Camarero ("plato", "la cocina"); //1ra llamada
Camarero ("copa", "la sala"); //2da llamada

```
La función es la misma pero hemos añadido una variable de propinas. 
El procedimiento es el mismo lo que pasa que ahora cada vez que llamamos al Camarero no solo lleva lo que le dijimos sino que además aumenta la propina en 1 (++). 

Entonces como sabemos el codigo se va leyendo de arriba a abajo. Cuando empieza a leer, la propina vale 0. 

```js
let propinas=0;

function Camarero (cosa, lugar) {

"Llevar este ___cosa____ a ____lugar_____"
propinas++ // en este momento la propina vale 0

}
Camarero (); //no hemos llamado aún
console.log()


```
Vale 0 porque no hemos llamado aún a la función. Cuando llamamos a la primera función,-- Camarero ("plato", "la cocina"); -- volvemos otra vez hacia arriba a leer la función.

```js
let propinas=0;

function Camarero (cosa, lugar) {

"Llevar este ___cosa____ a ____lugar_____"
propinas++ 

}

Camarero ("plato", "la cocina"); //1ra llamada y sube arriba
console.log(propinas) // tras la primera llamada esta propina vale 1 


```
en este punto la propina ya valdrá 1EURO, porque la hemos llamado. 

Cuando llamamos a la segunda función, volvemos de nuevo al código QUE YA VALE 1 EURO, entonces la propina se suma 1 y sería 2 EUROS. 

```js
let propinas=0;

function Camarero (cosa, lugar) {

"Llevar este ___cosa____ a ____lugar_____"
propinas++ 

}

Camarero ("plato", "la cocina"); //1ra llamada
Camarero ("copa", "la sala"); //2da llamada
console.log(propinas) //tras la primera llamada y la segunda llamada, esta propina ya vale 2 

```

Básicamente cada vez que llamamos a la función Camarero, volvemos hacia arriba, ejecutamos la función  y cuando termina sigue el código donde se quedó. Entonces un mismo console.log(propinas) vale 0, 1 y 2, según vamos leyendo hacia abajo. 