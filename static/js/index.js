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
var swiper = new Swiper('.my-swiper', {
    autoplay: true, //可选选项，自动滑动
    loop: true, // 循环模式选项，true 循环播放
    pagination: {
        el: '.banner-pagination',
        // type: 'custom',
        autoplay: true,
        clickable: true,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active'
    },
});
var swiperProject = new Swiper('.my-swiper-project', {
    slidesPerView: 1,
    pagination: {
        el: '.project-pagination',
        clickable: true,
        type: 'custom', //自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        renderCustom: function (swiper, current, total) {
            var _html = '';
            var t = "";
            for (var i = 1; i <= total; i++) {
                if (i == 1) {
                    t = "家居";
                } else if (i == 2) {
                    t = "办公";
                } else if (i == 3) {
                    t = "餐饮";
                } else if (i == 4) {
                    t = "MORE";
                }
                if (current == i) {
                    _html += `<li class="pro-nav-list active">
                        ${t}<span class="verticle-line"></span><span
                            class="transverse-line active-line"></span>
                    </li>`;
                } else {
                    _html += `<li class="pro-nav-list">
                        ${t}<span class="verticle-line"></span><span class="transverse-line"></span>
                    </li>`;
                }
            }
            return _html; //返回所有的页码html
        }
    },
});
$('.project-pagination').on('click', 'li', function () {
    $(this).addClass("active");
    var index = $(this).index();
    swiperProject.slideTo(index, 1000, true); //切换到第一个slide，速度为1秒
});

