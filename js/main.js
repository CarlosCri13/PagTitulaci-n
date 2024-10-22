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
    var botMessage = document.getElementById("botMessage-" + faqId);

    if (botMessage.style.display === "none" || botMessage.style.display === "") {
        botMessage.style.display = "flex";
        answer.style.display = "block";
    } else {
        botMessage.style.display = "none";
        answer.style.display = "none";
    }
}



document.getElementById('sugerenciasForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    document.getElementById('loader').style.display = 'block'; // Muestra la rueda de carga

    // Crear una solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'enviar_sugerencia.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Captura los datos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var sugerencia = document.getElementById('sugerencia').value;
    var params = 'nombre=' + encodeURIComponent(nombre) + '&email=' + encodeURIComponent(email) + '&sugerencia=' + encodeURIComponent(sugerencia);

    // Maneja la respuesta de la solicitud
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            document.getElementById('loader').style.display = 'none'; // Oculta la rueda de carga
            if (xhr.status == 200) {
                document.querySelector('.message-text').innerHTML = "¡Sugerencia enviada con éxito!"; // Muestra la respuesta en el modal
                document.getElementById('messageModal').style.display = 'flex'; // Abre el modal
            } else {
                // Manejar el error si el estado no es 200
                document.querySelector('.message-text').innerHTML = "Hubo un error al enviar la sugerencia. Inténtalo de nuevo.";
                document.getElementById('messageModal').style.display = 'flex';
            }
        }
    };
    xhr.send(params);
});

// Cierra el modal cuando se hace clic en el botón de cerrar
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('messageModal').style.display = 'none';
});

// Cierra el modal si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('messageModal')) {
        document.getElementById('messageModal').style.display = 'none';
    }
});
