function apertoucuzao(){
    console.log('apertou hein (@_@)');
}

function soltouomouse(){
    console.log('agora soltou né T-T');
}

function passouomouse(){
    console.log('passou o mouse aqui né safado ( ͡° ͜ʖ ͡°)');
}

function tirouomouse(){
    console.log('Agora você tirou o mouse ne safadinho ( ͡° ͜ʖ ͡°) ')
}

function tecladoApertado(event){
     console.log("teclado apertado "+ event.keyCode);
     console.log("shift apertado "+event.shiftKey);
     console.log("shift apertado "+event.ctrlKey);

    if (event.keyCode == 13){
        console.log("Você apertou o enter");
    }
}

function soltouTeclado(event){
    console.log("Soltou o teclado")
}

function apertouTeclado(event){
    console.log("apertou uma tecla")
}