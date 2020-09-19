$(function () {
  var _w = $(this).innerWidth() / 2;
  var _h = $(this).innerHeight() / 2;
  var index = 1;
  //start change cursor
  $(".main").mousemove(function (event) {
    var x, y;
    x = event.clientX;
    y = event.clientY;
    $(".main>div>span").css("display", "none");
    if (_w < x) {
      $(".main>div>span:nth-of-type(1)").css({
        display: "inline",
        left: x - 15,
        top: y - 15,
      });
    } else {
      $(".main>div>span:nth-of-type(2)").css({
        display: "inline",
        left: x - 15,
        top: y - 15,
      });
    }
    $(".wrapper").css(
      "transform",
      "perspective(500px) rotateY(" +
        ((x - _w) * 10) / _w +
        "deg) rotateX(" +
        ((_h - y) * 10) / _h +
        "deg)"
    );
    $(".show>div>img:nth-of-type(" + index + ")").css({
      transform:
        "translate(" +
        ((_w - x) * 100) / _w +
        "px , " +
        ((_h - y) * 50) / _h +
        "px)",
    });
  });
  $(".main").mouseleave(function () {
    $(".main>div>span").css("display", "none");
  });
  //end change cursor

  // start change slide with click page
  $(".main").click(function (event) {
    $(".show>div>img").css({
      "z-index": 19,
      animation: "none",
    });
    if (_w > event.clientX) {
      $(".show>div>img:nth-of-type(" + index + ")").css({
        animation: "prev2 1s forwards",
        "z-index": 20,
      });
      if (index > 1) {
        index--;
      } else {
        index = 5;
      }
      $(".show>div>img:nth-of-type(" + index + ")").css({
        animation: "prev 1s forwards",
        "z-index": 21,
      });
    } else {
      $(".show>div>img:nth-of-type(" + index + ")").css({
        animation: "next2 1s forwards",
        "z-index": 20,
      });
      if (index < 5) {
        index++;
      } else {
        index = 1;
      }
      $(".show>div>img:nth-of-type(" + index + ")").css({
        animation: "next 1s forwards",
        "z-index": 21,
      });
    }
    $(".cont>span>span").css({
      "background-color": "transparent",
    });
    $(".cont>span:nth-of-type(" + index + ")>span").css({
      "background-color": "white",
    });
    $(".main").css({
      "background-image":
        "url(" +
        $(".show>div>img:nth-of-type(" + index + ")").attr("src") +
        ")",
    });
  });
  //   end change slide with click page

  // start change slide with button
  $(".cont>span>span").click(function () {
    var num = $(this).parent().index();
    console.log(num);
    $(".show>div>img").css({ "z-index": 18 });
    $(".show>div>img:nth-of-type(" + index + ")").css({ "z-index": 20 });
    $(".cont>span>span").css({ "background-color": "transparent" });
    $(".cont>span:nth-of-type(" + (num + 1) + ")>span").css({
      "background-color": "white",
    });
    if (num + 1 > index) {
      $(".show>div>img:nth-of-type(" + index + ")").css({
        animation: "next2 1s forwards",
        "z-index": 20,
      });
      $(".show>div>img:nth-of-type(" + (num + 1) + ")").css({
        animation: "next 1s forwards",
        "z-index": 21,
      });
    }
    if (num + 1 < index) {
      $(".show>div>img:nth-of-type(" + index + ")").css({
        animation: "prev2 1s forwards",
        "z-index": 20,
      });
      $(".show>div>img:nth-of-type(" + (num + 1) + ")").css({
        animation: "prev 1s forwards",
        "z-index": 21,
      });
    }
    index = num + 1;
    $(".main").css({
      "background-image":
        "url(" +
        $(".show>div>img:nth-of-type(" + index + ")").attr("src") +
        ")",
    });
  });
  // end change slide with button
});
