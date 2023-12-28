const hamburgerBtn = document.getElementById('hamburger-btn')
const hamburgerMenu = document.getElementById('hamburger_menu')

hamburgerBtn.addEventListener('click', toggleMenu)

function toggleMenu(){
  hamburgerBtn.classList.toggle('hamburger_open')
  hamburgerMenu.classList.toggle('hidden')
  hamburgerMenu.classList.toggle('flex')
}