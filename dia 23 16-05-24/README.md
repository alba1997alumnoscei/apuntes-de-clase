# Grid 
- Es un sistema para crear y organizar nuestro layout.
- No es opuesto a flex ni a float (no lo hemos visto ni lo vamos a ver, es muy antiguo).
- Se puede combinar entre ellos. 
- Grid: para trabajar con muchas filas y columnas; Flex: para trabajar con los divs uno a uno.

Grid es un sistema de maquetación bidimensional (eje X y eje Y) que permite desarrollar interfaces (layout) con el formato de tablas.
Se compone de filas, columnas y obviamente celdas. Se pueden anidar dentro de otros, es decir, dentro de una celda puedo poner otro grid. 
La utilidad es poder crear layouts complejos con muy pocas líneas de código. 

## Implementación 

Uso de reglas en el container 

```css

/*creamos un grid de 3 columnas x 3 filas*/
.container {
    display: grid; /*inicializar el display (el grid)*/
    grid-template-columns:100px 100px 100px;
    grid-template-rows: 100px 100px ;
}

```

Uso de reglas en el los elementos 

```css


  .item-1 {
            grid-column-start: 1 ;
            grid-column-end: 4 ;
            grid-row-start: 1;
            grid-row-end: 2;
        }

```

Se pueden invertir el start y el end de los selectores y funcionará de la misma manera. 

```css


  .item-1 {
            grid-column-start: 1 ;
            grid-column-end: 4 ;
            grid-row-start: 1;
            grid-row-end: 2;
        }

```
Podemos utilizar valores negativos para seleccionar elementos desde el final del grid: 

```css


  .item-1 {
            grid-column-start: 4 ;
            grid-column-end: -1 ;
            grid-row-start: 2;
            grid-row-end: -1;
        }

```

Podemos utilizar la palabra "span" para indicar cuántas columnas o filas queremos que ocupe un item. Por ejemplo, si quiero que un elemento se expanda 3 columnas, vamos a realizar un span de 4. 

```css


  .item-1 {
            grid-column-start: 1 ;
            grid-column-end: span 2; /*expandir o ampliar mi baja un bloque más*/ /*basicamente: span 2 = ocupa 2 bloques; span 3=ocupa 3 bloques*/;
            grid-row-start: 1;
            grid-row-end: span 3; /*ampliar mi caja 2 bloques más*/ /*basicamente: span 2 = ocupa 2 bloques; span 3=ocupa 3 bloques*/
        }

```

Se puede utilizar "span" para correr los elementos desde el punto en el que se encuentre. Teniendo .item-1 podemos hacer que .item-2 sea un bloque de 2x2 con el siguiente codigo: 

```css


   .item-2 {
            grid-column: span 2; /*desde donde estás, expandete 2 columnas*/
            grid-row: span 2;/*desde donde estás, expandete 2 filas*/

        }
```

Podemos utilizar una sintaxis más corta de la siguiente manera:

```css


   .item-2 {
            grid-column: 1/3; /*desde la columna 1 a la 3*/
            grid-row: 2/5; /*desde la fila 2 hasta la 5 */
        }
```

Podemos utilizar otra sintaxis más corta aún que es de una sola línea:

```css


   .item-2 {
            /*row-start / col-start / row-end / col-end */
            grid-area: 1/ 1 / 1 / 4;
        }
```

Si agregamos más bloque en nuestro grid de los que caben, se crearán en una nueva fila. Esta fila no tendrá el tamaño de nuestro grid-template y se llaman "grids implícitas". Podemos utilizar "grid-auto-rows: 100px" para definir el nuevo tamaño de nuestras celdas. Y esto se completa en el container. 


```css

/*creamos un grid de 3 columnas x 3 filas*/
.container {
    display: grid; /*inicializar el display (el grid)*/
    grid-template-columns:100px 100px 100px;
    grid-template-rows: 100px 100px ;

    grid-auto-rows: 150px; /*para nuevas celdas*/ 
    grid-auto-columns: 200px; 
}

```
Podemos definir si queremos que se agreguen nuevas filas o columnas cuando hay un overflow de bloques, con "grid-auto-flow"

```css

/*creamos un grid de 3 columnas x 3 filas*/
.container {
    display: grid; /*inicializar el display (el grid)*/
    grid-template-columns:100px 100px 100px;
    grid-template-rows: 100px 100px ;

    grid-auto-flow: column; /*que los nuevos elementos se me agreguen como columnas*/
    grid-auto-rows: 150px; /*para nuevas celdas*/ 
    grid-auto-columns: 200px; 
}

```

Las celdas en grid-template pueden marcarse en px, %, em, rem pero hay un valor especial llamado FR (Fractional Unit).
Este valor nos permite fraccionar el tamaño disponible. 

Por ejemplo si tenemos 3 columnas y definimos que la primera sea del tamaño de 1fr, la segunda 2fr y la tercera 1fr. Esto hará que la segunda columna ocupe el doble de espacio de las otras 2.  

```css
.container {
    display: grid; 
      grid-template-columns: 1fr 2fr 3fr 1fr; 
      /*en total hay 7 fracciones y 4 columnas: primera columna ocupa 1/7, la segunda 2/7 la tercera 3/7 y la cuarta 1/7*/
    grid-template-rows: 100px 100px ;

    
}

```

Existe la propiedad minmax () nos permite definir un tamaño mínimo y máximo para las columnas y filas: 

```css
/*minmax(valorMinimo, valorMaximo)*/
.container {
    display: grid; 
    /*columna 1 y 2 tienen un minimo de 100px cuando lo achique, y máximo fracciona uno, la 3ra directamente fracciona uno, y no tiene ningún mínimo o máximo*/
    grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) 1fr;  
      
    grid-template-rows: 100px 100px ;

    
}

```

Existe otra propiedad llamada repeat () que nos permite repetir un número de veces un tañao de columna o fila. 

```css

.container {
    display: grid; 
    grid-template-columns: repeat (8x 1fr) ; /*es lo mismo que poner 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr */
          
}
```

Podemos nombrar las celdas utilizando "grid-template-areas" y asignar un nombre a cada celda vacía. 

```css

.container {
    display: grid; 
    grid-template-columns:repeat (3, 1fr);
    grid-template-rows: repeat (3, 100px) ;
    grid-gap: 10px;
    grid-template-areas:
    "col1 col2 col3"
    "col1 col2 col3"
    "col1 col2 col3"
          
}
```
y además a cada caja le debemos decir qué espacio ocupar: 

```css
.item-1 {
        
            grid-area: header;
        }

.item-2 {
       
            grid-area: footer;
        }


```

Podemos utilizar las reglas justify-items y align-items para alinear los elementos dentro de sus celdas. Sus opciones posibles son: start, end, center, stretch. 
Por defecto están en stretch. 
```css
.container {
    display: grid; 
    grid-template-columns:repeat (3, 1fr);
    grid-template-rows: repeat (3, 100px) ;
    justify-items: start;
    align-items: end; 
          
}
```