;(function ($) {
    $.fn.layer = function (opt) {
        var opt = $.extend({}, $.fn.layer.defaults, opt);
        $(this).on('click', function () {
            layerOpen(opt, 0, $(this))
        })
    };
    jQuery.layer = function (opt) {
        var opt = $.extend({}, $.fn.layer.defaults, opt);
        layerOpen(opt, 1, 0)
    };
    $.fn.layer.defaults = {
        autoClose: 0,
        title: "",
        contents: "",
        popType: 0,
        className: "",
        confirm: null,
        confirmBack: null,
        cancel: null,
        cancelBack: null,
        showClose: false,
        closeBack: null,
        afterBack: null,
        showMask: true,
        shadeClose: true,
        animation: 1
    };
    function layerOpen(opt, lt, th) {
        var $layer = '';
        var closeHtml = '<a  class="alert-close iconfont icon-close">×</a>';
        var titleHtml = '<div class="alert-title"><h3>' + opt.title + '</h3></div>';
        var btnHtml = '';
        if (opt.confirm != null || opt.cancel != null) {
            btnHtml += '<div class="alert-button">';
            if (opt.cancel != null) {
                btnHtml += '<input class="btn btn-cancel" type="reset" name="button" value="' + opt.cancel + '">'
            }
            if (opt.confirm != null) {
                btnHtml += '<input class="btn btn-confirm" type="submit" name="button" value="' + opt.confirm + '">'
            }
            btnHtml += "</div>"
        }
        if (opt.popType == 0) {
            var c = opt.contents;
            if (opt.contents == "" && lt == 0) {
                c = getData(th, "action");
                $layer = $("." + c)
            } else {
                $layer = $("." + c)
            }
            if ($layer.length == 0) {
                console.log(c + ' is undefined');
                return false
            }
        } else {
            var layerClass = opt.className;
            if (opt.className == '') {
                var lc = encodeURIComponent(opt.contents).replace(/%/g, '').replace(/ /g, '').replace(/\./g, '').toLocaleLowerCase();
                layerClass = "layer" + lc.substring(0, 10) + lc.substring(lc.length - 5);
            }
            var html = '';
            html = '<div class="' + layerClass + '" data-type="1">';
            html += '<div class="alert-content"><div class="alert-txt">' + opt.contents + '</div></div>';
            html += "</div>";
            $("body").append(html);
            $layer = $('.' + layerClass)
        }
        if (!$layer.hasClass("alert-layer")) {
            $layer.addClass("alert-layer")
        }
        $layer.addClass(opt.className);
        if ($layer.children('.alert-body').length == 0) {
            $layer.children().wrapAll('<div class="alert-body"></div>')
        }
        if ($layer.children(".alert-title").length == 0 && opt.title != "") {
            $layer.children('div').prepend(titleHtml)
        }
        if ($layer.children(".alert-close").length == 0 && opt.showClose) {
            $layer.children('div').prepend(closeHtml)
        }
        if ($layer.find(".alert-button").length == 0) {
            $layer.children("div").append(btnHtml)
        }
        if (!opt.showMask) {
            $layer.css('background', 'none')
        }
        $layer.addClass("alert-anim-" + opt.animation).addClass('show');
        if (opt.shadeClose && opt.showMask) {
            $layer.on("click", function (e) {
                var parent = $(e.target).parents('.alert-body').length;
                if (opt.autoClose == 0 && parent == 0) {
                    layer.close($layer)
                }
            })
        }
        var clearTime;
        if (opt.autoClose != 0) {
            $layer.find(".alert-closetime").remove();
            $layer.children('div').append('<div class="alert-closetime"></div>');
            autoCloseTime(parseInt(opt.autoClose))
        }
        function autoCloseTime(time) {
            if (time > 0) {
                --time;
                $layer.find(".alert-closetime").html(time + "秒后将关闭！");
                clearTime = setTimeout(function () {
                    autoCloseTime(time)
                }, 1000)
            } else {
                if (opt.closeBack != null) {
                    opt.closeBack($layer)
                } else {
                    layer.close($layer)
                }
            }
        }

        if (opt.confirm != null) {
            $layer.find(".btn-confirm").click(function (e) {
                if (opt.confirmBack != null) {
                    opt.confirmBack($layer)
                } else {
                    clearTimeout(clearTime);
                    layer.close($layer)
                }
                e.stopImmediatePropagation()
            })
        }
        if (opt.cancel != null) {
            $layer.find(".btn-cancel").click(function (e) {
                if (opt.cancelBack != null) {
                    opt.cancelBack($layer)
                } else {
                    clearTimeout(clearTime);
                    layer.close($layer)
                }
                e.stopImmediatePropagation()
            })
        }
        $layer.on("click", ".close", function (e) {
            if (opt.closeBack != null) {
                opt.closeBack($layer)
            } else {
                clearTimeout(clearTime);
                layer.close($layer)
            }
            e.stopImmediatePropagation()
        });
        if (opt.afterBack != null) {
            opt.afterBack($layer)
        }
    }

    function getData(th, data) {
        if (typeof(th.data(data)) == "undefined") {
            return ""
        } else {
            return th.data(data)
        }
    }

    $.fn.extend({
        sixPassword: function (opt) {
            opt = jQuery.extend({}, opt);
            var th = $(this);
            var html = '';
            for (var i = 0; i < 6; i++) {
                html += '<i></i>'
            }
            th.prepend(html);
            th.click(function () {
                var six = $(this);
                six.children('.password').focus();
                var jd = six.children("input").val().length;
                six.children('i').eq(jd).addClass("active");
                return false;
            });
            th.children('.password').keyup(function (event) {
                var inputTh = $(this);
                var value = inputTh.val();
                var gb = value.length;
                var sixI = inputTh.parent('div').find('i');
                sixI.removeClass("active");
                sixI.eq(gb).addClass("active");
                sixI.each(function (index) {
                    if (gb > index) {
                        $(this).addClass('ed')
                    } else {
                        $(this).removeClass('ed')
                    }
                });
            });
            $("body").click(function () {
                th.find('i').removeClass("active");
            });
        },
        tabs: function (opt) {
            opt = jQuery.extend({
                trigger: "click",
                callBack: null,
                content: ".tab-content"
            }, opt);
            var $tab = $(this).find("li");
            var parent = $(opt.content);
            //parent.find('.tab-pane:first').addClass('active');
            $tab.on(opt.trigger, function () {
                var th = $(this);
                var container = th.parents('.tab-container');
                if (container.length > 0) {
                    parent = container.children(opt.content);
                }
                th.addClass("active").siblings().removeClass("active");
                parent.find(".tab-pane").removeClass('active').eq(th.index()).addClass('active');
                if (opt.callBack != null) {
                    opt.callBack(th)
                }
            })
        }
        /*uScroll: function (opt) {
            opt = jQuery.extend({
                speed: 500,//下拉返回顶部的时间
                maxHeight: 500,//最大下拉最度
                topOffset: 100,//触发下拉动作高度
                onScrollStart: null,
                onScrollMove: null,
                onScrollEnd: null
            }, opt);
            var $th = $(this);
            $th.prepend('<div class="pullDown"><i></i></div>');
            $th.append('<div class="pullUp"><i></i></div>');
            //将当前所有内容用一个div包起来，在当前div中滚动
            $th.wrapInner('<div></div>');
            $th[0].addEventListener('touchstart', touchStart, false);
            $th[0].addEventListener('touchmove', touchMove, false);
            $th[0].addEventListener('touchend', touchEnd, false);
            var _start = 0;
            var _end = 0;
            var $pullDown = $(".pullDown");

            function touchStart(event) {
                var str = $th.children('div')[0].style.transform, ely = 0;
                if (str != "") {
                    var translate = str.substring(str.indexOf("(") + 1, str.lastIndexOf(","));
                    ely = translate.split(',')[1];
                }
                var touch = event.targetTouches[0];
                _start = touch.pageY - parseFloat(ely);
                //console.log('touchstart');
            }

            function touchMove(event) {
                //console.log('touchmove');
                var touch = event.targetTouches[0];
                _end = ( touch.pageY - _start);

                //控制最大下拉最度
               /!* if (_end > opt.maxHeight) {
                    _end = opt.maxHeight;
                }*!/
                if (_end > opt.topOffset) {
                    //$pullDown.addClass('pull');
                }
                transform(0, _end);
            }

            function touchEnd(event) {
                console.log('touchend');
                //$pullDown.removeClass('pull').addClass('loading');
                transform(opt.speed, 0);
                if (opt.onScrollEnd != null) {
                    opt.onScrollEnd(function () {
                        $pullDown.removeClass('pull loading');
                    });
                }
            }

            function transform(duration, offset) {
                var style = $th.children('div')[0].style;
                style.webkitTransitionDuration = duration + 'ms';
                style.transitionDuration = duration + 'ms';
                style.transitionTimingFunction = 'ease-in-out';
                style.webkitTransform = 'translate3d(0, ' + offset + 'px, 0)';
                style.transform = 'translate3d(0, ' + offset + 'px, 0)';
            }
        }*/
    });

})(jQuery);
var layer = {
    close: function (layer) {
        if (layer) {
            layer.removeClass('show');
            if (layer.data('type') == 1) {
                layer.remove();
            }
        } else {
            var closeLayer = $(".alert-layer");
            closeLayer.removeClass('show');
            closeLayer.each(function () {
                if ($(this).data('type') == 1) {
                    $(this).remove();
                }
            });
        }
    }
};