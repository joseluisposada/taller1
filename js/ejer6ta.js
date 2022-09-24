//Esta es para nombre y apellidos ^[a-zA-ZÁ-ÿ\s]{1,40}$

//rela para numdoc y telefono ^\d{7,10}$

//regla correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$

//Regla password ^(?=.+\d)(?=.*[#$%&!@])(?=*[a-z])(?=*[A-Z]).{8,}$

const reglas = {
    textos: /^[a-zA-Z0-9Á-ÿ\s]{1,}$/, //SOLO LETRAS
    numeros: /^\d{5,20}$/, //SOLO NÚMEROS
    correo: /^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //CORREOS
    password: /^(?=.+\d)(?=.*[#$%&!@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //PASSWORD
}

const inputs = {
    numdoc: false,
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    password: false
}

//acceder al formulario
let form = document.getElementById("frm-usuario")
let campos = document.querySelectorAll("#frm-usuario input")

//agregar listener de evento submit al formulario que se envia
form.addEventListener('submit', e => {
    e.preventDefault();//evitar que se envie el formulario para realizar las validaciones
})

const validarInput = (regla, input, grupo) => {
    if (regla.test(input.value)) {
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-square-check');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible');
        inputs[grupo] = true;
    } else {
        document.getElementById(`g-${grupo}`).classList.add('error');
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-square-check');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
        inputs[grupo] = false;
    }
}

const validarcampos = (e) => {
    console.log("se genero un evento sobre el input" + e.target.name);
    switch (e.target.name) {
        case "numdoc":
            validarInput(reglas.numeros, e.target, e.target.name);
            break;
        case "nombre":
            validarInput(reglas.textos, e.target, e.target.name);
            break;
        case "apellido":
            validarInput(reglas.textos, e.target, e.target.name);
            break;
        case "telefono":
            validarInput(reglas.numeros, e.target, e.target.name);
            break;
        case "correo":
            validarInput(reglas.correo, e.target, e.target.name);
            break;
            case "password":
                validarInput(reglas.password,e.target,e.target.name)
                validarPassword();
            break;
            case "password2":
                validarPassword();
        
            break;
    }
}

/**Validar Password*/
const validarPassword=()=>{
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('password2');

    if (pass1.value === pass2.value){
        document.getElementById(`g-password2`).classList.remove('error');

        document.getElementById(`g-password2`).classList.add('success');

        document.querySelector(`#g-password2 .msn-error`).classList.remove('msn-error-visible');

        document.querySelector("#g-password2 i").classList.add('fa-circle-check')

        document.querySelector("#g-password2 i").classList.remove('fa-triangle-exclamation')
        inputs['password'] = true;
    } else {
        document.getElementById('g-password2').classList.add('error'); 

        document.querySelector("#g-password2 .msn-error").classList.add('msn-error-visible');

        document.querySelector("#g-password2 i").classList.remove('fa-circle-check')

        document.querySelector("#g-password2 i").classList.add('fa-triangle-exclamation')
        inputs['password'] = false;
    }
}

/* Aqui se hace uno por uno
const validarcampos=(e)=>{
    console.log("se genero un evento sobre el input"+e.target.name);
    switch(e.target.name){
        case "numdoc":
            if (reglas.numeros.test(e.target.value)) {
                document.getElementById('g-numdoc').classList.remove('error');
                document.getElementById('g-numdoc').classList.add('success');
                document.querySelector('#g-numdoc i').classList.add('fa-square-check');
                document.querySelector('#g-numdoc i').classList.remove('fa-circle-exclamation');
                document.querySelector('#g-numdoc .msn-error').classList.remove('msn-error-visible')
            } else {
                document.getElementById('g-numdoc').classList.add('error');
                document.getElementById('g-numdoc').classList.remove('success');
                document.querySelector('#g-numdoc i ').classList.remove('fa-square-check');
                document.querySelector('#g-numdoc i ').classList.add('fa-circle-exclamation');
                document.querySelector('#g-numdoc .msn-error').classList.add('msn-error-visible')
            }
        break;
        case "nombre":

        break;
        case "apellido":

        break;
        case "telefono":

        break;
        case "correo":

        break;
        case "password":

        break;
        default:
            alert("no se ha recibido ningun evento");
        break;
    }
}
*/
campos.forEach((campo) => {
            campo.addEventListener("keyup", validarcampos);
            campo.addEventListener("blur", validarcampos);
        })

form.addEventListener('submit', e => {
            e.preventDefault();
            const terminos = document.getElementById("terminos");


            if (inputs.numdoc && inputs.nombre && inputs.apellido && inputs.correo && inputs.telefono && inputs.password && terminos.checked) {
                alert("El usuario ah sido registrado");
                form.reset();
                document.querySelectorAll('.success').forEach(icono => {
                    icono.classList.add('error')
                })
            }
            else {
                document.querySelectorAll('.success').forEach(icono => {
                    icono.classList.remove('error')
                })
                document.querySelectorAll('.msn-error').forEach(icono => {
                    icono.classList.add('msn-error-visible')
                })
            }

        })

/**Modal Terminos*/
let btnmodal=document.getElementById("peritri");

let venmodal=document.getElementById("ventanatri");

let cermodal=document.querySelector(".cerrarmodaltri");

btnmodal.addEventListener("click",()=>{
    venmodal.style.display="block";
})

cermodal.addEventListener("click",()=>{
    venmodal.style.display="none"; 
})

window.addEventListener("click",(e)=>{
    if(e.target==venmodal){
        venmodal.style.display="none"; 
    }
    })