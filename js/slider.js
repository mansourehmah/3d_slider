$(function () {
  var _w = $(this).innerWidth() / 2;
  var _h = $(this).innerHeight() / 2;
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
});
