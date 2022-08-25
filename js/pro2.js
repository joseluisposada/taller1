let opciones=document.getElementById("form");
let resp=document.getElementById("Respuesta")

opciones.addEventListener('click',(e)=>{
e.preventDefault();

if (e.target.id=="button1") {
    resp.innerHTML=`opcion incorrecta`;
    resp.classList.add("incorrecto");
    resp.classList.remove("correcto")
} else if(e.target.id=="button2"){
    resp.innerHTML=`opcion incorrecta`;
    resp.classList.add("incorrecto");
    resp.classList.remove("correcto")
}else if(e.target.id=="button3"){
    resp.innerHTML=`opcion correcta`;
    resp.classList.add("correcto");
    resp.classList.remove("incorrecto")
}else if(e.target.id=="button4"){
    resp.innerHTML=`opcion incorrecta`;
    resp.classList.add("incorrecto");
    resp.classList.remove("correcto")
}else{
    
}
})