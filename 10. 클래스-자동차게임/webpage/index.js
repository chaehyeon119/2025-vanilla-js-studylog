import { TabUI } from "./TabUI.js";

const tabPanels = document.querySelectorAll(".tab-panel");

new TabUI(["소개", "식사부", "요리부"], ".global-header", 0, function () {
  console.log(`${this.currentIndex}번째 메뉴 클릭`);
  const pannel = document.querySelector(".tab-panel.active");
  if (pannel) pannel.classList.remove("active");
  tabPanels[this.currentIndex].classList.add("active");

  switch (this.currentIndex) {
    case 0:
      console.log("소개 페이지에 필요한 작업 수행");
      break;
    case 1:
      console.log("식사부 페이지에 필요한 작업 수행");
      break;
    case 2:
      console.log("요리부 페이지에 필요한 작업 수행");
      break;
  }
});

new TabUI(["에르빈", "한조", "리바이", "유미르"], "footer", 3);
