let username = document.getElementById('username');
let button = document.getElementById('change');
currentUser();

function setName() {
    let name = prompt('Enter your name'); // promot ให้ผู้ใช้งานกรอกชื่อ
    if (name == null || name == '') { // ถ้าขื่อเป็น null หรือเป็นช่องว่าง 
        localStorage.removeItem('username'); //จะให้ local เก็บเป็นคำว่า username
        button.innerHTML = 'Login'; // เป็นปุ่มคำว่า Login
    } else {
        localStorage.setItem('username', name); // name ที่ใส่เข้ามา
        username.innerHTML = name;
        button.innerHTML = 'Logout'; // เปลี่ยนเป็นจาก Login เป็น Logout
    }
}

button.addEventListener('click', () => {
    if ((button.innerHTML == 'Logout')) {
        button.innerHTML = 'Login'; // change -> login
        localStorage.removeItem('username'); // เก็บใน Local ว่า username
        username.innerHTML = 'Guest' // เป็นคำว่า Guest
    } else {
        button.innerHTML == 'Logout';
        setName();
    }
})

function currentUser() {
    if (localStorage.getItem('username') == null || localStorage.getItem('username') == 'null') {
        username.innerHTML = 'Guest'
        button.innerHTML = 'Login';
    } else {
        username.innerHTML = localStorage.getItem('username');
        button.innerHTML = 'Logout';
    }
}