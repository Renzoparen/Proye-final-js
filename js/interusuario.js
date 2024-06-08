    //PAGINA DE CONTACTO INTERACCION CON FORMULARIO

    const footNombre = document.getElementById('nombre')
    const footTel = document.getElementById('telefono');
    const footEmail = document.getElementById('email');
    const footMensaje = document.getElementById('mensaje');
    const footbot = document.getElementById('boton1')

    footNombre.onkeyup = () => {
        if(footNombre.value.length < 3){
        footNombre.style.color='red';
        }else{
        footNombre.style.color='black';
        }   

    var input = document.getElementById("nombre");
input.addEventListener("change", function() {
    console.log("Nombre del us: " + input.value);
});

}

    footTel.onkeyup = () => {
        if(footTel.value.length < 8){
        footTel.style.color='red';
        }else{
        footTel.style.color='black';
        }   

    var input = document.getElementById("telefono");
input.addEventListener("change", function() {
    console.log("Contacto del us: " + input.value);
});

    }

    footEmail.onkeyup = () => {
        if(footEmail.value.length < 10){
        footEmail.style.color='red';
        }else{
        footEmail.style.color='black';
        }   

    var input = document.getElementById("email");
input.addEventListener("change", function() {
    console.log("Email del us: " + input.value);
});

    }

    footMensaje.onkeyup = () => {
        if(footMensaje.value.length < 50){
        footMensaje.style.color='black';
        }else{
        footMensaje.style.color='red';
        }
        document.getElementById('aviso').innerText='Estaremos encantado de ayudarlo!'

    var input = document.getElementById("mensaje");
input.addEventListener("change", function() {
    console.log("Mensaje del us: " + input.value);
    Swal.fire({
        position: "top",
        icon: "success",
        title: "Enviado con éxito",
        showConfirmButton: false,
        timer: 2000
      });
});



}

