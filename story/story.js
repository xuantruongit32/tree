const allStories = [
  {
    id: 0,
    name: "CBR",
    Url: "img/cbr.jpg",
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
    name: "Thai Pham",
    Url: "img/thaipham.jpg",
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

  function updateSelectedStory(index) {
    const story = allStories[index];
    const mediaElement = selectedStory.querySelector("video");
    const imgElement = selectedStory.querySelector("img");

    if (story.type === "video") {
      mediaElement.style.display = "block";
      imgElement.style.display = "none";
      mediaElement.src = story.Url;
      mediaElement.play();
    } else {
      mediaElement.style.display = "none";
      imgElement.style.display = "block";
      imgElement.src = story.Url;
      mediaElement.pause();
    }

    selectedStory.querySelector(".name").textContent = story.name;
    if (index > 0) {
      list.scrollBy({
        left: 120,
        behavior: "smooth",
      });
    }
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

storyScroll();
storyClick();
