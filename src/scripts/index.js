import $ from 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';

import Typed from 'typed.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

$(document).ready(() => {

    // extending inheritance and perform for each .type class
    const typeds = document.querySelectorAll('.typed');


    for(const typed of typeds) {
        new Typed(typed, {
            strings: $(typed).data('words').split(';'),
            typeSpeed: 100,
            loop: true
        });
    }

    // Initializing bootstrap tooltip
    $('[data-toggle="tooltip"]').tooltip();


    
     // Add smooth scrolling on all links inside the navbar
    $("#header nav .navbar-nav .nav-item a").on('click', function (e) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        } // End if
    });
});
