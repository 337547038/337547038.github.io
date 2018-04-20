;(function ($) {
    $.fn.layer = function (opt) {
        var opt = $.extend({},
            $.fn.layer.defaults, opt);
        $(this).on(opt.trigger,
            function () {
                mainLayer(opt, 0, $(this));
            });
    }; //$("").layer()
    jQuery.layer = function (opt) {
        var opt = $.extend({},
            $.fn.layer.defaults, opt);
        mainLayer(opt, 1, 0);
    }; //$.layer()
    $.fn.layer.defaults = {
        width: null,
        height: null,
        trigger: "click",
        //触发事件,注意用mouseover代替hover
        autoClose: 0,
        //自动关闭，单位为秒，默认0不关闭
        title: "",
        //标题
        contents: "",
        popType: 0,
        //弹窗类型 0读取本页隐藏div(默认)，1加载外部文档，2直接显示contents文本
        className: "",
        //添加的class样式
        position: "fixed",
        //absolute和fixed。
        closeParent: true,
        //多层弹窗口时是否关闭父窗口
        confirm: null,
        //确定按钮文本，默认为空不显示
        confirmBack: null,
        //确定回调函数，仅当confirm不为null时；确定按钮不为空和回调为空时，确定后关闭窗口
        cancel: null,
        //取消按钮，默认为空，不显示
        cancelBack: null,
        //取消按钮回调，仅当cancel不为null时；取消按钮不为空和回调为空时，取消后关闭窗口
        closeBack: null,
        //关闭时回调，为空时关闭，回调时不关闭窗口
        loadBack: null,
        //窗口加载后回调
        afterBack: null,
        move: true,
        //允许窗口移动
        maskLayer: "body",
        //显示遮罩层，默认为body。false时不显示，值为遮罩层显示位置，即将遮罩层放在指定的标签内，方便在一些框架页里遮罩层只显示在主内容区
        align: true,
        //窗口默认垂直居中对齐，默认为true居中，false时请在css中设置left和top。方便将窗口定位在其它位置
        showClose: true,
        //显示关闭按钮
        shadeClose: false, //点击遮罩关闭 false不关闭
        animation: 1,//弹出层css3动画效果，仅在支持的浏览器。动画序号对应animation样式的alert-anim-*
        noScroll: true //弹出层后body禁止滚动
    };
    function mainLayer(opt, lt, th) {
        $("#grey-background").remove();
        if (opt.maskLayer) {
            $(opt.maskLayer).append('<div id="grey-background"></div>');
        }
        //添加body属性阻止页面滚动，先判断页面是否存在滚动条
        /*if ($(window).height() < $(document).height()) {
         //存在
         $('body').css({position:'fixed',width:'100%',overflowY:'scroll',top: - $( window ).scrollTop()});
         } else {
         //不存在
         $('body').css({overflow:'hidden'});
         }*/
        if (opt.noScroll) {
            var PR = 0;
            //如果有滚动条时
            if ($(document).height() > $(window).height()) {
                PR = 17;//滚动条大概的宽，防抖动
            }
            $("body").css({
                overflow: 'hidden',
                paddingRight: PR
            })
        }
        if (opt.loadBack != null) { //加载后回调
            opt.loadBack();
        }
        if (opt.closeParent) {
            $(".alert-layer").hide();
        } else {
            //两层弹窗时将已展示的弹窗移至遮罩层下面
            $(".alert-layer").each(function () {
                if (!$(this).is(":hidden")) {
                    $(this).css({"z-index": 20141126});
                }
            });
        }
        var hc = "";//关闭标签
        var ht = "";//标题标签
        var hb = "";//按钮标签
        var c = "";//当前类样式
        var $c = "";//当前类名形式$(".a")
        hc = '<a href="javascript:;" class="close alert-close bg-icon">×</a>';
        ht = '<h3 class="alert-title"><b></b><span>' + opt.title + '</span></h3>';
        if (opt.confirm != null || opt.cancel != null) {
            hb += '<div class="alert-button">';
            if (opt.confirm != null) {
                hb += '<input class="btn btn-confirm" type="submit" name="button" value="' + opt.confirm + '">';
            }
            if (opt.cancel != null) {
                hb += '<input class="btn btn-cancel" type="reset" name="button" value="' + opt.cancel + '">';
            }
            hb += "</div>";
        }
        var comm = {
            subtr: function () {
                var lc = encodeURIComponent(opt.contents).replace(/%/g, '').replace(/ /g, '').replace(/\./g, '').toLocaleLowerCase();
                return "layer" + lc.substring(0, 10) + lc.substring(lc.length - 5); //过滤%和空格转小写，取前面10位+后5位，减少提示语相近的问题
            },
            position: function (layer) {
                var ww = $(window).width();
                var wh = $(window).height();
                var aw = opt.width == null ? layer.outerWidth(true) : opt.width;
                layer.css({"width": aw});//在一些情况，还没设置窗口宽时，高度会计算不准确，因此这里先设定宽
                //高度计算方法，参数设定的则按设置的，否则按窗口实际高，如果窗口高于浏览器，则按浏览器高
                //ah = opt.height == null ? $c.outerHeight(true) : opt.height;
                var ah = "";//窗口高
                if (opt.height != null) {
                    ah = opt.height;
                } else {
                    if (layer.outerHeight(true) > wh) {
                        ah = wh;
                    } else {
                        ah = layer.outerHeight(true);
                    }
                }
                var sl = $(window).scrollLeft(); //获取滚动条的宽度
                var st = $(window).scrollTop(); //获取滚动条的高度
                if (opt.position != "absolute") {
                    st = 0;
                }
                var al = sl + (ww - aw) / 2;//窗口left位置
                var at = (wh - ah) / 2;//窗口top位置
                if (at < 0) {
                    at = 0;
                }
                at = st + at;
                layer.css({
                    //"height": ah,
                    "position": opt.position
                });
                if (opt.align) {
                    layer.css({
                        "left": al,
                        "top": at
                    });
                }
                //内容滚动条，需要在css中设置alert-content的overflow:auto。若某些窗口不需要滚动条，只需添加一个样式，重写alert-content的overflow即可,个别情况下需要指定alert-content的高度
                var ac = $c.children(".alert-content");
                if (ac.length > 0) {
                    var scrollHeight = parseInt(getData($c, "scrollHeight"));
                    if (scrollHeight > 0) {
                        ac.css({"height": scrollHeight});
                    }
                    else {
                        var sh = 0, sat = 0, sc = 0;
                        if ($c.children(".alert-title").length > 0) {
                            sat = parseInt($c.children(".alert-title").outerHeight(true));//标题栏高度
                        }
                        sc = parseInt(ac.css("padding-top")) + parseInt(ac.css("padding-bottom"));//内容边距
                        sh = ah - sat - sc;
                        ac.css({"height": sh});
                    }
                }
                if (opt.move) {
                    var mt = $c.children(".alert-title");
                    var m = false, dh = $(document).height();
                    var xx, yy;
                    mt.css({"cursor": "move"});//鼠标显示可移动形状
                    mt.mousedown(function (e) {
                        $("body").append('<div class="alert-moves" style="width:' + (aw - 6) + 'px;height:' + (ah - 6) + 'px;left:' + $c.css("left") + ';top:' + $c.css("top") + ';position:' + opt.position + '" data-layer="' + c + '"></div>');//这里宽高要减去边框的
                        m = true;
                        xx = e.pageX - parseInt($c.css("left"));
                        yy = e.pageY - parseInt($c.css("top"));
                        if (document.attachEvent) {//ie的事件监听，拖拽div时禁止选中内容，firefox与chrome可在css中设置过-moz-user-select: none; -webkit-user-select: none;
                            mt[0].attachEvent('onselectstart', function () {
                                return false;
                            });
                        }
                        return false;
                    });
                    $(document).mousemove(function (e) {
                        if (m) {
                            var x = e.pageX - xx;
                            var y = e.pageY - yy;
                            if (x <= 0) {
                                x = 0
                            } else if (x > ww - aw) {
                                x = ww - aw
                            }
                            if (y <= 0) {
                                y = 0
                            } else if (y > dh - ah) {
                                y = dh - ah
                            }
                            $(".alert-moves").css({
                                top: y,
                                left: x
                            });
                            return false;
                        }
                    }).mouseup(function () {
                        m = false;
                        var am = $(".alert-moves");
                        if (getData(am, "layer") != "") {
                            $("." + getData(am, "layer")).animate({"left": am.css("left"), "top": am.css("top")});
                        }
                        am.remove();
                    });
                }
            }
        };
        if (opt.popType == 0) { //读取本页隐藏div
            c = opt.contents.replace(".", '');//去掉前面的点
            if (opt.contents == "" && lt == 0) { //如果内容为空时，读取当前节点data-action属性值（要显示的层类名），仅当使用$("").layer()调用才存在当前节点
                c = getData(th, "action");
                $c = $("." + c);
            } else {
                $c = $("." + c);
            }
        } else if (opt.popType == 1) {
            //加载外部
            var h;
            c = comm.subtr();
            $c = $("." + c);
            if ($c.length == 0) {
                $("body").append('<div class="alert-loading">正在加载...</div>');
                h = '<div class="' + c + '" data-type="1">';
                h += '<div class="alert-content"><div class="alert-load"></div></div>';
                h += "</div>";
                $("body").append(h);
                $c = $("." + c);
                $c.find(".alert-load").load(opt.contents,
                    function (response, status, xhr) {
                        $(".alert-loading").remove();//移除正在加载字样
                        if (status == "success") {
                            if (opt.afterBack != null) {
                                opt.afterBack($c)
                            }
                        } else {
                            $c.find(".alert-load").html("加载错误：" + xhr.statusText);
                        }
                        comm.position($c);
                        $c.addClass("alert-anim-" + opt.animation).show();//添加动画样式并显示层
                    });
            } else {
                $c.show();
                if (opt.afterBack != null) {
                    opt.afterBack($c)
                }
            }
            $c = $("." + c);
        } else if (opt.popType == 2) {
            //直接显示内容
            var h;
            c = comm.subtr();
            $c = $("." + c);
            if ($c.length == 0) {
                h = '<div class="' + c + '" data-type="1">';
                h += '<div class="alert-content"><div class="alert-txt"><span class="icon"></span>' + opt.contents + '</div></div>';
                h += "</div>";
                $("body").append(h);
            }
            $c = $("." + c);
        }
        if (!$c.hasClass("alert-layer")) { //如果没有样式alertlayer，则添加一个
            $c.addClass("alert-layer");
        }
        //居中对齐时设置属性，方便设置窗口在缩放时保持居中
        if (!opt.align) {
            $c.attr("data-resize", "1");
        }
        $c.addClass(opt.className);
        if ($c.children(".alert-title").length == 0 && opt.title != "") {
            $c.prepend(ht);
        }
        if ($c.children(".alert-close").length == 0 && opt.showClose) {
            $c.prepend(hc);
        }
        if ($c.find(".alert-button").length == 0) {
            $c.children(".alert-content").append(hb);
        }
        //加载完成后回调，及计算窗宽高及位置，popType=1外部加载时不在这里返回及计算
        if (opt.popType != 1) {
            comm.position($c);
            $c.addClass("alert-anim-" + opt.animation).show();//添加动画样式并显示层
            if (opt.afterBack != null) {
                opt.afterBack($c)
            }
        }
        //点击遮罩关闭
        if (opt.shadeClose) {
            $("#grey-background").on("click",
                function () {
                    if (opt.autoClose == 0) {
                        layer.close()
                    }
                })
        }
        var cleartime;
        if (opt.autoClose != 0) {
            $c.find(".alert-closetime").remove();
            $c.append('<div class="alert-closetime"></div>');
            autoCloseTime(parseInt(opt.autoClose));
        }
        function autoCloseTime(time) {
            if (time > 0) {
                --time;
                $c.find(".alert-closetime").html(time + "秒后将关闭！");
                cleartime = setTimeout(function () {
                        autoCloseTime(time);
                    },
                    1000);
            } else {
                if (opt.closeback != null) {
                    opt.closeback($c)
                } else {
                    layer.close($c)
                }
            }
        }

        //buttton callback
        if (opt.confirm != null) {
            $c.find(".btn-confirm").click(function (e) {
                if (opt.confirmBack != null) {
                    opt.confirmBack($c);
                } else {
                    clearTimeout(cleartime);
                    layer.close($c);
                }
                e.stopImmediatePropagation();//阻止连续触发事件
            });
        }
        if (opt.cancel != null) {
            $c.find(".btn-cancel").click(function (e) {
                if (opt.cancelBack != null) {
                    opt.cancelBack($c);
                } else {
                    layer.close($c);
                }
                e.stopImmediatePropagation();//阻止连续触发事件
            });
        }
        //close
        $c.on("click", ".close", function (e) {
            //$c.find(".close").on("click", function (e) {
            if (opt.closeBack != null) {
                opt.closeBack($c);
            } else {
                clearTimeout(cleartime);
                layer.close($c);
            }
            e.stopImmediatePropagation();//阻止连续触发事件
        });
        //move

        //浏览器窗口改变时保持居中位置
        $(window).resize(function () {
            var rww = $(window).width(), rwh = $(window).height(), rst = $(window).scrollTop(); //获取滚动条的高度;
            $(".alert-layer").each(function () {
                var rth = $(this);
                if (getData(rth, "resize") != "1") {
                    var rl = (rww - rth.outerWidth(true)) / 2;
                    var rt = (rwh - rth.outerHeight(true)) / 2;
                    if (opt.position == "absolute") {
                        rt = rt + rst;
                    }
                    rth.animate({"left": rl, "top": rt});
                }
            });

        });
    } //mainLayer
    $.fn.extend({
        placeholder: function (opt) {
            opt = jQuery.extend({
                    fc: "focus" //取点焦点时添加的样式
                },
                opt);
            //判断浏览器支持状态，ie9及以下使用
            //如果浏览器不支持placeholder属性
            /*var isie = $.browser.msie,
             v = $.browser.version,
             dm = document.documentMode;
             if ((isie && dm <= 9) || (isie && v <= 9.0 && !dm)) {*/
            if (!('placeholder' in document.createElement('input'))) {
                $(this).each(function () {
                    var $this = $(this);
                    if ($this.attr("placeholder") != "" && typeof($this.attr("placeholder")) != "undefined" && $this[0].tagName == "INPUT" && $this.next("span.placeholder").length == 0) {
                        var block = "block", t = $this.position().top,
                            lf = $this.position().left;
                        // if (getData($this, "display") == "none") {
                        //     t = 0;
                        //     lf = 0
                        // }
                        if ($this.val() != "") {
                            block = "none"
                        }
                        $this.after('<span class="placeholder" style="z-index:10;display:' + block + ';position:absolute;cursor:text;left:' + lf + 'px;top:' + t + 'px;height:' + $this.outerHeight() + 'px;width:' + $this.width() + 'px;padding-left:' + $this.css("padding-left") + '">' + $this.attr("placeholder") + '</span>');
                        $("span.placeholder").on("click",
                            function () {
                                $(this).prev("input").focus();
                            });
                    }
                });
                $(this).on("focus",
                    function () {
                        var $this = $(this);
                        //IE兼容问题，做个判断只有input才添加焦点样式，div不添加
                        if ($this[0].tagName == "INPUT") {
                            $this.addClass(opt.fc);
                        }
                        $this.next("span.placeholder").hide();
                    }).on("blur",
                    function () {
                        var $this = $(this);
                        $this.removeClass(opt.fc);
                        if ($this.val() != "") {
                            $this.next("span.placeholder").hide();
                        } else {
                            $this.next("span.placeholder").show();
                        }
                    });
                //     .live("keyup", function () {
                //     var $this = $(this);
                //     if ($this.val() != "") {
                //         $this.next("span.placeholder").hide();
                //     } else {
                //         $this.next("span.placeholder").show();
                //     }
                //  });
            }
        },
        selectDropDown: function (opt) {
            //input-control判断后再添加placeholder
            opt = jQuery.extend({
                liNum: 5,//也可通过data-num="5"方式传参
                zIndexDiv: ".form-group",
                afterBack: null,
                width: "100%",
                downStyle: true //设置下拉位置样式，false时width参数无效
            }, opt);
            var th = $(this);
            var setDownHeight = function (th) {
                var showNum = parseInt(getData(th, "num"));
                var liLength = parseInt(th.find("li").length);
                var liHeight = th.find("li").outerHeight();
                var height = "";
                if (!isNaN(showNum)) {
                    if (showNum < liLength && showNum != 0) {
                        height = liHeight * showNum
                    }
                } else if (opt.liNum != 0 && opt.liNum < liLength) {
                    height = liHeight * opt.liNum
                }
                th.children(".dropdown").find("ul").css("height", height)
            };
            var setStatus = function (parent, type) {
                if (type == 0) {
                    var sdd = $('.select-dropdown');
                    sdd.removeClass("open");
                    sdd.find('div.input-control').removeClass("focus");
                    sdd.parents(opt.zIndexDiv).css("z-index", "")
                } else {
                    parent.addClass("open");
                    parent.find("div.input-control").addClass("focus");
                    parent.parents(opt.zIndexDiv).css("z-index", "9999")
                }
            };
            th.each(function () {
                var $th = $(this);
                var inputControl = $th.find('div.input-control');
                inputControl.addClass('placeholder');
                inputControl.wrap('<div class="select-control"></div>');
                $th.find('.select-control').prepend('<i class="arrow bg-icon"></i>');
                $th.find(".dropdown").wrapInner('<div class="drop-down-border"></div>');
                var width = getData($th, "width") > 0 ? getData($th, "width") : opt.width;
                if (opt.downStyle) {
                    $th.find(".dropdown").css({top: $th.find(".input-control").outerHeight() - 1, width: width});
                }
                setDownHeight($th);
                var defaultValue = getData($th, "value");
                if (defaultValue) {
                    $th.find(".select-value").val(defaultValue);
                    $th.find("div.input-control").removeClass('placeholder');
                    $th.find("li").each(function () {
                        if (defaultValue == getData($(this), 'value')) {
                            $(this).addClass("active");
                            $th.find("div.input-control").html($(this).html())
                        }
                    })
                } else {
                    if ($th.find("div.input-control").html() == '') {
                        var firstLi = $th.find('.dropdown').find("li:first");
                        if (firstLi.length > 0) {
                            $th.find("div.input-control").html(firstLi.html());
                            $th.find(".select-value").val(getData(firstLi, 'value'))
                        }
                    }
                }
            });
            th.find(".select-control").click(function () {
                var parent = $(this).parents(".select-dropdown");
                setDownHeight(parent);
                if (parent.hasClass("open")) {
                    setStatus(parent, 0)
                } else {
                    setStatus(parent, 0);
                    setStatus(parent, 1)
                }
            });
            th.find("li:not(.disabled)").on("click", function (e) {
                var li = $(this);
                var parent = li.parents(".select-dropdown");
                parent.find(".input-control").removeClass('placeholder').html(li.html());
                parent.find(".select-value").val(getData(li, 'value'));
                li.addClass("active").siblings("li").removeClass("active");
                setStatus(parent, 0);
                opt.afterBack ? opt.afterBack(li) : ""
            });
            $(document).click(function (e) {
                var length = $(e.target).parents(".select-dropdown").length;
                if (length == 0) {
                    setStatus('', 0)
                }
            })
        },
        progress: function (opt) {
            opt = jQuery.extend({
                    speed: 2000//运动速度
                },
                opt);
            $(this).each(function () {
                var th = $(this);
                th.children("b").animate({width: th.children("span").html()}, opt.speed);
                if (th.children("i").length > 0) {
                    th.children("i").animate({width: th.children("i").html()}, opt.speed);
                }
            });
        },
        tooltip: function (opt) {
            opt = jQuery.extend({
                    trigger: "mouseover",
                    direction: "tLeft", //可在标签中设置data-direction
                    maxWidth: 500,
                    fade: 300,
                    y: 10,//显示为当前标签top偏移量跟指定y的距离
                    x: 20,
                    className: "",
                    delay: 500, //鼠标离开区域时提示延时消失时间，单位毫秒
                    move: true //是否跟随鼠标移动
                },
                opt);
            var mt = $(".mousetips");
            var d;
            var clearTime;
            var oy;
            $(this).on(opt.trigger, function (e) {
                mt.remove();//首先移除其它显示中的提示
                clearTimeout(clearTime);//清空定时器
                var t = $(this);
                if (getData(t, "alt") != "") {
                    d = getData(t, "direction") != "" ? getData(t, "direction") : opt.direction;
                    oy = getData(t, "y") != "" ? getData(t, "y") : opt.y;
                    $("body").append('<div class="mousetips ' + d + '" style="max-width:' + opt.maxWidth + 'px;"><i><em></em></i>' + getData(t, "alt") + '</div>');
                    mt = $(".mousetips");
                    if (opt.className != "") {
                        mt.addClass(opt.className);
                    }
                    var x = e.pageX;
                    var yt = t.offset().top;
                    var tHeight = t.outerHeight();//当前标签的高
                    //d显示方向，当前鼠标x轴位置，当前标签y轴偏移量，当前标签的高，this
                    position(d, x, yt, tHeight, mt);
                }
            }).on("mouseleave", function () {
                //鼠标离开标签区域提示文字延时消失
                var delay = getData($(this), "delay") > 0 ? getData($(this), "delay") : opt.delay;
                clearTime = setTimeout(function () {
                    mt.fadeOut(opt.fade,
                        function () {
                            mt.remove();
                        });
                }, delay);
            }).mousemove(function (e) {
                //提示文字跟随鼠标移动
                if (opt.move) {
                    var x = e.pageX;
                    var yt = $(this).offset().top;
                    var tHeight = $(this).outerHeight();//当前标签的高
                    position(d, x, yt, tHeight, mt);
                }
            });
            //当鼠标移入提示层时，清空定时器，移出提示层时移除提示
            mt.on("mouseenter", function () {
                clearTimeout(clearTime);
            }).on("mouseleave", function () {
                $(this).fadeOut(opt.fade, function () {
                    $(this).remove();
                });
            });
            function position(d, x, y, h, th) {
                var winWidth = $(window).width();
                var oh;
                var ow = th.outerWidth(true);
                //由于left/right的位置会影响到宽高，从页影响到top的位置，先固定x方向再算宽及高
                switch (d) {
                    case "tLeft":
                        mt.css({"left": x - opt.x});
                        oh = th.outerHeight(true);
                        mt.css({"top": y - oy - oh});
                        break;
                    case "tRight":
                        mt.css({
                            "left": "auto",
                            "right": winWidth - x - opt.x
                        });
                        oh = th.outerHeight(true);
                        mt.css({"top": y - oy - oh});
                        break;
                    case "bLeft":
                        mt.css({
                            "left": x - opt.x,
                            "top": y + h + oy
                        });
                        break;
                    case "bRight":
                        mt.css({
                            "left": "auto",
                            "right": winWidth - x - opt.x,
                            "top": y + h + oy
                        });
                        break;
                    case "tCenter":

                        mt.css({"left": x - ow / 2});
                        oh = th.outerHeight(true);
                        mt.css({"top": y - oy - oh});
                        break;
                    case "bCenter":
                        mt.css({
                            "left": x - ow / 2,
                            "top": y + h + oy
                        });
                        break;
                }
                mt.fadeIn(opt.fade);
            }
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
        },
        collapse: function (opt) {
            opt = jQuery.extend({
                slide: 0,
                closeOther: true,//关闭其它项
                callBack: null
            }, opt);
            $(this).find(".collapse").on("click", function () {
                var tp = $(this).parents(".panel-title");
                if (tp.hasClass("show")) {
                    tp.removeClass("show");
                    tp.next(".panel-content").slideUp(opt.slide);
                    if (opt.callBack) {
                        opt.callBack($(this))
                    }
                } else {
                    tp.addClass("show");
                    tp.next(".panel-content").slideDown(opt.slide);
                    if (opt.closeOther) {
                        $(".panel-title").not(tp).next(".panel-content").slideUp(opt.slide);
                        $(".panel-title").not(tp).removeClass("show");
                    }
                    if (opt.callBack) {
                        opt.callBack($(this))
                    }
                }
            });
        },
        /*fullscreen: function (opt) {
         opt = jQuery.extend({
         include: true, //是否包含头尾部头header尾footer,标签中设置的优先
         height: 0,//在不包含头尾或一些情况下需要再减去其它区域的高度,标签中设置的优先
         minheight: 0//最小高度，即所指定标签要高于此高度时才计算,标签中设置的优先
         },
         opt);
         var th = $(this);
         full(th);
         $(window).resize(function () {
         full(th);
         });
         function full(th) {
         var wheight = $(window).height(), hfheight = 0, h = "",
         opth = getData(th, "height") > 0 ? getData(th, "height") : opt.height,
         optmh = getData(th, "minheight") > 0 ? getData(th, "minheight") : opt.minheight,
         optin = getData(th, "include") != "" ? getData(th, "include").toString() : opt.include.toString();
         if (optin == "true") {
         hfheight = parseInt($(".header").outerHeight(true)) + parseInt($(".footer").outerHeight(true));
         }
         h = wheight - hfheight - opth;
         if (h > optmh) {
         th.height(h);
         } else {
         th.height("");
         }

         }
         },*/
        myScroll: function (opt) {
            opt = jQuery.extend({
                    speed: 30,//滚动间距，时间越小速度越快
                    type: 0
                },
                opt);
            var intid = [];
            $(this).each(function (i) {
                var th = $(this), liheight = parseInt(th.find("li").outerHeight(true));
                intid[i] = setInterval(function () {
                    if (th.find("ul").height() <= th.height()) {
                        clearInterval(intid[i]);
                    } else {
                        marquee(th, liheight);
                    }
                }, opt.speed);
                th.hover(function () {
                    clearInterval(intid[i]);
                }, function () {
                    intid[i] = setInterval(function () {
                        if (th.find("ul").height() <= th.height()) {
                            clearInterval(intid[i]);
                        } else {
                            marquee(th, liheight);
                        }
                    }, opt.speed);
                });
            });
            function marquee(obj, lih) {
                var mt = "-=1", am = 0;
                if (opt.type == 1) {
                    mt = "-" + lih;
                    am = 500
                }
                obj.find("ul").animate({
                    marginTop: mt
                }, am, function () {
                    var th = $(this);
                    var ul = Math.abs(parseInt(th.css("margin-top")));
                    if (ul >= lih) {
                        th.find("li").slice(0, 1).appendTo(this);
                        th.css("margin-top", 0);
                    }
                });
            }
        },
        inputZoom: function (opt) {
            opt = jQuery.extend({
                    f: 0,
                    //格式化类型0每四个一组，1手机格式，2身份证格式
                    c: "w"
                },
                opt);
            $(this).before('<div class="zoomnum" style="display:none"></div>');
            var text = "";
            var keyCode = "";
            $(this).focus(function () {
                var th = $(this);
                var txt = th.val();
                var splitType = getData(th, "split") != "" ? getData(th, "split") : opt.f;
                txtChange.focusTxt(txt, th.prev(".zoomnum"), splitType);
                text = txt; //获取焦点时的值
            }).keydown(function (e) {
                keyCode = e.keyCode; //删除时用来作判断
                if (keyCode == 90 && e.ctrlKey) {//屏蔽撤销，按撤销有时会存在问题
                    return false;
                }
            }).keyup(function (e) {
                //input propertychange在删除时ie9不会被触发，这里作个特殊处理
                //鼠标弹起时重新取值排列，使用鼠标剪切时仍然不会被触发，这是个问题
                var isIE9 = false;
                var browser = navigator.appName;
                if (browser == "Microsoft Internet Explorer") {
                    var b_version = navigator.appVersion;
                    var version = b_version.split(";");
                    var trim_Version = version[1].replace(/[ ]/g, "");
                    if (trim_Version == "MSIE9.0") {
                        isIE9 = true
                    }
                }
                /*var isie = $.browser.msie,
                 iev = $.browser.version;*/
                var splitType = getData($(this), "split") != "" ? getData($(this), "split") : opt.f;
                if (isIE9) {
                    var th = $(this);
                    txtChange.focusTxt(th.val(), th.prev(".zoomnum"), splitType);
                }
            }).bind('input propertychange',
                function (e) {
                    var th = $(this);
                    var newText = th.val();
                    var zoomNum = th.prev(".zoomnum");
                    var splitType = getData(th, "split") != "" ? getData(th, "split") : opt.f;
                    if (th.val() != "") {
                        zoomNum.fadeIn();
                    } else {
                        zoomNum.fadeOut();
                        return false
                    }
                    var position = txtChange.getCursorPos(th.get(0)); //光标位置
                    var cur = ""; //最后输入的值
                    var v = newText.length - text.length; //新旧两个值长度相减
                    if (v == 1) {
                        //添加一个值
                        cur = newText.substr(position - 1, 1);
                        //光标前面值，即最后输入的数字
                        var append = "<span>" + cur + "</span>";
                        txtChange.addTxt(zoomNum, append, position, splitType);
                    } else if (v == -1) {
                        //删除一个值
                        txtChange.delTxt(zoomNum, position, splitType, zoomNum.height(), newText, keyCode);
                    } else if (v > 1) {
                        //添加多个值，粘贴进来时，此时v为新增进来的个数
                        cur = newText.substr(position - v, v); //即最后输入的多个数字
                        var p = position - v + 1;
                        for (var i = 0; i < v; i++) {
                            var append = "<span>" + cur.substr(i, 1) + "</span>";
                            txtChange.addTxt(zoomNum, append, p, splitType);
                            p++;
                        }
                    } else if (v < -1) {
                        //删除多个时
                        var dp = position;
                        for (var i = 0; i < Math.abs(v); i++) {
                            txtChange.delTxt(zoomNum, dp, splitType, zoomNum.height(), newText, keyCode);
                            dp++;
                        }
                    } else if (newText != text) { //处理特殊情况，前后两个字符长度一样时，例如选中一个字符然后按下其它键，此时长度没有发生变化，但字符串内容发生了变化
                        txtChange.focusTxt(newText, zoomNum, splitType);
                    }
                    text = newText; //重新赋值
                    return false;
                }).blur(function () {
                $(".zoomnum").fadeOut().html("");
            });
            var txtChange = {
                //写入方法 append添加的标签，postio光标位置，ty格式化类型
                addTxt: function (div, append, position, ty) {
                    if (div.children("span").length == 0) { //添加第一个span，最开始是没有span的
                        div.append(append);
                        div.children("span").animate({
                            top: 0
                        })
                    } else {
                        if (position == 1) { //光标在最前面时添加方式也不同
                            div.prepend(append);
                            div.children("span").eq(0).animate({
                                top: 0
                            })
                        } else {
                            var eq = parseInt(position - 2);
                            div.children("span").eq(eq).after(append);
                            div.children("span").eq(eq).next("span").animate({
                                top: 0
                            })
                        }
                    }
                    this.format(div, ty);
                },
                //获取光标位置 $(this).get(0)＝document.getElementById("txt1")
                getCursorPos: function (obj) {
                    var result = 0;
                    if (obj.selectionStart) { //IE以外
                        result = obj.selectionStart;
                    } else { //IE
                        try {
                            var rng;
                            rng = document.selection.createRange();
                            rng.moveStart("character", -event.srcElement.value.length);
                            result = rng.text.length;
                        } catch (e) {
                            throw new Error(10, "asdasdasd")
                        }
                    }
                    return result;
                },
                focusTxt: function (val, div, ty) {
                    var _t = "";
                    if (val != "") {
                        for (var i = 0; i < val.length; i++) {
                            _t += '<span style="top:0">' + val.substr(i, 1) + '</span>'
                        }
                        div.html("").append(_t);
                        this.format(div, ty);
                        div.fadeIn();
                        _t = "";
                    } else {
                        div.fadeOut().html("");
                    }
                },
                //div显示放大的标签名,d删除的字符数,h向上运动的高度,txt文本框的值,keycode按下键盘的值
                //删除方法如果按提删除键，则带运动效果，如果是其他键删除的，则直接重写，相当于重新获取焦点
                delTxt: function (div, d, ty, h, txt, keycode) {
                    var t = this;
                    if (keycode == 8 || keycode == 46) { //backspace和del键
                        div.children("span").eq(d).animate({
                                top: -h
                            },
                            function () {
                                $(this).remove();
                                t.format(div, ty);
                            })
                    } else {
                        t.focusTxt(txt, div, ty);
                    }
                },
                //格式化ty格式化类型0为每4个一组，1手机格式，2身份证格式
                format: function (div, ty) {
                    var s = div.children("span");
                    s.removeClass(opt.c);
                    var splitType;//拆分规则
                    var count = 0;
                    if (ty == 0) {//每四个一组
                        splitType = [4, 4, 4, 4]
                    } else if (ty == 1) {//手机格式，前三个，后四个
                        splitType = [3, 4, 4]
                    }
                    else if (ty == 2) {//身份证格式
                        splitType = [6, 8, 4]
                    } else {
                        splitType = ty;
                    }
                    for (var i = 0; i < splitType.length; i++) {
                        count += splitType[i];
                        s.eq(count).addClass(opt.c);
                    }
                }
            }
        }
    });
    //查找当前标签属性，经常用到将它提出来
    function getData(th, data) {
        if (typeof(th.data(data)) == "undefined") {
            return "";
        }
        else {
            return th.data(data)
        }
    }
})(jQuery);
var layer = {
    close: function (a) {
        var l = $(".alert-layer"), i = 0;
        if (a) {
            l = a
        }
        l.fadeOut(0,
            function () {
                $(".alert-layer").each(function () {
                    if (!$(this).is(":hidden")) {
                        i++;
                        $(this).css({"z-index": ""});
                    }
                });
                //如果没传参数进来，则关闭所有窗口并且关闭遮罩层
                if (i <= 0 || !a) {
                    $("#grey-background").remove();
                    //去掉body属性
                    $("body").css({
                        overflow: '',
                        paddingRight: ''
                    })
                }
            });
        if (l.data("type") == 1) {
            l.remove()
        }
        return false;
    }
};
var iconfont = {
    json: function (fontjson) {
        /* var isie = $.browser.msie,
         v = $.browser.version,
         dm = document.documentMode;
         if ((isie && dm <= 7) || (isie && v == 7.0 && !dm)) {*/
        var browser = navigator.appName;
        if (browser == "Microsoft Internet Explorer") {
            var b_version = navigator.appVersion;
            var version = b_version.split(";");
            var trim_Version = version[1].replace(/[ ]/g, "");
            if (trim_Version == "MSIE7.0") {
                var els = document.getElementsByTagName('*'), i, c, el;
                for (i = 0; ; i += 1) {
                    el = els[i];
                    if (!el) {
                        break;
                    }
                    c = el.className;
                    c = c.match(/icon-[^\s'"]+/);
                    if (c && fontjson[c[0]]) {
                        el.innerHTML = fontjson[c[0]];
                    }
                }
            }
        }
    }
};

/***********************************/
$(function () {
    $(".input-control").placeholder();//输入框焦点事件，仅对ie9或以下
    $(".open-layer").layer();//全局放一个弹层，方便使用
    backtop();//返回顶部
    ie7iconfont();//ie7字体图标
    advisory();//右则浮动
    widescreen();//兼容1000屏样式
    fixednav();//固定导航
});
//字体图标
function ie7iconfont() {
    var fontjson = {
        "icon-calculator": "&#xe625;",
        "icon-close": "&#xe600;",
        "icon-dianhua": "&#xe608;",
        "icon-kaixin": "&#xe611;",
        "icon-feedback": "&#xe626;",
        "icon-arrowright": "&#xe604;",
        "icon-fabout": "&#xe605;",
        "icon-fsafety": "&#xe607;",
        "icon-fhelp": "&#xe606;",
        "icon-circle": "&#xe603;",
        "icon-remind": "&#xe612;",
        "icon-mobile": "&#xe613;",
        "icon-user-info": "&#xe615;",
        "icon-mail": "&#xe616;",
        "icon-bank-card": "&#xe617;",
        "icon-book": "&#xe614;",
        "icon-account-overview": "&#xe618;",
        "icon-account": "&#xe60e;",
        "icon-investment-record": "&#xe619;",
        "icon-financing-record": "&#xe61a;",
        "icon-account-corporation": "&#xe61b;",
        "icon-setting": "&#xe61c;",
        "icon-message": "&#xe61d;",
        "icon-correct": "&#xe61e;",
        "icon-error": "&#xe61f;",
        "icon-xiaolv": "&#xe609;",
        "icon-shenhe": "&#xe620;",
        "icon-baozhang": "&#xe621;",
        "icon-sqq": "&#xe601;",
        "icon-qzone": "&#xe602;",
        "icon-renren": "&#xe60a;",
        "icon-tqq": "&#xe60b;",
        "icon-weixin": "&#xe60c;",
        "icon-sina": "&#xe60d;",
        "icon-douban": "&#xe610;",
        "icon-intro": "&#xe622;",
        "icon-safety": "&#xe623;",
        "icon-tel": "&#xe624;",
        "icon-date": "&#xe627;",
        "icon-aleft": "&#xe628;",
        "icon-aright": "&#xe629;",
        "icon-aup": "&#xe62c;",
        "icon-adown": "&#xe62b;",
        "icon-hkz": "&#xe62d;",
        "icon-ywc": "&#xe62e;",
        "icon-contact": "&#xe62f;",
        "icon-cooperation": "&#xe630;",
        "icon-note": "&#xe631;",
        "icon-modify": "&#xe632;",
        "icon-note2": "&#xe633;",
        "icon-datasecurity": "&#xe634;",
        "icon-accountsecurity": "&#xe635;",
        "icon-fundssecurity": "&#xe636;",
        "icon-high": "&#xe637;",
        "icon-cycle": "&#xe638;",
        "icon-projectsecurity": "&#xe639;",
        "icon-delete": "&#xe63a;",
        "icon-mail-open": "&#xe63b;",
        "icon-douban1": "&#xe63c;",
        "icon-wenhao": "&#xe60f;",
        "icon-noproject": "&#xe63d;",
        "icon-addbank": "&#xe62a;",
        "icon-return": "&#xe63e;",
        "icon-agreement": "&#xe63f;"
    };
    iconfont.json(fontjson);
}
/*计算器*/
function calculator() {
    $(".open-calculator").layer({
        popType: 1,
        title: "收益计算器",
        width: 450,
        contents: "calculator.html?t=" + new Date().getTime() + " .layer-computer", //用相对于根目录的绝对路径
        afterBack: function (a) {
            $(".input-control").inputfocus();//ie9或以下重新加载输入框提示
            a.find(".input-control").val("");//重新打开清空上次输入的信息
            a.find(".content").find("span").text("");//清空上次计算结果
        }
    });
    //以上引用可能会存在路径问题(静态页只为方便引用做成单独页面)，在实际项目中建议技术把计算器.html中的body内的代码复制粘贴到当前页面</body>前，然后改成下面方法引用；建议用下面的方法(意见反馈也是一样)
    /*$(".open-calculator").layer({
     title: "收益计算器",
     width: 450,
     height: 420,
     contents: ".layer-computer"
     });*/

    $("body").on("click", '.computer-button',
        function () {
            var a = $(".computer-money").val(); //投资金额
            if (!chcknullnum(a)) {
                alert("投资金额不能为空且只能是数字");
                $(".computer-money").val("").focus();
                return;
            }
            if (!chckisnum(a)) {
                alert("投资金额最多只能是两位小数！");
                $(".computer-money").focus();
                return;
            }
            var b = $(".computer-bf").val(); //预期年化利率
            if (!chcknullnum(b)) {
                alert("预期年化利率不能为空且只能是数字！");
                $(".computer-bf").val("").focus();
                return;
            }
            if (!chckisnum(b)) {
                alert("预期年化利率最多只能是两位数字！");
                $(".computer-bf").focus();
                return;
            }
            var c = $(".computer-data").val(); //预期年化利率
            if (!chcknullnum(c)) {
                alert("投资期限不能为空且只能是数字！");
                $(".computer-data").val("").focus();
                return;
            }
            var rm = a * 10000 * b / 100 / 360 * c;
            //取两位小数
            var rm2 = Math.round(rm * 100) / 100;
            $(".return-money").html(rm2);
            $(".computer-allmoney").html(parseFloat(rm2 + a * 10000).toFixed(2));
        });
    /*重置计算器*/
    $("body").on("click", ".computer-reset",
        //$(".computer-reset").live("click",
        function () {
            $(".layer-computer").find("input[type=text]").val("");
            $(".layer-computer .return-money,.layer-computer .computer-allmoney").html("");
        });
    /*计算器验证输入,检查是不是数字及两数位数*/
    function chcknullnum(a) {
        if (!isNaN(a) && a != "") {
            return a;
        } else {
            return false;
        }
    }

    function chckisnum(a) {
        if (a.indexOf(".") > -1) {
            //如果有小数点
            var b = a.split('.')[1].length;
            if (b > 2) {
                a = false;
            }
        }
        return a;
    }
}
/*意见反馈*/
function feedback() {
    $(".open-feedback").layer({
        width: 750,
        popType: 1,
        title: "意见反馈",
        contents: "feedback.html?t=" + new Date().getTime() + " .layer-feedback",//缓存问题可以增加个参数，
        afterBack: function (a) {
            $(".input-control").inputfocus();//ie9或以下重新加载输入框提示
            ie7iconfont();//如果使用到字体图标
            a.find(".input-control").val("");//重新打开清空上次输入的信息
        }
    }); //用相对于根目录的绝对路径
}
/*右则浮动*/
function advisory() {
    calculator();//计算器
    feedback();//意见反馈
    var height = $(".advisory").height();
    $(".advisory").css({"top": "50%", "margin-top": -parseInt(height / 2) + "px"});
    $(".advisory a.close_kf").click(function () {
        $(".advisory").animate({
                right: -80
            },
            300,
            function () {
                $(".advisory .close_kf").fadeOut().animate({left: 0});
                $(".advisory .show_kf").show().animate({
                        left: -20
                    },
                    300);
            });
    });
    $(".advisory a.show_kf").hover(function () {
        $(this).animate({left: 0}, function () {
            $(this).hide();
            $(".advisory .close_kf").fadeIn().animate({left: "-20px"});
            $(".advisory").animate({
                right: 0
            }, 300);
        });
    });
}
/*兼容小屏*/
function widescreen() {
    ws();
    $(window).resize(function () {
        ws();
    });
    function ws() {
        var winwidth = $(window).width();
        if (winwidth <= 1024) {
            $("body").addClass("body-min");
        } else {
            $("body").removeClass("body-min");
        }
    }
}
/*返回顶部*/
function backtop() {
    var backtop = "<a class=\"backtop\" href=\"javascript:void(0)\">返回顶部</a>";
    $("body").append(backtop);
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        scrollTop > 100 ? $(".backtop").fadeIn(300) : $(".backtop").fadeOut(300);
    });
    $(".backtop").on("click", function () {
        $('html,body').animate({scrollTop: 0}, 500);
    });
}
/*固定导航*/
function fixednav() {
    var fixednav = $(".header .header-nav");
    if (fixednav.length > 0) {
        var headertop = fixednav.offset().top + parseInt(fixednav.outerHeight(true)) + 10;
        $(window).scroll(function () {
            if ($(window).scrollTop() >= headertop) {
                if (!fixednav.hasClass("fixed")) {
                    fixednav.css("top", -headertop).addClass("fixed").animate({
                        "top": 0
                    }, 1000);
                }
            } else {
                fixednav.removeClass("fixed");
            }
        })
    }
}