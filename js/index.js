
window.onload = function() {
  var oTab = document.getElementById('tab');
  var oPre = document.getElementById('pre');
  var oNext = document.getElementById('next');

}
$(document).ready(function() {
    $("#pre").click(function() {
        var list_ul = $("#tab ul");
        var list_top = get_id_top_num("#tab ul");
        var tab_height = $("#tab").height();
        var list_ul_height = list_ul.height();
        var max_top = tab_height - list_ul_height;

        if (list_top <= max_top) {
            return;
        }
        if (list_ul.is(":animated")) {
            return false;
        }
        list_ul.stop(false, true).animate({
            top: '-=390px'
        }, 1000);

    });

    $("#next").click(function() {
        var list_ul = $("#tab ul");
        var list_top = get_id_top_num("#tab ul");

        if (list_top >= 0) {
            return false;
        }
        if (list_ul.is(":animated")) {
            return false;
        }
        list_ul.stop(false, true).animate({
            top: '+=390px'
        }, 1000);

    });

    function get_id_top_num(selector) {
        // 获取选择器盒子的 top值 并返回数值类型
        var $this_box = $(selector);
        var top = $this_box.css('top');
        return parseInt(top);

    }

    // $('.item').click(function() {
    //   $(this).addClass("active").siblings().removeClass("active");
    // });


    $("#transform_outer .pre").on("click", transform_rotate);
    $("#transform_outer .next").on("click", transform_rotate);

    function get_browser_v() {
        if (navigator.userAgent.indexOf("Opera") != -1) {
            return 'Opera';
        } else if (navigator.userAgent.indexOf("MSIE") != -1) {
            return 'Internet Explorer';
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return 'Firefox';
        } else if (navigator.userAgent.indexOf("Netscape") != -1) {
            return 'Netscape';
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
        } else {
            return false;
        }
    }


    function transform_rotate() {

        var $this = $(this);

        var item = $("#transform_outer .item");
        var item_len = item.length;

        var active_item = item.filter(".active");
        var active_index = item.index(active_item);

        var new_index = active_index;

        if ($this.hasClass("pre")) {
            if (!new_index <= 0) {
                new_index--;
            }
        } else {
            var num = item_len - 3;
            if (new_index < num) {
                new_index++;
            }
        }

        var browser = get_browser_v();

        var browser_Array = ["webkit", "moz", "ms", 'o'];
        var prefix;
        var rotateY = "rotate(360deg)";

        if (browser === "Safari") {
            prefix = browser_Array[0];
        } else if (browser === "Opera") {
            prefix = browser_Array[3];
        } else if (browser === "Firefox") {
            prefix = browser_Array[1];
        } else if (browser === "Internet Explorer") {
            prefix = browser_Array[2];
        }

        var prefix_transform = "-" + prefix + "-transform";

        item.not(".next,.pre").removeClass("active");
        item.not(".next,.pre").removeClass("rotate");

        item.eq(new_index).addClass('rotate');

        item.eq(new_index).addClass("active");

    }





});
window.load=function(){
var oTab=document.getElementById('tab');
var oPre=document.getElementById('pre');
var oNext=document.getElementById('next');

}
