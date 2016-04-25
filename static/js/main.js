var $ = require('../../node_modules/jquery/dist/jquery.min.js');
var slick = require('./slick.js');

$(document).ready(function() {
    $('.project-image').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000 + (Math.random() * 1000)
    });
    $('nav a').on('click', function(event) {
        $('#menu-toggle').attr('checked', false);
    })

});
