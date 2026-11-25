var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween:5,
    slidesPerView:2.5,
    //loop: true,
    //freeMode: true,
    allowTouchMove: true, // 드래그 및 터치 스와이프 비활성화
    loopedSlides: 4, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints:{
        769 : {
            slidesPerView: 4
        }
    }
});

var galleryTop = new Swiper('.gallery-top', {
    spaceBetween:0,
    //loop:true,
    loopedSlides: 4, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
        el: '.swiper-pagination',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});

$('.gallery-thumbs img').click(function(){
    $('.gallery-thumbs img').removeClass('on');
    $(this).addClass('on');
});

