function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
        errores[i].innerHTML = "";
    }
}

function validar(formulario) {

    limpiarErrores();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var telefono = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;

    if (formulario.marca.value == "") {
        document.getElementById("errorMarca").innerText = "X";
        formulario.marca.focus();
        return false;
    }else if (formulario.modelo.value == "") {
        document.getElementById("errorModelo").innerText = "X";
        formulario.modelo.focus();
        return false;
    } else if (formulario.ano.value == "") {
        document.getElementById("errorAno").innerText = "X";
        formulario.ano.focus();
        return false;
    }else if (!re.test(formulario.correo.value)) {
        document.getElementById("errorCorreo").innerText = "X";
        formulario.correo.focus();
        return false;
    }else if(!tlf.value.match(telefono) == true || tlf.value.match(phoneno) == "") {
        document.getElementById('errorTlf').innerHTML = "X";
        formulario.tlf.focus();
        return false;
    };
    return true;
};