# Unidades de Medida en CSS: px, %, em, rem

## PX
- un píxel es un puntito, se usa para elementos de tamaño fijo y no se adapta a sitios responsive. 

## Porcentajes 
- Es recomendable usar porcentajes para tamaños de contenedores y elementos que deban escalarse  PROPORCIONALMENTE con el tamaño de la ventana o de su padre. 

## EM 
- La unidad EM es relativa al tamaño de la fuente del elemento padre. Por ejemplo, el tamaño de la fuente del elemento padre es de 16px, 1em equivale a 16px, 2em equivale a 32px, ... 
- Esta unidad es útil para crear tamaños de textos y márgenes que escalen on el tamaño de la fuente, mejorando la ACCESIBILIDAD y flexibilidad del diseño. Es recomendable usar EM para elementos que deban escalar proporcionalmente con el texto. 

## REM (Root EM)
- La unidad REM es relativa al tamaño de fuente de fuente del elemento raiz (normalmente el <html>). 
De base también vale 16px, es para tener consistencia en TODO el documento. Es recomendable usar REM para tamañaos de la fuente principal, márgenes, y para garantizar coherencia en el sitio. 

Queremos que sea agradable visualmente el padding, margin etc cuando hacemos grande o pequeña una pantalla. entonces con el REM y EM se puede hacer ya que se adapta. 