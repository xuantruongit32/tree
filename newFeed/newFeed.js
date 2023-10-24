const tree = document.querySelectorAll('  .body .newFeed .item .contact .emotion svg' )
const emotion=document.querySelectorAll('.body .newFeed .item .contact .emotion')
const home = document.querySelector('.header .main .home')
const friend=document.querySelector('.header .main .friend')
const market = document.querySelector('.header .main .market')
const story= document.querySelector('.header .main .story')
const personal=document.querySelector('.header .right .avatar')
const feel = ()=>{
    tree.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            emotion[index].innerHTML=`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Transformed by: SVG Repo Mixer Tools -->
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000">
            
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            
            <g id="SVGRepo_iconCarrier"> <g> <path fill="#394240" d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z M32,44c-6.617,0-12-5.383-12-12c0-8.812,5.93-24,12-24 c6.566,0,12,15.891,12,24C44,38.617,38.617,44,32,44z"/> <path fill="#08c177" d="M32,44c-6.617,0-12-5.383-12-12c0-8.812,5.93-24,12-24c6.566,0,12,15.891,12,24C44,38.617,38.617,44,32,44z "/> </g> </g>
            
            </svg>
            <p>Thích</p>
            `
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
        window.location.href='../pe   rsonalPage/personPage.html'
    })
}
feel()
changePage()