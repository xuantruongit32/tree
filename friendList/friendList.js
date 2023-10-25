const friendsData = [
  {
    name: "Phuong Linh",
    mutualFriends: 32,
    imageSrc: "img/nguyenthikimloan.jpg",
  },
  {
    name: "Hien Nguyen",
    mutualFriends: 26,
    imageSrc: "img/hiennguyen.jpg",
  },
  {
    name: "Hoang Trang",
    mutualFriends: 27,
    imageSrc: "img/hoangtrang.jpg",
  },
  {
    name: "Duong Hung",
    mutualFriends: 16,
    imageSrc: "img/duonghung.jpg",
  },
  {
    name: "Nguyen Van Quang",
    mutualFriends: 16,
    imageSrc: "img/nguyenvanquang.jpg",
  },
  {
    name: "Nguyen Van Thanh",
    mutualFriends: 18,
    imageSrc: "img/nguyenvanthanh.jpg",
  },
  {
    name: "Thien Thanh",
    mutualFriends: 20,
    imageSrc: "img/thienthanh.jpg",
  },
  {
    name: "Tran Cong Minh",
    mutualFriends: 21,
    imageSrc: "img/trancongminh.jpg",
  },
  {
    name: "Vu Huy Hoang",
    mutualFriends: 18,
    imageSrc: "img/vuhuyhoang.jpg",
  },
  {
    name: "Vu Ngoc Mai",
    mutualFriends: 12,
    imageSrc: "img/vungocmai.jpg",
  },
  {
    name: "Duong Dang Khoi",
    mutualFriends: 1,
    imageSrc: "img/duongdangkhoi.jpg",
  },
  {
    name: "Ha Duong",
    mutualFriends: 19,
    imageSrc: "img/haduong.jpg",
  },
  {
    name: "Hoan Tu",
    mutualFriends: 10,
    imageSrc: "img/hoantu.jpg",
  },
  {
    name: "Kieu Diep Trang",
    mutualFriends: 13,
    imageSrc: "img/kieudieptrang.jpg",
  },
  {
    name: "Le Luyen",
    mutualFriends: 2,
    imageSrc: "img/leluyen.jpg",
  },
  {
    name: "Thom Duong",
    mutualFriends: 31,
    imageSrc: "img/thomduong.jpg",
  },
  {
    name: "Thu Trang",
    mutualFriends: 5,
    imageSrc: "img/thutrang.jpg",
  },
  {
    name: "Thanh Hien",
    mutualFriends: 16,
    imageSrc: "img/thuhien.jpg",
  },
];

function createFriend(name, mutualFriends, imageSrc, friendRank) {
  const listItem = document.createElement("div");
  listItem.classList.add("list");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("img");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.alt = name;

  imageDiv.appendChild(image);

  const info = document.createElement("div");
  info.classList.add("infor");

  const rank = document.createElement("h2");
  rank.classList.add("rank");
  rank.innerHTML = `<small>#${friendRank}</small>`;

  const friendName = document.createElement("h4");
  friendName.textContent = name;

  const mutualFriendsPara = document.createElement("p");
  mutualFriendsPara.textContent = `Mutual Friends: ${mutualFriends}`;

  info.appendChild(rank);
  info.appendChild(friendName);
  info.appendChild(mutualFriendsPara);

  listItem.appendChild(imageDiv);
  listItem.appendChild(info);

  return listItem;
}

friendsData.sort((a, b) => b.mutualFriends - a.mutualFriends);
const box = document.querySelector(".box");

friendsData.forEach((friend, index) => {
  const listItem = createFriend(friend.name, friend.mutualFriends, friend.imageSrc, index + 1);
  box.appendChild(listItem);
});


const listFriend = document.querySelectorAll(".list");
const mutualFriend = document.querySelectorAll(".list p");
const friendsListHeading = document.getElementById("friendsList");

for (let i = 0; i < listFriend.length; i++) {
  listFriend[i].addEventListener("mousemove", () => {
    mutualFriend[i].style.visibility = "visible";
  });
  listFriend[i].addEventListener("mouseleave", () => {
    mutualFriend[i].style.visibility = "hidden";
  });
}
friendsListHeading.textContent = `Friends List (${listFriend.length})`;

const home = document.querySelector(' .header .main .home');
const friend=document.querySelector(' .header .main .friend');
const market = document.querySelector(' .header .main .market');
const story= document.querySelector(' .header .main .story');
const personal=document.querySelector('.header .right .avatar');

const changePage = ()=>{
    home.addEventListener('click',()=>{
        document.location.href='../newFeed/newfeed.html'
    });
    friend.addEventListener('click',()=>{
        document.location.href='../friendList/friendList.html'
    });
     market.addEventListener('click',()=>{
         document.location.href='../marrket/market.html'
     })
    story.addEventListener('click',()=>{
        document.location.href='../story/story.html'
    });
  
    personal.addEventListener('click',()=>{
        document.location.href='../personalPage/personPage.html'
    });
}
changePage();
