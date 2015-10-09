var $ = require('../../node_modules/jquery/dist/jquery.min.js');
var slick = require('./slick.js');

$(document).ready(function() {
    $('.project-image').each(function(i) {
        var delay = 4000 + (Math.random()+(i%4))*1000;
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: delay
        });
    });
    $('nav a').on('click', function(event) {
        $('#menu-toggle').attr('checked', false);
    })

});
