var n = 0;
$(".btn-nav").click(function () {
    n++;
    if (n % 2 != 0) {
        $(this).addClass("active");
        $(this).removeClass("close-nav");
    } else {
        $(this).addClass("close-nav");
        $(this).removeClass("active");
    }
    $(".head-center-nav-mobile").slideToggle();
})
wow = new WOW({
    animateClass: 'animated',
    offset: 50,
    mobile: true,
    live: true,
    callback: function (_box) {}
});
wow.init();

//鼠标进入图片之后给图片添加动画效果
$(".news-img").mouseenter(function () {
    $(this).addClass("pulse");
});
//鼠标离开图片之后不让动画立马消失
$(".news-img").mouseleave(function () {
    var that = this;
    setTimeout(function () {
        $(that).removeClass("pulse");
    }, 1500)
});

//鼠标进入文字标题之后的动画
$(".news-content").mouseenter(function () {
    $(this).addClass("pulse");
});
//鼠标离开文字之后不让动画立马消失
$(".news-content").mouseleave(function () {
    var that = this;
    setTimeout(function () {
        $(that).removeClass("pulse");
    }, 1500)
});