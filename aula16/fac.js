function fatorial(numero){
  var fator = 1
  for(var veri = numero; veri >= 1; veri-- ){
    var mult = fator * veri
    fator = mult
    if (numero == fator){
      console.log(`${veri} x ${veri-1} = ${mult} `)
    }else{
      console.log(`${veri} x ${mult} = ${mult}`)
    }
    
  }
  return(fator)
}
var fac = fatorial(5)
console.log(fac)