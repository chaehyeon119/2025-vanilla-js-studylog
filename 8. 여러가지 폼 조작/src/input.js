const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

$userName.value = "홍길동";

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
