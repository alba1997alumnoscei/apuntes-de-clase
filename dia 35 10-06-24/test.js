//----------------------SI QUIERO CREAR HTML DESDE JAVASCRIPT ----------------------------------------

console.log ( accion1(), accion2()   ) //imprime la accion1 "mensaje 1" y la accion2 "mensaje 2"

const div = document.createElement('div'); //puedo crear span, h1, div, header...
const imagen = document.createElement ('img'); // <img/>
imagen.src="imgs/foto.png"; // <img src="imgs/foto.png"/> 
imagen.alt="mi foto de perfil"; // <img src="imgs/foto.png" alt="Mi foto de perfil"/> 

//en el div agregar la imagen 
div.appendChild(imagen); //a que elemento agrego qué cosa: al div le agrego la imagen 

//en el body añadir el div 
document.body.appendChild(div); //a que elemento agrego qué cosa: al body le agrego un div  

