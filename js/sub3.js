$(function () {
    var $section = $('.performance1');
    var $tabs = $section.children('.tab1, .tab2, .tab3, .tab4');
    var $buttons = $section.find('.btn > li');

    // 처음에는 첫 번째 탭만 표시
    $tabs.hide().eq(0).css('display', 'flex');
    $buttons.eq(0).addClass('on');

    $buttons.on('click', function () {
        var index = $buttons.index(this);

        $tabs.hide().eq(index).css('display', 'flex');
        $buttons.removeClass('on');
        $(this).addClass('on');
    });
});