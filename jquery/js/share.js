$(function() {
  var share_url = "http://www.baidu.com",
  share_title = encodeURIComponent("标题"),
  share_pic="http://www.ucsmy.com/images/logo.png",
  share_content=encodeURIComponent("分享内容");
  $(".share_qzone").click(function() {
    window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + share_url + "&title=" + share_title + "&desc=&summary="+share_content+"&site=&pics="+share_pic+"");
    return;
  });
  $(".share_tsina").click(function() {
    window.open("http://service.weibo.com/share/share.php?url="+share_url+"&title="+share_content+"&appkey=&pic="+share_pic+"");
    return;
  });
  $(".share_tqq").click(function() {
    window.open("http://share.v.t.qq.com/index.php?c=share&a=index&url="+share_url+"&title="+share_content+"&appkey=&pic="+share_pic+"");
    return;
  });
   $(".share_renren").click(function() {
    window.open("http://widget.renren.com/dialog/share?resourceUrl="+share_url+"&srcUrl="+share_pic+"&title="+share_title+"&description="+share_content+"");
    return;
  });
   $(".share_qq").click(function() {
    window.open("http://connect.qq.com/widget/shareqq/index.html?url="+share_url+"&title="+share_title+"&desc=&summary="+share_content+"&site=");
    return;
  });
  
});
