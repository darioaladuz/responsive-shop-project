function displayNav() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        header.classList.toggle('active');
        body.classList.toggle('overflow');
        burger.classList.toggle('toggle');
    })
}

displayNav();