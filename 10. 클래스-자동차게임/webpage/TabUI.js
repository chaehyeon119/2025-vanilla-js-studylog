export class TabUI {
  constructor(menuTextArray, selector, currentIndex = 0, callback) {
    this.menuTextArray = menuTextArray;
    this.menuItemArray = []; //li.menu-item: 객체들을 담을 배열
    this.currentIndex = currentIndex;
    this.container = document.querySelector(selector);
    this.callback = callback;

    this.init();
    if (typeof this.currentIndex === "number");
    this.activateTab(this.currentIndex);
  }

  init() {
    // html 구조 만들기
    const tabMenu = document.createElement("ul");
    tabMenu.classList.add("tab-menu");
    this.container.append(tabMenu);

    // 메뉴 구성
    this.menuTextArray.forEach((text, index) => {
      const li = document.createElement("li");
      li.dataset.index = index;
      li.classList.add("tab-item");
      li.innerHTML = `<a href="#">${text}</a>`;

      tabMenu.append(li);
      this.menuItemArray.push(li);
    });

    // 이벤트
    tabMenu.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("tab-item")) {
        const index = +e.target.dataset.index; //number로 바꾸기
        this.activateTab(index);
      }
    });
  }

  activateTab(index) {
    if (typeof this.currentIndex === "number") {
      this.menuItemArray[this.currentIndex].classList.remove("active");
    }
    this.menuItemArray[index].classList.add("active");
    this.currentIndex = index;

    //callback 함수가 있다면 실행하시오
    if (this.callback) this.callback();
  }
}
