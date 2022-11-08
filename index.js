const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")
const arrayOperaciones = [];
btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)
    const operation = new Operation(op1,operacion,op2)
    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        
        let resultado = operation.calcular();
        arrayOperaciones.push(operation);
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }
const primerArray = ["suma", "resta", "multipilicación", "división" ];
const count = primerArray.push("suma");
console.log(count);
console.log(arrayOperaciones)
}

