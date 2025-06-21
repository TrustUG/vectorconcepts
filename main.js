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

  // Step 1: Assign unique data-id to each like element
  $(".gallery .imahe-wallper .image .like").each(function (index) {
    $(this).attr("data-id", "like-" + index);
  });

  // Step 2: Apply saved like styles from localStorage
  $(".gallery .imahe-wallper .image .like").each(function () {
    let id = $(this).data("id");
    if (localStorage.getItem("liked_" + id) === "true") {
      $(this).find(".like-svg svg").css({
        fill: "red",
        stroke: "none",
      });
    }
  });

  // Step 3: Toggle like on click and update localStorage
  $(".gallery .imahe-wallper .image .like").on("click", function () {
    let id = $(this).data("id");
    let svg = $(this).find(".like-svg svg");
    let isLiked = localStorage.getItem("liked_" + id) === "true";

    if (isLiked) {
      // Unlike
      svg.css({
        fill: "none",
        stroke: "currentColor",
      });
      localStorage.setItem("liked_" + id, "false");
    } else {
      // Like
      svg.css({
        fill: "red",
        stroke: "none",
      });
      localStorage.setItem("liked_" + id, "true");
    }
  });
});
