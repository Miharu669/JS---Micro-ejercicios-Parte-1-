//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo el texto con el numero de vocales que hay en el formulario

function contarVocales() {
    // Obtiene el valor del input con id 'fraseInput' que contiene la frase ingresada por el usuario
    const frase = document.getElementById('fraseInput').value;

    // Convierte toda la frase a minúsculas para hacer la búsqueda de vocales insensible a mayúsculas
    const fraseMinusculas = frase.toLowerCase();

    // Inicializa un contador para las vocales
    let contadorVocales = 0;

    // Itera sobre cada carácter de la frase en minúsculas
    for (let i = 0; i < fraseMinusculas.length; i++) {
        const caracter = fraseMinusculas[i]; // Obtiene el carácter actual

        // Verifica si el carácter actual es una vocal ('a', 'e', 'i', 'o', 'u')
        if ('aeiou'.includes(caracter)) {
            contadorVocales++; // Incrementa el contador si encuentra una vocal
        }
    }

    // Actualiza el contenido del elemento con id 'resultado' con el número de vocales encontradas en la frase
    document.getElementById('resultado').innerText = `La frase contiene ${contadorVocales} vocales.`;
}
