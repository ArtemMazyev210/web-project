$(document).ready(function () {

    // ТАРИФЫ

    $('.plans__card-starting').mouseover(function () {
        $(this).addClass('scaled');
        $('.plans__card-business').addClass('business-scale');
    });
    $('.plans__card-starting').mouseout(function () {
        $(this).removeClass('scaled');
        $('.plans__card-business').removeClass('business-scale');
    });
    $('.plans__card-vip').mouseover(function () {
        $(this).addClass('scaled');
        $('.plans__card-business').addClass('business-scale');
    });
    $('.plans__card-vip').mouseout(function () {
        $(this).removeClass('scaled');
        $('.plans__card-business').removeClass('business-scale');
    });


    // ОТЗЫВЫ

    $('.reviews__slider').on(`init reInit`, function (event, slick) {
        $('.slick-slide-num-current').text('0' + 1 + ' ');
    })
    $('.reviews__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.slick-slide-num-current').text('0' + (currentSlide + 1) + ' ');
    })
    $('.reviews__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        adaptiveHeight: true,
        easing: 'ease',
        appendArrows: '.slick__arrows',
        prevArrow: '<span class="slick-prev"><</span>',
        nextArrow: '<span class="slick-next">></span>',
    });

    // ПАРТНЕРЫ

    $('.partners__slider-1').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
    });

    $('.partners__slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true
            }
        }],
    });

    // Burger JQ

    $('.header__burger').click(function (event) {
        $('.header__menu').toggleClass('show');
    });
});

// FETCH

const formElem = document.querySelector("#form");

formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('https://formcarry.com/s/i9EtQjA3zV1', {
        method: 'POST',
        body: new FormData(formElem)
    });
    formElem.reset();
    alert("Данные отправлены!");
}


