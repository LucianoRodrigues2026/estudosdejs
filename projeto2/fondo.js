 let cores = ['#e3c0d3', '#95818d', '#576066', '#2c514c', '#122932']
 let começo = 0

function fundo(){
  let corpo = document.getElementById('corpo')
  let botao = document.getElementById('cor')

  corpo.style.backgroundColor = cores[começo]
  botao.style.color = cores[começo]

  começo ++

  if (começo >= cores.length){
    começo = 0
  }else {
    começo == começo

  }


}