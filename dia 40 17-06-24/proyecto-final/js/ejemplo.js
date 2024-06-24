/* -----------------------------------------------------------
                        Reset de CSS    
----------------------------------------------------------- */



/* -----------------------------------------------------------
                        Componentes generales
por ej. button, card
----------------------------------------------------------- */







/* -----------------------------------------------------------
                        Sección Home     
----------------------------------------------------------- */









/* -----------------------------------------------------------
                        Sección Contacto     
----------------------------------------------------------- */









/* -----------------------------------------------------------
                        Sección Galeria      
----------------------------------------------------------- */








/* -----------------------------------------------------------
                        Sección Scroll      
----------------------------------------------------------- */


// PARTE 1: GENERAR VARIABLES

document.addEventListener("DOMContentLoaded", function () {

    const bodyId = document.body.id;
    console.log("body id es:", bodyId)

    switch (bodyId) {

        case "home":
            console.log("Estoy en Home");
            iniHome();
            break;

        case "galeria":
            console.log("Estoy en Galeria");
            iniGaleria();
            break;

        case "contacto":
            console.log("Estoy en Contacto");
            iniContacto();
            break;


    }

});


// Código JS de Home

function iniHome() {
    console.log("Estoy dentro de Home")

}


// Código JS de Contacto
function iniContacto() {
    console.log("Estoy dentro de Contacto")
}

//----------------------------------------------------------------------------------
// Código JS de galeria 
//----------------------------------------------------------------------------------
async function iniGaleria() {
    console.log("Estoy dentro de Galeria");

//----------------------------------------------------------
    //Parte 1: declarar variables y datos
//----------------------------------------------------------
    const galeriaContainer = document.querySelector(".galeria-container");
    let listaGaleria = [];


//-----------------------------------------------------------
    //Parte 2: declarar nuestras funciones
//-----------------------------------------------------------
//traer datos de mis usuarios 

    async function traerUsuarios() {

        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            const listaUsuarios = await response.json();

            return listaUsuarios;

        } catch (error) {
            console.error("Tuvimos un error al obtener datos:", error);
            return [];

        } 

    }

    function imprimirUsuarios() {
        console.log("mis usuarios son", listaGaleria);

        const miGaleriaHtml = listaGaleria.map (usuario =>{
            return `<div class="userCard">
            <h3>${usuario.name}</h3>
            <a href="mailto:${usuario.email}" target="blank">${usuario.email}</a>

        </div>`;
        }).join("");
        
        galeriaContainer.innerHTML = miGaleriaHtml; 
    }


//---------------------------------------------------------
    //parte 3: ejecutar nuestro codigo
//---------------------------------------------------------


    listaGaleria = await traerUsuarios();
    //imprimirlos en pantalla 
    imprimirUsuarios();
};