// 숫자 스크롤링
$(document).ready(function(){

    // 숫자 카운트 함수
    function count_ani(target, finalNumber, suffix = '') {

        $({ val: 0 }).animate({ val: finalNumber }, {
            duration: 1000, // 1.5초

            step: function() {
                var number = Math.floor(this.val);
                $(target).text(number.toLocaleString() + suffix);
            },

            complete: function() {
                $(target).text(finalNumber.toLocaleString() + suffix);
            }
        });
    }

    // company_bottom 위치
    var count_top = $('.record').offset().top;

    // 한 번만 실행하기 위한 변수
    var onecount = false;

    // 스크롤 이벤트
    $(window).on('scroll', function(){

        var scroll_top = $(window).scrollTop();

        // company_bottom 근처까지 스크롤했을 때
        if(scroll_top > count_top - 500 && onecount == false){

            count_ani('.count1', 30000, '+');
            count_ani('.count2', 19);
            count_ani('.count3', 11);
            count_ani('.count4', 100, '%');

            onecount = true;
        }
    });
});