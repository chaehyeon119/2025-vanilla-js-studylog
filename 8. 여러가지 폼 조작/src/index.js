const $fruitSelect = document.getElementById("fruitSelect");

$fruitSelect.addEventListener("change", (event) => {
  console.log(event.target.value);
});
