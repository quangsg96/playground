$(document).ready(function () {
  // --- MENU in PC MODE
  $("#menu-dropdown").click(function (e) {
    e.stopPropagation();
    $("#header__dropdown").slideToggle(400);
  });
  $("#wrapper").click(function () {
    $("#header__dropdown").slideUp(400);
  });
  $("#header__dropdown").click(function (e) {
    e.stopPropagation();
  });
  // --- MENU in MOBILE MODE
  $("#hamburger").click(function () {
    $("#menu").css("right", "0");
  });
  $("#close").click(function () {
    $("#menu").css("right", "-100%");
  });
  // --- MENU DROPDOWN in MOBILE MODE
  $("#toggle-event").click(function () {
    $("#menu_event").slideToggle(300);
  });
  $("#toggle-about").click(function () {
    $("#menu__about").slideToggle(300);
  });
  $("#toggle-join").click(function () {
    $("#menu__join").slideToggle(300);
  });
});
