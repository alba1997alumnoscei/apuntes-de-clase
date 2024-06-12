// ---------------------------------------------
// 1. Declaramos variables y constantes
// ---------------------------------------------

//Slider
const sliderImages = document.querySelector(".Slider-images");
const listImages =document.querySelectorAll(".Slider-images img"); 

//Botones 
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

//Contador
const spanActual = document.getElementById("txtactual");
const spanTotal = document.getElementById ("txtTotal")

//crear un índice
let imgIndex = 0; //indice de imagen actual 
const totalImages = listImages.length; //total de imágenes 


//EventListener

btnNext.addEventListener("click", nextImagen);
btnPrev.addEventListener("click", prevImagen);

// ---------------------------------------------
// 2. Funciones 
// ---------------------------------------------

function nextImagen () {
    imgIndex++;
    if (imgIndex >= totalImages) {
    imgIndex=0;
    }
    actualizarSlider();
    actualizarContador ();
    
}


function prevImagen () {
    imgIndex--;
    if (imgIndex < 0){
        imgIndex = totalImages;
    }
    actualizarSlider();
    actualizarContador ();
}

function actualizarSlider () {
    const width=sliderImages.querySelector('img').clientWidth;
    sliderImages.style.transform = `translateX(${-width * imgIndex }px)`;
}

function actualizarContador (){
    spanActual.textContent = imgIndex +1;
    
}


    
// ---------------------------------------------
// 3. Ejecutamos nuestro código
// ---------------------------------------------
actualizarContador();
spanTotal.textContent = totalImages; 




// ---------------------------------------------
// 4. Crear intervalos
// ---------------------------------------------

let intervalos;

agregarIntervalo();

sliderImages.addEventListener("mouseover" , () => {
    clearInterval (intervalos);
}); 

sliderImages.addEventListener("mouseout" , () => {
    agregarIntervalo ();
}); 



function agregarIntervalo(){
    intervalos = setInterval (nextImagen, 1000);
}
