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

let index = 0; // Para controlar até onde vamos na lista de motivos
const motivosContainer = document.getElementById("motivos-container");
const mostrarMaisBtn = document.getElementById("mostrarMais");
const mostrarMenosBtn = document.getElementById("mostrarMenos");

let ultimoIndex = 0; // Guardando até onde mostramos

// Função para exibir os motivos com efeito de digitação
function exibirMotivos() {
  motivosContainer.innerHTML = ""; // Limpa os motivos exibidos
  let i = ultimoIndex;

  function digitarMotivo() {
    if (i >= index) return;

    const motivo = motivos[i];
    const motivoElement = document.createElement("p");
    motivoElement.classList.add("motivo");
    motivosContainer.appendChild(motivoElement);

    let j = 0;

    function digitarLetra() {
      if (j < motivo.length) {
        motivoElement.innerHTML += motivo[j] === " " ? "&nbsp;" : motivo[j];
        j++;
        setTimeout(digitarLetra, 25); // Velocidade de digitação
      } else {
        i++;
        setTimeout(digitarMotivo, 100); // Tempo entre os motivos
      }
    }

    digitarLetra();
  }

  digitarMotivo();
  ultimoIndex = index; // Atualiza o índice de onde parou
}

// Mostrar mais 5 motivos
mostrarMaisBtn.addEventListener("click", function () {
  mostrarMaisBtn.disabled = true;
  mostrarMenosBtn.disabled = true;

  index = index + 5 <= motivos.length ? index + 5 : motivos.length;
  exibirMotivos();

  setTimeout(() => {
    mostrarMaisBtn.disabled = false;
    mostrarMenosBtn.disabled = false;
  }, 2000);

  if (index >= motivos.length) {
    mostrarMaisBtn.style.display = "none"; // Esconde o "Mostrar Mais" se não houver mais motivos
  }

  mostrarMenosBtn.style.display = "inline-block"; // Exibe o botão "Mostrar Menos"
});

// Mostrar menos 5 motivos
mostrarMenosBtn.addEventListener("click", function () {
  // Reseta o índice para o início dos 5 primeiros
  index = index - 5 >= 5 ? index - 5 : 5;
  ultimoIndex = index;

  // Exibe novamente os 5 primeiros motivos (limpa o container e reexibe)
  exibirMotivos();

  // Esconde o botão "Mostrar Menos" se houver 5 ou menos motivos
  if (index <= 5) {
    mostrarMenosBtn.style.display = "none";
  }

  mostrarMaisBtn.style.display = "inline-block"; // Exibe o botão "Mostrar Mais"
});

// Inicialização: Sem nenhum motivo visível
mostrarMaisBtn.style.display = "inline-block";
mostrarMenosBtn.style.display = "none"; // Começa invisível

// Corações caindo
function gerarCoracoes() {
  const totalCorações = 10;
  for (let i = 0; i < totalCorações; i++) {
    const coração = document.createElement("div");
    coração.classList.add("heart");
    coração.innerHTML = "💖";
    document.body.appendChild(coração);

    const posX = Math.random() * window.innerWidth;
    coração.style.left = `${posX}px`;
    coração.style.animationDuration = `${Math.random() * 2 + 3}s`;

    setTimeout(() => {
      coração.remove();
    }, 5000);
  }
}

setInterval(gerarCoracoes, 2000);
