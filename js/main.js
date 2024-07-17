//import {tipoError, mensajes} from "./customErrors.js"

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
const listaRespuestas = {
    nombre:e.target.elements["nombre"].value,
    email:e.target.elements["email"].value, 
    asunto:e.target.elements["asunto"].value, 
    mensaje:e.target.elements["mensaje"].value, 
 
}

localStorage.setItem("registro", JSON.stringify(listaRespuestas))

window.location.href = "./index.html"

})


const tipoError = [
    "valueMissing",
    "typeMissmatch",
    "patternMissmatch",
    "tooShort",
    "customError"
];

const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Por favor, ingrese un nombre valido",
        tooShort: "Por favor, ingrese un nombre valido",
    },
    email:{
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Por favor, ingrese un nombre valido",
        tooShort: "Por favor, ingrese un nombre valido",
    },
    asunto:{
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Por favor, ingrese un nombre valido",
        tooShort: "Por favor, ingrese un nombre valido",
    },
    mensaje:{
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "Por favor, ingrese un nombre valido",
        tooShort: "Por favor, ingrese un nombre valido",
    },
};
//console.log(camposDeFormulario);

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
});


function verificarCampo(campo){
    let mensaje = ""

tipoError.forEach(error =>{
    if(campo.validity[error]){
        mensaje= mensajes[campo.name][error]
        console.log(mensaje);
    }
})

const mensajeError = campo.parentNode.querySelector(".mensaje-error")
const validarImputCheck = campo.checkValidity()
if(!validarImputCheck){
    mensajeError.textContent = mensaje
}else{
    mensajeError.textContent = "";
}

}