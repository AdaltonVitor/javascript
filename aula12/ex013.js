var agora = new Date()
var dia = agora.getDay()/*
 disa dasemana
 0 = domingo
 1 = segunda
 2 = terça eaasim sucetivamente
 ate sabado = 6
*/

console.log(dia)

switch(dia){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
         console.log('Quinta') 
         break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
         
}