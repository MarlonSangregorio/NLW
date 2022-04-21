//DOM Document Object Model
//toggle significa troca

/*abre e fecha o menu ao clicar no icone: hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const elemento of toggle) {
  elemento.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconder o menu!*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
//mudar o cabeçalho da pag quando scroll

const header = document.querySelector('header')
const navHeight =
  header.offsetHeight /
  window.addEventListener('scroll', function () {
    if (window.scrollY >= newHeight) {
      //maior que a altura do cabeçalho
      header.classList.add('scroll')
    } else {
      //menor que a altura do cabeçalho
      header.classList.remove('scroll')
    }
  })

/*Carrosel Slider das Testemunhas */

const swiper = new Swiper('.swiper', {
  //declarando objeto
  slidesPreView: 1, //quantos slides eu quer over
  pagination: {
    el: '.swiper-pagination' //buscando o elemento swiper-pagination
  },
  mousewheel: true, //funciona a rodinha do mouse
  keyboard: true //funciona as setas do teclado
})

/*ScrollReveal efeito de tela descendo */

const scrollReveal = ScrollReveal({
  origin: 'top', //começar do topo da pág
  distance: '30px', //distancia
  duration: 700, //duraçao em milisegundos
  reset: true //quando eu baixar tudo a pág,
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .text .card,
  #depositions header, #depositions .depositions,
  #contact .text, #contact .links
`,
  { interval: 100 }
)
