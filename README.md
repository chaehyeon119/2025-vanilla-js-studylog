# 2025 Vanilla JavaScript Study Log

## 📚 프로젝트 소개

Vanilla JavaScript 학습 과정을 기록하고 실습하는 저장소입니다.

## 🎯 학습 목표

- JavaScript 기본 문법 마스터
- DOM 조작 및 이벤트 처리
- 비동기 프로그래밍 (Promise, async/await)
- ES6+ 문법 활용
- 실전 프로젝트 구현

## 📊 학습 진행사항

### 섹션 1: JavaScript 기초

- [x] 자바스크립트의 실행 환경 (2025-08-17)
- [x] 변수와 상수 (2025-08-17)
- [x] 자료형과 형 변환 (2025-08-17)
- [x] 연산자 (2025-08-17)
- [x] 조건문 (2025-08-17)
- [x] 함수 (2025-08-17)
- [x] 스코프 (2025-08-18)
- [x] 호이스팅 (2025-08-18)
- [x] 함수 표현식과 화살표 함수 (2025-08-18)
- [x] 객체 (2025-08-18)
- [x] 배열 (2025-08-18)
- [x] 생성자 함수 (2025-08-18)
- [ ] 반복문 (완료일: )
- [ ] 배열 메서드-1 (완료일: )
- [ ] 배열 메서드-2 (완료일: )
- [ ] 배열과 객체 구조 분해 할당 (완료일: )
- [ ] spread와 rest (완료일: )

### 섹션 2: 비동기와 API

- [ ] 비동기 처리 (완료일: )
- [ ] 프로미스 객체 (완료일: )
- [ ] async와 await (완료일: )
- [ ] API 호출 (완료일: )

### 섹션 3: DOM과 DOM API

- [ ] 웹과 DOM (완료일: )
- [ ] DOM API-1 (완료일: )
- [ ] DOM API-2 (완료일: )
- [ ] 여러가지 폼 조작 (완료일: )

### 섹션 4: this와 화살표 함수

- [ ] 자바스크립트의 this-1 (완료일: )
- [ ] 자바스크립트의 this-2 (완료일: )
- [ ] this와 화살표 함수 (완료일: )

### 섹션 5: 중간 프로젝트

- [ ] 동물 앨범 만들기 코드 (완료일: )
- [ ] 동물 앨범 만들기-1-1 (완료일: )
- [ ] 동물 앨범 만들기-1-2 (완료일: )

### 섹션 6: 컴포넌트와 모듈 시스템

- [ ] 컴포넌트란 (완료일: )
- [ ] 모듈 시스템이란 (완료일: )
- [ ] 동물 앨범 만들기-2-1 (완료일: )

### 섹션 7: 상태 관리와 SPA

- [ ] 상태 관리란 (완료일: )
- [ ] 동물 앨범 만들기-2-2 (완료일: )
- [ ] 동물 앨범 만들기-2-3 (완료일: )
- [ ] MPA와 SPA (완료일: )
- [ ] SPA와 라우팅 (완료일: )
- [ ] 동물 앨범 만들기-3 (완료일: )
- [ ] express 버전 안내 (완료일: )
- [ ] node.js와 express.js (완료일: )

### 섹션 8: 최종 프로젝트

- [ ] 최종 프로젝트 안내 (완료일: )
- [ ] Trip Wiki 코드 (완료일: )
- [ ] 여행지 정보 웹 사이트(Trip Wiki) (완료일: )
- [ ] 컴포넌트화 작업 (완료일: )
- [ ] CityList 개발 (완료일: )
- [ ] Header 개발 (완료일: )
- [ ] RegionList 개발 (완료일: )
- [ ] CityDetail 개발-1 (완료일: )
- [ ] CityDetail 개발-2 (완료일: )
- [ ] 강의를 마치면서 (완료일: )

---

## 📝 학습 내용 정리

### 📋 목차

