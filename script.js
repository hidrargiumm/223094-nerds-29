function slider() {
  let slider_btn = document.querySelectorAll('.slider__btn');
  let slide = document.querySelectorAll('slide');

  for (let i = 0; i < slider_btn.length; i++) {
    slider_btn[i].onclick = function () {
      slider_btn[i].classList.toggle('current');
    }
  }
}
