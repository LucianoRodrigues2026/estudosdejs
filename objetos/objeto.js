let amigo = {
  nome:'josé', 
  idade:21,
  peso:85.4,

  emgordar(p=0){
    //console.log('emgordar')
    this.peso += p
  }

}

amigo.emgordar(2)
console.log(`${amigo.nome} vc esta com peso ${amigo.peso}kg, com ${amigo.idade} anos!!`)
