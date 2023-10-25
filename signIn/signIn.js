localStorage.setItem('email','nguyenvanquangq013@gmail.com')
localStorage.setItem('password','123456')


const login = document.querySelector('.submit')
const email= document.querySelector('.email')
const password=document.querySelector('.password')
console.log(login);

login.addEventListener('click',(e)=>{
    e.preventDefault()
    
    console.log(email.value==localStorage.getItem('email'));
    if (email.value==localStorage.getItem('email')&&password.value==localStorage.getItem('password')){
        alert('dang nhap thanh cong')
        document.location.href='../newFeed/newfeed.html'
    }
    else{
        alert('dang nhap that bai')
    }
})