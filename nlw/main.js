/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */
/*é a sombra que é ativada quando rola a pagina*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      /*true sig. verdadeiro*/
      /*menor ou maior quero que seja 2*/
      slidesPerView: 1,
      /* slidesPerView: 2, aqui é a quantidade de slides que vão aparecer*/
      setWrapperSize: true /*isso vai fazer que os dois apareçam por seção*/
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

/*é a sequencia para aparecer na pagina*/
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo */
/*para quando eu for rolar o botão aparecer em determinado ponto da tela*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*menu ativo conforme a seção visivel la pagina*/
const sections =
  document.querySelectorAll(
    'main section[id]'
  ) /*pega todas as seçoes que contem um atributo id*/
/*foi colocado para fora para a função buscar so os elementos especificos e nao todos os elementos*/
function activateMenuAtCurrentSection() {
  /*ativa o menu na seção do momento*/
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  /*pega da pagina o deslocamento y e pega o tamanho da janela e divide por 8*/

  /*para cada seção*/
  for (const section of sections) {
    /*pega o top da seção/altura e id..as seçoes sao home about e etc*/
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
      /*+ sectionId + isso vai se transformar no home ou outra da seçao*/
    }
  }
}

/*When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
