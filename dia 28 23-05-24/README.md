## Math 

El objeto `math` nos proporciona propiedades y métodos para realizar operaciones. Los más comunes son: 

- Math.random (): Devuelve un número pseudo-aleatorio entre 0 y 1. 
- Math.round (): Devuelve el valor de un número redondeado al entero más cercano. Ej: 0.9 pues sería 1.
- Math.ceil (): Redondear para arriba. 0.000001 sería 1. 
- Math.flor (): Redondear para abjo. 0.00001 sería 0. 
- Math. abs (): devuelve el valor absoluto de un número.

```js

let numero: 3.1416

let numeroRedondeadoEntero = Math.round (numero); //3
let numeroRedondeadoParaArriba = Math.ceil (numero); //4

//tenemos el numero 3.1416 y lo queremos hacer en un número con dos decimales: 3.14
//procedimiento 
numero*100 //314.16 
Math.round (numero*100) // 314
Math.round (numero*100)/100; //3.14
//redondeo mi numero a dos dígitos 
let numeroDeDosDigitos = Math.round (numero*100)/100; //3.14

```
## Interpolación de variables (Template Strings)

Es una forma de concatenar (+) strings (textos) y variables de forma legible. Se utiliza el "acento grave" (backtick) para delimitar el string y ${} para insertar la variable. 

Entre los beneficios tenemos:
- Lectura mucho más sencilla. 
- Uso de variables en nuestros strings.
- Posibilidad de escribir múltiples líneas de texto. 
- Realizar operaciones matemáticas dentor de un string. {}

```js
//metodo tradicional
let nombre = "Juan";
let edad = 30;
let contenido = `<div class="caja">
                    <h1>Hola a todos!, mi nombre es ${nombre} <h1>
                </div>`;

let mensaje =`Hola, me llamo ${nombre} y voy a cumplir ${edad+1} años!`;
```
