
//Declarar la funcion para la declaracion
//function lanzarmoneda(){
//   let moneda = Math.floor((Math.random()*2)+1);
//    return moneda;
    //console.log(`El lanzamiento fue ${moneda}`);
//}

//invocacion la funcion
//lanzarmoneda();

//invocar la funcion con valor de retorno
//console.log(`el lanzamiento fue ${lanzarmoneda()}`);

//let lanzamiento=lanzarmoneda();


//funcion con parametros
//function ganar(saldo,apuesta){
//    saldo=saldo+(apuesta*2);
//    return saldo;
//}
//function perder(saldo,apuesta){
 //   saldo=saldo-apuesta;
 //   return saldo;
//}

/*
//invocar la funcion y enviar argumentos segun corresponda 
ganar(10000,1000);
perder(20000,2000);
*/

let lanzarmoneda=function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    return moneda;
}

//invocar la funcion
let lanzamiento=lanzarmoneda();

//funcion con parametros
let ganar=function(saldo,apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}

//Invocar la funcion
ganar(saldo,apuesta);

//funcion con parametros
let perder=(saldo,apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}

//invocar la funcion
perder(saldo,apuesta);

let seguir=true;
let saldo=0;
let jugador=prompt(`ingrese el nombre del jugador`);
saldo=parseInt(prompt("Cuanto deseas recargar para jugar"));

while(seguir==true){
    let eleccion=prompt(`${jugador} Elige 1 cara, Elige 2 sello`);
    let apuesta =parseInt(prompt(`de tu saldo actual ${saldo} ¿Cuanto deseas apostar?`));
    let lanzamiento=lanzarmoneda();

    if (lanzamiento==1 && eleccion==1) {
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue Cara escogiste Cara tu ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste sello tu ganas!!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento==1 && eleccion==2) {
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste sello tu pierdes!!, tu nuevo saldo es ${saldo}`);
    }
    else if (lanzamiento==2 && eleccion==1) {
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue sello esocgiste cara tu pierdes!!, tu nuevo saldo es ${saldo}`);
    }

    seguir=confirm("Desea continuar?");
}

