export default class MiniAlert {
  static fire({ title, message, closeBackdrop = true, onClose }) {
    // close를 메서드로 따로 분리했을 경우, close 메서드에서 접근할 수 있도록 속성으로 설정
    // this.closeBackdrop = closeBackdrop;
    // this.onClose = onClose;

    // <style>을 스크립트로 붙이기
    // #mini-alert-style 요소가 없을 때만 스타일 붙이기
    if (!document.getElementById('mini-alert-style')) {
      const style = document.createElement('style');
      style.id = 'mini-alert-style';
      style.textContent = `
        .mini-alert-backdrop {
          display: flex; justify-content: center; align-items: center;
          position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 1000;
          background: rgba(0, 0, 0, 0.4);
        }

        .mini-alert {
          min-width: 200px; max-width: 500px;
          padding: 2rem;
          border-radius: 8px;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.2) 15px 15px 0;
        }
      `;
      document.head.append(style);
    }

    // DOM 구조 만들기
    // this.backdrop = document.createElement('div');
    // const backdrop = this.backdrop;
    const backdrop = document.createElement('div');
    backdrop.classList.add('mini-alert-backdrop');

    const modal = document.createElement('div');
    modal.classList.add('mini-alert');
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
    const closeBtn = modal.querySelector('.mini-alert-close-btn');
    closeBtn.addEventListener('click', () => {
      // this.close();
      close(closeBtn);
      // backdrop.remove();
      // if(onClose) onClose();
    });

    backdrop.addEventListener('click', () => {
      // if (this.closeBackdrop) {
      if (closeBackdrop) {
        // this.close(backdrop);
        close();
      }
      // if (closeBackdrop) {
        // backdrop.remove();
        // if(onClose) onClose();
      // }
    });

    modal.addEventListener('click', e => {
      e.stopPropagation();
    });

    function close(target) {
      backdrop.remove();

      if (
        target === closeBtn
        && typeof onClose === 'function'
      ) {
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

window.MiniAlert = MiniAlert; // 전역 공간에 공개