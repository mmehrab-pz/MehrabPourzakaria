const _li = document.querySelectorAll('#sideBar-navBar>ul>li')
const _backs = document.querySelectorAll('#backs>div')
const contents = document.querySelectorAll('#content>section')
const homeCards = document.querySelectorAll('#home-cards>div')

let _body = document.body
let homeBtn = document.getElementById('home-btn')
let home = document.getElementById('home')
let about = document.getElementById('about')
let portfolio = document.getElementById('portfolio')
let services = document.getElementById('services')
let contact = document.getElementById('contact')

function changeBack(item) {
    let id = item.getAttribute('data-id')

    for (let i = 0; i < _backs.length; i++) {
        _backs[i].classList.add('deactivate')
        _backs[i].classList.remove('active')
    }

    contents.forEach(el => el.classList.remove('active'))

    _body.removeAttribute('class')

    switch (id) {
        case 'about':
            document.getElementById('_aboutBack').classList.remove('deactivate')
            document.getElementById('_aboutBack').classList.add('active')
            _body.classList.add('aboutBack')
            about.classList.add('active')

            break;
        case 'portfolio':
            document.getElementById('_portfolioBack').classList.remove('deactivate')
            document.getElementById('_portfolioBack').classList.add('active')
            _body.classList.add('portfolioBack')
            portfolio.classList.add('active')

            break;
        case 'services':
            document.getElementById('_servicesBack').classList.remove('deactivate')
            document.getElementById('_servicesBack').classList.add('active')
            _body.classList.add('servicesBack')
            services.classList.add('active')

            break;
        case 'contact':
            document.getElementById('_contactBack').classList.remove('deactivate')
            document.getElementById('_contactBack').classList.add('active')
            _body.classList.add('contactBack')
            contact.classList.add('active')

            break;

    }
}

_li.forEach((item) => {
    item.addEventListener('click', () => {
        mobileMenu()
        for (let i = 0; i < _li.length; i++) {
            _li[i].classList.remove('navActive')
        }
        item.classList.add('navActive')
        changeBack(item)
    })
});

homeCards.forEach(item => {
    item.addEventListener('click', () => {
        let _id = item.getAttribute('data-id')
        _li.forEach(el => {
            if (el.getAttribute('data-id') === _id) {
                el.classList.add('navActive')
            } else {
                el.classList.remove('navActive')
            }
        })
        changeBack(item)
    })
})

homeBtn.addEventListener('click', () => {
     mobileMenu()
    _li.forEach(el => el.classList.remove('navActive'))

    for (let i = 0; i < _backs.length; i++) {
        _backs[i].classList.add('deactivate')
        _backs[i].classList.remove('active')
    }

    contents.forEach(el => el.classList.remove('active'))

    document.getElementById('_homeBack').classList.remove('deactivate')
    document.getElementById('_homeBack').classList.add('active')
    _body.classList.add('homeBack')
    home.classList.add('active')
})

// ---------------------mobile menu------------------

let menuBtn = document.getElementById('menu-btn')
let sideBar = document.getElementById('sideBar')
let openIcone = document.getElementById('open')
let closeIcone = document.getElementById('close')

menuBtn.addEventListener('click', () => {
    mobileMenu()
})

function mobileMenu() {
    let status = menuBtn.getAttribute('data-status')
    if (status === 'off') {
        sideBar.classList.add('avtiveMobileSideBar')
        menuBtn.setAttribute('data-status', 'on')
        openIcone.style.display = 'none'
        closeIcone.style.display = 'block'
    } else {
        sideBar.classList.remove('avtiveMobileSideBar')
        menuBtn.setAttribute('data-status', 'off')
        openIcone.style.display = 'block'
        closeIcone.style.display = 'none'
    }
}