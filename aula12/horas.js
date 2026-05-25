var agora = new Date()
var hora = agora.getHours()
if (hora < 12 && hora > 6){
  console.log(`bom dia, sao exatamente ${hora}`)
}else if (hora >= 12 && hora <= 18){
  console.log(`Boa tarde. agora são exatamente ${hora}`)
}else if (hora >= 1 && hora <= 5){
  console.log(`boa madrugada o dia so estra comesando, agora sao exatamente ${hora}`)
}else {
  console.log(`boa noite, ja esta quase na hora de dormir agora são exatamente ${hora}`)
}
