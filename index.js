// const btn = document.querySelector(".form__shape");
const email = document.querySelector(".form__email");
// const form = document.querySelector(".form");
// console.log(form);

const regEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

const validate = (e) => {
  if (!regEx.test(email.value)) {
    e.target.parentElement.classList.add("error");
  } else {
    e.target.parentElement.classList.remove("error");
  }
};

email.addEventListener("keyup", validate);
