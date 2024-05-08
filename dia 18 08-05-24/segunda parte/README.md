# Transiciones en CSS!

## Qué son 

Son una forma de cambiar los valores de las propiedades de un elementode manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numéricos o de color. Por ejemplo pueden animar el cambio de tamaño (size, fontside...), su color, su color de fondo o su opacidad. 




![Imagen] (https://i.pinimg.com/236x/26/24/9a/26249a78777f6e3527d959ed4399dc1e.jpg)

## Dónde lo podemos utilizar 

[Manual] (https://i.pinimg.com/236x/26/24/9a/26249a78777f6e3527d959ed4399dc1e.jpg)

Sin embargo, una forma rápida de identificar propiedades transcicionables es buscar propiedades que acepten valores númericos o de color:

Propiedades numéricas:
- width
- height 
- font-size
- padding
- margin
- border-width
- opacity
- transform (prop como scale, rotate, translate, etc) 

Propiedades de color:
- color
- background-color
- border-color
- box-shadow
- text-shadow

## Cómo se define una transición 

Las transiciones se definen mediante la propiedad `transition` y se pueden personalizar con las siguientes subpropiedades: 
- `transition-property`: especifica la propiedad que se animará.
- `transition-duration`: especifica la duración de la animación. 
- `transition-timing-function`: especifica la función de temporadización de la animación. 
- `transition-delay`: especifica el retraso antes de comenzar la animación. 


```html
<div>

    djfñals
</div>
```

```css
div{/*segmentar la transición el distintas reglas (no recomendada)*/
    transition-property: font-size;
    transition-duration:2s;
    transition-delay: 2s


    /*Unificamos cada transición en una sola regla*/
    /*orden: transition: <property> <duration> <timing-function> <delay>*/
    
    transition: font-size 4s ease-in-out 2s}
    
```

## Transition Properties
- all: todas las propiedades
- none: ninguna propiedad
- property: una o más separadas con coma

```css
div{/*segmentar la transición el distintas reglas (no recomendada)*/
    transition: all 2s;
    transition: none;
    transition: width 2s, height 3s; background-color 2s; 
    }
    
```
## Transition Duration
>`Duration`: Tiempo que dura la transición en completarse

> `Delay`: Tiempo que retarda la animación antes de comenzar 

## Timing Function
- `Ease`: velocidad lenta - rápida - lenta (por defecto)
- `linear`: velocidad constante
- `ease-in`: velocidad lenta - luego rápida
- `ease-out`: velocidad rápida - luego lenta
- `ease-in-out`: velocidad lenta - rápida - lenta (mix entre ease-in y ease-out pero un poco más brusca)
- `cubic-bezier`: función de timing personalizada

```css
.box{
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s; height: 2s; background-color: 2s;
}

.box:hover{
    width: 100px;
    height: 100px;
    background-color: blue;
   
}



```