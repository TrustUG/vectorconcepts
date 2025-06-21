$(document).ready(function () {
  $(document).ready(function () {
    $("#copyright-year").text(new Date().getFullYear());
  });

  // alert("ok it's ready");
  $("#open").click(function () {
    $("#open").hide();
    $("#close").show();
    $(".header-cont header #nav-mobo").css("transform", "translateY(0%)");
  });

  $("#close").click(function () {
    $("#close").hide();
    $("#open").show();
    $(".header-cont header #nav-mobo").css("transform", "translateY(-100%)");
  });

  $(".header-cont header #nav-mobo a").click(function () {
    $("#close").hide();
    $("#open").show();
    $(".header-cont header #nav-mobo").css("transform", "translateY(-100%)");
  });
});
