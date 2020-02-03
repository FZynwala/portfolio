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

jQuery(function($) {
    $.scrollTo(0);

    $('#link-aboutme').click(function() { $.scrollTo($('#aboutme'), 800); });
    $('#link-experience').click(function() { $.scrollTo($('#experience'), 800); });
    $('#link-skills').click(function() { $.scrollTo($('#skills'), 800); });
    $('#link-projects').click(function() { $.scrollTo($('#projects'), 800); });
    $('#link-footer').click(function() { $.scrollTo($('#footer'), 800); });
    $('#arrow-up').click(function() { $.scrollTo($('body'), 800); });

    $('#link-aboutme-mob').click(function() { $.scrollTo($('#aboutme'), 800); });
    $('#link-experience-mob').click(function() { $.scrollTo($('#experience'), 800); });
    $('#link-skills-mob').click(function() { $.scrollTo($('#skills'), 800); });
    $('#link-projects-mob').click(function() { $.scrollTo($('#projects'), 800); });
    $('#link-footer-mob').click(function() { $.scrollTo($('#footer'), 800); });
});

$(window).scroll(function()
{
    if($(this).scrollTop()>300) $('.arrow-box').fadeIn();
    else $('.arrow-box').fadeOut();
});