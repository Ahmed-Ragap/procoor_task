


var en_lang = document.getElementById('en_lang')
var ar_lang = document.getElementById('ar_lang')

 ar_lang.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.setAttribute('dir', 'rtl')
  document.body.style.direction= "rtl";
  ar_lang.classList.add('active')
  en_lang.classList.remove('active')
  // window.location.href('../index.html')

});
en_lang.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.setAttribute('dir', 'ltr')
  document.body.style.direction= "ltr";
  en_lang.classList.add('active')
  ar_lang.classList.remove('active')
});






//scroll to top button-------------------
var scroll_to_top = document.querySelector('.scroll_to_top')
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scroll_to_top.style.opacity = "1";
  } else {
    scroll_to_top.style.opacity = "0";
  }
} 