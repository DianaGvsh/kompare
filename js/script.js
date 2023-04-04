$(function () {
  questions();
  openMenu();
});

function questions() {
  var options = {
    activeClass: 'open',
    animSpeed: 400,
  };

  $('.js-open-close li').each(function () {
    var item = $(this);
    var opener = item.find('.js-open-close-opener');
    var slider = item.find('.js-open-close-slider');

    function toggle() {
      opener.toggleClass(options.animSpeed);
      slider.slideToggle(options.animSpeed);
    }

    opener.on('click', toggle);
  });
}

function openMenu() {
  $('.btn-menu').click(function () {
    $('#header').toggleClass('menu-open');
  });
}
