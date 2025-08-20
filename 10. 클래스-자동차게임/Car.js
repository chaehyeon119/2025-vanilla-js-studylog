const road = document.querySelector(".road");
let carY = -20;
const cars = [];

class Car {
  constructor(name, type = "🚗") {
    this.name = name;
    this.type = type;
    this.x = 0;
    console.log(this.name, this.type);

    cars.push(this);
    console.log(cars);
    this.init();
  }

  init() {
    const element = document.createElement("span");
    element.classList.add("car");
    element.style.top = carY + "px";
    // element.innerHTML = `속도: ${this.carY}px`;
    element.innerHTML = `
  ${this.type}
  <small class="car-name">${this.name} 속도: ${this.x}px</span>
  `;

    road.append(element);

    carY += 20;

    element.addEventListener("click", this.drive.bind(this));
    // bind(this); this가 메서드 실행의 주체가 되도록 강제
    this.element = element;
  }

  drive() {
    this.x += 20;
    this.element.style.transform = `translateX(-${this.x}px)`;
    this.element.innerHTML = `
  ${this.type}
  <small class="car-name">${this.name} 속도: ${this.x}px</small>
  `;
  }

  reset() {
    this.x = 0;
    this.element.style.transform = `translateX(0px)`;

    this.element.innerHTML = `
  ${this.type}
  <small class="car-name">${this.name} 속도: ${this.x}px</small>
  `;
  }
}

class PoliceCar extends Car {
  constructor(name, type = "🚓") {
    super(name, type);
    this.element.addEventListener("dblclick", this.chase.bind(this));
  }

  chase() {
    this.x += 100;
    this.element.style.transform = `translateX(-${this.x}px)`;
    this.element.innerHTML = `
    ${this.type}
    <small class="car-name">${this.name} 속도: ${this.x}px</small>
    `;
  }
}
