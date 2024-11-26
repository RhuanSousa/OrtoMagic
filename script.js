

// Interação do botão entrar da tela inicial
var botaoEntrar = document.querySelector('.BotaoEntrar');
      botaoEntrar.addEventListener('click', function() {
        document.getElementById('popupLogin').style.display = 'block';
      });
      // Interação do X 
      var xButton = document.querySelector('.XCircleContained');
  xButton.addEventListener('click', function() {
    document.getElementById('popupLogin').style.display = 'none';
  });

      var inscrevase = document.querySelector('.ButtonInscrevaSe');
      inscrevase.addEventListener('click', function(){

      });

      const inputElement = document.getElementById('textoDigitavel');

// Quando o usuário terminar de digitar (ao pressionar Enter ou ao perder o foco):
inputElement.addEventListener('blur', () => {
  const texto = inputElement.value; // Armazena o texto digitado em uma variável
  console.log("Texto digitado:", texto);
});



