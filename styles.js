function toggleMenu() {
  const menu = document.getElementById("menuLateral");
  menu.classList.toggle("show");
}

function mostrarFuncionalidade(tipo) {
  document.querySelectorAll(".funcionalidade").forEach((div) => {
    div.classList.remove("active");
  });

  document.getElementById(tipo).classList.add("active");

  // Fecha o menu lateral automaticamente ao clicar em uma funcionalidade (somente no mobile)
  if (window.innerWidth <= 768) {
    document.getElementById("menuLateral").classList.remove("show");
  }
}

//carrossel d imagens
let index = 0;
const images = document.querySelectorAll(".carousel-item");
const container = document.querySelector(".carousel-container");
function mostrarImagem() {
  const largura = images[0].clientWidth;
  container.style.transform = `translateX(-${
    index * largura
  }px)`; /* Move suavemente */
}
function mudarImagem(direcao = 1) {
  index += direcao;
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  mostrarImagem();
}
// Troca de imagem automaticamente a cada 3 segundos
setInterval(() => {
  mudarImagem(1);
}, 3000);

//sobre
const textoOriginal = `
Ventris Mariae – que significa "Ventre de Maria" – é mais do que uma biblioteca digital; é um espaço sagrado de evangelização, aprendizado e aprofundamento na doutrina católica. 

Aqui, os fiéis podem encontrar uma vasta coleção de livros católicos, que iluminam o coração e fortalecem a fé. 

Acreditamos que, assim como do ventre de Maria nasceu o Salvador, desse espaço podem surgir novos santos, novos corações ardentes pelo amor de Deus, espalhando Sua luz por todos os lugares. 

Assim como Jesus afirmou:

> “Meus irmãos são aqueles que fazem a vontade do meu Pai” (Mt 12,50).

Ser santo não é um chamado distante, mas uma vocação acessível a todos que desejam seguir os ensinamentos de Cristo com fidelidade e entrega. 

A biblioteca Ventris Mariae não apenas guarda conhecimento, mas inspira almas, permitindo que a verdade do Evangelho transforme vidas. 

Que este espaço sirva como um instrumento de graça, onde cada livro seja um caminho para compreender melhor a vontade de Deus, viver Sua Palavra e, assim, trazer ao mundo o amor divino. 

🌿 Que Maria, Mãe da Igreja, acompanhe cada leitor nesta jornada de fé! ✝️📖
`;

const sobreDiv = document.getElementById("sobreDiv");
const textoElement = document.getElementById("texto");

let jaDigitado = false; // Variável para garantir que a digitação ocorra apenas uma vez

function digitar() {
  if (jaDigitado) return; // Impede que o texto seja digitado novamente
  jaDigitado = true; // Marca que a animação já foi executada

  textoElement.innerHTML = "";
  let index = 0;

  function escrever() {
    if (index < textoOriginal.length) {
      textoElement.innerHTML += textoOriginal.charAt(index);
      index++;
      setTimeout(escrever, 50);
    }
  }
  escrever();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sobreDiv.classList.remove("escondido");
        digitar(); // Apenas executa a digitação se ainda não tiver sido feita
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(sobreDiv);

//sugestao

function enviarSugestao() {
  let sugestao = document.getElementById("sugestao").value;

  if (sugestao.trim() !== "") {
    localStorage.setItem("sugestaoUsuario", sugestao); // Armazena a sugestão temporariamente
    document.getElementById("modalConfirmacao").style.display = "block"; // Exibe o modal
    document.getElementById("sugestao").value = ""; // Limpa o campo
  } else {
    alert("⚠️ Por favor, escreva uma sugestão antes de enviar!");
  }
}

function fecharModal() {
  document.getElementById("modalConfirmacao").style.display = "none"; // Esconde o modal
}







function mostrarReza(dia) {
  var todasRezas = document.querySelectorAll(".conteudo-reza");

  // Esconder todas as orações
  todasRezas.forEach(function(reza) {
      reza.style.display = "none";
  });

  // Mostrar apenas a oração selecionada
  document.getElementById(dia).style.display = "block";
}


//rezas
function showPrayer(id) {
  document
    .querySelectorAll(".prayer-container")
    .forEach((el) => (el.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

function showMystery(day) {
  document
    .querySelectorAll(".mystery-container")
    .forEach((el) => (el.style.display = "none"));
  document.getElementById(day).style.display = "block";
}

//cursos
function showCourse(courseId) {
  document.getElementById("course-selection").style.display = "none";
  let courses = document.getElementsByClassName("course-content");
  for (let i = 0; i < courses.length; i++) {
    courses[i].style.display = "none";
  }
  document.getElementById(courseId).style.display = "block";
}

function goBack() {
  let courses = document.getElementsByClassName("course-content");
  for (let i = 0; i < courses.length; i++) {
    courses[i].style.display = "none";
  }
  document.getElementById("course-selection").style.display = "flex";
}