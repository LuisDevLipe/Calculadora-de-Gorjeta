function calcularGorjeta(event){
    event.preventDefault();
    let valorDaConta = document.getElementById('input_valorDaConta').value;
    let qtdPessoas = document.getElementById('input_qtdPessoas').value;
    let valorGorjeta = document.getElementById('valorGorjeta').value;
    console.log(valorDaConta , qtdPessoas , valorGorjeta);
   if(valorDaConta == '' | valorGorjeta == 0) {
    alert('por favor preencha os campos necessarios')
    return;
   }
   if(qtdPessoas == "" | qtdPessoas <=1) {
    qtdPessoas = 1;
    document.getElementById('cada').style.display= "none"
   } else {
    document.getElementById('cada').style.display=  "block"
   }
   let resultado = (valorDaConta * valorGorjeta) / qtdPessoas ;
   resultado = resultado.toFixed(2);
   console.log(resultado);
   document.getElementById('gorjeta').innerHTML = resultado;
   document.getElementById('gorjeta').style.display = "block" ;
}
document.getElementById('formSubmit').addEventListener('submit', calcularGorjeta);