1. [🔧 기본 문법](#-기본-문법)

   - [변수와 상수](#변수와-상수)
   - [자료형과 형 변환](#자료형과-형-변환)
   - [연산자](#연산자)
   - [조건문](#조건문)
   - [함수](#함수)

2. [🚀 고급 개념](#-고급-개념)

   - [호이스팅](#호이스팅)
   - [스코프](#스코프)
   - [함수 표현식과 화살표 함수](#함수-표현식과-화살표-함수)
   - [콜백 함수](#콜백-함수)

3. [📦 객체와 배열](#-객체와-배열)

   - [객체 다루기](#객체-다루기)
   - [배열 메서드](#배열-메서드)
   - [생성자 함수](#생성자-함수)

4. [💡 핵심 개념 정리](#-핵심-개념-정리)
   - [바닐라 JS의 의미](#바닐라-js의-의미)
   - [비교 연산 주의사항](#비교-연산-주의사항)
   - [변수 초기화](#변수-초기화)
   - [return vs console.log](#return-vs-consolelog)

---

### 🔧 기본 문법

#### 변수와 상수

```javascript
let num = 10; // 변수 (재할당 가능)
const PI = 3.14; // 상수 (재할당 불가)
var oldWay = "구식"; // var (사용 권장하지 않음)
```

#### 자료형과 형 변환

```javascript
// 기본 자료형
let string = "문자열";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;

// 형 변환
let strToNum = parseInt("123"); // 문자열 → 숫자
let numToStr = String(123); // 숫자 → 문자열
```

#### 연산자

```javascript
// 증감 연산자
let num = 10;
console.log(num++); // 10 (후위 연산)
console.log(num); // 11
console.log(++num); // 12 (전위 연산)

// 비교 연산자
console.log(10 === "10"); // false (엄격한 비교)
console.log(10 == "10"); // true (느슨한 비교)

// 논리 연산자
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// null 병합 연산자
let value = undefined ?? "기본값"; // "기본값"

// 삼항 연산자
let result = 10 > 5 ? "크다" : "작다"; // "크다"
```

#### 조건문

```javascript
// if-else
if (num > 10) {
  console.log("10보다 크다");
} else if (num === 10) {
  console.log("10이다");
} else {
  console.log("10보다 작다");
}

// switch-case
switch (fruit) {
  case "apple":
    console.log("사과");
    break;
  case "banana":
    console.log("바나나");
    break;
  default:
    console.log("다른 과일");
}
```

#### 함수

```javascript
// 함수 선언식
function add(num1, num2) {
  return num1 + num2;
}

// 함수 표현식
const multiply = function (num1, num2) {
  return num1 * num2;
};

// 화살표 함수
const divide = (num1, num2) => num1 / num2;

// Early Return Pattern (가독성 좋은 코드)
function compare(num) {
  if (num === 0) return "0이다";
  if (num < 0) return "음수이다";
  if (num >= 10) return "10 이상이다";
  return "0보다 크고 10보다 작다";
}
```

---

### 🚀 고급 개념

#### 호이스팅

**함수 호이스팅**

```javascript
sayHi(); // ✅ 가능

function sayHi() {
  console.log("안녕");
}
```

**변수 호이스팅**

```javascript
console.log(num2); // ❌ 에러 발생
let num2 = 123;

// 자바스크립트 엔진이 해석하는 순서:
// let, const는 Temporal Dead Zone(TDZ)에 위치
// 변수가 초기화가 진행될 때까지 TDZ에 위치
```

**var vs let/const 호이스팅 차이**

```javascript
console.log(num2); // undefined
var num2 = 123;

// 자바스크립트 엔진이 해석하는 순서:
// var num;
// console.log(num);
// num = 123;

// var 키워드는 변수를 생성한 다음 바로 메모리에 변수 num 공간을 할당
// let, const는 변수가 초기화될 때까지 메모리 공간이 확보되지 않아서 TDZ에 위치
```

> ⚠️ **중요**: 호이스팅은 자바스크립트의 기본 성질이지만, 호이스팅이 많이 발생하게 작성된 코드는 가독성이 좋지 않습니다. 되도록 var보다는 let이나 const를 사용하고, 변수와 함수의 선언문 이후에 변수와 함수에 접근하는 코드를 작성하는 것이 좋습니다.

#### 스코프

**전역 스코프와 지역 스코프**

```javascript
let global = "나는 전역 변수입니다.";

function outerFunction() {
  let outer = "나는 외부 함수의 변수입니다.";

  function innerFunction() {
    let inner = "나는 내부 함수의 변수입니다.";

    console.log(global); // ✅ 전역 변수 접근 가능
    console.log(outer); // ✅ 외부 함수 변수 접근 가능
    console.log(inner); // ✅ 내부 함수 변수 접근 가능
  }

  innerFunction();
  console.log(global); // ✅ 전역 변수 접근 가능
  console.log(outer); // ✅ 외부 함수 변수 접근 가능
  // console.log(inner); // ❌ 지역 스코프에 접근할 수 없음
}

outerFunction();
```

#### 함수 표현식과 화살표 함수

**함수 선언식 vs 함수 표현식**

```javascript
// 함수 선언식
hoisted(); // ✅ 가능

function hoisted() {
  console.log("hosting");
}

// 함수 표현식
hoisted(); // ❌ 에러 발생

const hoisted = function () {
  console.log("hoisting");
};

// 화살표 함수
const hoisted = () => {
  console.log("hoisting");
};
```

> 📌 **함수 선언식**은 호이스팅되어 어디서든 호출 가능
> 📌 **함수 표현식**은 변수만 호이스팅되고 값은 나중에 할당 → 미리 호출 불가

#### 콜백 함수

**콜백 함수 기본 개념**

```javascript
// 콜백함수 변경 전
const printResult1 = (a, b) => {
  let result = a + b;
  console.log("결과: " + result);
};

const doubleResult1 = (a, b) => {
  let result = a + b;
  console.log("결과에 2를 곱한 값: " + result * 2);
};

printResult1(5, 3);
doubleResult1(5, 3);

// 콜백함수 변경 후
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log("결과: " + result);
};

const doubleResult = (result) => {
  console.log("결과에 2를 곱한 값: " + result * 2);
};

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);

// 콜백 함수 다른 예시
const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log("콜백 함수 테스트");
});
```

---

### 📦 객체와 배열

#### 객체 다루기

**객체 프로퍼티 접근**

```javascript
let car = {
  name: "붕붕",
  model: "morning",
  color: "black",
};

// 점 표기법 (일반적인 경우)
console.log(car.name); // '붕붕'

// 괄호 표기법 (동적 키 접근)
const getValue = (key) => {
  console.log(car[key]); // 'black'
};

getValue("color");
```

**프로퍼티 값 변경**

```javascript
const cat = {
  age: 2,
  name: "야옹이",
  color: "yellow",
};

cat.name = "옹이";
cat["color"] = "black";

console.log(cat); // const여도 오류 없이 실행됨

// const로 객체를 선언하더라도 프로퍼티 값을 변경할 수 있음
// (단, 아래 코드는 오류 남 => 객체의 고유한 아이디를 변경하는 것이므로)

// cat = {
//   age: 3,
// }; // TypeError 발생
```

#### 배열 메서드

**배열 앞쪽 조작**

```javascript
// unshift: 배열 맨 앞에 값 추가
let fruits = ["apple", "banana"];
fruits.unshift("grape");
console.log(fruits); // ['grape', 'apple', 'banana']

// shift: 배열 맨 앞의 값 삭제
const colors = ["purple", "skyblue", "green"];
colors.shift();
console.log(colors); // ['skyblue', 'green']
```

**splice 메서드**

```javascript
const colors = ["purple", "skyblue", "green", "yellow", "orange"];
// colors.splice(start, deleteCount);
colors.splice(1, 3);
console.log(colors); // ['purple', 'orange']
console.log(colors.length); // 2
```

#### 생성자 함수

**생성자 함수의 장점**

1. 동일한 구조의 객체 쉽게 생성
2. 코드의 재사용성 높아짐
3. 반복되는 코드 작성 감소

```javascript
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function () {
    console.log("안녕하세요!" + this.name + "입니다");
  };
}

const person1 = new Person("홍길동", 30, "Manager");
const person2 = new Person("김철수", 25, "Designer");

console.log(person1.name); // '홍길동'
console.log(person1.age); // 30
person1.sayHi(); // '안녕하세요!홍길동입니다'
person2.sayHi(); // '안녕하세요!김철수입니다'
```

---

### 💡 핵심 개념 정리

#### 바닐라 JS의 의미

> 🍦 **바닐라 JavaScript**는 "바닐라 아이스크림"이 기본 맛인 것처럼, 아무런 프레임워크나 라이브러리(React, Vue, jQuery 등)를 쓰지 않은 **순수 자바스크립트**를 뜻합니다.

#### 비교 연산 주의사항

```javascript
let age = 20;

// ✅ 올바른 비교: &&로 두 조건을 동시에 확인
if (age > 10 && age < 40) {
  console.log("청년입니다.");
}

// ❌ 10 < age < 40 은 JS에서 왼쪽부터 계산되어 항상 참처럼 동작
// (파이썬에서는 가능하지만, JS에서는 안 됨)
```

#### 변수 초기화

```javascript
let result; // 값이 없으면 자동으로 undefined
```

#### return vs console.log

```javascript
// return: 함수가 값을 돌려줌
// console.log: 콘솔에 직접 출력

function greet(name) {
  return `안녕, ${name}`;
}

console.log(greet("가나")); // 👉 안녕, 가나
```

#### 조건문에서 `!` 연산자 활용

```javascript
const userName = "";

// `!`는 "~이 아니다"라는 뜻
// `if (!userName)` 은 userName이 빈 문자열 "", null, undefined, 0, false일 때 true가 된다
// 즉, 값이 비어있거나 없으면 실행되는 조건문

if (!userName) {
  console.log("데이터가 없습니다.");
} else {
  console.log("데이터가 있습니다.");
}
```
# 2025-vanilla-js-studylog
