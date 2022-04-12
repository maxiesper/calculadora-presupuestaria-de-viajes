//formulario 
let vacationCalc = document.getElementById("vacationCalc");
//capturamos el formulario con el submit
vacationCalc.addEventListener("submit", calcExpenses);

//en la siguient funcion se captura toda la informacion del input de la pagina.

function getValues(){

    let destiny = document.getElementById("destiny").value,
    budget = document.getElementById("budget").value,
    acomodation = document.getElementById("acomodation").value,
    transport = document.getElementById("transport").value;
    food = document.getElementById("food").value;

    return{
        destiny,budget, acomodation,transport, food
    }
}

//realiza el calculo, se le suman los gastos y se le restan los gastos psoteriormente luego se le pasa la informacion al UI
function calcExpenses(e) {
  e.preventDefault();

  const{destiny,budget, acomodation,transport, food} = getValues();

  let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food);
  let balance = budget - expenses;

  //pasarle la informacion al UI para que este pueda imprimirlo
  UI(destiny, budget, balance);

}


function UI(destiny, budget, balance) {
  let result = document.getElementById("result"),
    dataPrint = document.createElement("div");
  dataPrint.innerHTML = `
    <div class="container-data row">
      <div class="col s4">
        <h6>${destiny}</h6>
      </div>
      <div class="col s4">
        <h6>${budget}</h6>
      </div>
      <div class="col s4">
        <h6>${balance}</h6>
      </div>
    </div> `
    result.appendChild(dataPrint)

    reset();
    ;
}

//funcion para resetear nuestro formulario
function reset(){
    document.getElementById('vacationCalc').reset()
}