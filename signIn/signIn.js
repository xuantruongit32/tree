localStorage.setItem('email', '1@gmail.com');
localStorage.setItem('password', '123456');

const login = document.querySelector('.btn'); 
const email = document.querySelector('input[type="email"]'); 
const password = document.querySelector('input[type="password"]'); 

login.addEventListener('click', (e) => {
    e.preventDefault();

    if (email.value == localStorage.getItem('email') && password.value == localStorage.getItem('password')) {
        document.location.href = '../newFeed/newfeed.html'; 
    } else {
        alert('Login Fail'); 
        email.value ='';
        password.value = '';
    }
});
const togglePasswordVisibility = () => {
    const passwordInput = document.querySelector('input[type="password"]');
    const lockClosedIcon = document.querySelector('ion-icon[name="lock-closed"]');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      lockClosedIcon.setAttribute('name', 'lock-open'); 
    } 
    
  };
  
  const lockClosedIcon = document.querySelector('ion-icon[name="lock-closed"]');
  lockClosedIcon.addEventListener('click', togglePasswordVisibility);
  
