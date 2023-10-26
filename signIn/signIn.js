localStorage.setItem('email', 'nguyenvanquangq014@gmail.com');
localStorage.setItem('password', '123456');

const login = document.querySelector('.btn'); 
const email = document.querySelector('input[type="email"]'); 
const password = document.querySelector('input[type="password"]'); 

login.addEventListener('click', (e) => {
    e.preventDefault();

    if (email.value == localStorage.getItem('email') && password.value == localStorage.getItem('password')) {
        alert('Đăng nhập thành công'); 
        document.location.href = '../newFeed/newfeed.html'; 
    } else {
        alert('Đăng nhập thất bại'); 
    }
});
