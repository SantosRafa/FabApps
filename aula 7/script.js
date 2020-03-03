function validacao(){
    var valor = document.getElementById("numero").value;
    var nomeValor = document.getElementById("nome").value;

        if(valor.length > 2){
            alert("Digite 2 numeros ou menos"); 
            document.formulario.numero.focus();
            return false;
        }else if (nomeValor.length < 3){
            alert("Seu nome não pode ter apenas 3 caracteres");
            document.formulario.nome.focus();
        }else{
            alert("Formulario enviado")
            return true;
        }
}