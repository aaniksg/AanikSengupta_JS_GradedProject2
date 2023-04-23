let user;
let password;

document.querySelector('#username').addEventListener('input', function () {
    localStorage.setItem('user', this.value);
    user = this.value;
});

document.querySelector('#password').addEventListener('input', function () {
    localStorage.setItem('password', this.value);
    password = this.value;
});

document.querySelector('button').addEventListener('click', () => {

    if (user === 'admin' && password == 'admin') {
        location.replace('resume.html');
    } else {
        alert('Username / Password is Incorrect');
        location.reload();
    }
});