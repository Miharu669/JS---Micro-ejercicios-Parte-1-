//Dado que accedo a la página
//Cuando relleno el formulario y lo valido
//Veo si el numero ingresado en el formulario es o no es divisible y porque numeros lo es



function mostrarDivisores() {
  // Obtiene el valor del input con id 'numeroInput' que contiene el número ingresado por el usuario
  const numero = parseInt(document.getElementById("numeroInput").value);

  // Verifica si el número ingresado no es válido (por ejemplo, si no es un número)
  if (isNaN(numero)) {
      alert("Por favor, ingresa un número válido.");
      return; // Sale de la función si el número no es válido
  }

  // Inicializa un array para almacenar los divisores del número
  let divisores = [];

  // Itera desde 1 hasta el número ingresado para encontrar sus divisores
  for (let i = 1; i <= numero; i++) {
      // Si el número dividido entre i da un residuo de 0, entonces i es un divisor de número
      if (numero % i === 0) {
          divisores.push(i); // Agrega i al array de divisores
      }
  }

  // Prepara el mensaje con los divisores encontrados
  let mensaje = `Los divisores de ${numero} son: `;
  
  // Si no se encontraron divisores distintos de sí mismo (es decir, el array está vacío)
  if (divisores.length === 0) {
      mensaje = `El número ${numero} no tiene divisores diferentes de sí mismo.`;
  } else {
      mensaje += divisores.join(", "); // Une los divisores separados por coma para formar el mensaje
  }

  // Actualiza el contenido del elemento con id 'resultado' en el HTML con el mensaje generado
  document.getElementById("resultado").innerHTML = mensaje;
}
