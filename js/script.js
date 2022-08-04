console.log("Hola Mundo");

let numero=25;

console.log("El numero es ",numero);
console.log(`El numero es ${numero}`);

let nombre="jose";

console.log(`El nombre es ${nombre}`);

let boolean=true;

console.log(`El estado es ${boolean}`);

let res=numero+5;

console.log(`El resultado es ${res}`);
console.log("El resultado es "+res);
console.log(`El resultado es ${numero+5}`);

/*window.alert("Esto es una alerta");*/

let estado=window.confirm("Estas seguro de que quieres salir");
console.log(`La ventana arrojo ${estado}`);

/*let num1=prompt("Digite el primer numero");
let sum=numero+parseInt(num1);
console.log(`El resultado es ${sum}`);*/

let num2=prompt("Digite el primer numero");
let num3=prompt("Digite el segundo numero");
let sum1=parseInt(num2)+parseInt(num3);
console.log(`El resultado es ${sum1}`);

/*Condicionales*/

if(num2>num3){
    console.log(`El ${num2} es menor que ${num3}`)
}
else if(num2==num3){
   console.log(`son números iguales`)
}
else{
    console.log(`el ${num3} es mayor que ${num2}`)
}

/*Operador Ternario*/

 let nummayor=(num2>num3)
 ?"El numero mayor es el primero"
 :"El numero mayor es el segundo"

console.log(nummayor);

/*Condiconales con condicion compuesta*/

let usuario=prompt("Digite su usuario");
let password=prompt("Digite su contraseña");

if(usuario=="jose" && password=="soloelverde"){
    window.alert("Bienvenido");
}
else if(usuario=="jose" && password!="soloelverde"){
   window.alert("Verifique su contraseña")
}
else if(usuario!="jose" && password=="soloelverde"){
    window.alert("Verifique su usuario")
 }
else{
    window.alert("Credenciales de acceso incorrectas");
}

/*Condicional Multiple*/

let operacion=prompt("Digite S para suma, R para resta, M para multiplicaicon y D para division");

switch (operacion) {
        case "S":
        alert("La suma de los números ingresados es: " + (parseInt(num2) + parseInt(num3)));
        break;
        case "R":
        alert("La resta de los números ingresados es: " + (parseInt(num2) - parseInt(num3)));
        break;
        case "M":
        alert("La multiplicación de los números ingresados es: " + parseInt(num2) * parseInt(num3));
        break;
        case "D":
        alert("La multiplicación de los números ingresados es: " + parseInt(num2) / parseInt(num3));
        break;    
        default:
        alert("Error");
        break;
}