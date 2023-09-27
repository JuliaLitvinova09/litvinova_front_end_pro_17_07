let btnRight = document.querySelector(".btn-right");
let btnLeft = document.querySelector(".btn-left");
let currentTimer = 0; // текущий таймер

let slider = {
  slides: [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
  ],
  currentIndex: 0,

  showCurrentImage: function (image) {
    document.getElementById("foto").style.backgroundImage =
      "url(" + image + ")";
    document.getElementById("title-foto").innerHTML = `Фото №${
      this.currentIndex + 1
    }`;
  },
  start: function () {
    this.showCurrentImage(this.slides[this.currentIndex]);
  },
  stepLeft: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) this.currentIndex = this.slides.length - 1;
    this.showCurrentImage(this.slides[this.currentIndex]);
  },
  stepRight: function () {
    this.currentIndex++;
    if (this.currentIndex == this.slides.length) this.currentIndex = 0;
    this.showCurrentImage(this.slides[this.currentIndex]);
  },
};

function startSlader() {
  slider.start();
  currentTimer = setInterval(function () {
    slider.stepRight();
  }, 3000);
}

window.onload = function () {
  startSlader();
};

btnRight.addEventListener("click", function () {
  clearTimeout(currentTimer);
  slider.stepRight();
  startSlader();
});

btnLeft.addEventListener("click", function () {
  clearTimeout(currentTimer);
  slider.stepLeft();
  startSlader();
});
