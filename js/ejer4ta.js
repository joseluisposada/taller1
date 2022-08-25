
const rta=document.getElementById("respuesta");
const btn=document.getElementById("button");

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    let op1 = document.getElementById('opciones1');
    let op2 = document.getElementById('opciones2');
    

    if (opciones1.value==opciones2.value) {
        let texto=`<p><img src="img/correcto.png" width="100px" height="100px"></p><br><h2> El nombre completo es : ${op1.options[op1.selectedIndex].text} ${op2.options[op2.selectedIndex].text} </h2>`
        rta.innerHTML=texto;
    } else{
        let texto=`<p><img src="img/error.png" width="100px" height="100px"></p>`
        rta.innerHTML=texto;
    }
})