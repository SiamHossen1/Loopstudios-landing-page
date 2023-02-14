const menuOpenBtn = document.querySelector('.menuOpenBtn')
const menuCloseBtn = document.querySelector('.menuCloseBtn')
const navbar = document.querySelector('.navbar')

menuOpenBtn.addEventListener('click',()=>{
    navbar.classList.add('active')
    menuCloseBtn.classList.add('active')
})
menuCloseBtn.addEventListener('click',()=>{
    navbar.classList.remove('active')
    menuCloseBtn.classList.remove('active')
})