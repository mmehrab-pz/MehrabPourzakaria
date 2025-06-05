(function () {
    emailjs.init("Vs-sPC5wuLerU-yxt"); // جایگزین با کلید شما
})();

let formLoading = document.getElementById('formLoading');
let curtain = document.getElementById('curtain');
let loader = document.getElementById('loader');
let done = document.getElementById('done');
let _error = document.getElementById('error');
let _form = document.getElementById('contact-form');
let _name = document.getElementById('name');
let _email = document.getElementById('email');
let _text = document.getElementById('text');
let nameStatus = _name.getAttribute('data-status')
let emailStatus = _email.getAttribute('data-status')
let textStatus = _text.getAttribute('data-status')


_name.addEventListener('input', () => {
    if (
        _name.value == null ||
        _name.value == "" ||
        _name.value == (/script/) ||
        _name.value == (/<script/) ||
        _name.value.search(/[a-zA-Z]{3,15}$/)
    ) {
        _name.classList.add('inputError')
        _name.nextElementSibling.style.display = 'flex'
        nameStatus = _name.setAttribute('data-status', 'false')
        nameStatus = _name.getAttribute('data-status')
    } else {
        _name.classList.remove('inputError')
        _name.nextElementSibling.style.display = 'none'
        nameStatus = _name.setAttribute('data-status', 'true')
        nameStatus = _name.getAttribute('data-status')
    }
})
_email.addEventListener('input', () => {
    if (
        _email.value == null ||
        _email.value == "" ||
        _email.value == (/script/) ||
        _email.value == (/<script/) ||
        _email.value.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
    ) {
        _email.classList.add('inputError')
        _email.nextElementSibling.style.display = 'flex'
        emailStatus = _email.setAttribute('data-status', 'false')
        emailStatus = _email.getAttribute('data-status')
    } else {
        _email.classList.remove('inputError')
        _email.nextElementSibling.style.display = 'none'
        emailStatus = _email.setAttribute('data-status', 'true')
        emailStatus = _email.getAttribute('data-status')
    }
})
_text.addEventListener('input', () => {
    if (
        _text.value == null ||
        _text.value == "" ||
        _text.value == (/script/) ||
        _text.value == (/<script/)
    ) {
        _text.classList.add('inputError')
        textStatus = _text.setAttribute('data-status', 'false')
        textStatus = _text.getAttribute('data-status')

    } else {
        _text.classList.remove('inputError')
        textStatus = _text.setAttribute('data-status', 'true')
        textStatus = _text.getAttribute('data-status')
    }
})




_form.addEventListener('submit', function (event) {
    event.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

    if (
        nameStatus == 'true' &&
        emailStatus == 'true' &&
        textStatus == 'true'
    ) {
        formLoading.style.display = 'flex'
        curtain.classList.remove('curtainOff')
        curtain.classList.add('curtainOn')
        emailjs.sendForm('service_4mc5cr5', 'template_q3dhxgn', this)
            .then(function () {
                //    'پیام با موفقیت ارسال شد!
                loader.classList.remove('loaderOn')
                loader.classList.add('loaderOff')
                done.style.display = 'flex'
                _name.value = ''
                _email.value = ''
                _text.value = ''
                setTimeout(() => {
                    formLoading.style.display = 'none'
                    curtain.classList.remove('curtainOn')
                    curtain.classList.add('curtainOff')
                    loader.classList.remove('loaderOff')
                    loader.classList.add('loaderOn')
                    done.style.display = 'none'
                }, 3000);

            }, function (error) {
                // 'خطا در ارسال پیام
                loader.classList.remove('loaderOn')
                loader.classList.add('loaderOff')
                _error.style.display = 'flex'
                _name.value = ''
                _email.value = ''
                _text.value = ''
                setTimeout(() => {
                    formLoading.style.display = 'none'
                    curtain.classList.remove('curtainOn')
                    curtain.classList.add('curtainOff')
                    loader.classList.remove('loaderOff')
                    loader.classList.add('loaderOn')
                    _error.style.display = 'none'
                }, 3000);
            });
    } else {
        alert('fill the box')
    }
});