var data = new Date()
var anoAtual = data.getFullYear()

function clicou(){
  var sexo = document.getElementsByName('genero')

  var idade = document.getElementById('Idade')
  var idadeAno = Number(idade.value)
  var idadeAtual = anoAtual - idadeAno
  var mostra = document.getElementById('resultado')
  mostra.innerHTML = `<h1>Você tem ${idadeAtual}</h1>`

  //if (){

  

}

