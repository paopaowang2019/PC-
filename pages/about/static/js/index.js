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
$(".figure-img").mouseenter(function () {
    $(this).addClass("pulse");
});
//鼠标离开图片之后不让动画立马消失
$(".figure-img").mouseleave(function () {
    var that = this;
    setTimeout(function () {
        $(that).removeClass("pulse");
    }, 1500)
});

$(".our-MissionWithVision-img").mouseenter(function () {
    $(this).addClass("pulse");
});
//鼠标离开图片之后不让动画立马消失
$(".our-MissionWithVision-img").mouseleave(function () {
    var that = this;
    setTimeout(function () {
        $(that).removeClass("pulse");
    }, 1500)
});

