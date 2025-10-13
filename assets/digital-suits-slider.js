const swiper = new Swiper('.digital-suits-slider', {
  slidesPerView: 1,
  effect: "fade",
  rewind: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      document.querySelectorAll('.slide__title').forEach(title => {
        title.classList.remove('active');
      });

      const activeIndex = this.activeIndex;
      const activeSlide = document.querySelector(`.swiper-slide[data-slide-index="${activeIndex}"]`);
      const activeTitle = activeSlide.querySelector(`.slide__title[data-title-index="${activeIndex}"]`);

      if (activeTitle) {
        activeTitle.classList.add('active');
      }
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const firstTitle = document.querySelector('.swiper-slide[data-slide-index="0"] .slide__title[data-title-index="0"]');
  if (firstTitle) {
    firstTitle.classList.add('active');
  }

  document.querySelectorAll('.slide__title').forEach(title => {
    title.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-title-index'));
      swiper.slideTo(index);
    });
  });
});