const modalAddCart = document.querySelector(".modal-add-cart");
const goodsBtnBuy = document.querySelectorAll(".goods-btn-buy");
const modalAddCartClose = modalAddCart.querySelector(".modal-close");

// Скрипты для открытия и закрытия модального окна Добавления товара на странице каталога

for (let i=0; i < goodsBtnBuy.length; ++i) {
  goodsBtnBuy[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modalAddCart.classList.add("modal-show");
  });
}

modalAddCartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalAddCart.classList.remove("modal-show");
});


// Скрипт для закрытия модального окна Добавления товара на странице каталога с клавиатуры по ESC

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (modalAddCart.classList.contains("modal-show")) {
    evt.preventDefault();
    modalAddCart.classList.remove("modal-show");
  }
}
});
