$(document).ready(function () {
  questions();
  openMenu();
});

function questions() {
  $('.question-list-title').on('click', function () {
    $(this).toggleClass('open');
    $(this).next('.question-list-text').slideToggle();
  });
}

function openMenu() {
  $('.btn-menu').click(function () {
    $('#header').toggleClass('menu-open');
  });
}
