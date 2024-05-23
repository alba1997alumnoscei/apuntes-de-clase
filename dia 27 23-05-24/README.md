
## FUNCIONES 

Una función es un bloque de código o algoritmo que realiza una operación específica. Puede recibir valores de entrada (`parámetros`), y devolver un único resultado. 

Los valores que se pasan a la función cuando se invoca se los llama: `argumentos`. 

```js
/**
 * Función que saluda al usuario y le indica su nombre y edad. 
 * @param {string} nombre - Nombre del usuario 
 * @param {number} edad - La edad del usuario 
 * 
 * @return {void} - no devuelve nada 
 * 
 */

function Saludar (nombre, edad) {

// 1. creo una variable
    let respuesta; 

// 2. actualizo la variable
    respuesta="Hola, mi nombre es" + nombre + "y mi edad es" + edad;

//3. devuelvo la variable actualizada
    return respuesta; 

}

let mensaje; 

// 4. Llamar a la función múltiples veces con distintos argumentos (con distintos tipos de varlores)
mensaje = Saludar ("Juan", 18) // "Juan" y 18
mensaje = Saludar ("Pepi", "21") // "Pepi" y "21"
mensaje = Saludar ("Luisa", "treinta y uno"); // "María" y "treinta y uno"

//si arriba tuviera una variable que se llame: let edad=33; también podría ponerlo dentro de los argumentos: 
mensaje = Saludar ("Juan", edad) // "Juan" y 33

console.log(mensaje);
alert(mensaje);

```

## Condicionales

Son estructuras de control que nos permite tomar decisiones. Si se cumple la condición, se ejecuta un bloque de código y si no se cumple se ejecuta otro bloque de código. 

- El uso de "else" es opcional
- Se pueden añadir condicionales; podemos anidar condicionales dentro de otros. 
- Dentro de condicionales se pueden añadir funciones. 

EJEMPLO 1
```js
let numero=7

// quiero saber si el módulo (el resto de la división) de 2 de un número es PAR o IMPAR 

if (numero % 2 ===0) { // si el resto es PAR
    console.log("El número es PAR");

} else {
    console.log("El número es IMPAR")

}

```

EJEMPLO 2
```js
let edad=13

// quiero saber si es mayor de edad (18). 

if (edad >= 18){ //si la edad es mayor o igual a 18
    console.log("Es mayor de edad") //si es mayor de edad = TRUE 
} else { //si no se cumple la condición de arriba 
    console.log("No es mayor de edad") //no es mayor de edad = FALSE 
}
    



```

## Uso de Bucles
Los bucles permiten repetir un código varias veces. En JS tenemos 3 tipos de bucles: 

- `for`: se utiliza cuando sabemos cuántas veces queremos que se repita algo. 
- `while`:
- `do-while`:


```js



```