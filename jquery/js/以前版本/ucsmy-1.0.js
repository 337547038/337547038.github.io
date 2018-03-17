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
        //absolute和fixed。窗口比较高时要使用absolute，超过浏览器高度会因为不能滚动页显示不完
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
        fadeout: 0,
        //窗口淡出过渡时间，单位毫秒默认为0
        fadein: 0,
        //窗口淡入过渡时间，单位毫秒默认为0
        masklayer: true,
        //显示遮罩层
        aligncenter: true,
        //窗口对齐方式，默认为true居中，false时请在css中设置
        showclose: true,
        //显示关闭按钮
        shadeclose: false, //点击遮罩关闭 false不关闭
        scroll: false//内容区域出现滚动条
    };
    function mainlayer(opt, t, th) {
        $("#grey-background").remove();
        if (opt.masklayer) {
            $("body").append("<div id=\"grey-background\"></div>");
        }
        if (opt.loadback != null) { //加载后回调
            opt.loadback();
        }
        if (opt.closeparent) {
            $(".alert-layer").hide();
        }
        var _layerclose = "<a href=\"javascript:;\" class=\"close alert-close bg-icon\">×</a>",
            _layertitle = "<h3 class=\"alert-title\"><b></b>" + opt.title + "</h3>",
            _layerbutton = "";
        if (opt.confirm != null || opt.cancel != null) {
            _layerbutton += "<div class=\"alert-button\">";
            if (opt.confirm != null) {
                _layerbutton += "<input class=\"btn-confirm\" type=\"submit\" name=\"button\" value=\"" + opt.confirm + "\">";
            }
            if (opt.cancel != null) {
                _layerbutton += "<input class=\"btn-cancel\" type=\"reset\" name=\"button\" value=\"" + opt.cancel + "\">";
            }
            _layerbutton += "</div>";
        }
        var _al = "";//当前层类名
        if (opt.poptype == 0) { //读取本页隐藏div
            var contents = opt.contents;
            if (opt.contents == "" && t == 0) { //如果内容为空时，读取当前节点data-action属性值，仅当使用$("").layer()调用才存在当前节点
                contents = "." + getdata(th, "action");
            }
            _al = $(contents);
        } else if (opt.poptype == 1) {
            //加载外部
            var _class = "";
            if (opt.addclass != "") {
                _class = opt.addclass;
            } else {
                //$.调用时，将内容转码取字符作为类名
                _class = "layer" + encodeURIComponent(opt.contents).replace(/%/g, '').replace(/ /g, '').replace(".", '').toLocaleLowerCase().substring(0, 10); //过滤%和空格转小写，取前面10位
            }
            if ($("." + _class).length == 0) {
                var html = "<div class=\"" + _class + "\">";
                html += "<div class=\"alert-content\"><div class=\"alert-loading\">正在加载...</div></div>";
                html += "</div>";
                $("body").append(html);
                _al = $("." + _class);
                _al.find(".alert-content").load(opt.contents,
                    function () {
                        if (opt.afterback != null) {
                            opt.afterback(_al)
                        }
                    });
            } else {
                _al = $("." + _class);
                _al.fadeIn(opt.fadein);
                if (opt.afterback != null) {
                    opt.afterback(_al)
                }
            }
        } else if (opt.poptype == 2) {
            //直接显示内容
            var _class = "";
            if (opt.addclass != "") {
                _class = opt.addclass;
            } else {
                //$.调用时，将内容转码取字符作为类名
                _class = "layer" + encodeURIComponent(opt.contents).replace(/%/g, '').replace(/ /g, '').toLocaleLowerCase().substring(0, 10); //过滤%和空格转小写，取前面10位
            }
            if ($("." + _class).length == 0) {
                var html = "<div class=\"" + _class + "\">";
                html += "<div class=\"alert-content\"><div class='alert-txt'> <span class=\"alert-icon\"></span>" + opt.contents + "</div></div>";
                html += "</div>";
                $("body").append(html);
            }
            _al = $("." + _class);
        }
        if (!_al.hasClass("alert-layer")) { //如果没有样式alertlayer，则添加一个
            _al.addClass("alert-layer");
        }
        _al.addClass(opt.addclass);
        if (_al.children(".alert-title").length == 0 && opt.title != "") {
            _al.prepend(_layertitle);
        }
        if (_al.children(".alert-close").length == 0 && opt.showclose) {
            _al.prepend(_layerclose);
        }
        if (_al.find(".alert-button").length == 0) {
            _al.children(".alert-content").append(_layerbutton);
        }
        _al.fadeIn(opt.fadein);
        var newwidth = opt.width == null ? _al.outerWidth(true) : opt.width;
        _al.css({"width": newwidth});
         var   newheight = opt.height == null ? _al.outerHeight(true) : opt.height,
            winwidth = $(window).width(),
            winheight = $(window).height(),
            sleft = $(window).scrollLeft(),
        //获取滚动条的宽度
            _stop = $(window).scrollTop(); //获取滚动条的高度
        if (opt.position != "absolute") {
            _stop = 0;
        }
        var left1 = sleft + (winwidth - newwidth) / 2,
            top = (winheight - newheight) / 2;
        if (top < 0) {
            top = 0;
        }
        var top1 = _stop + top;
        if (opt.aligncenter) {
            _al.css({
               // "width": newwidth,
                "height": newheight,
                "left": left1,
                "top": top1,
                "position": opt.position
            });
        } else {
            _al.css({
                "width": newwidth,
                "height": newheight,
                "position": opt.position
            });
        }
        //加载完成后回调，load时不在这里返回
        if (opt.afterback != null && opt.poptype != 1) {
            opt.afterback(_al)
        }
        //内容滚动条
        if (opt.scroll || getdata(_al, "scroll").toString() == "true") {
            var w;
            if (parseInt(getdata(_al, "height")) > 0) {
                w = getdata(_al, "height");
            } else {
                var th = parseInt(_al.children(".alert-title").height()),//标题栏高度
                    lcp = parseInt(_al.children(".alert-content").css("padding-top")) * 2,//内容边距
                    w = newheight - th - lcp;
            }
            _al.children(".alert-content").css({"height": w, "overflow": "hidden", "overflow-y": "auto"});
        }
        //关闭遮罩
        if (opt.shadeclose) {
            $("#grey-background").live("click",
                function () {
                    if (opt.autoclose == 0) {
                        layer.close(_al, opt.fadeout)
                    }
                })
        }
        var cleartime;
        if (opt.autoclose != 0) {
            _al.find(".alert-closetime").remove();
            _al.append("<div class=\"alert-closetime\"></div>");
            autoclosetime(parseInt(opt.autoclose));
        }
        function autoclosetime(time) {
            if (time > 0) {
                --time;
                _al.find(".alert-closetime").html(time + "秒后将关闭！");
                cleartime = setTimeout(function () {
                        autoclosetime(time);
                    },
                    1000);
            } else {
                if (opt.closeback != null) {
                    opt.closeback(_al)
                } else {
                    layer.close(_al, opt.fadeout)
                }
            }
        }

        //buttton callback
        if (opt.confirm != null) {
            _al.find(".btn-confirm").click(function (e) {
                if (opt.confirmback != null) {
                    opt.confirmback(_al);
                } else {
                    clearTimeout(cleartime);
                    layer.close(_al, opt.fadeout);
                }
                e.stopImmediatePropagation();
            });
        }
        if (opt.cancel != null) {
            _al.find(".btn-cancel").click(function (e) {
                if (opt.cancelback != null) {
                    opt.cancelback(_al);
                } else {
                    layer.close(_al, opt.fadeout);
                }
                e.stopImmediatePropagation();
            });
        }
        //close
        _al.find(".close").click(function (e) {
            if (opt.closeback != null) {
                opt.closeback(_al);
            } else {
                clearTimeout(cleartime);
                layer.close(_al, opt.fadeout);
            }
            e.stopImmediatePropagation(); //页面有多个相同标签时，阻止连续触发事件
        });
        //move
        if (opt.move) {
            var docheight = $(document).height();
            var _move = false;
            var _x, _y;
            _al.children("h3.alert-title").mousedown(function (e) {
                _move = true;
                _x = e.pageX - parseInt(_al.css("left"));
                _y = e.pageY - parseInt(_al.css("top"))
            });
            $(document).mousemove(function (e) {
                if (_move) {
                    var x = e.pageX - _x;
                    var y = e.pageY - _y;
                    if (x <= 0) {
                        x = 0
                    }
                    if (x > winwidth - newwidth) {
                        x = winwidth - newwidth - 10
                    }
                    if (y <= 0) {
                        y = 0
                    }
                    if (y > docheight - newheight) {
                        y = docheight - newheight
                    }
                    _al.css({
                        top: y,
                        left: x
                    })
                }
            }).mouseup(function () {
                _move = false
            })
        }
    } //mainlayer
    $.fn.extend({
        inputfocus: function (opt) {
            opt = jQuery.extend({
                    fc: "focus" //取点焦点时添加的样式
                },
                opt);
            //判断浏览器支持状态，ie8以下使用
            var isie = $.browser.msie,
                v = $.browser.version,
                dm = document.documentMode;
            if ((isie && dm <= 9) || (isie && v <= 9.0 && !dm)) {
                $(this).each(function () {
                    var $this = $(this);
                    if ($this.attr("placeholder") != "" && typeof($this.attr("placeholder")) != "undefined" && $this[0].tagName == "INPUT" && $this.next("span.placeholder").length == 0) {
                        var block = "block", t = $this.position().top,
                            lf = $this.position().left;
                        if (getdata($this, "display") == "none") {
                            t = 0;
                            lf = 0
                        }
                        if ($this.val() != "") {
                            block = "none"
                        }
                        $this.after("<span class=\"placeholder\" style=\"z-index:10;display:" + block + ";position:absolute;cursor:text;left:" + lf + "px;top:" + t + "px;height:" + $this.outerHeight() + "px;width:" + $this.width() + "px;padding-left:" + $this.css("padding-left") + "\">" + $this.attr("placeholder") + "</span>");
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
                    $th.append("<span class=\"arrow bg-icon\"></span>");
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
                    bind($(this), event)
                });
            $this.find(".arrow").bind(opt.trigger,
                function (event) {
                    ulheight($(this).parents(".select-drapdown"));
                    bind($(this), event)
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
                    p = 0,cs=c;
                //如果c是有多个样式，下面$("." + c)这个存在问题，这里判断下
                if (c != "") {
                    if(c.split(" ").length>1){
                        cs=c.split(" ")[0];
                    }
                    p = $("." + cs).parents(".select-drapdown").length;
                }
                if (p == 0) {
                    restore();
                }
            });
            $this.find("li:not(.notdata)").live("click", function () {
                var $th = $(this), $value = getdata($th, "value"), $hidden = $th.parents(".select-drapdown").find(".input-value");
                $th.addClass("hover").siblings("li").removeClass("hover");
                $th.parents(".select-drapdown").children(".input-control").removeClass("placeholder").html($th.html());
                //如果li中存在input-value输入框，则将data-value的值赋给input-value
                if ($hidden.length > 0) {
                    $hidden.val($value);
                }
                restore();
                opt.afterback != null ? opt.afterback($th) : "";
            });
//恢复状态
            function restore() {
                sd = $(".select-drapdown");
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
                    direction: "tleft",
                    maxwidth: 500,//可通过标签设置data-width=""
                    fade: 0,
                    y: 20,
                    x: 22,
                    addclass: "",
                    delay: 0, //鼠标离开区域时提示延时消失时间，单位毫秒，临时解决鼠标可移至提示层上面，设置500比较适合
                    move: false //是否跟随鼠标移动
                },
                opt);
            var $this = $(this),
                objheight,
                winwidth = $(window).width(),
                maxwidth,
                y = opt.y,
                x = opt.x,
                cleartime,
                d, delay,
                mousetips = $(".mousetips");
            $this.hover(function (e) {
                $(".mousetips").remove();//首先移除其它显示中的提示
                clearTimeout(cleartime);
                var t = $(this);
                if (getdata(t, "alt") != "") {
                    if (getdata(t, "width") > 0) {
                        maxwidth = getdata(t, "width");//如果标签当中有设置，则优先读取标签中的
                    } else {
                        maxwidth = opt.maxwidth == 0 ? "auto" : opt.maxwidth;
                    }
                    d = getdata(t, "direction") != "" ? getdata(t, "direction") : opt.direction;
                    $("body").append("<div class=\"mousetips " + d + "\" style=\"max-width:" + maxwidth + "px\"><i><em></em></i>" + getdata(t, "alt") + "</div>");
                    if (opt.addclass != "") {
                        $(".mousetips").addClass(opt.addclass);
                    }
                    objheight = $(".mousetips").outerHeight();
                }
            }, function () {
                delay = getdata($(this), "delay") > 0 ? getdata($(this), "delay") : opt.delay;
                cleartime = setTimeout(function () {
                    $(".mousetips").fadeOut(opt.fade,
                        function () {
                            $(".mousetips").remove();
                        });
                }, delay);
            });
            mousetips.live("mouseenter", function () {
                clearTimeout(cleartime);
                $(this).show();
            }).live("mouseleave", function () {
                $(this).fadeOut(opt.fade, function () {
                    $(this).remove();
                });
            });
            $this.mousemove(function (e) {
                var postX = e.pageX, postY = e.pageY;
                switch (d) {
                    case "tleft":
                        $(".mousetips").css({
                            "left": postX - x,
                            "top": postY - y - objheight
                        }).fadeIn(opt.fade);
                        break;
                    case "tright":
                        $(".mousetips").css({
                            "left": "auto",
                            "right": winwidth - postX - x,
                            "top": postY - y - objheight
                        }).fadeIn(opt.fade);
                        break;
                    case "bleft":
                        $(".mousetips").css({
                            "left": postX - x,
                            "top": postY + y
                        }).fadeIn(opt.fade);
                        break;
                    case "bright":
                        $(".mousetips").css({
                            "left": "auto",
                            "right": winwidth - postX - x,
                            "top": postY + y
                        }).fadeIn(opt.fade);
                        break;
                    case "tcenter":
                        var objwidth = $(".mousetips").outerWidth(true);
                        $(".mousetips").css({
                            "left": postX - objwidth / 2,
                            "top": postY - y - objheight
                        }).fadeIn(opt.fade);
                        break;
                    case "bcenter":
                        var objwidth = $(".mousetips").outerWidth(true);
                        $(".mousetips").css({
                            "left": postX - objwidth / 2,
                            "top": postY + y
                        }).fadeIn(opt.fade);
                        break;
                }
            })
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
    close: function (a, fo) {
        var alertlayer = ".alert-layer";
        if (a) {
            alertlayer = a
        }
        if (!fo) {
            fo = 0
        }
        $(alertlayer).fadeOut(fo,
            function () {
                var layernum = 0;
                $(".alert-layer").each(function () {
                    if (!$(this).is(":hidden")) {
                        layernum++
                    }
                });
                if (layernum <= 0) {
                    $("#grey-background").remove()
                }
            })
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
            /*$("[class*='icon-']").each(function () {
             var cla = $(this).attr("class").split(" "),
             c = "",
             jc = "";
             if (cla.length > 1) {
             for (var i = 0; i < cla.length; i++) {
             if (cla[i].indexOf("icon-") > -1) {
             c = cla[i];
             break
             }
             }
             } else {
             c = cla[0]
             }
             jc = c.replace(/-/g, '');
             $("." + c).html(fontjson['' + jc + ''])
             })*/
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
        contents: "calculator.html .layer-computer", //用相对于根目录的绝对路径
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
            $(".computer-money").val("");
            $(".computer-data").val("");
            $(".computer-bf").val("");
            $(".return-money").html("");
            $(".computer-allmoney").html("");
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