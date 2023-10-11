const allStories = [
    {
        id : 0,
        name : 'CBR',
        imgUrl : 'img/cbr.jpg',
    },
    {
        id : 1,
        name : 'Cong Minh',
        imgUrl : 'img/congminh.jpg',
    },
    {
        id : 2,
        name : 'Hoang Yen',
        imgUrl : 'img/hoangyenchibi.jpg',
    },
    {
        id : 3,
        name : 'Incidental Comics',
        imgUrl : 'img/incidentalcomics.jpg',
    },
    {
        id : 4,
        name : 'Spiderum',
        imgUrl : 'img/spiderum.jpg',
    },
    {
        id : 5,
        name : 'Thai Pham',
        imgUrl : 'img/thaipham.jpg',
    },
    {
        id : 6,
        name : 'Ngoc Mai',
        imgUrl : 'img/vungocmai.jpg',
    },
    {
        id : 7,
        name : 'World Beauties',
        imgUrl : 'img/worldbeautiesandwonder.jpg',
    },
]
function storyClick() {
    const stories = document.querySelectorAll('.container .list .story');
    const selectedStory = document.querySelector('.full .storyF');
  
    let selectedIndex = 0; 
  
    function updateSelectedStory(index) {
      const story = allStories[index];
      selectedStory.querySelector('img').src = story.imgUrl;
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
  
  storyClick();
  

  