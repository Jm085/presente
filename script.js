const motivos = [
    "Você é minha fonte de felicidade.",
    "Seu sorriso ilumina meu dia.",
    "Eu adoro a forma como você me faz sentir.",
    "A cada dia, você me surpreende de uma maneira nova.",
    "Você é o melhor abraço do mundo.",
    "Sua voz é minha melodia favorita.",
    "Eu amo sua risada, ela é contagiante.",
    "Você sempre sabe como me animar.",
    "A maneira como você me olha me faz sentir especial.",
    "Você sempre está ao meu lado, não importa a situação.",
    "A forma como você cuida de mim é incomparável.",
    "Eu amo a sua energia positiva.",
    "Estar com você faz tudo valer a pena.",
    "Eu confio em você completamente.",
    "Sua gentileza me encanta a cada dia.",
    "Adoro compartilhar momentos com você.",
    "Você é minha melhor companhia.",
    "Eu amo a forma como você entende minhas necessidades.",
    "Você sempre me faz querer ser uma pessoa melhor.",
    "Eu sou grato por cada momento ao seu lado.",
    "Com você, tudo fica mais fácil.",
    "Adoro como você cuida dos pequenos detalhes.",
    "Sua presença é o meu maior conforto.",
    "Eu aprendo tanto com você todos os dias.",
    "Você é a razão do meu sorriso diário.",
    "Eu te amo mais a cada dia."
  ];
  
  let index = 0; // Inicializa com 0 motivos visíveis
  const motivosContainer = document.getElementById("motivos-container");
  const mostrarMaisBtn = document.getElementById("mostrarMais");
  const mostrarMenosBtn = document.getElementById("mostrarMenos");
  
  function exibirMotivos() {
    motivosContainer.innerHTML = ""; // Limpa os motivos exibidos
    for (let i = 0; i < index; i++) {
      const motivoElement = document.createElement("p");
      motivoElement.innerText = motivos[i];
      motivosContainer.appendChild(motivoElement);
    }
  }
  
  // Ao clicar no "Mostrar Mais", mostra 5 motivos
  mostrarMaisBtn.addEventListener("click", function() {
    index = index + 5 <= motivos.length ? index + 5 : motivos.length; // Incrementa 5 motivos
    exibirMotivos();
    if (index >= motivos.length) {
      mostrarMaisBtn.style.display = "none"; // Esconde o botão de "Mostrar Mais" se não houver mais motivos
    }
    mostrarMenosBtn.style.display = "inline-block"; // Exibe o botão de "Mostrar Menos"
  });
  
  // Ao clicar no "Mostrar Menos", remove 5 motivos
  mostrarMenosBtn.addEventListener("click", function() {
    index = index - 5 >= 5 ? index - 5 : 5; // Decrementa 5 motivos
    exibirMotivos();
    if (index <= 5) {
      mostrarMenosBtn.style.display = "none"; // Esconde o botão de "Mostrar Menos" se houver 5 ou menos motivos
    }
    mostrarMaisBtn.style.display = "inline-block"; // Exibe o botão de "Mostrar Mais"
  });
  
  // Não exibe nenhum motivo inicialmente
  mostrarMaisBtn.style.display = "inline-block";
  mostrarMenosBtn.style.display = "none"; // "Mostrar Menos" começa invisível

  
  // Função para gerar corações caindo
function gerarCoracoes() {
    const totalCorações = 10; // Quantos corações caem por vez
    for (let i = 0; i < totalCorações; i++) {
      const coração = document.createElement("div");
      coração.classList.add("heart");
      coração.innerHTML = "💖"; // Ícone do coração
      document.body.appendChild(coração);
  
      // Posição aleatória
      const posX = Math.random() * window.innerWidth;
      const delay = Math.random() * 3; // Atraso aleatório para a animação
      coração.style.left = `${posX}px`;
      coração.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duração aleatória
  
      // Remove o coração depois de cair
      setTimeout(() => {
        coração.remove();
      }, 5000); // O coração desaparece depois de cair
    }
  }
  
  // Gerar corações periodicamente
  setInterval(gerarCoracoes, 2000); // A cada 2 segundos
  