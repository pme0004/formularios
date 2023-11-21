function ej1(){
    var nombre =document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var divcomprobacion = document.querySelector(".divcomprobacion");
    var nombreok = /^[a-zA-Z ]+$/.test(nombre);
    var edadok = /^\d+$/.test(edad)&& parseInt(edad) >=0;

    if(!nombreok){
        divcomprobacion.innerHTML="Nombre invalido";
    }
    if(!edadok){
        divcomprobacion.innerHTML="Edad invalida";
    }
    if(nombreok && edadok){
        divcomprobacion.innerHTML="Datos correctos";
    }



}

function ej2() {
    var nombretarea = document.getElementById("nombretarea");
    var listado = document.querySelector(".listado");

    if (nombretarea.value.trim() !== '') {
        // crea elemento
        var item = document.createElement('li');
        item.className = 'tarea';

        // mete el texto en la tarea
        var textotarea = document.createElement('span');
        textotarea.innerText = nombretarea.value;

        // crea el boton de borrado
        var botonborrar = document.createElement('button');
        botonborrar.className = 'botonborrado';
        botonborrar.innerText = 'Tarea hecha';
        botonborrar.onclick = function () {
            listado.removeChild(item);
        };

        // Agrega mas elementos
        item.appendChild(textotarea);
        item.appendChild(botonborrar);
        listado.appendChild(item);

        // borra lo que hay escrito en el campo de texto
        nombretarea.value = '';
    }
}
function sumar(){
    var numero1=parseFloat(document.getElementById("numero1").value);
    var numero2=parseFloat(document.getElementById("numero2").value);
    var resultado=document.getElementById("resultado");
    var resultadosuma=numero1+numero2;
    resultado.innerHTML="El resultado es "+resultadosuma;
}
function restar(){
    var numero1=parseFloat(document.getElementById("numero1").value);
    var numero2=parseFloat(document.getElementById("numero2").value);
    var resultado=document.getElementById("resultado");
    var resultadoresta=numero1-numero2;
    resultado.innerHTML="El resultado es "+resultadoresta;
}
function multiplicar(){
    var numero1=parseFloat(document.getElementById("numero1").value);
    var numero2=parseFloat(document.getElementById("numero2").value);
    var resultado=document.getElementById("resultado");
    var resultadomultiplicacion=numero1*numero2;
    resultado.innerHTML="El resultado es "+resultadomultiplicacion;
}
function dividir(){
    var numero1=parseFloat(document.getElementById("numero1").value);
    var numero2=parseFloat(document.getElementById("numero2").value);
    var resultado=document.getElementById("resultado");
    if(numero1 == 0 && numero2 == 0){
        resultado.innerHTML="No se puede dividir por 0";
    }else {
        var resultadodividir=numero1/numero2;
        resultado.innerHTML="El resultado es "+resultadodividir;
    }
}

function ej4(){
    var nombre4=document.getElementById("nombre4").value;
    var correo=document.getElementById("correo").value;
    var contraseña=document.getElementById("contraseña").value;
    var confirmarcontraseña=document.getAnimations("confirmarcontraseña").value;

    var nombreok= /^[a-zA-Z ]+$/.test(nombre4);
    var contraseñaok=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(contraseña);
    var posibleerror=document.getElementById("posibleerror");    
    if(!nombreok){
        posibleerror.innerHTML="El nombre está mal";
        posibleerror.style.visibility="visible";

    }
    if(!contraseñaok){
        posibleerror.innerHTML="la contraseña esta mal";
        posibleerror.style.visibility="visible";

    }
    
    if(nombreok && contraseñaok){
        alert("Te has registrado correctamente");

    }
}
    