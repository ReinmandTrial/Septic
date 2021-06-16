
window.onload = function(){
  //popup
  var btn = document.getElementById('btn-popup');
  var popup = document.getElementById('popup');
  var close = document.getElementById('close');
  btn.onclick = function(){
    popup.classList.remove("d-none");
  }
  close.onclick = function(){
    popup.classList.add("d-none");
  }
  popup.addEventListener('click', function(event) {
    var e=document.getElementById('body');
    if (!e.contains(event.target)) popup.classList.add("d-none");
  });
  //popup end

  const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true
  });
  const swiperSecond = new Swiper('.swiper-content__second', {
    speed: 400,
    slidesPerView: 4, //кол-во показываемых слайдов
    watchOverflow: true, //если слайдов мало, - слайдер отключается
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      992: {
        spaceBetween: 300,
      },
      1200: {
        spaceBetween: 100,
      },
      1400: {
        spaceBetween: 30,
      }

    }
  });

//плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//плавная прокрутка конец
}