var swiperProjectMobile = new Swiper('.my-swiper-project-mobile', {
    slidesPerView: 1,
    pagination: {
        el: '.project-mobile-pagination',
        clickable: true,
        type: 'custom', //自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        renderCustom: function (swiper, current, total) {
            var _html = '<ul class="project-nav-mobile">';
            var t = "";
            for (var i = 1; i <= total; i++) {
                if (i == 1) {
                    t = "家居";
                } else if (i == 2) {
                    t = "办公";
                } else if (i == 3) {
                    t = "餐饮";
                } else if (i == 4) {
                    t = "MORE";
                }
                if (current == i) {
                    _html += `<li class="project-nav-list active">${t}</li>`;
                } else {
                    _html += `<li class="project-nav-list">${t}</li>`;
                }
            }
            _html += '</ul>';
            return _html; //返回所有的页码html
        }
    },
});
$('.project-mobile-pagination').on('click', 'li', function () {
    $(this).addClass("active");
    var index = $(this).index();
    swiperProjectMobile.slideTo(index, 1000, true); //切换到第一个slide，速度为1秒
});
var swiperProduct = new Swiper('.my-swiper-product', {

    // autoplay: true, //可选选项，自动滑动
    // loop: true, // 循环模式选项，true 循环播放
    pagination: {
        el: '.product-pagination',
        // type: 'custom',
        clickable: true,
        type: 'custom', //自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        renderCustom: function (swiper, current, total) {
            var _html = '<div class="product-nav"><ul class="product-nav-list">';
            var t = "";
            var r = "";
            var n;
            for (var i = 1; i <= total; i++) {
                if (i == 1) {
                    t = "床";
                    r = "BED";
                } else if (i == 2) {
                    t = "沙发";
                    r = "SOFA";
                } else if (i == 3) {
                    t = "桌椅";
                    r = "TABLES & CHARIS";
                } else if (i == 4) {
                    t = "衣柜";
                    r = "CLOSET";
                } else if (i == 5) {
                    t = "灯";
                    r = "LIGHT";
                }
                if (current == i) {
                    _html += `<li class="product-list-item active">
                        <div class="product-nav-img img-${i}"></div>
                        <div class="product-name">
                            <span class="product-cname">${t}</span>
                            <span class="product-ename">${r}</span>
                        </div>
                        <span class="product-underline"></span>
                    </li>`;
                } else {
                    _html += `<li class="product-list-item">
                        <div class="product-nav-img img-${i}"></div>
                        <div class="product-name">
                            <span class="product-cname">${t}</span>
                            <span class="product-ename">${r}</span>
                        </div>
                        <span class="product-underline"></span>
                    </li>`;
                }
            }
            _html += '</ul></div>';
            return _html; //返回所有的页码html
        }
    },
});
$('.product-pagination').on('click', 'li', function () {
    $(this).addClass("active");
    var index = $(this).index();
    swiperProduct.slideTo(index, 1000, true); //切换到第一个slide，速度为1秒
});
var swiperProductMobile = new Swiper('.my-swiper-product-mobile', {

    // autoplay: true, //可选选项，自动滑动
    // loop: true, // 循环模式选项，true 循环播放
    pagination: {
        el: '.product-mobile-pagination',
        // type: 'custom',
        clickable: true,
        type: 'custom', //自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        renderCustom: function (swiper, current, total) {
            var t = "";
            var _html = '<ul class="product-nav-mobile">';
            for (var i = 1; i <= total; i++) {
                if (i == 1) {
                    t = "床";
                } else if (i == 2) {
                    t = "沙发";
                } else if (i == 3) {
                    t = "桌椅";
                } else if (i == 4) {
                    t = "衣柜";
                } else if (i == 5) {
                    t = "灯";
                }
                if (current == i) {
                    _html += `<li class="product-nav-list active">${t}</li>`;
                } else {
                    _html += `<li class="product-nav-list">${t}</li>`;
                }
            }
            _html += '</ul>';
            return _html; //返回所有的页码html
        }
    },
});
$('.product-mobile-pagination').on('click', 'li', function () {
    $(this).addClass("active");
    var index = $(this).index();
    swiperProductMobile.slideTo(index, 1000, true); //切换到第一个slide，速度为1秒
});
var swiperService = new Swiper('.my-swiper-service', {

    autoplay: true, //可选选项，自动滑动
    pagination: {
        el: '.service-pagination',
        clickable: true,
        type: 'custom', //自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        renderCustom: function (swiper, current, total) {
            var t = "";
            var r = "";
            var _html = '';
            for (var i = 1; i <= total; i++) {
                if (i == 1) {
                    t = "翻新改造";
                    r = "Renovate remould";
                } else if (i == 2) {
                    t = "研究设计";
                    r = "Research design";
                } else if (i == 3) {
                    t = "创新战略";
                    r = "Innovation strateg";
                } else if (i == 4) {
                    t = "视觉方案";
                    r = "Vision precept";
                }
                if (current == i) {
                    _html += `<li class="service-nav-item active">
                <a href="javascript:;">
                    <p class="ser-cname">${t}</p>
                    <p class="ser-ename">${r}</p>
                    <div class="service-nav-line"></div>
                    <div class="service-mask">
                        <p class="ser-mask-cname">${t}</p>
                        <p class="ser-mask-ename">${r}</p>
                    </div>
                </a>
            </li>
            `;
                } else {
                    _html += `<li class="service-nav-item">
                <a href="javascript:;">
                    <p class="ser-cname">${t}</p>
                    <p class="ser-ename">${r}</p>
                    <div class="service-nav-line"></div>
                    <div class="service-mask">
                        <p class="ser-mask-cname">${t}</p>
                        <p class="ser-mask-ename">${r}</p>
                    </div>
                </a>
            </li>`;
                }
            }
            return _html; //返回所有的页码html
        }
    },
});
$('.service-pagination').on('click', 'li', function () {
    $(this).addClass("active");
    var index = $(this).index();
    swiperService.slideTo(index, 1000, true); //切换到第一个slide，速度为1秒
});
var swiperServiceMobile = new Swiper('.my-swiper-service-mobile', {

    autoplay: true, //可选选项，自动滑动
    pagination: {
        el: '.service-mobile-pagination',
        clickable: true,
        type: 'custom', //自定义-分页器样式类型（前提）
        //设置自定义分页器的内容
        renderCustom: function (swiper, current, total) {
            var t = "";
            var _html = '';
            for (var i = 1; i <= total; i++) {
                if (i == 1) {
                    t = "翻新改造";
                } else if (i == 2) {
                    t = "研究设计";
                } else if (i == 3) {
                    t = "创新战略";
                } else if (i == 4) {
                    t = "视觉方案";
                }
                if (current == i) {
                    _html += `<li class="service-nav-item active">
        <a href="javascript:;">
        <p class="ser-cname">${t}</p>
    </a>
</li>
`;
                } else {
                    _html += `<li class="service-nav-item">
    <a href="javascript:;">
        <p class="ser-cname">${t}</p>
    </a>
</li>`;
                }
            }
            return _html; //返回所有的页码html
        }
    },
});
$('.service-mobile-pagination').on('click', 'li', function () {
    $(this).addClass("active");
    var index = $(this).index();
    swiperServiceMobile.slideTo(index, 1000, true); //切换到第一个slide，速度为1秒
});
wow = new WOW({
    animateClass: 'animated',
    offset: 50,
    mobile: true,
    live: true,
    callback: function (box) {}
});
wow.init();