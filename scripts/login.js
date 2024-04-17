const modal = document.getElementById("modal");
const user = document.getElementById("user");

// Открытие модального окна при клике на элемент
user.addEventListener("click", function (event) {
  modal.style.display = "block";
  event.stopPropagation(); // Предотвращение дальнейшего распространения события
});

// Закрытие модального окна при клике на кнопку закрытия
const closeModalBtn = document.querySelector(".close");
closeModalBtn.addEventListener("click", function (event) {
  modal.style.display = "none";
  resetForm(); // Обнуляем содержимое формы при закрытии
  event.stopPropagation(); // Предотвращение дальнейшего распространения события
});

// Закрытие модального окна при клике вне modal-content
window.addEventListener("click", function (event) {
  console.log("1111111111111111111111111111111111111");
  // Проверяем, что цель клика находится внутри модального окна, но не внутри modal-content
  if (
    event.target.closest(".modal") &&
    !event.target.closest(".modal-content")
  ) {
    modal.style.display = "none";
    resetForm(); // Обнуляем содержимое формы при закрытии
  }
});

// Скрытие/раскрытие пароля
const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

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

// Проверка почты
const emailInput = document.getElementById("e-mail");
const errorMessage = document.querySelector(".error-message");

emailInput.addEventListener("blur", function () {
  if (!isValidEmail(emailInput.value)) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Проверка ввода перед отправкой формы
const loginButton = document.querySelector(".login-button");
loginButton.addEventListener("click", function (event) {
  if (!isValidEmail(emailInput.value)) {
    errorMessage.style.display = "block";
    event.preventDefault(); // Отменяем отправку формы
  } else {
    errorMessage.style.display = "none";
  }
});

// Функция для обнуления содержимого формы
function resetForm() {
  emailInput.value = "";
  passwordInput.value = "";
  errorMessage.style.display = "none";
  setTimeout(function () {
    passwordInput.type = "password";
    togglePasswordButton.innerHTML =
      '<i class="fa fa-eye" style="font-size: 20px"></i>';
  }, 100);
}
