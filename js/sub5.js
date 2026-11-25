(function () {
    var swiper;
    var mobileQuery = window.matchMedia('(max-width: 768px)');

    function initSwiper() {
        var activeIndex = swiper ? swiper.realIndex : 0;
        var isMobile = mobileQuery.matches;

        if (swiper) {
            swiper.destroy(true, true);
        }

        swiper = new Swiper('.media .swiper-container', {
            initialSlide: activeIndex,

            // 768px 이하: 일반 슬라이드 / 그 이상: 입체 효과
            effect: isMobile ? 'slide' : 'coverflow',
            slidesPerView: isMobile ? 1 : 'auto',
            centeredSlides: !isMobile,
            spaceBetween: 0,
            slidesPerGroup: 1,

            loop: true,
            grabCursor: true,
            allowTouchMove: true,
            simulateTouch: true,

            // 드래그할 때 영상 링크가 잘못 열리는 것 방지
            preventClicks: true,
            preventClicksPropagation: true,

            coverflowEffect: {
                rotate: -15,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false
            },

            pagination: {
                el: '.media .swiper-pagination',
                clickable: !isMobile
            }
        });
    }

    initSwiper();

    // 768px 경계를 넘을 때만 재설정
    if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener('change', initSwiper);
    } else {
        mobileQuery.addListener(initSwiper);
    }
})();