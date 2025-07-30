// Zoom out da primeira seção
gsap.to("header.init", {
  scale: 0.8,
  opacity: 0,
  ease: "power1.out",
  scrollTrigger: {
    trigger: "header.init",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Anima a entrada da seção Projetos Pessoais
gsap.fromTo("#project", 
  { scale: 0.8, opacity: 0 }, 
  { 
    scale: 1, 
    opacity: 1, 
    ease: "power1.out", 
    scrollTrigger: {
      trigger: "#project",
      start: "top 80%",
      end: "top 30%",
      scrub: true
    }
  });

window.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudoProjeto");
  const lista = document.getElementById("listaProjetosAnimada");
  const itens = lista.querySelectorAll("li");
  const btnCima = document.getElementById("btn-cima");
  const btnBaixo = document.getElementById("btn-baixo");

  let atual = 0;

  function atualizarLista() {
    itens.forEach((item, index) => {
      if (index === atual) {
        item.classList.add("ativo");
        item.style.opacity = "1";
        item.style.pointerEvents = "auto";
      } else {
        item.classList.remove("ativo");
        item.style.opacity = "0.5";
        item.style.pointerEvents = "none";
      }
    });

    // Move a lista para "scrollar"
    const deslocamento = atual * 40; // 40px é a altura do <li>
    lista.style.transform = `translateY(${-deslocamento}px)`;

    conteudo.innerHTML = conteudos[atual];
  }

  // Botão para cima
  btnCima.addEventListener("click", () => {
    atual = (atual - 1 + itens.length) % itens.length;
    atualizarLista();
  });

  // Botão para baixo
  btnBaixo.addEventListener("click", () => {
    atual = (atual + 1) % itens.length;
    atualizarLista();
  });

  // Clique nos itens da lista
  itens.forEach(item => {
    item.addEventListener("click", () => {
      atual = parseInt(item.getAttribute("data-index"));
      atualizarLista();
    });
  });

  atualizarLista(); // Inicia com o primeiro projeto
});

  const hamburger = document.getElementById('hamburger');
  const navMenus = document.querySelectorAll('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenus.forEach(menu => {
      menu.classList.toggle('show');
    });
  });

  window.addEventListener('scroll', () => {
  const myself = document.querySelector('.myself');
  const triggerPoint = window.innerHeight * 0.8;
  const top = myself.getBoundingClientRect().top;

  if (top < triggerPoint) {
    myself.classList.add('visible');
  }
});

window.addEventListener('scroll', () => {
  const contato = document.querySelector('.contato');
  const top = contato.getBoundingClientRect().top;
  const trigger = window.innerHeight * 0.8;
  if (top < trigger) {
    contato.classList.add('visible');
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  const nome = form.querySelector("input[name='nome']").value;
  const email = form.querySelector("input[name='email']").value;

  if (!nome || !email) {
    e.preventDefault();
    form.classList.add("invalid");
    setTimeout(() => form.classList.remove("invalid"), 500);
  }
});

