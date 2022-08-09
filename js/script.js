const iconMenu = document.querySelector(".header__burger")
if (iconMenu) {
  const menuBody = document.querySelector(".header__menu")
  const upperHeader = document.querySelector(".header")
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
    upperHeader.classList.toggle('_active')
  })
}