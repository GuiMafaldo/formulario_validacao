function validarFormulario() {
    let campoA = parseFloat(document.getElementById('campoA').value);
    let campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert("Formulario Valido... Congratulations");
        
    } else {
        alert("O campo B dever ser maior que o campo A ... Formulario nao e valido tente novamente!");
    }
}
