let $menuButton = document.querySelector('.menu-button');
let $menuMobile = document.querySelector('#menu-mobile');

console.log(document);

$menuButton.addEventListener('click', () => {
    if($menuMobile.className === 'menu-mobile-off') {
        $menuMobile.className = 'menu-mobile-on';
        console.log($menuMobile);
    } else if($menuMobile.className === 'menu-mobile-on') {
        $menuMobile.className = 'menu-mobile-off';
    }
});

jQuery(function($) {
    $.scrollTo(0);

    $('#link-experience').click(function() { $.scrollTo($('#experience'), 600); });
    $('#link-skills').click(function() { $.scrollTo($('#skills'), 600); });
    $('#link-projects').click(function() { $.scrollTo($('#projects'), 600); });
    $('#link-footer').click(function() { $.scrollTo($('#footer'), 600); });
    $('#arrow-up').click(function() { $.scrollTo($('body'), 600); });

    $('#link-experience-mob').click(function() { $.scrollTo($('#experience'), 600); });
    $('#link-skills-mob').click(function() { $.scrollTo($('#skills'), 600); });
    $('#link-projects-mob').click(function() { $.scrollTo($('#projects'), 600); });
    $('#link-footer-mob').click(function() { $.scrollTo($('#footer'), 600); });
});

$(window).scroll(function()
{
    if($(this).scrollTop()>300) $('.arrow-box').fadeIn();
    else $('.arrow-box').fadeOut();
});