const form = document.querySelector('.form'),
    username = form.querySelector('.username'),
    username_v = username.querySelector('.username_v'),
    email = form.querySelector('.email'),
    email_v = email.querySelector('.email_v'),
    password = form.querySelector('.password'),
    password_v = password.querySelector('.password_v'),
    confirm_password = form.querySelector('.confirm_password'),
    confirm_password_v = confirm_password.querySelector('.confirm_password_v'),
    age = form.querySelector('.age'),
    age_v = age.querySelector('.age_v');

function isUsername() {

    const usernamePattern = /^[A-Za-z]{3,16}$/;
    if (!username_v.value.match(usernamePattern)) {
        username.classList.add('no_valid');
    } else {
        username.classList.remove('no_valid');
    }
}

function isEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email_v.value.match(emailPattern)) {
        email.classList.add('no_valid');
    } else {
        email.classList.remove('no_valid');
    }
}

function createPassword() {
    const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!password_v.value.match(passPattern)) {
        password.classList.add('no_valid');
    } else {
        password.classList.remove('no_valid');
    }
}

function confirmPassword() {
    if (password_v.value !== confirm_password_v.value || confirm_password_v.value === '') {
        confirm_password.classList.add('no_valid');
    } else {
        confirm_password.classList.remove('invalid');
    }
}

function isAge() {
    if (age_v.value === '') {
        return age.classList.add('no_valid');
    }
    let dateVars = age_v.value.toString().split('-');
    let isValid = isDate18orMoreYearsOld(dateVars);

    if (isValid) {
        age.classList.remove('no_valid');
    } else {
        age.classList.add('no_valid');
    }
}

function isDate18orMoreYearsOld(dateVars) {
    return new Date(Number(dateVars[0])+18, Number(dateVars[1])-1, Number(dateVars[2])) <= new Date();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isUsername();
    isEmail();
    createPassword();
    confirmPassword();
    isAge();
    username_v.addEventListener('keyup', isUsername)
    email_v.addEventListener('keyup', isEmail);
    password_v.addEventListener('keyup', createPassword);
    confirm_password_v.addEventListener('keyup', confirmPassword);
    age_v.addEventListener('keyup', isAge);
});
