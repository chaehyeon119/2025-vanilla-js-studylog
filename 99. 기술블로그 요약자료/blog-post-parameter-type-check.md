# JavaScript 매개변수와 타입 체크 완벽 가이드

## 🎯 목차

1. [매개변수란 무엇인가?](#매개변수란-무엇인가)
2. [JavaScript 매개변수의 특징](#javascript-매개변수의-특징)
3. [타입 체크가 필요한 이유](#타입-체크가-필요한-이유)
4. [안전한 타입 체크 방법](#안전한-타입-체크-방법)
5. [실전 활용 패턴](#실전-활용-패턴)

---

## 매개변수란 무엇인가?

**매개변수(Parameter)**: 함수가 작업하기 위해 필요한 재료

### 🍔 일상 생활 비유

```javascript
// 햄버거 만들기 함수
function makeHamburger(bread, patty, vegetable) {
  // bread, patty, vegetable = 매개변수 (재료)
  return `${bread} + ${patty} + ${vegetable} = 햄버거 완성!`;
}

// 사용할 때 실제 재료(인수) 전달
makeHamburger("참깨빵", "소고기패티", "양상추");
// 결과: "참깨빵 + 소고기패티 + 양상추 = 햄버거 완성!"
```

### 🎯 프로그래밍에서의 매개변수

```javascript
// 사용자 인사 함수
function greetUser(name, age, hobby) {
  return `안녕하세요! 저는 ${name}이고, ${age}살이며, ${hobby}를 좋아합니다.`;
}

// 호출 시 값 전달
greetUser("김철수", 25, "축구");
// 결과: "안녕하세요! 저는 김철수이고, 25살이며, 축구를 좋아합니다."
```

---

## JavaScript 매개변수의 특징

### 🔍 구조분해할당을 통한 매개변수

```javascript
// 전통적인 방식
function createUser(name, age, email, phone) {
  // 매개변수 순서를 기억해야 함
  return { name, age, email, phone };
}

// 사용할 때 순서가 중요
createUser("김철수", 25, "kim@email.com", "010-1234-5678");

// 객체 구조분해할당 방식 (더 안전)
function createUserSafe({ name, age, email, phone }) {
  // 순서 상관없이 객체 속성으로 접근
  return { name, age, email, phone };
}

// 사용할 때 순서 상관없음
createUserSafe({
  phone: "010-1234-5678",
  name: "김철수",
  email: "kim@email.com",
  age: 25,
});
```

### 📝 기본값 설정

```javascript
// 기본값이 없는 경우
function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}

greet("철수"); // "undefined, 철수!" → 문제!

// 기본값 설정
function greetSafe(name, greeting = "안녕하세요") {
  return `${greeting}, ${name}!`;
}

greetSafe("철수"); // "안녕하세요, 철수!" → 해결!
greetSafe("철수", "반갑습니다"); // "반갑습니다, 철수!" → 커스텀 가능
```

### 🎪 MiniAlert 매개변수 분석

```javascript
class MiniAlert {
  constructor({ title, message, closeBackdrop = true, onClose }) {
    // 구조분해할당으로 객체에서 필요한 값들을 추출
    // closeBackdrop = true: 기본값 설정 (값이 없으면 true 사용)

    this.title = title;
    this.message = message;
    this.closeBackdrop = closeBackdrop;
    this.onClose = onClose;
  }
}

// 사용법
new MiniAlert({
  title: "알림", // title 매개변수로 전달
  message: "저장이 완료되었습니다!", // message 매개변수로 전달
  closeBackdrop: false, // closeBackdrop 매개변수로 전달
  onClose: () => console.log("닫힘"), // onClose 매개변수로 전달
});
```

---

## 타입 체크가 필요한 이유

### 🚨 JavaScript는 동적 타입 언어

**문제점**: 개발자가 실수해도 에러를 바로 알려주지 않음

```javascript
// 😱 개발자가 할 수 있는 실수들
new MiniAlert({
  title: "제목",
  message: "내용",
  onClose: "문자열", // ❌ 함수가 아닌 문자열 실수로 입력!
});

new MiniAlert({
  title: "제목",
  message: "내용",
  onClose: console.log("닫힘"), // ❌ ()가 빠져서 즉시 실행 → undefined!
});

new MiniAlert({
  title: "제목",
  message: "내용",
  // onClose 아예 없음 → undefined
});
```

### 💥 타입 체크 없이 사용하면?

```javascript
function dangerousClose(onClose) {
  // 타입 체크 없이 바로 호출
  onClose(); // ❌ TypeError: onClose is not a function
}

// 실수로 문자열을 넘김
dangerousClose("이건 문자열이야");
```

### 🛡️ 실제 에러 시나리오

```javascript
class UnsafeAlert {
  constructor({ onClose }) {
    this.onClose = onClose;
  }

  close() {
    // 위험한 코드: 타입 체크 없음
    this.onClose(); // 에러 발생 가능!
  }
}

// 다양한 실수 케이스들
new UnsafeAlert({ onClose: null }); // TypeError!
new UnsafeAlert({ onClose: undefined }); // TypeError!
new UnsafeAlert({ onClose: "문자열" }); // TypeError!
new UnsafeAlert({}); // TypeError!
```

---

## 안전한 타입 체크 방법

### 🔒 typeof를 사용한 기본 체크

```javascript
function safeClose(onClose) {
  // 타입 체크 후 안전하게 호출
  if (typeof onClose === "function") {
    onClose();
  } else {
    console.log("onClose가 함수가 아니어서 무시합니다.");
  }
}

// 어떤 값이 와도 에러 없음
safeClose("문자열"); // 무시됨
safeClose(null); // 무시됨
safeClose(undefined); // 무시됨
safeClose(() => console.log("실행됨")); // 정상 실행
```

### 📊 typeof 체크 결과표

```javascript
console.log(typeof "문자열" === "function"); // false
console.log(typeof 123 === "function"); // false
console.log(typeof undefined === "function"); // false
console.log(typeof null === "function"); // false
console.log(typeof {} === "function"); // false
console.log(typeof [] === "function"); // false
console.log(typeof (() => {}) === "function"); // true ✅
```

### 🎯 MiniAlert의 안전한 구현

```javascript
class SafeMiniAlert {
  constructor({ title, message, closeBackdrop = true, onClose }) {
    this.title = title;
    this.message = message;
    this.closeBackdrop = closeBackdrop;

    // 안전한 콜백 함수 저장
    this.onClose = typeof onClose === "function" ? onClose : null;

    this.createModal();
  }

  close(target) {
    this.backdrop.remove();

    // 두 가지 안전장치
    if (
      target !== this.backdrop && // 1. 확인 버튼인지 체크
      typeof this.onClose === "function" // 2. 함수인지 체크
    ) {
      this.onClose(); // 안전하게 호출
    }
  }
}
```

### 🔧 고급 타입 체크 패턴

```javascript
class AdvancedTypeCheck {
  // 생성자 함수: 객체를 만들 때 실행되는 함수
  constructor(options = {}) {
    // ↑ options = {} 의미:
    // - 사용자가 아무것도 안 넘기면 빈 객체 {} 사용
    // - 이렇게 하면 options.title 같은 접근이 에러 안 남

    // 🔸 1단계: title 속성 안전하게 설정하기

    // typeof options.title === "string" 의미:
    // - options.title의 타입을 확인함
    // - "string"과 정확히 같은지 비교
    // - 문자열이면 true, 아니면 false 반환

    this.title =
      typeof options.title === "string" // 조건: options.title이 문자열인가?
        ? options.title // true면: 전달받은 title 사용
        : "기본 제목"; // false면: "기본 제목" 사용

    // 삼항연산자 설명: 조건 ? 참일때값 : 거짓일때값
    // if문으로 바꾸면:
    // if (typeof options.title === "string") {
    //   this.title = options.title;
    // } else {
    //   this.title = "기본 제목";
    // }

    // 🔸 2단계: timeout 속성 안전하게 설정하기

    this.timeout =
      typeof options.timeout === "number" // 조건: options.timeout이 숫자인가?
        ? options.timeout // true면: 전달받은 timeout 사용
        : 3000; // false면: 기본값 3000 사용

    // 예시:
    // options.timeout = 5000 → this.timeout = 5000
    // options.timeout = "문자열" → this.timeout = 3000
    // options.timeout = undefined → this.timeout = 3000

    // 🔸 3단계: callbacks 배열 안전하게 설정하기 (복잡한 부분!)

    // 먼저 Array.isArray() 설명:
    // - 괄호 안의 값이 배열인지 확인하는 함수
    // - 배열이면 true, 아니면 false 반환

    this.callbacks = Array.isArray(options.callbacks) // 1차 조건: options.callbacks가 배열인가?
      ? options.callbacks.filter(
          (
            cb // true면: 그 배열에서 함수만 걸러내기
          ) => typeof cb === "function" // filter 조건: 각 요소가 함수인가?
        )
      : []; // false면: 빈 배열 사용

    // filter() 함수 설명:
    // - 배열에서 조건에 맞는 요소만 새 배열로 만듦
    // - (cb) => typeof cb === "function"는 각 요소가 함수인지 체크
    // - cb는 배열의 각 요소를 뜻함 (callback의 줄임말)

    // 예시:
    // options.callbacks = [함수1, "문자열", 함수2, 123]
    // → filter 후: [함수1, 함수2] (함수만 남음)

    // 🔸 4단계: config 객체 안전하게 설정하기

    // && 연산자 설명:
    // - 왼쪽 조건이 true일 때만 오른쪽 조건도 확인
    // - 하나라도 false면 전체가 false

    this.config =
      options.config && // 1차 조건: options.config가 존재하는가?
      // (null, undefined가 아닌가?)
      typeof options.config === "object" // 2차 조건: 그리고 그것이 객체인가?
        ? options.config // 둘 다 true면: 전달받은 config 사용
        : {}; // 하나라도 false면: 빈 객체 사용

    // 왜 options.config && 를 먼저 체크할까?
    // - typeof null === "object"가 true라서!
    // - null도 객체 타입으로 나오는 JavaScript의 버그
    // - 그래서 먼저 존재 여부를 확인해야 함

    // 예시:
    // options.config = { theme: "dark" } → this.config = { theme: "dark" }
    // options.config = null → this.config = {}
    // options.config = "문자열" → this.config = {}
  }

  // 🔸 5단계: 메서드(함수) - 콜백을 안전하게 추가하는 기능
  addCallback(callback) {
    // callback 매개변수가 함수인지 먼저 확인
    if (typeof callback === "function") {
      // 함수라면:
      this.callbacks.push(callback); // callbacks 배열에 추가
      return true; // 성공했다는 의미로 true 반환
    }

    // 함수가 아니라면:
    console.warn("콜백은 함수여야 합니다:", typeof callback);
    // ↑ warn은 경고 메시지 (error보다 부드러움)
    // ↑ typeof callback으로 실제 타입도 함께 출력

    return false; // 실패했다는 의미로 false 반환
  }

  // 사용 예시:
  // instance.addCallback(() => console.log("함수")) → true 반환
  // instance.addCallback("문자열") → false 반환, 경고 출력
}

// 🎯 전체적인 흐름 정리:
// 1. 사용자가 객체를 만들 때 options 전달
// 2. 각 속성마다 타입 체크
// 3. 올바른 타입이면 그대로 사용, 아니면 기본값 사용
// 4. 결과적으로 항상 안전한 객체가 만들어짐
// 5. 나중에 addCallback으로 콜백 함수 추가 가능

// 📝 쉬운 사용 예시:

// 예시 1: 모든 값을 올바르게 전달
const good = new AdvancedTypeCheck({
  title: "좋은 제목", // 문자열 ✅
  timeout: 5000, // 숫자 ✅
  callbacks: [
    // 배열 ✅
    () => console.log("첫번째 함수"), // 함수 ✅
    () => console.log("두번째 함수"), // 함수 ✅
  ],
  config: { color: "blue" }, // 객체 ✅
});
// 결과: 모든 값이 그대로 저장됨

// 예시 2: 잘못된 값들을 전달 (하지만 안전하게 처리됨)
const bad = new AdvancedTypeCheck({
  title: 123, // 숫자 → "기본 제목"으로 변경
  timeout: "느림", // 문자열 → 3000으로 변경
  callbacks: [
    // 배열이지만...
    () => console.log("함수"), // 함수 ✅ 유지
    "문자열", // 문자열 ❌ 제거됨
    42, // 숫자 ❌ 제거됨
    () => console.log("또다른 함수"), // 함수 ✅ 유지
  ],
  config: "설정이 아님", // 문자열 → {}로 변경
});
// 결과: bad.callbacks에는 함수 2개만 남음

// 예시 3: 아무것도 전달하지 않음
const empty = new AdvancedTypeCheck();
// 결과: 모든 값이 기본값으로 설정됨
// empty.title = "기본 제목"
// empty.timeout = 3000
// empty.callbacks = []
// empty.config = {}

// 예시 4: 나중에 콜백 추가해보기
good.addCallback(() => console.log("나중에 추가된 함수")); // ✅ 성공
good.addCallback("함수가 아님"); // ❌ 실패, 경고 출력
```

---

## 실전 활용 패턴

### 🏗️ 안전한 클래스 설계 패턴

```javascript
class SafeComponent {
  constructor({
    // 필수 매개변수
    element,

    // 선택적 매개변수 (기본값 있음)
    className = "default-class",
    timeout = 1000,

    // 콜백 함수들
    onSuccess,
    onError,
    onComplete,
  } = {}) {
    // 1. 필수 매개변수 검증
    if (!element) {
      throw new Error("element는 필수 매개변수입니다.");
    }

    // 2. DOM 요소 검증
    if (!(element instanceof HTMLElement)) {
      throw new Error("element는 DOM 요소여야 합니다.");
    }

    // 3. 기본값과 타입 체크
    this.element = element;
    this.className =
      typeof className === "string" ? className : "default-class";
    this.timeout = typeof timeout === "number" && timeout > 0 ? timeout : 1000;

    // 4. 콜백 함수 안전하게 저장
    this.onSuccess = typeof onSuccess === "function" ? onSuccess : () => {};
    this.onError = typeof onError === "function" ? onError : console.error;
    this.onComplete = typeof onComplete === "function" ? onComplete : null;
  }

  execute() {
    try {
      // 작업 수행
      this.performTask();
      this.onSuccess("작업 완료!");
    } catch (error) {
      this.onError(error);
    } finally {
      // onComplete가 있을 때만 실행
      if (this.onComplete) {
        this.onComplete();
      }
    }
  }
}
```

### 🎨 API 클라이언트 예시

```javascript
class APIClient {
  constructor({
    baseURL,
    timeout = 5000,
    headers = {},
    onSuccess,
    onError,
    retryCount = 3,
  } = {}) {
    // URL 검증
    if (!baseURL || typeof baseURL !== "string") {
      throw new Error("baseURL은 필수이며 문자열이어야 합니다.");
    }

    // 숫자 타입 검증
    this.timeout = typeof timeout === "number" && timeout > 0 ? timeout : 5000;
    this.retryCount =
      typeof retryCount === "number" && retryCount >= 0 ? retryCount : 3;

    // 객체 타입 검증
    this.headers = headers && typeof headers === "object" ? headers : {};

    // 콜백 함수 검증
    this.onSuccess =
      typeof onSuccess === "function" ? onSuccess : (data) => data;
    this.onError = typeof onError === "function" ? onError : console.error;

    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    // 매개변수 타입 체크
    if (typeof endpoint !== "string") {
      throw new Error("endpoint는 문자열이어야 합니다.");
    }

    if (typeof options !== "object") {
      throw new Error("options는 객체여야 합니다.");
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        timeout: this.timeout,
        headers: this.headers,
        ...options,
      });

      const data = await response.json();
      return this.onSuccess(data);
    } catch (error) {
      this.onError(error);
      throw error;
    }
  }
}
```

### 🎯 유틸리티 함수 예시

```javascript
// 안전한 유틸리티 함수들
const utils = {
  // 안전한 배열 처리
  safeMap(array, callback) {
    if (!Array.isArray(array)) {
      console.warn("첫 번째 인수는 배열이어야 합니다.");
      return [];
    }

    if (typeof callback !== "function") {
      console.warn("두 번째 인수는 함수여야 합니다.");
      return array;
    }

    return array.map(callback);
  },

  // 안전한 객체 병합
  safeMerge(target, source) {
    if (typeof target !== "object" || target === null) {
      console.warn("target은 객체여야 합니다.");
      return {};
    }

    if (typeof source !== "object" || source === null) {
      console.warn("source는 객체여야 합니다.");
      return target;
    }

    return { ...target, ...source };
  },

  // 안전한 지연 실행
  safeDelay(callback, delay = 1000) {
    if (typeof callback !== "function") {
      console.warn("callback은 함수여야 합니다.");
      return;
    }

    const safeDelay = typeof delay === "number" && delay >= 0 ? delay : 1000;

    setTimeout(callback, safeDelay);
  },
};
```

---

## 🎓 핵심 정리

### 📋 매개변수 체크리스트

| 항목              | 체크 포인트                       | 예시                                 |
| ----------------- | --------------------------------- | ------------------------------------ |
| **필수 매개변수** | `undefined`, `null` 체크          | `if (!param) throw new Error()`      |
| **문자열**        | `typeof === "string"`             | `typeof title === "string"`          |
| **숫자**          | `typeof === "number"` + 범위 체크 | `typeof age === "number" && age > 0` |
| **함수**          | `typeof === "function"`           | `typeof callback === "function"`     |
| **배열**          | `Array.isArray()`                 | `Array.isArray(items)`               |
| **객체**          | `typeof === "object" && !== null` | `obj && typeof obj === "object"`     |
| **DOM 요소**      | `instanceof HTMLElement`          | `el instanceof HTMLElement`          |

### 🛡️ 방어적 프로그래밍 원칙

```javascript
// 1. 항상 기본값 제공
function safeFunction(param = "기본값") {
  // param이 undefined여도 안전
}

// 2. 타입 체크 후 사용
function typeSafeFunction(callback) {
  if (typeof callback === "function") {
    callback();
  }
}

// 3. 에러 상황 명시적 처리
function explicitErrorHandling(data) {
  if (!data) {
    throw new Error("data는 필수입니다.");
  }

  if (typeof data !== "object") {
    throw new Error("data는 객체여야 합니다.");
  }

  // 안전한 처리
}
```

### 🚀 실전 적용 가이드

**언제 타입 체크를 해야 할까?**

1. **외부에서 받는 모든 매개변수**
2. **API 응답 데이터**
3. **사용자 입력값**
4. **설정 객체의 속성들**
5. **콜백 함수들**

**어떻게 체크할까?**

1. **typeof** 연산자로 기본 타입 체크
2. **Array.isArray()** 로 배열 체크
3. **instanceof** 로 객체 인스턴스 체크
4. **삼항연산자**로 기본값 설정
5. **try-catch**로 예외 처리

---

## 🎯 마무리

JavaScript에서 매개변수 타입 체크는 **버그 방지**와 **안정성 확보**의 핵심입니다.

**기억할 점:**

1. JavaScript는 동적 타입 언어라 런타임 에러가 발생하기 쉽습니다
2. `typeof` 연산자로 간단하게 타입을 체크할 수 있습니다
3. 기본값 설정과 타입 체크를 조합하면 안전한 함수를 만들 수 있습니다
4. 에러 상황을 명시적으로 처리하면 디버깅이 쉬워집니다

이제 더 안전하고 견고한 JavaScript 코드를 작성할 수 있을 것입니다! 🛡️

---

> 💡 **참고**: 이 글은 실제 코드 작성 과정에서 겪은 타입 관련 오류들을 분석하고 해결책을 정리한 내용입니다. JavaScript 개발 시 참고하시어 더 안전한 코드를 작성하시기 바랍니다!
