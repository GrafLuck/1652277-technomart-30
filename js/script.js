const contactsLink = document.querySelector(".contacts-link");
const modalFeedback = document.querySelector(".modal-feedback");
const modalClose = modalFeedback.querySelector(".modal-close");
const feedbackForm = modalFeedback.querySelector(".feedback-form");
const feedbackNameInput = modalFeedback.querySelector(".feedback-name-input");
const feedbackEmailInput = modalFeedback.querySelector(".feedback-email-input");
const feedbackTextInput = modalFeedback.querySelector(".feedback-text-input");
const directionControlPrevious = document.querySelector(".direction-control-previous");
const directionControlNext = document.querySelector(".direction-control-next");
const promoSlides = document.querySelectorAll(".promo-slides-item");
const positionControlButton = document.querySelectorAll(".position-control-button");
const servicesControlButton = document.querySelectorAll(".services-control-button");
const servicesSlides = document.querySelectorAll(".services-slides-item");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// Скрипты для открытия и закрытия модального окна обратной связи

contactsLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add("modal-show");

  feedbackNameInput.focus();

  if (storageName) {
    feedbackNameInput.value = storageName;
    feedbackEmailInput.focus();
  }
  
  if (storageEmail) {
    feedbackEmailInput.value = storageEmail;
    feedbackTextInput.focus();
  }
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show");
  modalFeedback.classList.remove("modal-error");
});

// Скрипт для отправки формы модального окна обратной связи

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackNameInput.value || !feedbackEmailInput.value || !feedbackTextInput.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackNameInput.value);
      localStorage.setItem("email", feedbackEmailInput.value);
    }
  }
});

// Скрипт для закрытия модального окна обратной связи с клавиатуры по ESC

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});

// Оживление слайдера в блоке Промо

directionControlPrevious.addEventListener("click", function(evt) {
  for (let i = 0; i < promoSlides.length; ++i) {
    let slidesItem = promoSlides[i]; 
    if (slidesItem.classList.contains("current-slide")){
      slidesItem.classList.remove("current-slide");
      positionControlButton[i].classList.remove("control-current-button");
      if (i === 0) {
        promoSlides[promoSlides.length - 1].classList.add("current-slide");
        positionControlButton[positionControlButton.length - 1].classList.add("control-current-button");
      } else {
        promoSlides[i - 1].classList.add("current-slide");
        positionControlButton[i - 1].classList.add("control-current-button");
      }
      break;
    }
  }
});

directionControlNext.addEventListener("click", function(evt) {
  for (let i = 0; i < promoSlides.length; ++i) {
    let slidesItem = promoSlides[i]; 
    if (slidesItem.classList.contains("current-slide")){
      slidesItem.classList.remove("current-slide");
      positionControlButton[i].classList.remove("control-current-button");
      if (i === (promoSlides.length - 1)) {
        promoSlides[0].classList.add("current-slide");
        positionControlButton[0].classList.add("control-current-button");
      } else {
        promoSlides[i + 1].classList.add("current-slide");
        positionControlButton[i + 1].classList.add("control-current-button");
      }
      break;
    }
  }
});

for (let i = 0; i < positionControlButton.length; ++i) {
  positionControlButton[i].addEventListener ("click", function(evt) {
    if (!positionControlButton[i].classList.contains("control-current-button")) {
      for (let j = 0; j < promoSlides.length; ++j) {
        let slidesItem = promoSlides[j]; 
        if (slidesItem.classList.contains("current-slide")){
          slidesItem.classList.remove("current-slide");
          positionControlButton[j].classList.remove("control-current-button");
        }
      }
      promoSlides[i].classList.add("current-slide");
      positionControlButton[i].classList.add("control-current-button");
    }
  });
}

// Оживление слайдера в блоке Сервисы

for (let i = 0; i < servicesControlButton.length; ++i) {
  servicesControlButton[i].addEventListener ("click", function(evt) {
    if (!servicesControlButton[i].classList.contains("active-control-button")) {
      for (let j = 0; j < servicesSlides.length; ++j) {
        let slidesItem = servicesSlides[j]; 
        if (slidesItem.classList.contains("services-slides-current")){
          slidesItem.classList.remove("services-slides-current");
          servicesControlButton[j].classList.remove("active-control-button");
        }
      }
      servicesSlides[i].classList.add("services-slides-current");
      servicesControlButton[i].classList.add("active-control-button");
    }
  });
}


