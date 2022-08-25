/*function calcular(){
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;

    if (op==1) {
        let sum=num1+num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${sum}`)
    }else if (op==2) {
        let res=num1-num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${res}`)
    }else if (op==3) {
        let mul=num1*num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${mul}`)
    }else if (op==4) {
        let div=num1/num2;
        alert(`El numnero 1 es ${num1} y el numero 2 ${num2} la suma es ${div}`)
    }else{
        alert("seleccione una opcion")
    }
}
*/

const btn=document.getElementById("button");

btn.addEventListener('click',function calcular(){

    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let op=document.getElementById("operacion").value;

    if (op==1) {
        let sum=num1+num2;
        alert(`El numnero 1 es  ${num1}  y el numero 2  ${num2}  la suma es  ${sum}`)
    }else if (op==2) {
        let res=num1-num2;
        alert(`El numnero 1 es  ${num1}  y el numero 2  ${num2}  la resta es ${res}`)
    }else if (op==3) {
        let mul=num1*num2;
        alert(`El numnero 1 es  ${num1}  y el numero 2  ${num2}  la multiplicacion es ${mul}`)
    }else if (op==4) {
        let div=num1/num2;
        alert(`El numnero 1 es  ${num1}  y el numero 2  ${num2}  la division es  ${div}`)
    }else{
        alert("seleccione una opcion")
    }
}
);

const rta=document.getElementById("respuesta");
const ops=document.getElementById("ops");

ops.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);

    if (e.target.id == 'sum') {
        console.log(`suma : ${num1+num2}`)
        let texto=`<p><img src="img/correcto.png" width="100px" height="100px"></p><br><h2>La Suma es ${num1+num2}</h2>`
        rta.innerHTML=texto;
    } else if(e.target.id == 'res'){
        console.log(`resta : ${num1-num2}`)
        let texto=`<p><img src="img/error.png" width="100px" height="100px"></p><br><h2>La Suma es ${num1-num2}</h2>`
        rta.innerHTML=texto;
    }else{
        console.log("ERORR")
    }
})
