const allStories = [
    {
        id : 0,
        name : 'CBR',
        imgUrl : 'img/cbr.jpg',
        type: 'image',
    },
    {
        id : 1,
        name : 'Cong Minh',
        imgUrl : 'img/congminh.jpg',
        type: 'image',
    },
    {
        id : 2,
        name : 'Hoang Yen',
        imgUrl : 'img/hoangyenchibi.jpg',
        type: 'image',
    },
    {
        id : 3,
        name : 'Incidental Comics',
        imgUrl : 'img/incidentalcomics.jpg',
        type: 'image',
    },
    {
        id : 4,
        name : 'Spiderum',
        imgUrl : 'img/spiderum.jpg',
        type: 'image',
    },
    {
        id : 5,
        name : 'Thai Pham',
        imgUrl : 'img/thaipham.jpg',
        type: 'image',
    },
    {
        id : 6,
        name : 'Huong Mysheo',
        imgUrl : 'img/huongmysheo.jpg',
        type: 'image',
    },
    {
        id : 7,
        name : 'Ngoc Mai',
        imgUrl : 'img/vungocmai.jpg',
        type: 'image',
    },
    {
        id : 8,
        name : 'World Beauties',
        imgUrl : 'img/worldbeautiesandwonder.jpg',
        type: 'image',
    },
    {
        id : 9,
        name : 'My Haylok',
        imgUrl : 'img/myhaylok.mp4',
        type: 'video',
    },
]
function storyClick() {
    const stories = document.querySelectorAll('.container .list .story');
    const selectedStory = document.querySelector('.full .storyF');
  
    let selectedIndex = 0; 
  
    function updateSelectedStory(index) {
      const story = allStories[index];
      const mediaElement = selectedStory.querySelector('video');
      const imgElement = selectedStory.querySelector('img');
    
      if (story.type === 'video') {
        mediaElement.style.display = 'block';
        imgElement.style.display = 'none';
        mediaElement.src = story.imgUrl;
        mediaElement.load();
      } else {
        mediaElement.style.display = 'none';
        imgElement.style.display = 'block';
        imgElement.src = story.imgUrl;
        mediaElement.pause();
      }
    
      selectedStory.querySelector('.name').textContent = story.name;
    }
    
  
    updateSelectedStory(selectedIndex);
  
    stories.forEach((story, index) => {
      story.addEventListener('click', () => {
        updateSelectedStory(index);
        selectedIndex = index; 
      });
    });
  
    document.querySelector('.full .leftArrow').addEventListener('click', () => {
      if (selectedIndex > 0) {
        selectedIndex--;
        updateSelectedStory(selectedIndex);
      }
    });
  
    document.querySelector('.full .rightArrow').addEventListener('click', () => {
      if (selectedIndex < allStories.length - 1) {
        selectedIndex++;
        updateSelectedStory(selectedIndex);
      }
    });
  }
  function storyScroll() {
    const list = document.querySelector('.container .content');
    const i = 120; 
  
    document.querySelector('.container .content .leftArrow').addEventListener('click', () => {
      list.scrollBy({
        left: -i,
        behavior: 'smooth', 
      });
    });
  
    document.querySelector('.container .content .rightArrow').addEventListener('click', () => {
      list.scrollBy({
        left: i,
        behavior: 'smooth', 
      });
    });
  }
  
  storyScroll();
  storyClick();
  

  