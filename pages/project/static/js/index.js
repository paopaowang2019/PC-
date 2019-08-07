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
// $(document).ready(function () {
//     $("#furnish").click(function () {
//         $("html").animate({scrollTop: $("#furnishing").offset().top-100}, 500);
//         return false;
//     });
// });
$(".project-nav").children().on("click", function () {
    console.log($(this).index())
    var index = $(this).index();
    $("html").animate({
        scrollTop: $(".continer-center .common-title").eq(index).offset().top - 100
    }, 500);
    console.log($(".continer-center").children(index))
});

//移动端滚屏
$(".project-nav-mobile").children().on("click", function () {
    var index = $(this).index();
    $("html").animate({
        scrollTop: $(".continer-center .common-title").eq(index).offset().top - 100
    }, 500);
    console.log($(".continer-center").children(index))
});