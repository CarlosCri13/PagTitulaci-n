(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

function toggleDetails(button) {
    var details = button.closest('.team-item').querySelector('.team-details');
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.textContent = 'Mostrar menos';
    } else {
        details.classList.add('hidden');
        button.textContent = 'Mostrar más';
    }
}




function showAnswer(faqId) {
    var answer = document.querySelector("#" + faqId + " .answer");
    var typing = document.querySelector("#" + faqId + " .typing");
    var botMessage = document.getElementById("botMessage-" + faqId);

    if (botMessage.style.display === "none" || botMessage.style.display === "") {
        botMessage.style.display = "flex";
        typing.style.display = "block";
        setTimeout(function() {
            typing.style.display = "none";
            answer.style.display = "block";
        }, 1000); // Tiempo de simulación de escritura reducido para un estilo minimalista
    } else {
        botMessage.style.display = "none";
        answer.style.display = "none";
    }
}
