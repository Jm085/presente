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
  "Amo receber seus bom dias.",
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

let grupoAtual = 0;
const tamanhoGrupo = 5;

const motivosContainer = document.getElementById("motivos-container");
const mostrarMaisBtn = document.getElementById("mostrarMais");
const mostrarMenosBtn = document.getElementById("mostrarMenos");

let timeoutIds = []; // Guardar timeouts ativos

function limparAnimacoes() {
  timeoutIds.forEach(clearTimeout);
  timeoutIds = [];
}

function exibirGrupo() {
  limparAnimacoes(); // Interrompe qualquer animação anterior
  motivosContainer.innerHTML = "";

  const inicio = grupoAtual * tamanhoGrupo;
  const fim = Math.min(inicio + tamanhoGrupo, motivos.length);

  let i = inicio;

  function digitarMotivo() {
    if (i >= fim) return;

    const motivo = motivos[i];
    const motivoElement = document.createElement("p");
    motivoElement.classList.add("motivo");
    motivosContainer.appendChild(motivoElement);

    let j = 0;

    function digitarLetra() {
      if (j < motivo.length) {
        motivoElement.innerHTML += motivo[j] === " " ? "&nbsp;" : motivo[j];
        j++;
        const id = setTimeout(digitarLetra, 20);
        timeoutIds.push(id);
      } else {
        i++;
        const id = setTimeout(digitarMotivo, 100);
        timeoutIds.push(id);
      }
    }

    digitarLetra();
  }

  digitarMotivo();

  mostrarMenosBtn.style.display = grupoAtual > 0 ? "inline-block" : "none";
  mostrarMaisBtn.style.display = fim < motivos.length ? "inline-block" : "none";
}

// Eventos
mostrarMaisBtn.addEventListener("click", () => {
  if ((grupoAtual + 1) * tamanhoGrupo < motivos.length) {
    grupoAtual++;
    exibirGrupo();
  }
});

mostrarMenosBtn.addEventListener("click", () => {
  if (grupoAtual > 0) {
    grupoAtual--;
    exibirGrupo();
  }
});

// Inicializa
exibirGrupo();

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
