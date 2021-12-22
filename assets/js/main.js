(function($){
  'use stricte';


  //preloader script
  setTimeout(function(){
    $('.loader-bg').fadeToggle()
  },3000);

  //header scroll visiable
  const $header = document.querySelectorAll('header')[0];

let lastKnownScrollTop = 0;
let headerTop = 0;
let headerHeight = $header.offsetHeight;

window.addEventListener('scroll', function(event){
  console.log( event.target.scrollingElement.scrollTop )
  console.log(event)
  let scrollTop = event.target.scrollingElement.scrollTop;
  let offset = scrollTop - lastKnownScrollTop;
  headerTop-= offset;
  headerTop = headerTop > 0? 0: headerTop;
  headerTop = headerTop < -1 * headerHeight? -1 * headerHeight: headerTop;
  $header.style.transform = `translateY(${headerTop}px)`;
  lastKnownScrollTop = scrollTop;
});

    //Dropdown--------------------------------
    $('.nav-menu li').click(function(){
        $(this).find('ul.dropdown').toggle();
       
    })

    //Mobile menu bar--------------------------------
    $('.menu-toggler').click(function(){
      $('.menu-toggler').toggleClass('active');
      $('#main-menu').slideToggle();
   })
   
   $('.search-area .toggle-search').click(function(){
       $('input[type="search"]').slideToggle();
   })
   //Nft box time counter---------------------------------
   var timeLeft = 60;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeLeft + ' S';
    timeLeft--;
  }
}

////Nft card box swiper slider activation-------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup:4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },        breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //////Seller area header button script
// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
      
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// scrollTop--------------------
$('.go-top').hide(0)
$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('.go-top').fadeIn(200);      
  } else {
    $('.go-top').fadeOut(300);
  }
});
$('.go-top').click(function() {
  event.preventDefault();
  $('html , body').animate({scrollTop: 0}, 1000);
});




}(jQuery));