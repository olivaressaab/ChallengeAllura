function autoResize() {

  const mainTextArea = document.getElementById("initialText");

  
  const previousScrollHeight = mainTextArea.scrollHeight;

  
  if (mainTextArea.scrollHeight > previousScrollHeight) {
    mainTextArea.scrollTop = mainTextArea.scrollHeight;
  }
}