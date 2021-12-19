function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var nmsg = window.document.getElementById('newmsg');
    var data = new Date();
    var hora = data.getHours();
    var minutes = data.getMinutes();
    

    msg.innerHTML = `Neste momento são: ${hora} horas e ${minutes} minutos. `

    if( hora >= 0 && hora <12){
        //BOM DIA
        img.src = 'morning.png';
        document.body.style.background = '#aa8d7a';
        nmsg.innerHTML = `Olá, bom dia!`
    }else if( hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'evening.png';
        document.body.style.background = '#fea130';
        nmsg.innerHTML = `Olá, boa tarde!`
    }else{
        //BOA NOITE
        img.src = 'nigtt2.png';
        document.body.style.background = '#1b4946';
        nmsg.innerHTML = `Olá, boa noite!`
    }



}