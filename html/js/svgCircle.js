;(function ($) {
    $.fn.svgCircle = function (opt) {
        var opt = $.extend({
            r: 100, //半径
            b: 1, //边框
            color: ["#ccc", "#000", "#f00"], //颜色，背影色，过渡色，最终色
            speed: 1000,//速度
            delay: 100 //延时
            //linecap:"round"

        }, opt);
        $(this).each(function () {
            var th = $(this), perentvalue = parseInt(th.data("alt")), id = th[0], txtdiv = th.children("span.num");
            if (!isNaN(perentvalue)) {
                var r = Raphael(id, 2 * opt.r, 2 * opt.r), R = opt.r - (opt.b / 2);
                r.customAttributes.arc = function (value, R) {
                    if (value == 100) {
                        value = 99.999
                    }
                    var alpha = 3.6 * value, a = (90 - alpha) * Math.PI / 180, x = opt.r + R * Math.cos(a), y = opt.r - R * Math.sin(a), path;
                    path = [["M", opt.r, opt.r - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
                    return {path: path}
                };
                r.path().attr({stroke: opt.color[0], "stroke-width": opt.b}).attr({arc: [100, R]});
                if (perentvalue > 0) {
                    var c = r.path().attr({stroke: opt.color[1], "stroke-width": opt.b,"stroke-linecap":"round"}).attr({arc: [0.01, R]});
                    setTimeout(function () {
                        c.animate({stroke: opt.color[2], arc: [perentvalue, R]}, opt.speed)
                    }, opt.delay)
                }
                //百分比动画
                if (txtdiv.length>0) {
                    setTimeout(function () {
                            animatenumber(0, perentvalue, txtdiv) //开始数，结束数，显示的div
                        },
                        opt.delay);
                    function animatenumber(t, t2, th) {
                        if (t < t2) {
                            ++t;
                            th.html(t + "%");
                            setTimeout(function () {
                                    animatenumber(t, t2, th);
                                },
                                10);
                        } else {
                            th.html(t + "%");
                        }
                    }
                }
            }
        });
    };
})(jQuery);
