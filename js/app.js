//console.log(window.matchMedia('(prefers-color-scheme: dark)'))

const checkbox = document.querySelector('#checkbox')
const icon_mode = document.querySelector('#icon_mode')

checkbox.addEventListener('change', function(){
    if (this.checked){
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
        icon_mode.classList.remove('fa-sun')
        icon_mode.classList.add('fa-moon')
    }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
        icon_mode.classList.remove('fa-moon')
        icon_mode.classList.add('fa-sun')
    }
})