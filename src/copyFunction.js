function copyText() {
  // Obtener elementos del DOM
  const textareaEncrypted = document.getElementById("encrypted");
  const buttonCopy = document.getElementById("copy");
  let decryptorInf = document.getElementById("decryptorTexts");
  let decryptorElments = document.getElementById("decryptorElements");


  try {
    // Intentar copiar el texto al portapapeles
    let copiedText = navigator.clipboard
      .writeText(textareaEncrypted.value)
      .then(() => {
        // Acciones después de copiar el texto
        buttonCopy.innerText = "";
        buttonCopy.disabled = true;
        buttonCopy.classList.add("ok"); 

        // Restaurar el botón de copiar y la visualización de los elementos
        setTimeout(function () {
          buttonCopy.classList.remove("ok");
          buttonCopy.innerText = "Copiar";
          buttonCopy.disabled = false;
          decryptorInf.style.display = "flex";
          decryptorElments.style.display = "none";

          // Desplazarse al logotipo en dispositivos móviles
          if (
            window.matchMedia("(max-width: 425px)").matches ||
            window.matchMedia("(max-width: 868px)").matches
          ) {
            const destination = document.getElementById("logoA");
            destination.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 1500);
      })
     ;
  } catch (error) {
   
    console.error("Error", error);
    alert("Por favor intente nuevamente.");
  } finally {
   
    window.getSelection().removeAllRanges();
  }
}
