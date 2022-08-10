var menu = ['North Shore', 'South Shore', 'West Shore', 'East Shore']

window.onload = function() {
  var mySwiper = new Swiper('.swiper-container', {
    // loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function(index, className) {
        return '\
          <div class="box ' + className + '">\
          <div class="bigNumber">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + '</div>\
          <div class="text">' + (menu[index]) + '</div>\
          </div>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
};