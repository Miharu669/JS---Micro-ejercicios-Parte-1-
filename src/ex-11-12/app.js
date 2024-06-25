//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo si el numero ingresado en el formulario es o no es divisible y porque numeros lo es/no lo es

function comprobarDivisibilidad() {
  // Obtiene el valor del input con id 'numeroInput' que contiene el número ingresado por el usuario
  const numero = parseInt(document.getElementById("numeroInput").value);

  let mensaje = "";

  // Verifica si el número es divisible por 2 (ejercicio n11)
  if (numero % 2 === 0) {
      mensaje += "El número es divisible por 2.<br>";
  }

  // Verifica si el número es divisible por 3
  if (numero % 3 === 0) {
      mensaje += "El número es divisible por 3.<br>";
  }

  // Verifica si el número es divisible por 5
  if (numero % 5 === 0) {
      mensaje += "El número es divisible por 5.<br>";
  }

  // Verifica si el número es divisible por 7
  if (numero % 7 === 0) {
      mensaje += "El número es divisible por 7.<br>";
  }

  // Si no se encontró ningún mensaje de divisibilidad, significa que el número no es divisible por 2, 3, 5 ni 7
  if (mensaje === "") {
      document.getElementById("resultado").innerHTML =
          "El número no es divisible por 2, 3, 5 ni 7.";
  } else {
      // Si se encontraron mensajes de divisibilidad, se muestran en el elemento con id 'resultado'
      document.getElementById("resultado").innerHTML = mensaje;
  }
}
