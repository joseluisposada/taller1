/* Perimetro Triangulo */

let btnmodal=document.getElementById("peritri");

let venmodal=document.getElementById("ventanatri");

let cermodal=document.querySelector(".cerrarmodaltri");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})


function pertrii(){ 
  let pri=parseInt(document.getElementById("pritri").value);
  let seg=parseInt(document.getElementById("segtri").value);
  let tre=parseInt(document.getElementById("tertri").value);

  var pertri = pri+seg+tre;
  alert("El perimetro es = "+pertri)
}


/* area Triangulo */

let btnmodalar=document.getElementById("aretri");

let venmodalar=document.getElementById("ventanatriar");

let cermodalar=document.querySelector(".cerrarmodaltriar");

btnmodalar.addEventListener("click",()=>{
    venmodalar.style.display="block";
})

cermodalar.addEventListener("click",()=>{
    venmodalar.style.display="none"; 
})
