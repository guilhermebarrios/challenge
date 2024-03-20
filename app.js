const textArea = document.querySelector(".input__text");
const mensagem = document.querySelector(".mensagem");

function btnencriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i= 0; i< matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[1][1] );
        }
    }
    return stringEncriptada;
}

function btndesencriptar(){
    const textoDencriptado = desencriptar(textArea.value);
    mensagem.value = textoDencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"] , ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i= 0; i< matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[1][0] );
        }
    }
    return stringDesencriptado;
}