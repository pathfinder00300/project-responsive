
document.addEventListener('DOMContentLoaded', function () {

    var modelSwiper = null;
    var mobileQuery = window.matchMedia('(max-width: 768px)');

    function modelSwiperControl() {

        if (mobileQuery.matches) {

            // 모바일에서만 Swiper 생성
            if (modelSwiper === null) {

                modelSwiper = new Swiper('.model_swiper', {
                    slidesPerView: 1.45,
                    spaceBetween: 14,
                    slidesPerGroup: 1,
                    speed: 600,

                    loop: true,
                    grabCursor: true,
                    watchOverflow: true,

                    observer: true,
                    observeParents: true
                });
            }

        } else {

            // PC / 태블릿에서는 Swiper 제거
            if (modelSwiper !== null) {
                modelSwiper.destroy(true, true);
                modelSwiper = null;
            }
        }
    }

    // 최초 실행
    modelSwiperControl();

    // 화면 너비 변경 시 실행
    if (mobileQuery.addEventListener) {
        mobileQuery.addEventListener('change', modelSwiperControl);
    } else {
        mobileQuery.addListener(modelSwiperControl);
    }

});
