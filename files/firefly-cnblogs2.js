// 判断是否为移动设备
function isMobile() {
  var userAgentInfo = navigator.userAgent;
  var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var mobile_flag = false;

  // 遍历移动设备标识
  for (var v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      mobile_flag = true;
      break;
    }
  }

  // 获取屏幕宽高
  var screen_width = window.screen.width;
  var screen_height = window.screen.height;

  // 如果屏幕宽高小于500和800，则认为是移动设备
  if (screen_width < 500 && screen_height < 800) {
    mobile_flag = true;
  }

  return mobile_flag;
}

// 判断是否为移动设备
var mobile_flag = isMobile();
// 获取博客标题
var blogTitle = $("#blogTitle").html();

// 将博客标题包裹在一个div中
$("#blogTitle").html("<div class='vertical'>" + blogTitle + "</div>");

// 浅白色系
function light_white() {
  $("#reading").remove();
  $("#darkly").remove();
  $("#reading").remove();
  $("#darkly").remove();
  $("#fish_script").remove();
  $("#jsi-flying-fish-container").html("");

  // 移动设备特殊处理
  if (mobile_flag) {
    // Mobile specific code (if needed)
  } else {

    // 添加鱼儿脚本
    var script = document.createElement("script");

    script.type = "text/javascript";
    script.id = "fish_type";
    script.src = "https://blog-static.cnblogs.com/files/miluluyo/fish.js";
    document.body.appendChild(script);
  }
}

// 暗黑色系
function furvous() {
  $("#reading").remove();

  var link = document.createElement("link");

  link.rel = "stylesheet";
  link.id = "darkly";
  link.href = "https://raw.githubusercontent.com/YakuYoki/MyBlog/main/files/darkly.css";
  document.body.appendChild(link);

  $("#fish_script").remove();

  // 移动设备特殊处理
  if (mobile_flag) {
    // Mobile specific code (if needed)
  } else {
    $("#jsi-flying-fish-container").html("");

    var script = document.createElement("script");

    script.type = "text/javascript";
    script.id = "fish_type";
    script.src = "https://raw.githubusercontent.com/YakuYoki/MyBlog/main/files/fish2.js";
    document.body.appendChild(script);
  }
}

// 阅读模式
function reading() {
  $("#darkly").remove();

  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.id = "reading";
  link.href = "https://raw.githubusercontent.com/YakuYoki/MyBlog/main/files/reading.css";
  document.body.appendChild(link);

  $("#fish_script").remove();
  $("#jsi-flying-fish-container").html("");

  // 移动设备特殊处理
  if (mobile_flag) {
    // Mobile specific code (if needed)
  } else {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "fish_type";
    script.src = "https://raw.githubusercontent.com/YakuYoki/MyBlog/main/files/fish3.js";
    document.body.appendChild(script);
  }
}

// 获取本地存储的皮肤
var skins = localStorage.getItem("skin");

// 如果本地存储为空，则默认使用浅白色系
if (skins == null || skins == undefined) {
  light_white();
} else {
  // 根据本地存储的皮肤进行相应处理
  if (skins == "light_white") {
    light_white();
  } else if (skins == "furvous") {
    furvous();
  } else if (skins == "reading") {
    reading();
  }
}

