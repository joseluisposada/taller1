function calcular(){
    let fa=parseInt(document.getElementById("gra").value);
    let op=parseInt(document.getElementById("opciones1").value);
    let opp=parseInt(document.getElementById("opciones2").value);


    if (op==1 && opp==5) {
        let gra=(fa*(9/5))+32;
        window.alert("De Fahrenheit a Celsius es"+gra+"°C");
    }
    else if (op==1 && opp==6) {
        let cel=(gra-32)*(5/9)+273.15;
        window.alert("En fahrenheit a Kelvin es"+cel+"K");

    }
    else if (op==2 && opp==4) {
        let fah=(fa*(9/5))+32;
        window.alert("De Celsius a Fahrenheit es"+fah+"°F");
    
    }
    else if (op==2 && opp==6) {
        let tri=fa+273.15;
        window.alert("De Celsius a Kelvin es"+tri+"K");
    }
    else if (op==3 && opp==4) {
        let org=(fa-273.15)*(9/5)+32;
        window.alert("De Kelvin a Fahrenheit es"+org+"°F");
    }
    else if (op==3 && opp==5) {
        let sal=fa-273.15;
        window.alert("De Kelvin a Celsius es"+sal+"°C");
    }
    else{
        alert("seleccione una opcion")
    }
}