//Dado que accedo a la página
//Cuando se renderiza
//Veo el resultado de la suma

//Creo las constantes de los numeros
const numb1 = 3;
const numb2 = 5;

//Creo la funcion para que sume esos numeros y los imprima en el html
function sum(num1, num2) {
  let total = num1 + num2;
  return total;
}

function render(num1, num2, total) {
  const divApp = document.getElementById("app");
  const txt = `la suma de ${num1} + ${num2} es ${total}`;
  divApp.innerHTML = txt;
}
//llamo a las funciones
render(numb1, numb2, sum(numb1, numb2));
