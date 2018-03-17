;(function ($) {
    $.fn.layer = function (opt) {
        var opt = $.extend({},
            $.fn.layer.defaults, opt);
        $(this).live(opt.trigger,
            function () {
                mainlayer(opt, 0, $(this));
            });
    }; //$("").layer()
    jQuery.layer = function (opt) {
        var opt = $.extend({},
            $.fn.layer.defaults, opt);
        mainlayer(opt, 1, 0);
    }; //$.layer()
    $.fn.layer.defaults = {
        width: null,
        height: null,
        trigger: "click",
        //触发事件,注意用mouseover代替hover
        autoclose: 0,
        //自动关闭，单位为秒，默认0不关闭
        title: "",
        //标题
        contents: "",
        poptype: 0,
        //弹窗类型 0读取本页隐藏div(默认)，1加载外部文档，2直接显示contents文本
        addclass: "",
        //添加的addclass样式
        position: "fixed",
        //absolute和fixed。
        closeparent: true,
        //多层弹窗口时是否关闭父窗口
        confirm: null,
        //确定按钮文本，默认为空不显示
        confirmback: null,
        //确定回调函数，仅当confirm不为null时；确定按钮不为空和回调为空时，确定后关闭窗口
        cancel: null,
        //取消按钮，默认为空，不显示
        cancelback: null,
        //取消按钮回调，仅当cancel不为null时；取消按钮不为空和回调为空时，取消后关闭窗口
        closeback: null,
        //关闭时回调，为空时关闭，回调时不关闭窗口
        loadback: null,
        //窗口加载后回调
        afterback: null,
        move: true,
        //允许窗口移动
        masklayer: true,
        //显示遮罩层
        align: true,
        //窗口默认垂直居中对齐，默认为true居中，false时请在css中设置left和top。方便将窗口定位在其它位置
        showclose: true,
        //显示关闭按钮
        shadeclose: false, //点击遮罩关闭 false不关闭
        animation: 1//弹出层css3动画效果，仅在支持的浏览器。动画序号对应animation样式的alert-anim-*
    };
    function mainlayer(opt, lt, th) {
        $("#grey-background").remove();
        if (opt.masklayer) {
            $("body").append('<div id="grey-background"></div>');
        }
        if (opt.loadback != null) { //加载后回调
            opt.loadback();
        }
        if (opt.closeparent) {
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
        if (opt.poptype == 0) { //读取本页隐藏div
            c = opt.contents.replace(".", '');//去掉前面的点
            if (opt.contents == "" && lt == 0) { //如果内容为空时，读取当前节点data-action属性值（要显示的层类名），仅当使用$("").layer()调用才存在当前节点
                c = getdata(th, "action");
                $c = $("." + c);
            } else {
                $c = $("." + c);
            }
        } else if (opt.poptype == 1) {
            //加载外部
            var h;
            if (opt.addclass != "") {
                c = opt.addclass;
            } else {
                //$.调用时，将内容转码取字符作为类名
                c = "layer" + encodeURIComponent(opt.contents).replace(/%/g, '').replace(/ /g, '').replace(".", '').toLocaleLowerCase().substring(0, 15); //取前面10位+后面5位，避免重复
            }
            $c = $("." + c);
            if ($c.length == 0) {
                h = '<div class="' + c + '">';
                h += '<div class="alert-content"><div class="alert-load"> <div class="alert-loading">正在加载...</div></div></div>';
                h += "</div>";
                $("body").append(h);
                $c = $("." + c);
                $c.find(".alert-load").load(opt.contents,
                    function () {
                        if (opt.afterback != null) {
                            opt.afterback($c)
                        }
                    });
            } else {
                $c.show();
                if (opt.afterback != null) {
                    opt.afterback($c)
                }
            }
            $c = $("." + c);
        } else if (opt.poptype == 2) {
            //直接显示内容
            var h;
            if (opt.addclass != "") {
                c = opt.addclass;
            } else {
                //$.调用时，将内容转码取字符作为类名
                c = "layer" + encodeURIComponent(opt.contents).replace(/%/g, '').replace(/ /g, '').toLocaleLowerCase().substring(0, 15); //过滤%和空格转小写，取前面10位
            }
            $c = $("." + c);
            if ($c.length == 0) {
                h = '<div class="' + c + '">';
                h += '<div class="alert-content"><div class="alert-txt"><span class="icon"></span>' + opt.contents + '</div></div>';
                h += "</div>";
                $("body").append(h);
            }
            $c = $("." + c);
        }
        if (!$c.hasClass("alert-layer")) { //如果没有样式alertlayer，则添加一个
            $c.addClass("alert-layer");
        }
        //居中对齐时设置属性，方便设置窗口在缩放时保存居中
        if (!opt.align) {
            $c.attr("data-resize", "1");
        }
        $c.addClass(opt.addclass);
        if ($c.children(".alert-title").length == 0 && opt.title != "") {
            $c.prepend(ht);
        }
        if ($c.children(".alert-close").length == 0 && opt.showclose) {
            $c.prepend(hc);
        }
        if ($c.find(".alert-button").length == 0) {
            $c.children(".alert-content").append(hb);
        }
        $c.addClass("alert-anim-" + opt.animation).show();//添加动画样式并显示层
        var ww = $(window).width();
        var wh = $(window).height();
        var aw = opt.width == null ? $c.outerWidth(true) : opt.width;
        $c.css({"width": aw});//在一些情况，还没设置窗口宽时，高度会计算不准确，因此这里先设定宽
        //高度计算方法，参数设定的则按设置的，否则按窗口实际高，如果窗口高于浏览器，则按浏览器高
        //ah = opt.height == null ? $c.outerHeight(true) : opt.height;
        var ah = "";//窗口高
        if (opt.height != null) {
            ah = opt.height;
        } else {
            if ($c.outerHeight(true) > wh) {
                ah = wh;
            } else {
                ah = $c.outerHeight(true);
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
        $c.css({
            "height": ah,
            "position": opt.position
        });
        if (opt.align) {
            $c.css({
                "left": al,
                "top": at
            });
        }
        //加载完成后回调，load时不在这里返回
        if (opt.afterback != null && opt.poptype != 1) {
            opt.afterback($c)
        }
        //内容滚动条，需要在css中设置alert-content的overflow:auto。若某些窗口不需要滚动条，只需添加一个样式，重写alert-content的overflow即可
        var sh = 0, sat = 0, sc = 0;
        if ($c.children(".alert-title").length > 0) {
            sat = parseInt($c.children(".alert-title").outerHeight(true));//标题栏高度
        }
        if ($c.children(".alert-content").length > 0) {
            sc = parseInt($c.children(".alert-content").css("padding-top")) + parseInt($c.children(".alert-content").css("padding-bottom"));//内容边距
            sh = ah - sat - sc;
            $c.children(".alert-content").css({"height": sh});
        }
        //点击遮罩关闭
        if (opt.shadeclose) {
            $("#grey-background").live("click",
                function () {
                    if (opt.autoclose == 0) {
                        layer.close()
                    }
                })
        }
        var cleartime;
        if (opt.autoclose != 0) {
            $c.find(".alert-closetime").remove();
            $c.append('<div class="alert-closetime"></div>');
            autoclosetime(parseInt(opt.autoclose));
        }
        function autoclosetime(time) {
            if (time > 0) {
                --time;
                $c.find(".alert-closetime").html(time + "秒后将关闭！");
                cleartime = setTimeout(function () {
                        autoclosetime(time);
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
                if (opt.confirmback != null) {
                    opt.confirmback($c);
                } else {
                    clearTimeout(cleartime);
                    layer.close($c);
                }
                e.stopImmediatePropagation();//阻止连续触发事件
            });
        }
        if (opt.cancel != null) {
            $c.find(".btn-cancel").click(function (e) {
                if (opt.cancelback != null) {
                    opt.cancelback($c);
                } else {
                    layer.close($c);
                }
                e.stopImmediatePropagation();//阻止连续触发事件
            });
        }
        //close
        $c.find(".close").click(function (e) {
            if (opt.closeback != null) {
                opt.closeback($c);
            } else {
                clearTimeout(cleartime);
                layer.close($c);
            }
            e.stopImmediatePropagation();//阻止连续触发事件
        });
        //move
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
                if (getdata(am, "layer") != "") {
                    $("." + getdata(am, "layer")).animate({"left": am.css("left"), "top": am.css("top")});
                }
                am.remove();
            });
        }
        //浏览器窗口改变时保存居中位置
        $(window).resize(function () {
            var rww = $(window).width(), rwh = $(window).height(), rst = $(window).scrollTop(); //获取滚动条的高度;
            $(".alert-layer").each(function () {
                var rth = $(this);
                if (getdata(rth, "resize") != "1") {
                    var rl = (rww - rth.outerWidth(true)) / 2;
                    var rt = (rwh - rth.outerHeight(true)) / 2;
                    if (opt.position == "absolute") {
                        rt = rt + rst;
                    }
                    rth.css({
                        "left": rl,
                        "top": rt
                    });
                }
            });

        });
    } //mainlayer
    $.fn.extend({
        inputfocus: function (opt) {
            opt = jQuery.extend({
                    fc: "focus" //取点焦点时添加的样式
                },
                opt);
            //判断浏览器支持状态，ie9及以下使用
            var isie = $.browser.msie,
                v = $.browser.version,
                dm = document.documentMode;
            if ((isie && dm <= 9) || (isie && v <= 9.0 && !dm)) {
                $(this).each(function () {
                    var $this = $(this);
                    if ($this.attr("placeholder") != "" && typeof($this.attr("placeholder")) != "undefined" && $this[0].tagName == "INPUT" && $this.next("span.placeholder").length == 0) {
                        var block = "block", t = $this.position().top,
                            lf = $this.position().left;
                        // if (getdata($this, "display") == "none") {
                        //     t = 0;
                        //     lf = 0
                        // }
                        if ($this.val() != "") {
                            block = "none"
                        }
                        $this.after('<span class="placeholder" style="z-index:10;display:' + block + ';position:absolute;cursor:text;left:' + lf + 'px;top:' + t + 'px;height:' + $this.outerHeight() + 'px;width:' + $this.width() + 'px;padding-left:' + $this.css("padding-left") + '">' + $this.attr("placeholder") + '</span>');
                        $("span.placeholder").live("click",
                            function () {
                                $(this).prev("input").focus();
                            });
                    }
                });
                $(this).live("focus",
                    function () {
                        var $this = $(this);
                        //IE兼容问题，做个判断只有input才添加焦点样式，div不添加
                        if ($this[0].tagName == "INPUT") {
                            $this.addClass(opt.fc);
                        }
                        $this.next("span.placeholder").hide();
                    }).live("blur",
                    function () {
                        var $this = $(this);
                        $this.removeClass(opt.fc);
                        if ($this.val() != "") {
                            $this.next("span.placeholder").hide();
                        } else {
                            $this.next("span.placeholder").show();
                        }
                    }).live("keyup", function () {
                    var $this = $(this);
                    if ($this.val() != "") {
                        $this.next("span.placeholder").hide();
                    } else {
                        $this.next("span.placeholder").show();
                    }
                });
            }
        },
        selectdrapdown: function (opt) {
            opt = jQuery.extend({
                    trigger: "click",
                    //触发事件,注意用mouseover代替hover
                    linum: 0,
                    //显示li的个数，超出滚动条。也可在当前标签设置属性data-num="5"来设置，为0显示全部，标签中设置的优先
                    slidespeed: 0,
                    //下拉速度，单位毫秒
                    zindexdiv: ".form-group",
                    //在指定最外层div，添加类名，兼容ie7层级问题
                    afterback: null,
                    //回调函数
                    fc: "focus", //取点焦点时添加的样式，跟input一样效果
                    width: "100%" //下拉的宽度，默认下跟输入框一样的宽
                },
                opt);
            var $this = $(this);
            $this.each(function () {
                var $th = $(this), w = getdata($th, "width") > 0 ? getdata($th, "width") : opt.width;
                if ($th.children(".arrow").length == 0) {//显示下拉的箭头，如果没有则添加
                    $th.append('<span class="arrow"></span>');
                }
                $th.css({
                    "width": $th.children(".input-control").innerWidth()
                });
                ulheight($th);//计算ul下拉高度，减少一个边框的高度
                $th.children(".drapdown").css({top: $th.children(".input-control").outerHeight() - 1, width: w})
            });
            //ul下拉高度问题，动态加载进来的数据时，放在点击下拉时重新计算
            function ulheight(th) {
                var divlinum = parseInt(getdata(th, "num")), //标签中设置的显示个数，这里设置的优先
                    num = th.find("li").length, //li的个数
                    liheight = th.find("li").outerHeight(),//单个下拉li的高度
                    dh = "";//ul下拉高度，下面条件不符合时，则高度为空，即去掉高度
                if (!isNaN(divlinum)) {
                    if (divlinum < num && divlinum != 0) {
                        dh = liheight * divlinum;
                    }
                } else if (opt.linum != 0 && opt.linum < num) {
                    dh = liheight * opt.linum;
                }
                th.children(".drapdown").children("ul").css("height", dh);
            }

            $this.children(".input-control").bind(opt.trigger,
                function (event) {
                    ulheight($(this).parents(".select-drapdown"));
                    bind($(this), event);
                    event.stopImmediatePropagation();
                });
            $this.find(".arrow").bind(opt.trigger,
                function (event) {
                    ulheight($(this).parents(".select-drapdown"));
                    bind($(this), event);
                    event.stopImmediatePropagation();
                });
            function bind($this, ev) {
                var $th = $this.parents(".select-drapdown");
                if ($th.hasClass("open")) {
                    restore();
                } else {
                    restore();
                    $th.addClass("open").css("z-index", 999);
                    if (opt.zindexdiv != null) {
                        $th.parents(opt.zindexdiv).addClass("current").css("z-index", 999)
                    }
                    $th.children(".input-control").addClass(opt.fc);
                    $th.children(".drapdown").slideDown(opt.slidespeed)
                }
                ev.stopPropagation();
            }

            $(document).click(function (e) {
                var c = e.target.className,
                    p = 0, cs = c;
                //如果c是有多个样式，下面$("." + c)这个存在问题，这里判断下
                if (c != "") {
                    if (c.split(" ").length > 1) {
                        cs = c.split(" ")[0];
                    }
                    p = $("." + cs).parents(".select-drapdown").length;
                }
                if (p == 0) {
                    restore();
                }
            });
            $this.find("li:not(.notdata)").live("click", function () {
                var $th = $(this);
                var $value = getdata($th, "value");
                var $hidden = $th.parents(".select-drapdown").find(".input-value");
                var $default = getdata($th.parents(".select-drapdown").find(".input-control"), "default");
                $th.addClass("hover").siblings("li").removeClass("hover");
                $th.parents(".select-drapdown").children(".input-control").removeClass("placeholder").html($th.html());
                //如果存在设置的默认值，则在li中插入默认值
                if ($default != "" && $th.parent("ul").find(".default").length == 0) {
                    $th.parent("ul").prepend('<li class="default" data-value="">' + $default + '</li>');
                }
                //下拉选择后重新选回默认值时添加未选择样式
                if ($th.text() == $default) {
                    $th.parents(".select-drapdown").children(".input-control").addClass("placeholder");
                }
                //如果li中存在input-value输入框，则将data-value的值赋给input-value
                if ($hidden.length > 0) {
                    $hidden.val($value);
                }
                restore();
                opt.afterback != null ? opt.afterback($th) : "";
            });
//恢复状态
            function restore() {
                var sd = $(".select-drapdown");
                sd.removeClass("open").css("z-index", "").children(".drapdown").slideUp(opt.slidespeed);
                sd.parents(opt.zindexdiv).removeClass("current").css("z-index", "");
                sd.children(".input-control").removeClass(opt.fc);
            }
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
                    direction: "tleft", //可在标签中设置data-direction
                    maxwidth: 500,
                    fade: 300,
                    y: 10,//显示为当前标签top偏移量跟指定y的距离
                    x: 20,
                    addclass: "",
                    delay: 500, //鼠标离开区域时提示延时消失时间，单位毫秒
                    move: true //是否跟随鼠标移动
                },
                opt);
            var mt = $(".mousetips");
            var d;
            var cleartime;
            var oy;
            $(this).live(opt.trigger, function (e) {
                mt.remove();//首先移除其它显示中的提示
                clearTimeout(cleartime);//清空定时器
                var t = $(this);
                if (getdata(t, "alt") != "") {
                    d = getdata(t, "direction") != "" ? getdata(t, "direction") : opt.direction;
                    oy = getdata(t, "y") != "" ? getdata(t, "y") : opt.y;
                    $("body").append('<div class="mousetips ' + d + '" style="max-width:' + opt.maxwidth + 'px;"><i><em></em></i>' + getdata(t, "alt") + '</div>');
                    mt = $(".mousetips");
                    if (opt.addclass != "") {
                        mt.addClass(opt.addclass);
                    }
                    var x = e.pageX;
                    var yt = t.offset().top;
                    var theight = t.outerHeight();//当前标签的高
                    //d显示方向，当前鼠标x轴位置，当前标签y轴偏移量，当前标签的高，this
                    position(d, x, yt, theight, mt);
                }
            }).live("mouseleave", function () {
                //鼠标离开标签区域提示文字延时消失
                var delay = getdata($(this), "delay") > 0 ? getdata($(this), "delay") : opt.delay;
                cleartime = setTimeout(function () {
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
                    var theight = $(this).outerHeight();//当前标签的高
                    position(d, x, yt, theight, mt);
                }
            });
            //当鼠标移入提示层时，清空定时器，移出提示层时移除提示
            mt.live("mouseenter", function () {
                clearTimeout(cleartime);
            }).live("mouseleave", function () {
                $(this).fadeOut(opt.fade, function () {
                    $(this).remove();
                });
            });
            function position(d, x, y, h, th) {
                var winwidth = $(window).width();
                var oh;
                var ow = th.outerWidth(true);
                //由于left/right的位置会影响到宽高，从页影响到top的位置，先固定x方向再算宽及高
                switch (d) {
                    case "tleft":
                        mt.css({"left": x - opt.x});
                        oh = th.outerHeight(true);
                        mt.css({"top": y - oy - oh});
                        break;
                    case "tright":
                        mt.css({
                            "left": "auto",
                            "right": winwidth - x - opt.x
                        });
                        oh = th.outerHeight(true);
                        mt.css({"top": y - oy - oh});
                        break;
                    case "bleft":
                        mt.css({
                            "left": x - opt.x,
                            "top": y + h + oy
                        });
                        break;
                    case "bright":
                        mt.css({
                            "left": "auto",
                            "right": winwidth - x - opt.x,
                            "top": y + h + oy
                        });
                        break;
                    case "tcenter":

                        mt.css({"left": x - ow / 2});
                        oh = th.outerHeight(true);
                        mt.css({"top": y - oy - oh});
                        break;
                    case "bcenter":
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
                    callback: null,
                    content: ".tab-content"
                },
                opt);
            var $tab = $(this).find("li");
            $tab.live(opt.trigger,
                function () {
                    $(this).addClass("current").siblings().removeClass("current");
                    $(opt.content).children(".tab-pane").hide().eq($tab.index(this)).show();
                    if (opt.callback != null) {
                        opt.callback($(this));
                    }
                });
        },
        collapse: function (opt) {
            opt = jQuery.extend({
                slide: 0,
                closeother: true,//关闭其它项
                callback: null
            }, opt);
            $(this).find(".collapse").live("click", function () {
                var tp = $(this).parents(".panel-title");
                if (tp.hasClass("show")) {
                    tp.removeClass("show");
                    tp.next(".panel-content").slideUp(opt.slide);
                    if (opt.callback) {
                        opt.callback($(this))
                    }
                } else {
                    tp.addClass("show");
                    tp.next(".panel-content").slideDown(opt.slide);
                    if (opt.closeother) {
                        $(".panel-title").not(tp).next(".panel-content").slideUp(opt.slide);
                        $(".panel-title").not(tp).removeClass("show");
                    }
                    if (opt.callback) {
                        opt.callback($(this))
                    }
                }
            });
        },
        fullscreen: function (opt) {
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
                    opth = getdata(th, "height") > 0 ? getdata(th, "height") : opt.height,
                    optmh = getdata(th, "minheight") > 0 ? getdata(th, "minheight") : opt.minheight,
                    optin = getdata(th, "include") != "" ? getdata(th, "include").toString() : opt.include.toString();
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
        },
        myscroll: function (opt) {
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
        inputzoom: function (opt) {
            opt = jQuery.extend({
                    f: 0,
                    //格式化类型0每四个一组，1手机格式，2身份证格式
                    c: "w"
                },
                opt);
            $(this).before('<div class="zoomnum" style="display:none"></div>');
            var text = "";
            var keycode = "";
            $(this).focus(function () {
                var th = $(this);
                var txt = th.val();
                var splittype = getdata(th, "split") != "" ? getdata(th, "split") : opt.f;
                txtchange.focustxt(txt, th.prev(".zoomnum"),splittype);
                text = txt; //获取焦点时的值
            }).keydown(function (e) {
                keycode = e.keyCode; //删除时用来作判断
                if (keycode == 90 && e.ctrlKey) {//屏蔽撤销，按撤销有时会存在问题
                    return false;
                }
            }).keyup(function (e) {
                //input propertychange在删除时ie9不会被触发，这里作个特殊处理
                //鼠标弹起时重新取值排列，使用鼠标剪切时仍然不会被触发，这是个问题
                var isie = $.browser.msie,
                    iev = $.browser.version;
               var splittype = getdata($(this), "split") != "" ? getdata($(this), "split") : opt.f;
                if (isie && iev == 9.0) {
                    var th = $(this);
                    txtchange.focustxt(th.val(), th.prev(".zoomnum"),splittype);
                }
            }).bind('input propertychange',
                function (e) {
                    var th = $(this);
                    var newtext = th.val();
                    var zoomnum = th.prev(".zoomnum");
                    var splittype = getdata(th, "split") != "" ? getdata(th, "split") : opt.f;
                    if (th.val() != "") {
                        zoomnum.fadeIn();
                    } else {
                        zoomnum.fadeOut();
                        return false
                    }
                    var postion = txtchange.getCursorPos(th.get(0)); //光标位置
                    var cur = ""; //最后输入的值
                    var v = newtext.length - text.length; //新旧两个值长度相减
                    if (v == 1) {
                        //添加一个值
                        cur = newtext.substr(postion - 1, 1);
                        //光标前面值，即最后输入的数字
                        var append = "<span>" + cur + "</span>";
                        txtchange.addtxt(zoomnum, append, postion, splittype);
                    } else if (v == -1) {
                        //删除一个值
                        txtchange.deltxt(zoomnum, postion, splittype, zoomnum.height(), newtext, keycode);
                    } else if (v > 1) {
                        //添加多个值，粘贴进来时，此时v为新增进来的个数
                        cur = newtext.substr(postion - v, v); //即最后输入的多个数字
                        var p = postion - v + 1;
                        for (var i = 0; i < v; i++) {
                            var append = "<span>" + cur.substr(i, 1) + "</span>";
                            txtchange.addtxt(zoomnum, append, p, splittype);
                            p++;
                        }
                    } else if (v < -1) {
                        //删除多个时
                        var dp = postion;
                        for (var i = 0; i < Math.abs(v); i++) {
                            txtchange.deltxt(zoomnum, dp, splittype, zoomnum.height(), newtext, keycode);
                            dp++;
                        }
                    } else if (newtext != text) { //处理特殊情况，前后两个字符长度一样时，例如选中一个字符然后按下其它键，此时长度没有发生变化，但字符串内容发生了变化
                        txtchange.focustxt(newtext, zoomnum, splittype);
                    }
                    text = newtext; //重新赋值
                    return false;
                }).blur(function () {
                 $(".zoomnum").fadeOut().html("");
            });
            var txtchange = {
                //写入方法 append添加的标签，postio光标位置，ty格式化类型
                addtxt: function (div, append, postion, ty) {
                    if (div.children("span").length == 0) { //添加第一个span，最开始是没有span的
                        div.append(append);
                        div.children("span").animate({
                            top: 0
                        })
                    } else {
                        if (postion == 1) { //光标在最前面时添加方式也不同
                            div.prepend(append);
                            div.children("span").eq(0).animate({
                                top: 0
                            })
                        } else {
                            var eq = parseInt(postion - 2);
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
                focustxt: function (val, div, ty) {
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
                deltxt: function (div, d, ty, h, txt, keycode) {
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
                        t.focustxt(txt, div, ty);
                    }
                },
                //格式化ty格式化类型0为每4个一组，1手机格式，2身份证格式
                format: function (div, ty) {
                    var s = div.children("span");
                    s.removeClass(opt.c);
                    var splittype;//拆分规则
                    var count = 0;
                    if (ty == 0) {//每四个一组
                        splittype = [4, 4, 4, 4]
                    } else if (ty == 1) {//手机格式，前三个，后四个
                        splittype = [3, 4, 4]
                    }
                    else if (ty == 2) {//身份证格式
                        splittype = [6, 8, 4]
                    } else {
                         splittype = ty;
                    }
                    for (var i = 0; i < splittype.length; i++) {
                        count += splittype[i];
                        s.eq(count).addClass(opt.c);
                    }
                }
            }
        }
    });
    //查找当前标签属性，经常用到将它提出来
    function getdata(th, data) {
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
                    $("#grey-background").remove()
                }
            });
        return false;
    }
};
var iconfont = {
    json: function (fontjson) {
        var isie = $.browser.msie,
            v = $.browser.version,
            dm = document.documentMode;
        if ((isie && dm <= 7) || (isie && v == 7.0 && !dm)) {
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
};

/***********************************/
$(function () {
    $(".input-control").inputfocus();//输入框焦点事件，仅对ie9或以下
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
        poptype: 1,
        title: "收益计算器",
        width: 450,
        height: 420,
        contents: "calculator.html?t=" + new Date().getTime() + " .layer-computer", //用相对于根目录的绝对路径
        afterback: function (a) {
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
    $(".computer-button").live("click",
        function () {
            var a = $(".computer-money").val(); //投资金额
            if (!chcknullnum(a)) {
                alert("投资金额不能为空且只能是数字");
                $(".computer-money").val("").focus();
                return;
            }
            if (!chckisnum(a)) {
                alert("投资金额最多只能是两位数字！");
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
            $(".computer-allmoney").html(rm2 + a * 10000);
        });
    /*重置计算器*/
    $(".computer-reset").live("click",
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
        height: 460,
        poptype: 1,
        title: "意见反馈",
        contents: "feedback.html?t=" + new Date().getTime() + " .layer-feedback",//缓存问题可以增加个参数，
        afterback: function (a) {
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
    $(".backtop").live("click", function () {
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