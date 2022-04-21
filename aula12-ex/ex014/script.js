function carregar(){
    var msg =window.document.getElementById('msg')
    var img =window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    
    
   
    msg.innerHTML = `agora sao ${hora} horas`
    if(hora >= 0 && hora < 12 ){
        //bomdia
        img.src = 'foto-manha.png'
        document.body.style.background = 'rgb(235, 223, 200)'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = 'rgb(99, 66, 88)'
    }else{
        //boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#332924'
    }
}
