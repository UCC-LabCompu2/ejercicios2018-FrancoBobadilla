/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function conversorUnidades(nombre_unidad, valor_unidad) {
    var metro;
    valor_unidad = valor_unidad.replace(",", ".");
    if (isNaN(valor_unidad)) {      //true, si no es un número; false, si es un número
        document.getElementById("metro").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("yarda").value = "";
        alert("Entrada inválida");
    } else {
        if (nombre_unidad == 'metro')
            metro = valor_unidad / 1;
        if (nombre_unidad == 'pie')
            metro = valor_unidad / 3.28084;
        if (nombre_unidad == 'pulgada')
            metro = valor_unidad / 39.3701;
        if (nombre_unidad == 'yarda')
            metro = valor_unidad / 1.09361;
        document.getElementById("metro").value = metro * 1;
        document.getElementById("pie").value = metro * 3.28084;
        document.getElementById("pulgada").value = metro * 39.3701;
        document.getElementById("yarda").value = metro * 1.09361;
    }
}

function conversorGradosRadianes(nombre_unidad, valor_unidad) {
    var radianes, grados;
    valor_unidad = valor_unidad.replace(",", ".");
    if (isNaN(valor_unidad)) {      //true, si no es un número; false, si es un número
        document.getElementById("grados").value = "";
        document.getElementById("radianes").value = "";
        alert("Entrada inválida");
    } else {
        if (nombre_unidad == 'grados') {
            grados = valor_unidad;
            radianes = valor_unidad *  Math.PI / 180;
        }
        if (nombre_unidad == 'radianes') {
            grados = valor_unidad * 180 / Math.PI;
            radianes = valor_unidad;
        }
        document.getElementById("grados").value = grados;
        document.getElementById("radianes").value = radianes;
    }
}

function mostrar_ocultar(opciones) {
    if (opciones == 'mostrarDiv')
        document.getElementsByName("unDiv")[0].style.display = 'block';
    if (opciones == 'ocultarDiv')
        document.getElementsByName("unDiv")[0].style.display = 'none';
}

function evaluarValor(valor, id) {
    if (isNaN(valor)) {
        alert("El valor no es numérico");
        document.getElementById(id).value = "";
    }
}