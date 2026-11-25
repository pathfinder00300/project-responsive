$(document).ready(function(){

    // 처음에는 첫 번째 내용만 보이게
    $('.heritage1').show();
    $('.heritage2').hide();
    $('.heritage3').hide();
    $('.heritage4').hide();


    $('.tabs .tab').on('click', function(e){

        e.preventDefault();

        // 내가 클릭한 탭의 순번
        let index = $(this).index('.tabs .tab');


        // 모든 탭 비활성화
        $('.tabs .tab').removeClass('active');

        // 클릭한 탭만 활성화
        $(this).addClass('active');


        // 모든 내용 숨기기
        $('.heritage1, .heritage2, .heritage3, .heritage4').hide();


        // 첫 번째 탭
        if(index === 0){

            $('.heritage1').fadeIn('slow');

        }

        // 두 번째 탭
        else if(index === 1){

            $('.heritage2').fadeIn('slow');

        }
        // 세 번째 탭
        else if(index === 2){

            $('.heritage3').fadeIn('slow');

        }
        // 네 번째 탭
        else if(index === 3){

            $('.heritage4').fadeIn('slow');

        }

    });

});