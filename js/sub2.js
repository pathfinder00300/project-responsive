$(function () {
    var items = $('.feature_info .faq');

    // 처음부터 active가 있는 항목은 펼쳐놓기
    items.filter('.active').find('.faq__answer').show();

    items.find('.faq__btn').on('click', function () {
        var item = $(this).closest('.faq');
        var isOpen = item.hasClass('active');

        // 다른 항목 닫기
        item.siblings('.faq')
            .removeClass('active')
            .find('.faq__answer')
            .stop(true, true)
            .slideUp(300);

        // 클릭한 항목 열기 / 닫기
        item.toggleClass('active', !isOpen);

        if (isOpen) {
            item.find('.faq__answer')
                .stop(true, true)
                .slideUp(300);
        } else {
            item.find('.faq__answer')
                .stop(true, true)
                .slideDown(300);
        }
    });
});