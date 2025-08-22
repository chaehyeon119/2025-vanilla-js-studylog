const tabItems = document.querySelectorAll(".tab-item");
const tabPanels = document.querySelectorAll(".tab-panel");
// let currentItem; // 현재 활성화된 메뉴를 저장
let currentIndex = 1;

tabItems.forEach((item, index) => {
  item.dataset.index = index;
  item.addEventListener("click", clickMenuHandler);
});

function activateTab(index) {
  console.log(index);
  tabItems[currentIndex].classList.remove("active");
  tabItems[index].classList.add("active");
  tabPanels[currentIndex].classList.remove("active");
  tabPanels[index].classList.add("active");
  currentIndex = index;
}

function clickMenuHandler(e) {
  // const currentMenu = document.querySelector('.tab-item.active');
  // if (currentMenu) currentMenu.classList.remove('active');
  // e.currentTarget.classList.add('active');
  e.preventDefault();
  // if (currentItem) currentItem.classList.remove('active');
  // e.currentTarget.classList.add('active');
  // currentItem = e.currentTarget;
  activateTab(e.currentTarget.dataset.index);
}

activateTab(currentIndex);
