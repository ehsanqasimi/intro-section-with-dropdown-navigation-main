let feature = document.querySelector('.feature')
let extra_feature = document.querySelector('.extra-feature')

let company = document.querySelector('.company')
let extra_company = document.querySelector('.extra-company')

let heroIMG = document.querySelector('.heroIMG')

let burger = document.querySelector('.burger')

feature.addEventListener('click', showExtraFeature)
company.addEventListener('click', showExtraCompany)
burger.addEventListener('click', showMenu)

let ul = document.querySelector('.ul')

function showMenu(){
    if (burger.textContent === 'close'){
        burger.textContent = 'menu'
    }else{

        burger.textContent = 'close'
    }
    ul.classList.toggle('showUl')

}

function showExtraFeature() {
    extra_feature.classList.toggle('showExtraFeature')
}

function showExtraCompany() {
    extra_company.classList.toggle('showExtraCompany')
}

if(window.innerWidth < 700){
    heroIMG.src = 'images/image-hero-mobile.png'
}