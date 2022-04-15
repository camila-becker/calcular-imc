let inputNome = document.querySelector("#nome");
let inputPeso = document.querySelector("#peso");
let inputAltura = document.querySelector("#altura");
let resultado = document.querySelector(".resultado");

function calcular() {
  let peso = Number(inputPeso.value);
  let altura = Number(inputAltura.value.replace(",", "."));
  let nome = inputNome.value;

  let resultadoCalculo = calculaImc(peso, altura);

  if (resultadoCalculo) {
    resultado.textContent = `
    ${nome}, o seu IMC é: ${resultadoCalculo.toFixed(2)}.
  
    ${classificacaoImc(resultadoCalculo)}
    `;
  } else {
    alert("Favor preencha as informações necessárias para realizar o calculo.");
  }
}

function limpar() {
  inputNome.value = "";
  inputPeso.value = "";
  inputAltura.value = "";
  resultado.textContent = "O resultado será exibido aqui!";
}

function calculaImc(peso, altura) {
  return Number(peso) / (Number(altura) * Number(altura));
}

function classificacaoImc(imc) {
  if (imc < 18.5) {
    return "De acordo com a OMS, seu peso é considerado Baixo.";
  } else if (imc > 18.6 && imc < 24.9) {
    return "De acordo com a OMS, seu peso é considerado Normal.";
  } else if (imc > 25 && imc < 29.9) {
    return "De acordo com a OMS, seu peso é considerado Sobrepeso.";
  } else if (imc > 30 && imc < 34.9) {
    return "De acordo com a OMS, seu peso é considerado Obesidade grau I.";
  } else if (imc > 35 && imc < 39.9) {
    return "De acordo com a OMS, seu peso é considerado Obesidade grau II.";
  } else {
    return "De acordo com a OMS, seu peso é considerado Obesidade grau III.";
  }
}
