const data = [
  {
    id: "asxasfqweqwr0",
    title: "이미지 A0",
    src: "./img/a0.png",
  },
  {
    id: 1,
    title: "이미지 A01",
    src: "./img/a1.png",
  },
  {
    id: 2,
    title: "이미지 A02",
    src: "./img/a2.png",
  },
];

// load는 문서 내의 리소스들까지 전부 로드가 된 후 실행
// window.addEventListener("load", () => {
// DOMContentLoaded는 HTML 구조만 파싱이 끝나면 실행
window.addEventListener("DOMContentLoaded", () => {
  // DOM 구성
  const slideContainer = document.createElement("div");
  const slide = document.createElement("div");
  const slideWrapper = document.createElement("div");
  const slidePagination = document.createElement("div");
  const paginationItemArr = [];
  let currentIndex = 0;

  slideContainer.classList.add("slide-container");
  slide.classList.add("slide");
  slideWrapper.classList.add("slide-wrapper");
  slidePagination.classList.add("slide-pagination");

  slide.append(slideWrapper);
  slideContainer.append(slide);
  slideContainer.append(slidePagination);
  document.getElementById("temp").append(slideContainer);

  // data의 정보를 이용해서 조립
  data.forEach((info, index) => {
    const slideItem = document.createElement("figure");
    slideItem.classList.add("slide-item");
    slideItem.innerHTML = `<img src="${info.src}" alt="${info.title}">`;
    slideWrapper.append(slideItem);

    const paginationItem = document.createElement("div");
    paginationItem.classList.add("slide-pagination-item");
    paginationItem.dataset.id = info.id;
    paginationItem.dataset.index = index;
    paginationItemArr.push(paginationItem);

    slidePagination.append(paginationItem);
  });

  // Event
  // 브라우저 크기 변경 시 슬라이드 크기 조정(resize)
  window.addEventListener("resize", () => {
    const unitSize = document.querySelector(".slide-item").clientWidth;
    slideWrapper.style.transform = `translateX(${-unitSize * currentIndex}px)`;
  });

  // 현재 문서를 보고있는지 체크(visibilitychange)
  // 다른 걸 볼 때는 true, 내 것을 볼 때는 false
  // console.log(document.hidden);
  document.addEventListener("visibilitychange", () => {
    document.hidden ? stopAutoPlay() : startAutoPlay();
  });

  slideContainer.addEventListener("click", (e) => {
    const el = e.target.closest("[data-index]");
    if (!el) return;
    activate(+el.dataset.index);
  });

  // 마우스가 이미지에 위치하거나 안할 때 동작 여부 결정
  slideContainer.addEventListener("mouseenter", stopAutoPlay);
  slideContainer.addEventListener("mouseleave", startAutoPlay);

  let timerId;
  function startAutoPlay() {
    timerId = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= paginationItemArr.length) nextIndex = 0;
      activate(nextIndex);
    }, 1500);
  }

  function stopAutoPlay() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  clearInterval(timerId);

  function activate(index) {
    // 슬라이드의 폭 * index 위치로 이동
    const unitSize = document.querySelector(".slide-item").clientWidth;
    console.log(unitSize);
    slideWrapper.style.transform = `translateX(${-unitSize * index}px)`;

    // pagination
    const activeItem = paginationItemArr[currentIndex];
    if (activeItem) activeItem.classList.remove("active");
    paginationItemArr[index].classList.add("active");
    currentIndex = index;
  }
  activate(currentIndex);
  startAutoPlay();
});
