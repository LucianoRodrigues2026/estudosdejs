 function apload(){
      var horaAtual = new Date()
      var horaControle = horaAtual.getHours()
      var texthora = document.getElementById('texto')
      var imagem = document.getElementById('img')
      var corpo = document.getElementById('corpo')
    


      // insere uma nova tag  h2 com a hora atual do servidor
      texthora.innerHTML = `<h2> São essatament ${horaControle} horas </h2>`

      if (horaControle > 5 && horaControle <= 12){
        corpo.style.backgroundColor =  '#a8a1a8'       
        imagem.style.backgroundImage = "url('img/manha.jpg')"

      } else if (horaControle > 12 && horaControle <= 18){
        corpo.style.backgroundColor =  '#ba9a5a'  
        imagem.style.backgroundImage = "url('img/tarde.jpg')"

      }else if (horaControle >= 0 && horaControle <= 5){
        texthora.innerHTML = `<h2> Ainda são ${horaControle} horas deixa eu dormir</h2>`
        corpo.style.backgroundColor =  '#141313'  
        imagem.style.backgroundImage = "url('img/tarde.jpg')"

      }else {
        corpo.style.backgroundColor =  '#987092'  
         imagem.style.backgroundImage = "url('img/noite.jpg')"
      }
    }