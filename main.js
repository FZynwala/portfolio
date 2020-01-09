let $menuButton = document.querySelector('.menu-button');
let $menuMobile = document.querySelector('#menu-mobile');

$menuButton.addEventListener('click', () => {
    if($menuMobile.className === 'menu-mobile-off') {
        $menuMobile.className = 'menu-mobile-on';
        console.log($menuMobile);
    } else if($menuMobile.className === 'menu-mobile-on') {
        $menuMobile.className = 'menu-mobile-off';
    }
});