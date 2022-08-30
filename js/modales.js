/*Acceder al boton para abrir el modal*/

let modal=document.getElementById("abrirModal")

//Acceder ventana modal

let venmodal=document.getElementById("ventanaModal")

//Acceder al boton cerrar de la ventana modal

let cerModal=document.querySelector("cerrarModal")

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cerModal.addEventListener("click",()=>{
    venmodal.style.display="none";
})

window.addEventListener("click",(e)=>{
  if (e.target==venmodal) {
    venmodal.style.display="none";
  }
})
