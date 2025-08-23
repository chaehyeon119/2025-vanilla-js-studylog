export default class MiniAlert {
  constructor({ title, message, closeBackdrop = true, onClose }) {
    // 이 얼럿은 배경 클릭으로 닫힐 수 있는가?
    this.closeBackdrop = closeBackdrop;
    // 이 얼럿이 닫힐 때 실행될 함수는 뭔가?
    this.onClose = onClose;

    // DOM 구조 만들기
    this.backdrop = document.createElement("div");
    const backdrop = this.backdrop;
    backdrop.classList.add("mini-alert-backdrop");

    const modal = document.createElement("div");
    modal.classList.add("mini-alert");
    modal.innerHTML = `
      <div class="mini-alert-content">
        <h2 class="mini-alert-title">${title}</h2>
        <p class="mini-alert-message">${message}</p>
        <button class="mini-alert-close-btn">확인</button>
      </div>
    `;

    backdrop.append(modal);
    document.body.append(backdrop);

    // Event
    const closeBtn = modal.querySelector(".mini-alert-close-btn");
    closeBtn.addEventListener("click", () => {
      close();
    });

    // 배경 클릭으로 닫힐 수 있는가?(false일 경우 닫히지 않음)
    backdrop.addEventListener("click", () => {
      if (this.closeBackdrop) {
        close(backdrop);
      }
    });

    // 모달 영역 클릭 시 배경 클릭으로 닫히지 않게 함(이벤트 버블링 방지)
    modal.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    function close(target) {
      backdrop.remove();
      // 타입체크의 목적
      // 1. 개발자 실수 방지: 함수가 아닌 값을 넘겨도 에러 안 남
      // 2. 안전한 라이브러리: 어떤 값이 와도 프로그램이 멈추지 않음
      // 3. 사용자 경험: 브라우저에서 에러로 인한 화면 멈춤 방지
      if (target !== backdrop && typeof onClose === "function") {
        onClose();
      }
    }
  }
}
