function ingresar() {
    const inputNombre = document.getElementById("nombre");
    const inputApellido = document.getElementById("apellido");
    const botonIngresar = document.getElementById("ingresar");
    if (inputNombre.value || inputApellido.value) {
        const usuario = {
            nombre: inputNombre.value,
            apellido: inputApellido.value,
        }
        localStorage.setItem("infoUsuario", JSON.stringify(usuario))
    }
}