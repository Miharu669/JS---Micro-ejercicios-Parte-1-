//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el nombre de usuario puesto en el formulario

function contarLetraA() {
    // Obtiene el valor del input con id 'fraseInput' que contiene la frase ingresada por el usuario
    const frase = document.getElementById('fraseInput').value;

    // Convierte toda la frase a minúsculas para hacer la búsqueda de la letra 'a' 
    const fraseMinusculas = frase.toLowerCase();

    // Inicializa un contador para la letra 'a'
    let contadorA = 0;

    // Itera sobre cada carácter de la frase en minúsculas
    for (let i = 0; i < fraseMinusculas.length; i++) {
        // Comprueba si el carácter actual es igual a 'a'
        if (fraseMinusculas[i] === 'a') {
            contadorA++; // Incrementa el contador si encuentra la letra 'a'
        }
    }

    // Actualiza el contenido del elemento con id 'resultado' para mostrar la cantidad de veces que aparece la letra 'a'
    document.getElementById('resultado').innerText = `La letra 'a' aparece ${contadorA} veces en la frase.`;
}
