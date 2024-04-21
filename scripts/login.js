const modal = document.getElementById("modal");
const user = document.getElementById("user");
const emailInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const emailErrorMessage = document.getElementById("email-error-message");
const passwordErrorMessage = document.getElementById("password-error-message");
const loginButton = document.querySelector(".login-button");
const togglePasswordButton = document.getElementById("togglePassword");
const closeModalBtn = document.querySelector(".close");

// Открытие модального окна при клике на элемент
user.addEventListener("click", function (event) {
  modal.style.display = "block";
  event.stopPropagation(); // Предотвращение дальнейшего распространения события
});

// Закрытие модального окна при клике на кнопку закрытия
closeModalBtn.addEventListener("click", function (event) {
  modal.style.display = "none";
  resetForm(); // Обнуляем содержимое формы при закрытии
  event.stopPropagation(); // Предотвращение дальнейшего распространения события
});

// Закрытие модального окна при клике вне modal-content
modal.addEventListener("click", function (event) {
  if (
    event.target.closest(".modal") &&
    !event.target.closest(".modal-content")
  ) {
    modal.style.display = "none";
    resetForm(); // Обнуляем содержимое формы при закрытии
    event.stopPropagation(); // Предотвращение дальнейшего распространения события
  }
});

function toLowercase(input) {
  input.value = input.value.toLowerCase();
}

// Скрытие/раскрытие пароля
togglePasswordButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.innerHTML =
      '<i class="fa fa-eye-slash" style="font-size: 20px"></i>';
  } else {
    passwordInput.type = "password";
    togglePasswordButton.innerHTML =
      '<i class="fa fa-eye" style="font-size: 20px"></i>';
  }
});

const emailRegex = /^[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?@[a-z]+\.[a-z]{2,}$/;
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}:;<>,\.?\-].{7,}$/;

function checkInputs() {
  if (!emailRegex.test(emailInput.value)) {
    emailErrorMessage.style.display = "block";
  } else {
    emailErrorMessage.style.display = "none";
  }
  if (!passwordRegex.test(passwordInput.value)) {
    passwordErrorMessage.style.display = "block";
  } else {
    passwordErrorMessage.style.display = "none";
  }
  if (
    emailRegex.test(emailInput.value) &&
    passwordRegex.test(passwordInput.value)
  ) {
    loginButton.classList.add("active");
    loginButton.disabled = false;
  } else {
    loginButton.classList.remove("active");
    loginButton.disabled = true;
  }
}

// Проверка почты и пароля при изменении значения поля e-mail
emailInput.addEventListener("blur", function () {
  checkInputs();
});

// Проверка почты и пароля при изменении значения поля пароля
passwordInput.addEventListener("blur", function () {
  checkInputs();
});

// Функция для обнуления содержимого формы
function resetForm() {
  emailInput.value = "";
  passwordInput.value = "";
  emailErrorMessage.style.display = "none";
  passwordErrorMessage.style.display = "none";
  setTimeout(function () {
    passwordInput.type = "password";
    togglePasswordButton.innerHTML =
      '<i class="fa fa-eye" style="font-size: 20px"></i>';
    loginButton.classList.remove("active");
    loginButton.disabled = true;
  }, 100);
}
