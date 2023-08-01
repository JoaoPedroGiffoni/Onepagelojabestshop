window.addEventListener("scroll", function() {
    var navbar = document.getElementById("itenstopo");
    var scrolled = window.pageYOffset;
  
    // Defina a altura da transição que deseja para aplicar o efeito
    var transitionHeight = 100; // Neste exemplo, usamos 100 pixels como ponto de transição
  
    if (scrolled > transitionHeight) {
      navbar.classList.add("scrolling"); // Adiciona a classe "scrolling" para aplicar o estilo
    } else {
      navbar.classList.remove("scrolling"); // Remove a classe "scrolling" para reverter o estilo
    }
  });
 
  