// Yoki框架
function YoruKiri(setting) {
  // 定义一个对象c，包含YoKi框架的配置信息
// 定义一个对象c，包含以下属性：
  var c = {
    // 个人主页链接
    Youself: "https://www.cnblogs.com/YoruKiri/",
    // 自定义链接
    custom: [
      { name: "首页", link: "https://www.cnblogs.com/YoruKiri/", istarget: false },
      { name: "联系", link: "https://msg.cnblogs.com/send/YoruKiri", istarget: true },
      // { name: "技能树", link: "https://miluluyo.github.io/", istarget: true },
      // { name: "留言板", link: "https://www.cnblogs.com/miluluyo/p/11578505.html", istarget: false },
      { name: "相册", link: "https://www.cnblogs.com/Yorukiri/gallery.html", istarget: false },
      { name: "友链", link: "https://www.cnblogs.com/YoruKiri/p/18592922.html", istarget: false },
      // { name: "维护", link: "https://www.cnblogs.com/miluluyo/p/12092009.html", istarget: false },
      // { name: "投喂", link: "https://www.cnblogs.com/miluluyo/p/gratuity.html", istarget: false },
      { name: "管理", link: "https://i.cnblogs.com/", istarget: true }
    ],
    resume: {
      name: "YoruKiri",
      link: "https://www.cnblogs.com/YoruKiri/",
      headurl: "https://pic.cnblogs.com/avatar/3519076/20240911231439.png",
      introduction: "待定"
    },
    unionbox: [
      {
        name: "YoruKiri",
        introduction: "待定",
        url: "https://www.cnblogs.com/YoruKiri",
        headurl: "https://pic.cnblogs.com/avatar/3519076/20240911231439.png"
      },
      // {
      //   name: "YoruKiri的技能树",
      //   introduction: "大道至简，知易行难。",
      //   url: "https://miluluyo.github.io/",
      //   headurl: "https://images.cnblogs.com/cnblogs_com/elkyo/1558759/o_o_my.jpg"
      // }
    ],
    details: [
      { field: "name", literal: "昵称" },
      { field: "introduction", literal: "标语" },
      { field: "url", literal: "链接地址" },
      { field: "headurl", literal: "头像地址" }
    ],
    logoimg: "https://raw.githubusercontent.com/YakuYoki/MyBlog/main/_favicon/firefly_4.png",
    cuteicon: [
    ],
    // gratuity: '<div class="popper_box"><p><b>要请我喝奶茶吗  (づ｡◕ᴗᴗ◕｡)づ</b></p><div class="popper_box_con"><div class="popper_box_con_li"><img src="https://images.cnblogs.com/cnblogs_com/miluluyo/1765646/o_200521053817wx.png" alt="">微信扫码</div><div class="popper_box_con_li"><img src="https://images.cnblogs.com/cnblogs_com/miluluyo/1765646/o_200521053827zfb.png" >支付宝扫码</div></div><p><b>留下一句你觉得很励志与美的话给我吧~</b>&nbsp;&nbsp;<b><a href="https://www.cnblogs.com/miluluyo/p/12930946.html">GO</a></b></div>',
    isGratuity: false
  };

  $.extend(c, setting);
  allpage(c);
}

// 定义一个函数allpage，参数为c
function allpage(c) {
  // 定义一个变量custom，用于存储自定义内容
  var custom = "";

  // 遍历c.custom数组
  for (var i = 0; i < c.custom.length; i++) {
    // 如果c.custom[i].istarget为true，则添加target="_black"
    if (c.custom[i].istarget == true) {
      custom = custom + '<li><a href="' + c.custom[i].link + '" target="_black">' + c.custom[i].name + "</a></li>";
    } else {
      // 否则不添加target="_black"
      custom = custom + '<li><a href="' + c.custom[i].link + '">' + c.custom[i].name + "</a></li>";
    }
  }

  // 将custom内容添加到id为navList的元素中
  $("#navList").html(custom);

  // 如果mobile_flag为true，则执行Mobile specific code
  if (mobile_flag) {
    // Mobile specific code (if needed)
  } else {
    // 否则将id为jsi-flying-fish-container的div添加到id为footer的元素之前
    $("#footer").before('<div id="jsi-flying-fish-container" class="container"></div>');
  }

  // 获取class为postTitle2的元素个数
  var le = $(".postTitle2").length;
  // 遍历class为postTitle2的元素
  for (var i = 0; i < le; i++) {
    // 生成一个随机数num
    var num = Math.floor(Math.random() * c.cuteicon.length);
    // 在class为postTitle2的元素之前添加一个svg元素
    $(".postTitle2").eq(i).before('<svg class="icon" aria-hidden="true"><use xlink:href="#' + c.cuteicon[num] + '"></use></svg>');
  }

  // 定义一个变量skin，用于存储皮肤选择内容
  var skin = '<div class="select_skin"><ul><li class="light_white">浅白色系</li><li class="furvous">暗黑色系</li><li class="reading">阅读模式</li></ul></div>';
  // 使用tippy插件，为class为skin_btn的元素添加提示框
  tippy(".skin_btn", {
    content: skin,
    theme: "tomato",
    allowHTML: true,
    animation: "scale",
    duration: 500,
    arrow: true,
    hideOnClick: "false",
    interactive: true
  });

  // 获取link元素个数
  var le = $("link").length;
  // 遍历link元素
  for (var i = 0; i < le; i++) {
    // 获取link元素的rel属性
    var rel = $("link").eq(i).attr("rel");
    // 如果rel为shortcut icon，则将href属性设置为c.logoimg
    if (rel == "shortcut icon") {
      $("link").eq(i).attr("href", c.logoimg);
    }
  }

  // 定义一个details数组，用于存储字段和对应的中文
  var details = [
    { field: "name", literal: "昵称" },
    { field: "introduction", literal: "标语" },
    { field: "url", literal: "链接地址" },
    { field: "headurl", literal: "头像地址" }
  ];
}

