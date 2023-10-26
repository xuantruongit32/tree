const tree = document.querySelectorAll('   .newFeed .item .contact .inner .yetlike' )
const emotion=document.querySelectorAll('.body .newFeed .item .contact .emotion')
const home = document.querySelector('.header .main .home')
const friend=document.querySelector('.header .main .friend')
const market = document.querySelector('.header .main .market')
const story= document.querySelector('.header .main .story')
const personal=document.querySelector('.header .right .avatar')
const logout=document.querySelector('.logout')
const liked=document.querySelectorAll(' .newFeed .item .contact .inner .liked')
const textEmotion=document.querySelectorAll('.newFeed .item .member-like')
console.log(liked);
const feel = ()=>{
    
    tree.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            let text= textEmotion[index].innerHTML
           item.classList.add('none')
           liked[index].classList.remove('none')
           textEmotion[index].innerHTML=`You and ${text}`
        })
    
    })
    liked.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            let text =textEmotion[index].innerHTML.split('You and')
           item.classList.add('none')
           tree[index].classList.remove('none')
           textEmotion[index].innerHTML=text[1]
        })
    
    })
}
const changePage = ()=>{
    home.addEventListener('click',()=>{
        window.location.href='../newFeed/newfeed.html'
    })
    friend.addEventListener('click',()=>{
        window.location.href='../friendList/friendList.html'
    })
    market.addEventListener('click',()=>{
        document.location.href='../marrket/market.html'
    })
    story.addEventListener('click',()=>{
        window.location.href='../story/story.html'
    })
  
    personal.addEventListener('click',()=>{
        window.location.href='../personalPage/personalPage.html'
    })
    logout.addEventListener('click',()=>{
        window.location.href='../signIn/login.html'
    })
}
changePage()
// unlike()
 
    feel()
   


