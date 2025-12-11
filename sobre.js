// Alternar menu mobile
const botaoMenu = document.querySelector('.menu-toggle');
const menuMobile = document.getElementById('mobileMenu');

botaoMenu?.addEventListener('click', () => {
  menuMobile.classList.toggle('show');
});

// Alternar modo claro/escuro
document.getElementById('modo-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('modo-claro');
});



function mudarSlide(index) {
    const slides = document.querySelectorAll('.carrossel .slide');
    const botoes = document.querySelectorAll('.carrossel .botao');

    // Remove a classe 'ativo' de todos os slides
    slides.forEach((slide) => {
        slide.classList.remove('ativo');
        slide.style.opacity = 0;
    });

    // Adiciona a classe 'ativo' ao slide correspondente
    slides[index].classList.add('ativo');
    slides[index].style.opacity = 1;

    // Atualiza o estado dos botões
    botoes.forEach((botao) => {
        botao.classList.remove('ativo');
    });
    botoes[index].classList.add('ativo');
}

let currentIndex = 0;
const slides = document.querySelectorAll('.carrossel .slide');
const totalSlides = slides.length;

function proximoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    mudarSlide(currentIndex);
}

// Inicia o carrossel de texto
mudarSlide(currentIndex);
setInterval(proximoSlide, 5000);

// Event listener para os botões
document.querySelectorAll('.carrossel .botao').forEach((botao, index) => {
    botao.addEventListener('click', () => mudarSlide(index));
});

// ====== Carrossel de Imagens (galeria de várias imagens) ======

let posicaoAtual = 0;
const slideGaleria = document.querySelector('.slides-galeria');
const totalSlidesGaleria = document.querySelectorAll('.slides-galeria img').length;
const larguraImagem = 280; // largura + margem

function moverGaleria(direcao) {
    posicaoAtual += direcao;

    if (posicaoAtual < 0) {
        posicaoAtual = 0;
    }
    if (posicaoAtual > totalSlidesGaleria - 3) { // mostra 3 imagens de cada vez
        posicaoAtual = totalSlidesGaleria - 3;
    }

    slideGaleria.style.transform = `translateX(${-posicaoAtual * larguraImagem}px)`;
}