// 定义一个新数组，将c.unionbox数组进行随机排序
var newarray = shuffle(c.unionbox);
// 定义一个空字符串，用于存储好友列表
var listfriends = "";
// 遍历新数组，将每个好友的信息拼接成HTML字符串
for (var i = 0; i < newarray.length; i++) {
  listfriends += '<div class="unionbox"><div class="info"><div class="headimg"><img src="' + newarray[i].headurl + '" alt=""></div><div class="content"><h3 class="title">' + newarray[i].name + '</h3><p class="desc">' + newarray[i].introduction + '</p><a class="btn" target="_black" href="' + newarray[i].url + '">直达</a></div></div></div>';
}
// 将拼接好的HTML字符串插入到页面中
$(".unionbox-box").html(listfriends);

// 定义一个空字符串，用于存储好友详情
var detailsfriends = "";
// 遍历details数组，将每个好友的详情拼接成HTML字符串
for (var i = 0; i < details.length; i++) {
  detailsfriends += "<tr><td>" + details[i].field + "</td><td>" + details[i].literal + "</td></tr>";
}
// 将拼接好的HTML字符串插入到页面中
$(".friendstable").append(detailsfriends);

// 如果c.isGratuity不为false，则使用tippy插件显示打赏信息
if (c.isGratuity != false) {
  tippy(".gratuity", {
    content: c.gratuity,
    theme: "tomato",
    allowHTML: true,
    animation: "scale",
    duration: 500,
    arrow: true,
    hideOnClick: "false",
    interactive: true
  });
// 否则隐藏打赏信息
} else {
  $(".gratuity").hide();
}

