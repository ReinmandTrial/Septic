$(function(){
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
  //faq
  $('.btn-toggle').on('click',function(){
    var count=0;
    var btn = $(this);
    var btnItems = btn.closest('.faq-question').find('.btn-toggle');
    var bodyItems = btn.closest('.toggle-block').find('.toggle__item');
    //десктоп
    if($(window).width() > "767"){
      // стили кнопки
      $(btnItems).each(function(){
        $(this).removeClass('open');
      })
      btn.addClass('open');
      //индекс нужного блока
      $(btnItems).each(function(index){
        if($(this).hasClass('open')){
          count = index;
        }
      })
      // скрываем все блоки и открываем нужный
      $(bodyItems).each(function(index){
        $(this).removeClass('open');
        if(index != count){
          $(this).hide('slow');
        }else{
          $(this).show('slow'); 
        }
      })
    }else{
      //мобила
      $($('.faq-question').find('.toggle-block')).each(function(){
        $(this).find('.btn-toggle').removeClass('open');
        $(this).find('.toggle__item').hide('slow');
      })
      $(this).addClass('open');
      $(this).next().show('slow');
    }
  })
  // конец

  // изменение блоков faq
  var mobile = ()=> {
    var btn = $('.btn-toggle');
    var btnItems = btn.parent().find('.btn-toggle');
    var bodyItems = $('.toggle__body').find('.toggle__item')
    if(!$('.faq-question').find('div').hasClass('toggle-block')){
      $(btnItems).each(function(){
          $(this).wrap('<div class="toggle-block"></div>');
      })
      $(bodyItems).each(function(index){
        var block = $(this);
        $($('.faq-question').find('.toggle-block')).each(function(i){
          if(i === index){
            $(this).append(block);
          }
        })
      })
    }
  }
  var desctop = ()=>{
    var btn = $('.btn-toggle');
    var btnItems = btn.parent().find('.btn-toggle');
    var bodyItems = $('.toggle__body').find('.toggle__item');
    if($('.faq-question').find('div').hasClass('toggle-block')){
      $($('.faq-question').find('.toggle-block')).each(function(){
        $('.toggle__body').append($(this).find('.toggle__item'));
      })
      $(btnItems).each(function(){
        $(this).unwrap();
      })
    }
  }
  if($(window).width() < "767"){
    mobile();;
    //на мобилке закрыть все блоки
      $($('.faq-question').find('.toggle-block')).each(function(index){
          $(this).find('.btn-toggle').removeClass('open');
          $(this).find('.toggle__item').hide();
      })
    //конец
  }else{
    desctop();
    //на десктопе открыть первый блок
      $($('.faq-question').find('.btn-toggle')).each(function(index){
        if(index === 0){
          $(this).addClass('open');
        }
      })
      $($('.toggle__body').find('.toggle__item')).each(function(index){
        if(index === 0){
          $(this).show();
        }
      })
    //конец
  }
  $(window).resize(function () {
    if ($(window).width() < "767") {
      mobile();
    } else {
      desctop();
    }
  });
  //faq end
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
      // when window width is >= 320px
      768: {
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
})