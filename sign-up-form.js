const user_phone_number = document.getElementById('user_phone_number');

//automatically format phone number as it is inputed
user_phone_number.addEventListener('input', (event) => {
  let phone_number = event.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  event.target.value = !phone_number[2] ? phone_number[1] : '(' + phone_number[1] + ') ' + phone_number[2] + (phone_number[3] ? '-' + phone_number[3] : '');
});

const user_password = document.getElementById('user_password');

const confirm_user_password = document.getElementById('confirm_user_password');

const password_match_alert = document.getElementById('password_match_alert');

//check if passwords match at each input
confirm_user_password.addEventListener('input', () => {
  if (user_password.value != confirm_user_password.value) {
    password_match_alert.textContent = "*Your passwords do not match";
  } else {
    password_match_alert.textContent = '';
  }
})