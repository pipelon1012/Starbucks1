let circulo = document.querySelector(".circulo")
let imagen = document.querySelector(".starbucks")



function cambiarColor(color){
    
    
    circulo.style.backgroundColor = color
    
}

function cambiarImagen(src) {
    imagen.style.transform = "scale(1.1)"; // Pequeño zoom
    setTimeout(() => {
        imagen.src = src;
        imagen.style.transform = "scale(1)";
    }, 200); // Retorna a su tamaño normal
}