export default class MiniAlert {
  static fire({ title, message, closeBackdrop = true, onClose }) {
    // this.title = title;
    // this.message = message;
    this.closeBackdrop = closeBackdrop;
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
      // this.close();
      close();
      // backdrop.remove();
      // if(onClose) onClose();
    });

    backdrop.addEventListener("click", () => {
      if (this.closeBackdrop) {
        // this.close(backdrop);
        close(backdrop);
      }
      // if (closeBackdrop) {
      // backdrop.remove();
      // if(onClose) onClose();
      // }
    });

    modal.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    function close(target) {
      backdrop.remove();

      if (target !== backdrop && typeof onClose === "function") {
        onClose();
      }
    }
  }

  // close(target) {
  //   this.backdrop.remove();

  //   if (
  //     target !== this.backdrop
  //     && typeof this.onClose === 'function'
  //   ) {
  //     this.onClose();
  //   }
  // }
}
