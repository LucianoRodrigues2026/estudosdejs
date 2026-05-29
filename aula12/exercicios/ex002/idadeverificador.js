
function clicou() {
  var data = new Date()
  var anoAtual = data.getFullYear()
  var idade = document.getElementById('Idade')
  var idadeAno = Number(idade.value)
  var idadeAtual = anoAtual - idadeAno
  var mostra = document.getElementById('resultado')
  var img = document.getElementById('imagem')

  if (idade.value.length == 0 || idadeAno > anoAtual){
    window.alert('calma velinho preencha os dados corretamente')
    return
  }

  var sexo = document.getElementsByName('genero')
  var genero = ""

  if (sexo[0].checked && idadeAtual <= 12) {
    genero = "Menina"
    mostra.innerHTML = `<h1>Você e uma ${genero} de ${idadeAtual} anos</h1>`
    img.style.display = 'block'
    img.style.backgroundImage = "url('fotos/menina.jpg')"
  }else if (sexo[0].checked && idadeAtual <= 25){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma jovem ${genero} de ${idadeAtual} anos</h1>`
    img.style.display = 'block'
    img.style.backgroundImage = "url('fotos/jmulher.jpg')"

  }else if (sexo[0].checked && idadeAtual <= 60){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma ${genero} de ${idadeAtual} anos</h1>`
    img.style.display = 'block'
    img.style.backgroundImage = "url('fotos/mulher.jpg')"

  }else if (sexo[0].checked && idadeAtual > 60){
    genero = "Mulher"
    mostra.innerHTML = `<h1>Você e uma senhora${genero} de ${idadeAtual} anos</h1>`
    img.style.display = 'block'
    img.style.backgroundImage = "url('fotos/idosa.jpeg')"
  
  }else{
    if (sexo[1].checked && idadeAtual <= 12) {
      genero = "Menino"
      mostra.innerHTML = `<h1>Você e um ${genero} de ${idadeAtual} anos</h1>`
      img.style.display = 'block'
      img.style.backgroundImage = "url('fotos/menino.jpg')"

    }else if (sexo[1].checked && idadeAtual <= 25){
    genero = "Homen"
    mostra.innerHTML = `<h1>Você e um jovem ${genero} de ${idadeAtual} anos</h1>`
    img.style.display = 'block'
    img.style.backgroundImage = "url('fotos/joevm.jpg')"

    }else if (sexo[1].checked && idadeAtual <= 60){
      genero = "Homen"
      mostra.innerHTML = `<h1>Você e um ${genero} de ${idadeAtual} anos</h1>`
      img.style.display = 'block'
      img.style.backgroundImage = "url('fotos/homen.jpeg')"

    }else if (sexo[1].checked && idadeAtual > 60){
      genero = "Homen"
      mostra.innerHTML = `<h1>Você e um senhor ${genero} de ${idadeAtual} anos</h1>`
      img.style.display = 'block'
      img.style.backgroundImage = "url('fotos/idoso.jpeg')"

    }
  }
  
}