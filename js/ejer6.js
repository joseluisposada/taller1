console.log(document.getElementById("features"));

console.log(document.querySelector("h1"));

console.log(document.querySelector(".feature"));

console.log(document.querySelector("#features"));

console.log(document.querySelectorAll("p")[0]);

document.querySelectorAll("p").forEach((el)=>console.log(el));

//si deseamos acceder a un atributo de un elemento html

console.log(document.querySelector("a").getAttribute("href"));

//si deseamos cambiar el valor del atributo

document.querySelector("a").setAttribute("href","https://www.google.com/?hl=es");

//para acceder a los elementos css ponemos

const $mi=document.querySelector("#features");

$mi.style.setProperty("background-color","#FF0000");

$mi.style.setProperty("width","500px");

//para agregar contenido a un elemento

const $mic=document.querySelector(".miclase")

let text=`<p>El dom es blabla</p> <p>Se puede acceder y modificar</p>`

//agregar una cadena de texto sencilla

//$mic.textContent=text

//agregar etiquetas html

$mic.innerHTML=text

//para crear un elemento y agregarlo en el Dom

const img=document.createElement("img");
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMVRDTkA1TiwbAesO48dsp3CwBCSZst7nqE8I_jt7M4w&s";

//agregarlo en alguna parte del html 

document.body.appendChild(img)

//crear un bloque y agregarle contenido

const $caja=document.createElement("div")
$caja.innerHTML="<img src='img/descarga.png'>"

$mic.appendChild($caja)

//remover un elemento del dom

$caja.remove();
