const _li = document.querySelectorAll('#sideBar-navBar>ul>li')
const _backs = document.querySelectorAll('#backs>div')
let _body = document.body
let homeBtn = document.getElementById('home-btn')

_li.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < _li.length; i++) {
            _li[i].classList.remove('navActive')
        }
        item.classList.add('navActive')
        let idColor = item.getAttribute('data-idColor')
        console.log(idColor);

        for (let i = 0; i < _backs.length; i++) {
            _backs[i].classList.add('deactivateBack')
            _backs[i].classList.remove('activeBack')
        }

        _body.removeAttribute('class')

        switch (idColor) {
            case 'about':
                document.getElementById('_aboutBack').classList.remove('deactivateBack')
                document.getElementById('_aboutBack').classList.add('activeBack')
                _body.classList.add('aboutBack')
                break;
            case 'portfolio':
                document.getElementById('_portfolioBack').classList.remove('deactivateBack')
                document.getElementById('_portfolioBack').classList.add('activeBack')
                _body.classList.add('portfolioBack')

                break;
            case 'services':
                document.getElementById('_servicesBack').classList.remove('deactivateBack')
                document.getElementById('_servicesBack').classList.add('activeBack')
                _body.classList.add('servicesBack')

                break;
            case 'contact':
                document.getElementById('_contactBack').classList.remove('deactivateBack')
                document.getElementById('_contactBack').classList.add('activeBack')
                _body.classList.add('contactBack')

                break;

        }
    })
});

homeBtn.addEventListener('click', () => {
    for (let i = 0; i < _backs.length; i++) {
        _backs[i].classList.add('deactivateBack')
        _backs[i].classList.remove('activeBack')
    }
    document.getElementById('_homeBack').classList.remove('deactivateBack')
    document.getElementById('_homeBack').classList.add('activeBack')
    _body.classList.add('homeBack')
})