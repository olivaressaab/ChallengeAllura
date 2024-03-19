const campoTexto = document.getElementById("initialText");
const campoMensaje = document.getElementById("encrypted");
const notInfo= document.getElementById("decryptorTexts");
const fill= document.getElementById("decryptorElements");
 
console.log(campoTexto, campoMensaje);
 
function btnEncriptar(){
    const texto = encrypt(campoTexto.value);
    campoMensaje.value = texto;
    if (texto != "") {
        notInfo.style.display = "none";
        fill.style.display="flex"; 
    }
    
}
 
function encrypt(value){
    let newValue=value.replace(/e/g,'enter')
     .replace(/i/g,'imes')
     .replace(/a/g,'ai')
     .replace(/o/g,'ober')
     .replace(/u/g,'ufat')
    console.log(newValue);
    return newValue;
}
 
function decrypt(value){
    let newValue=value.replace(/enter/g,'e')
     .replace(/imes/g,'i')
     .replace(/ai/g,'a')
     .replace(/ober/g,'o')
     .replace(/ufat/g,'u')
    console.log(newValue);
    return newValue;
}
 
 
 
function btnDesencriptar() {
    const texto = decrypt(campoMensaje.value);
    campoMensaje.value = texto;
    if (texto != "") {
        notInfo.style.display = "none";
        fill.style.display="flex"; 
    }
}