// 定义一个函数，用于将数组进行随机排序
function shuffle(unionbox) {
  var array = unionbox;
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// 获取页面中feedbackItem的长度
var le = $(".feedbackItem").length;
// 遍历feedbackItem，将每个feedbackItem中的span文本插入到feedbackCon中
for (var i = 0; i < le; i++) {
  var src = $(".feedbackItem").eq(i).find(".feedbackCon").find("span").text();
  $(".feedbackCon").eq(i).prepend('<img class="comment-avatar" src="' + $.trim(src) + '">');
}

// 设置tbCommentBody的placeholder属性
$("#tbCommentBody").attr("placeholder", "请乖乖填写哦！ ...");
// 在tbCommentBody后面插入一个表情按钮
$("#tbCommentBody").after('<div class="OwO" onclick="load_face(this)"><div class="OwO-logo"><span>OωO<space><space>表情</span></div></div>');

// 定义一个函数，用于加载表情
var load_face = function(a) {
  // 创建一个OwO对象，用于加载表情
  var OwO_demo = new OwO({
    logo: "OωO表情", // 表情logo
    container: document.getElementsByClassName("OwO")[0], // 表情容器
    target: document.getElementById("tbCommentBody"), // 表情目标
    api: "https://github.com/YakuYoki/MyBlog/blob/main/files/OwO.json", // 表情api
    position: "down", // 表情位置
    width: "70%", // 表情宽度
    maxHeight: "250px" // 表情最大高度
  });
  // 给a元素添加OwO-open类
  a.classList.add("OwO-open");
  // 将a元素的onclick事件设置为null
  a.onclick = null;
};

// 移除#commentbox_opt元素后面的所有元素
$("#commentbox_opt").nextAll().remove();
// 将#btn_comment_submit元素的值设置为"提交评论 (Ctrl + Enter)"
$("#btn_comment_submit").val("提交评论 (Ctrl + Enter)");
// 给#btn_edit_comment元素添加点击事件，点击时显示.OwO元素
$(document).on("click", "#btn_edit_comment", function() {
  $(".OwO").show();
});
// 给#btn_preview_comment元素添加点击事件，点击时隐藏.OwO元素
$(document).on("click", "#btn_preview_comment", function() {
  $(".OwO").hide();
});

// 给window对象添加resize事件，当窗口大小改变时触发
$(window).resize(function() {
  // 获取窗口宽度
  var w = document.body.clientWidth;
  // 如果窗口宽度大于1300
  if (w > 1300) {
  // 如果窗口宽度大于960
  } else {
    if (960 < w) {
      // 如果#mainContent元素的宽度不等于90%
      if ($("#mainContent").css("width") != "90%") {
        // 将#mainContent元素的宽度设置为90%
        $("#mainContent").css("width", "90%");
      }
    // 如果窗口宽度大于0
    } else {
      if (0 < w) {
        // 如果#mainContent元素的宽度不等于90%
        if ($("#mainContent").css("width") != "90%") {
          // 将#mainContent元素的宽度设置为90%
          $("#mainContent").css("width", "90%");
        }
      }
    }
  }
});

// 获取博客标题元素
var oInfo = $(".blogTitle");
// 获取导航栏的偏移量
var json = $("#navigator").offset();
// 获取导航栏的顶部偏移量
var oTop = json.top;
// 定义两个变量，用于记录滚动条的位置
var sTop = 0;
var sTop2 = 0;

// 监听滚动事件
$(window).scroll(function() {
  // 获取滚动条的位置
  sTop = $(this).scrollTop();
  // 将滚动条的位置和导航栏的顶部偏移量显示在博客标题元素中
  oInfo.text(sTop + "-" + oTop);
  // 如果滚动条的位置大于等于导航栏的顶部偏移量
  if (sTop >= oTop) {
    // 如果滚动条的位置大于上一次记录的位置
    if (sTop2 <= sTop) {
      // 将导航栏的定位方式设置为静态
      $("#navigator").css({"position": "static"});
      // 将博客标题的底部边距设置为0
      $("#blogTitle").css({"margin-bottom": "0"});
    } else {
      // 将导航栏的定位方式设置为固定，顶部偏移量为0
      $("#navigator").css({"position": "fixed", "top": "0"});
      // 将博客标题的底部边距设置为导航栏的高度
      $("#blogTitle").css({"margin-bottom": $("#navigator").height()});
    }
  } else {
    // 将导航栏的定位方式设置为静态
    $("#navigator").css({"position": "static"});
    // 将博客标题的底部边距设置为0
    $("#blogTitle").css({"margin-bottom": "0"});
  }
  // 更新上一次记录的滚动条位置
  sTop2 = sTop;
  // 获取滚动条距离页面顶部的距离
  var scroHei = $(window).scrollTop();
  // 如果滚动条距离页面顶部的距离大于500
  if (scroHei > 500) {
    // 显示返回顶部按钮
    $(".fly_top").css("display", "inline-block");
    // 将目录和侧边栏的定位方式设置为固定，顶部偏移量为10px，宽度为230px，高度为页面高度减去100px，溢出部分自动滚动
    $(".catalogueMain").attr("style", "position:fixed;top:10px;width:230px;height:calc(100% - 100px);overflow:auto");
    $("#sideBarMain").attr("style", "position:fixed;top:10px;width:230px;height:calc(100% - 100px);overflow:auto");
  } else {
    // 隐藏返回顶部按钮
    $(".fly_top").css("display", "none");
    // 将目录和侧边栏的定位方式设置为默认
    $(".catalogueMain").attr("style", "");
    $("#sideBarMain").attr("style", "");
  }
});

// 在侧边栏前插入一个id为catalogue的div，包含一个id为catalogueMain的div
$("#sideBar").before('<div id="catalogue" ><div class="catalogueMain"></div><div>');

// 监听目录按钮的点击事件
$(".catalogue_btn").click(function() {
  // 获取窗口的宽度
  var w = $(window).width();
  // 如果目录的可见性为隐藏
  if ($("#catalogue").css("visibility") == "hidden") {
    // 将目录的显示方式设置为inline-block
    $("#catalogue").css("display", "inline-block");
    // 将目录的可见性设置为可见，裁剪路径设置为圆形，过渡效果为0.3s
    $("#catalogue").attr("style", "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;");
    // 将侧边栏的可见性设置为隐藏，裁剪路径设置为圆形，过渡效果为0.5s，同时隐藏侧边栏
    $("#sideBar").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;display:none");
    // 将目录的显示状态保存到本地存储中
    localStorage.setItem("catalog", "show");
    localStorage.setItem("catalogue", "none");
  } else {
    // 将目录的可见性设置为隐藏，裁剪路径设置为圆形，过渡效果为0.5s
    $("#catalogue").attr("style", "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;");
    // 将目录的显示状态保存到本地存储中
    localStorage.setItem("catalog", "none");
    // 0.5s后隐藏目录
    setTimeout(function() {
      $("#catalogue").css("display", "none");
    }, 500);
  }
  // 如果窗口的宽度小于等于1300
  if (w <= 1300) {
    // 将主要内容区域的宽度设置为90%
    $("#mainContent").css("width", "90%");
  } else {
    // 将主要内容区域的宽度设置为100%减去250px
    $("#mainContent").css("width", "calc(100% - 250px)");
    // 隐藏侧边栏
    $("#sideBar").css("display", "none");
  }
  // 阻止默认行为
  return false;
});

// 生成目录列表
function GenerateContentList() {
  // 获取页面中所有的h1标签
  var jquery_h1_list = $("#cnblogs_post_body h1");
  // 如果没有h1标签，则添加提示信息
  if (jquery_h1_list.length == 0) {
    $(".catalogueMain").prepend(
      '<p style="font-size:18px;text-align: center;padding-bottom: 10px;"><b>阅读目录(Content)</b></p><p>此页目录为空</p>'
    );
    return;
  }
  // 如果没有cnblogs_post_body，则返回
  if ($("#cnblogs_post_body").length == 0) {
    return;
  }
  
  // 初始化目录内容
  var content = '<a name="_labelTop"></a>';
  content += '<div id="navCategory">';
  content += '<p style="font-size:18px;text-align: center;padding-bottom: 10px;"><b>阅读目录(Content)</b></p>';
  content += '<ul class="first_class_ul">';
  
  // 遍历所有的h1标签
  for (var i = 0; i < jquery_h1_list.length; i++) {
    // 在h1标签前添加一个链接，用于跳转到该h1标签
    var go_to_top = '<div style="text-align: right" class="_labBox"><a name="_label' + i + '" id="_label' + i + '"></a></div>';
    $(jquery_h1_list[i]).before(go_to_top);
    // 生成h1标签的目录项
    var li_content = '<li><a href="#_label' + i + '" class="_label' + i + '">' + $(jquery_h1_list[i]).text() + "</a></li>";
    // 获取下一个h1标签的索引
    var nextH1Index = i + 1;
    
    // 如果下一个h1标签是最后一个，则将索引设置为0
    if (nextH1Index == jquery_h1_list.length) {
      nextH1Index = 0;
    }
    
    // 获取当前h1标签后面的所有h2标签
    var jquery_h2_list = $(jquery_h1_list[i]).nextUntil(jquery_h1_list[nextH1Index], "h2");
    // 如果有h2标签，则添加一个ul标签
    if (jquery_h2_list.length > 0) {
      li_content += '<ul class="second_class_ul">';
    }
    
    // 遍历所有的h2标签
    for (var j = 0; j < jquery_h2_list.length; j++) {
      // 在h2标签前添加一个链接，用于跳转到该h2标签
      var go_to_top2 = '<div style="text-align: right" class="_labBox"><a name="_lab2_' + i + "_" + j + '" id="_lab2_' + i + "_" + j + '"></a></div>';
      $(jquery_h2_list[j]).before(go_to_top2);
      // 生成h2标签的目录项
      li_content += '<li><a href="#_lab2_' + i + "_" + j + '" class="_lab2_' + i + "_" + j + '">' + $(jquery_h2_list[j]).text() + "</a></li>";
      // 获取下一个h2标签的索引
      var nextH2Index = j + 1;
      var next;
      
      // 如果下一个h2标签是最后一个，则将索引设置为0
      if (nextH2Index == jquery_h2_list.length) {
        // 如果当前h1标签是最后一个，则下一个h2标签是第一个h1标签
        if (i + 1 == jquery_h1_list.length) {
          next = jquery_h1_list[0];
        } else {
          next = jquery_h1_list[i + 1];
        }
      } else {
        // 否则，下一个h2标签是下一个h2标签
        next = jquery_h2_list[nextH2Index];
      }
      
      // 获取当前h2标签后面的所有h3标签
      var jquery_h3_list = $(jquery_h2_list[j]).nextUntil(next, "h3");
      // 如果有h3标签，则添加一个ul标签
      if (jquery_h3_list.length > 0) {
        li_content += '<ul class="third_class_ul">';
      }
      
      // 遍历所有的h3标签
      for (var k = 0; k < jquery_h3_list.length; k++) {
        // 在h3标签前添加一个链接，用于跳转到该h3标签
        var go_to_third_Content = '<div style="text-align: right" class="_labBox"><a name="_label3_' + i + "_" + j + "_" + k + '" id="_label3_' + i + "_" + j + "_" + k + '"></a></div>';
        $(jquery_h3_list[k]).before(go_to_third_Content);
        // 生成h3标签的目录项
        li_content += '<li><a href="#_label3_' + i + "_" + j + "_" + k + '" class="_label3_' + i + "_" + j + "_" + k + '">' + $(jquery_h3_list[k]).text() + "</a></li>";
      }
      
      // 如果有h3标签，则关闭ul标签
      if (jquery_h3_list.length > 0) {
        li_content += "</ul>";
      }
    }
    
    // 如果有h2标签，则关闭ul标签
    if (jquery_h2_list.length > 0) {
      li_content += "</ul>";
    }
    // 关闭li标签
    li_content += "</li>";
    // 将目录项添加到目录内容中
    content += li_content;
  }
  
  // 关闭ul标签
  content += "</ul>";
  // 关闭div标签
  content += "</div>";
  // 将目录内容添加到页面中
  $(".catalogueMain").prepend(content);
}

// 生成内容列表
GenerateContentList();
// 隐藏目录
$("#catalogue").css("display", "none");
// 点击目录项时，获取窗口宽度
$("#catalogue #navCategory ul li a").click(function() {
  var w = $(window).width();
});

// 如果窗口宽度小于767，则隐藏目录
if (w < 767) {
  $("#catalogue").attr(
    "style",
    "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
  );
  setTimeout(function() {
    $("#catalogue").css("display", "none");
  }, 500);
}

// 滚动时，获取._labBox的数量和滚动条位置
$(window).scroll(function() {
  var le = $("._labBox").length;
  var scrollTop = $(window).scrollTop() + 80;
  
  // 遍历._labBox
  for (var i = 0; i < le; i++) {
    var oftop = $("._labBox").eq(i).offset().top;
    
    // 如果滚动条位置大于等于._labBox的位置，则改变目录项的样式
    if ($(document).scrollTop() >= oftop) {
      var name = $("._labBox").eq(i).find("a").attr("name");
      $("#catalogue").find("li").attr("style", "");
      $("#catalogue").find("a").attr("style", "");
      $("." + name).parent().attr("style", "background:#2daebf;");
      $("." + name).parent().find("a").attr("style", "color:#fff");
    }
  }
});

// 获取localStorage中的catalogue和catalog
var catalogue = localStorage.getItem("catalogue");
var catalog = localStorage.getItem("catalog");
var w = $(window).width();

// 如果catalogue为null，则不执行任何操作
if (catalogue == null) {} else {
  // 如果catalogue为show，则显示目录
  if (catalogue == "show") {
    if (w > 767) {
      $("#sideBar").css("display", "inline-block");
      $("#sideBar").attr(
        "style",
        "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;display:inline-block"
      );
      $("#catalogue").attr(
        "style",
        "visibility: hidden; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;display:none"
      );
    }
  } else {
    // 如果catalogue为none，则隐藏目录
    if (catalogue == "none") {
      $("#sideBar").attr(
        "style",
        "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
      );
      setTimeout(function() {
        $("#sideBar").css("display", "none");
      }, 500);
    }
  }
}

// 判断catalog是否为空
if (catalog == null) {} else {
  // 如果catalog等于"show"
  if (catalog == "show") {
    // 如果w大于767
    if (w > 767) {
      // 将#catalogue的display属性设置为inline-block
      $("#catalogue").css("display", "inline-block");
      // 将#catalogue的style属性设置为可见，clip-path属性设置为圆形，transition属性设置为0.3s
      $("#catalogue").attr(
        "style",
        "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;"
      );
      // 将#sideBar的style属性设置为隐藏，clip-path属性设置为圆形，transition属性设置为0.5s，display属性设置为none
      $("#sideBar").attr(
        "style",
        "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;display:none"
      );
    }
  } else {
    // 如果catalog等于"none"
    if (catalog == "none") {
      // 将#catalogue的style属性设置为隐藏，clip-path属性设置为圆形，transition属性设置为0.5s
      $("#catalogue").attr(
        "style",
        "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
      );
      // 设置延时500ms后，将#catalogue的display属性设置为none
      setTimeout(function() {
        $("#catalogue").css("display", "none");
      }, 500);
    }
  }
}

// 当点击.light_white时，将localStorage的skin属性设置为"light_white"，并调用light_white()函数
$(document).on("click", ".light_white", function() {
  localStorage.setItem("skin", "light_white");
  light_white();
});

// 当点击.furvous时，将localStorage的skin属性设置为"furvous"，并调用furvous()函数
$(document).on("click", ".furvous", function() {
  localStorage.setItem("skin", "furvous");
  furvous();
});

// 当点击.reading时，将localStorage的skin属性设置为"reading"，并调用reading()函数
$(document).on("click", ".reading", function() {
  localStorage.setItem("skin", "reading");
  reading();
});

// 定义一个函数，用于显示侧边栏或目录
function showSide(cla) {
  // 如果cla参数为"sideBar"，则执行以下代码
  if (cla == "sideBar") {
    // 获取窗口宽度
    var w = $(window).width();
    // 如果侧边栏的可见性为"hidden"，则执行以下代码
    if ($("#sideBar").css("visibility") == "hidden") {
      // 将侧边栏的display属性设置为"inline-block"
      $("#sideBar").css("display", "inline-block");
      // 设置侧边栏的样式，使其可见，并设置clip-path属性，使其以圆形显示
      $("#sideBar").attr(
        "style",
        "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;"
      );
    } else {
      // 否则，设置侧边栏的样式，使其隐藏，并设置clip-path属性，使其以圆形显示
      $("#sideBar").attr(
        "style",
        "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
      );
      // 0.5秒后，将侧边栏的display属性设置为"none"
      setTimeout(function() {
        $("#sideBar").css("display", "none");
      }, 500);
    }
    // 设置目录的样式，使其隐藏，并设置clip-path属性，使其以圆形显示
    $("#catalogue").attr(
      "style",
      "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
    );
    // 0.5秒后，将目录的display属性设置为"none"
    setTimeout(function() {
      $("#catalogue").css("display", "none");
    }, 500);
  } else {
    // 如果cla参数为"catalogue"，则执行以下代码
    if (cla == "catalogue") {
      // 如果目录的可见性为"hidden"，则执行以下代码
      if ($("#catalogue").css("visibility") == "hidden") {
        // 将目录的display属性设置为"inline-block"
        $("#catalogue").css("display", "inline-block");
        // 设置目录的样式，使其可见，并设置clip-path属性，使其以圆形显示
        $("#catalogue").attr(
          "style",
          "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;"
        );
      } else {
        // 否则，设置目录的样式，使其隐藏，并设置clip-path属性，使其以圆形显示
        $("#catalogue").attr(
          "style",
          "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
        );
        // 0.5秒后，将目录的display属性设置为"none"
        setTimeout(function() {
          $("#catalogue").css("display", "none");
        }, 500);
      }
      // 设置侧边栏的样式，使其隐藏，并设置clip-path属性，使其以圆形显示
      $("#sideBar").attr(
        "style",
        "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
      );
      // 0.5秒后，将侧边栏的display属性设置为"none"
      setTimeout(function() {
        $("#sideBar").css("display", "none");
      }, 500);
    }
  }
}

// 当点击.fly_top元素时，执行以下代码
$(document).on("click", ".fly_top", function() {
  // 将body和html的scrollTop属性设置为0，即滚动到页面顶部
  $("body,html").animate({ scrollTop: 0 }, 600);
});

// 获取当前窗口的href属性
var whref = window.location.href;
// 如果href属性中包含"/p/"，则执行以下代码
if (whref.indexOf("/p/") != -1) {
  // 显示.article_icon_btn元素
  $(".article_icon_btn").show();
  // 将.artice_recommend元素的onclick属性设置为.diggit元素的onclick属性
  $(".artice_recommend").attr("onclick", $(".diggit").attr("onclick"));
  // 将目录的display属性设置为"inline-block"
  $("#catalogue").css("display", "inline-block");
  // 设置目录的样式，使其可见，并设置clip-path属性，使其以圆形显示
  $("#catalogue").attr(
    "style",
    "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;"
  );
  // 设置侧边栏的样式，使其隐藏，并设置clip-path属性，使其以圆形显示
  $("#sideBar").attr(
    "style",
    "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
  );
  // 0.5秒后，将侧边栏的display属性设置为"none"
  setTimeout(function() {
    $("#sideBar").css("display", "none");
  }, 500);
} else {
  // 否则，设置目录的样式，使其隐藏，并设置clip-path属性，使其以圆形显示
  $("#catalogue").attr(
    "style",
    "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
  );
  // 将目录的display属性设置为"none"
  $("#catalogue").css("display", "none");
}

// 当点击.artice_recommend时，将onclick属性设置为空
$(".artice_recommend").click(function() {
  $(".artice_recommend").attr("onclick", "");
});

// 当点击.catalogue时
$(".catalogue").click(function() {
  // 获取窗口宽度
  var w = $(window).width();
  // 如果#sideBar的visibility属性为hidden
  if ($("#sideBar").css("visibility") == "hidden") {
    // 将#sideBar的display属性设置为inline-block
    $("#sideBar").css("display", "inline-block");
    // 如果窗口宽度大于1300
    if (w > 1300) {
      // 将#sideBar的style属性设置为可见，clip-path属性设置为圆形，transition属性设置为0.3s
      $("#sideBar").attr(
        "style",
        "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;"
      );
    } else {
      // 否则，将#sideBar的style属性设置为可见，clip-path属性设置为圆形，transition属性设置为0.3s
      $("#sideBar").attr(
        "style",
        "visibility: visible; clip-path: circle(100% at 50% 50%); transition: all 0.3s ease-in-out 0s;"
      );
    }
    // 将catalogue和catalog属性设置为show和none
    localStorage.setItem("catalogue", "show");
    localStorage.setItem("catalog", "none");
    // 将#catalogue的style属性设置为隐藏，clip-path属性设置为圆形，transition属性设置为0.5s，display属性设置为none
    $("#catalogue").attr(
      "style",
      "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;display:none"
    );
  } else {
    // 否则，将#sideBar的style属性设置为隐藏，clip-path属性设置为圆形，transition属性设置为0.5s
    $("#sideBar").attr(
      "style",
      "visibility: hidden; clip-path: circle(30px at calc(100%) 100%); transition: all 0.5s ease-in-out 0s;"
    );
    // 0.5秒后，将#sideBar的display属性设置为none
    setTimeout(function() {
      $("#sideBar").css("display", "none");
    }, 500);
    // 将catalogue属性设置为none
    localStorage.setItem("catalogue", "none");
  }
  // 如果窗口宽度小于等于1300
  if (w <= 1300) {
    // 将#mainContent的width属性设置为90%
    $("#mainContent").css("width", "90%");
  } else {
    // 否则，将#mainContent的width属性设置为100%减去250px
    $("#mainContent").css("width", "calc(100% - 250px)");
  }
  // 返回false
  return false;
});

// 将console.log和console.warn方法设置为空函数
console.log = function() {};
console.warn = function() {};

// 在控制台输出一个图片
console.info(
  "%c ",
  "background: url(https://images.cnblogs.com/cnblogs_com/miluluyo/1493340/o_a.gif) no-repeat center;padding-left:400px;padding-bottom: 160px;background-size:400px"
);

// 定义一个字符串h
// var h =
//   "" +
//   "               __                                ___.   .__                       \n" +
//   "  ____  __ ___/  |_  ____             ____   ____\\_ |__ |  |   ____   ____  ______\n" +
//   "_/ ___\\|  |  \\   __\\/ __ \\   ______ _/ ___\\ /    \\| __ \\|  |  /  _ \\ / ___\\/  ___/\n" +
//   "\\  \\___|  |  /|  | \\  ___/  /_____/ \\  \\___|   |  \\ \\_\\ \\  |_(  <_> ) /_/  >___ \\ \n" +
//   " \\___  >____/ |__|  \\___  >          \\___  >___|  /___  /____/\\____/\\___  /____  >\n" +
//   "     \\/                 \\/               \\/     \\/    \\/           /_____/     \\/ \n\n" +
//   "cute-cnblogs v2.0 github:https://github.com/miluluyo/cute-cnblogs (๑•̀ㅁ•́ฅ)";

// 在控制台输出字符串h
// console.info(h);