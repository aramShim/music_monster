$(document).ready(function () {
  mypageSelect();
});

function mypageSelect() {
  const $langWrap = $(".mypage-hd");
  $langWrap.children("button").on("click", function () {
    $(this).parent().toggleClass("active");
  });
  $langWrap.on("mouseleave", function () {
    $(this).removeClass("active");
  });
}