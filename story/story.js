const allStories = [
  {
    id: 0,
    name: "Nguyen Huu Tri",
    Url: "img/nguyenhuutri.jpg",
    type: "image",
  },
  {
    id: 1,
    name: "Ehan Dayi",
    Url: "img/ehandayi.mp4",
    type: "video",
  },
  {
    id: 2,
    name: "Cong Minh",
    Url: "img/congminh.jpg",
    type: "image",
  },
  {
    id: 3,
    name: "Hoang Yen",
    Url: "img/hoangyenchibi.jpg",
    type: "image",
  },
  {
    id: 4,
    name: "Incidental Comics",
    Url: "img/incidentalcomics.jpg",
    type: "image",
  },
  {
    id: 5,
    name: "Spiderum",
    Url: "img/spiderum.jpg",
    type: "image",
  },
  {
    id: 6,
    name: "BigDawns TV",
    Url: "img/bigdawnstv.jpg",
    type: "image",
  },
  {
    id: 7,
    name: "Huong Mysheo",
    Url: "img/huongmysheo.jpg",
    type: "image",
  },
  {
    id: 8,
    name: "Ngoc Mai",
    Url: "img/vungocmai.jpg",
    type: "image",
  },
  {
    id: 9,
    name: "World Beauties",
    Url: "img/worldbeautiesandwonder.jpg",
    type: "image",
  },
  {
    id: 10,
    name: "My Haylok",
    Url: "img/myhaylok.mp4",
    type: "video",
  },
];
function storyClick() {
  const stories = document.querySelectorAll(".container .list .story");
  const selectedStory = document.querySelector(".full .storyF");
  const list = document.querySelector(".container .content");

  let selectedIndex = 0;
  let time;
  function updateSelectedStory(index) {
    const story = allStories[index];
    const video = selectedStory.querySelector("video");
    const img = selectedStory.querySelector("img");
  
    clearTimeout(time);
  
    if (story.type === "video") {
      video.style.display = "block";
      img.style.display = "none";
      video.src = story.Url;
      video.load(); 
  
      video.onloadedmetadata = function() {
        time = setTimeout(autoNextStory, (video.duration + 5) * 1000);
      };
  
      video.play();
    } else {
      video.style.display = "none";
      img.style.display = "block";
      img.src = story.Url;
  
      time = setTimeout(autoNextStory, 15000);
    }
  
    selectedStory.querySelector(".name").textContent = story.name;
    if (index > 0) {
      list.scrollBy({
        left: 120,
        behavior: "smooth",
      });
    }
  }
  

  function autoNextStory() {
    selectedIndex++;
    if (selectedIndex >= allStories.length) {
      selectedIndex = 0;
    }
    updateSelectedStory(selectedIndex);
  }

  updateSelectedStory(selectedIndex);

  stories.forEach((story, index) => {
    story.addEventListener("click", () => {
      updateSelectedStory(index);
      selectedIndex = index;
    });
  });

  document.querySelector(".full .leftArrow").addEventListener("click", () => {
    if (selectedIndex > 0) {
      selectedIndex--;
      updateSelectedStory(selectedIndex);
    } else {
      selectedIndex = allStories.length;
      updateSelectedStory(selectedIndex);
    }
  });

  document.querySelector(".full .rightArrow").addEventListener("click", () => {
    if (selectedIndex < allStories.length - 1) {
      selectedIndex++;
      updateSelectedStory(selectedIndex);
    } else {
      selectedIndex = 0;
      updateSelectedStory(selectedIndex);
    }
  });
}
function storyScroll() {
  const list = document.querySelector(".container .content");
  const i = 120;

  document
    .querySelector(".container .content .leftArrow")
    .addEventListener("click", () => {
      list.scrollBy({
        left: -i,
        behavior: "smooth",
      });
    });

  document
    .querySelector(".container .content .rightArrow")
    .addEventListener("click", () => {
      list.scrollBy({
        left: i,
        behavior: "smooth",
      });
    });
}
function startEmoji() {
  let emojiIntervalId = null;

  function emoji() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = '❤️';
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }

  document.querySelector('.emoji').addEventListener('click', function () {
    if (!emojiIntervalId) {
      emojiIntervalId = setInterval(emoji, 332);
      setTimeout(() => {
        clearInterval(emojiIntervalId);
        emojiIntervalId = null; 
        const hearts = document.querySelectorAll('.hearts');
        hearts.forEach(heart => heart.remove());
      }, 5000);
    }
  });
}

startEmoji();
storyScroll();
storyClick();
