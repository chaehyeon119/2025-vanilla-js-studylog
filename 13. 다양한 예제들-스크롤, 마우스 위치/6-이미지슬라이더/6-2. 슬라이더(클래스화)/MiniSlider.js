export default class MiniSlider {
  constructor({ containerSelector, data, interval = 2000 }) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      throw new Error("컨테이너가 없습니다.");
    }

    this.data = data;
    this.interval = interval;
    this.currentIndex = 0;
    this.paginationItemArr = [];

    this.slideContainer = document.createElement("div");
    this.slide = document.createElement("div");
    this.slideWrapper = document.createElement("div");
    this.slidePagination = document.createElement("div");

    this.slideContainer.classList.add("slide-container");
    this.slide.classList.add("slide");
    this.slideWrapper.classList.add("slide-wrapper");
    this.slidePagination.classList.add("slide-pagination");

    this.slide.append(slideWrapper);
    this.slideContainer.append(slide);
    this.slideContainer.append(slidePagination);

    this.container.append(slideContainer);
  }
}
