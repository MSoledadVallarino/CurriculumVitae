const fondo = document.querySelector(".fondo");
const btn = document.querySelector("button")

btn.addEventListener("click", cambiarColorDeFondo);

function cambiarColorDeFondo(){
       if (fondo.style.background == "rgb(183, 216, 244)")
       fondo.style.background = "pink";
       else
       fondo.style.background = "rgb(183, 216, 244)";
    
}