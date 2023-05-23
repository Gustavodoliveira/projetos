const menu = document.getElementById('menu')


function ulmenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

menu.addEventListener('click', ulmenu);

