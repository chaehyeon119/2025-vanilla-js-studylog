const changePage = (page) => {
  let $content = document.getElementById("content");
  $content.textContent = `현재 보고 있는 페이지는 ${page}입니다.`;
  // pushState: 현재 페이지를 스택에 추가(state, title, url)
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
};
// popstate: 스택에서 페이지를 제거(state*반드시 객체여야 함*, title*현재는 무시됨*, url)
window.addEventListener("popstate", (event) => {
  if (event.state) {
    let $content = document.getElementById("content");
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page}입니다.`;
  }
});

document.getElementById("page1").addEventListener("click", () => {
  changePage("page1");
});

document.getElementById("page2").addEventListener("click", () => {
  changePage("page2");
});

document.getElementById("page3").addEventListener("click", () => {
  changePage("page3");
});

const goBack = () => {
  history.back();
};

const goForward = () => {
  history.forward();
};

document.getElementById("goBack").addEventListener("click", goBack);
document.getElementById("goForward").addEventListener("click", goForward);
