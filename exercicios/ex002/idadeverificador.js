
function clicou() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var idade = document.getElementById('Idade')
  var idadeAno = Number(idade.value)
  var idadeAtual = anoAtual - idadeAno
  var mostra = document.getElementById('resultado')

  if (idade.value.length == 0 || idadeAno > anoAtual){
    window.alert('calma velinho preencha os dados corretamente')
    return
  }
  

  var sexo = document.getElementsByName('genero')
  var genero = ""
  if (sexo[0].checked && idadeAtual <= 12) {
    genero = "Menina"
    mostra.innerHTML = `<h1>Você e uma ${genero} de ${idadeAtual} anos</h1>`
  }else if (sexo[0].checked && idadeAtual <= 25){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma jovem ${genero} de ${idadeAtual} anos</h1>`
  }else if (sexo[0].checked && idadeAtual <= 60){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma ${genero} de ${idadeAtual} anos</h1>`
  }else if (sexo[0].checked && idadeAtual > 60){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma senhora${genero} de ${idadeAtual} anos</h1>`
  }else{
    if (sexo[1].checked && idadeAtual <= 12) {
      genero = "Menino"
      mostra.innerHTML = `<h1>Você e uma ${genero} de ${idadeAtual} anos</h1>`
    }else if (sexo[0].checked && idadeAtual <= 25){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma jovem ${genero} de ${idadeAtual} anos</h1>`
    }else if (sexo[0].checked && idadeAtual <= 60){
      genero = "Mulher"
      mostra.innerHTML = `<h1>Você e uma ${genero} de ${idadeAtual} anos</h1>`
    }else if (sexo[0].checked && idadeAtual > 60){
      genero = "Mulher"
      mostra.innerHTML = `<h1>Você e uma senhora${genero} de ${idadeAtual} anos</h1>`
    }
  }
  
}