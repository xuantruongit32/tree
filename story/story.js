const allStories = [
  {
    name: "Nguyen Huu Tri",
    imgSrc: "img/nguyenhuutri.jpg",
    vidSrc: "none"
  },
  {
    name: "Ehan Dayi",
    imgSrc: "img/ehandayi.jpg",
    vidSrc: "img/ehandayi.mp4",
  },
  {
    name: "Cong Minh",
    imgSrc: "img/congminh.jpg",
    vidSrc: "none",
  },
  {
    name: "Hoang Yen",
    imgSrc: "img/hoangyenchibi.jpg",
    vidSrc: "none",
  },
  {
    name: "Incidental Comics",
    imgSrc: "img/incidentalcomics.jpg",
    vidSrc: "none",
  },
  {
    name: "Spiderum",
    imgSrc: "img/spiderum.jpg",
    vidSrc: "none",
  },
  {
    name: "BigDawns TV",
    imgSrc: "img/bigdawnstv.jpg",
    vidSrc: "none",
  },
  {
    name: "Huong Mysheo",
    imgSrc: "img/huongmysheo.jpg",
    vidSrc: "none",
  },
  {
    name: "Ngoc Mai",
    imgSrc: "img/vungocmai.jpg",
    vidSrc: "none",
  },
  {
    name: "World Beauties",
    imgSrc: "img/worldbeautiesandwonder.jpg",
    vidSrc: "none",
  },
  {
    name: "My Haylok",
    imgSrc: "img/myhaylok.jpg",
    vidSrc: "img/myhaylok.mp4"
  },
];
function createStory(story) {
  const storyDiv = document.createElement('div');
  storyDiv.classList.add('story');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img');

  const imgElement = document.createElement('img');
  imgElement.src = story.imgSrc;
  imgElement.alt = story.name;

  const nameElement = document.createElement('div');
  nameElement.classList.add('name');
  nameElement.textContent = story.name;

  imgDiv.appendChild(imgElement);
  storyDiv.appendChild(imgDiv);
  storyDiv.appendChild(nameElement);

  return storyDiv;
}

function listStory() {
  const stories = document.getElementById('stories');
  allStories.forEach(story => {
      const storyElement = createStory(story);
      stories.appendChild(storyElement);
  });
}

function storyClick() {
  const stories = document.querySelectorAll(".container .list .story");
  const selectedStory = document.querySelector(".full .storyF");
  const list = document.querySelector(".container .content");

  let selectedIndex = 0;
  let time;
  let isPlaying = true;
  function updateSelectedStory(index) {
    const story = allStories[index];
    const video = selectedStory.querySelector("video");
    const img = selectedStory.querySelector("img");
  
    clearTimeout(time);
    if (story.vidSrc != "none") {
      video.style.display = "block";
      img.style.display = "none";
      video.src = story.vidSrc;
      video.load(); 
      video.onloadedmetadata = function() {
        time = setTimeout(autoNextStory, (video.duration + 5) * 1000);
      };
      video.play();
    } else {
      video.style.display = "none";
      img.style.display = "block";
      img.src = story.imgSrc;
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

  function tree() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = ` <svg
                version="1.0"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="45px"
                height="45px"
                viewBox="0 0 64 64"
                enable-background="new 0 0 64 64"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      fill="#394240"
                      d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z M32,44c-6.617,0-12-5.383-12-12c0-8.812,5.93-24,12-24 c6.566,0,12,15.891,12,24C44,38.617,38.617,44,32,44z"
                    />
                    <path
                      fill="#08c177"
                      d="M32,44c-6.617,0-12-5.383-12-12c0-8.812,5.93-24,12-24c6.566,0,12,15.891,12,24C44,38.617,38.617,44,32,44z "
                    />
                  </g>
                </g>
              </svg> `;  
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }
  function heart() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = `<svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.75 7C7.75 5.48967 8.1881 4.45301 8.8607 3.79247C9.5362 3.12908 10.545 2.75 11.8718 2.75C13.5394 2.75 14.7129 3.34422 15.3621 4.39436C15.5798 4.74669 16.042 4.85575 16.3944 4.63795C16.7467 4.42015 16.8557 3.95797 16.6379 3.60564C15.6448 1.99898 13.9089 1.25 11.8718 1.25C10.2634 1.25 8.83628 1.71407 7.80968 2.72225C6.78019 3.73328 6.25 5.19662 6.25 7V7.2892C4.36604 7.98746 3 9.87329 3 12.0992C3 15.9375 5.96837 18.1516 8.49565 20.0368C8.75832 20.2327 9.01624 20.4251 9.26556 20.6154C10.2 21.3285 11.1 22 12 22C12.9 22 13.8 21.3285 14.7344 20.6154C14.9838 20.4251 15.2417 20.2327 15.5044 20.0368C18.0316 18.1516 21 15.9375 21 12.0992C21 7.86196 16.0499 4.85701 12 8.93062C10.6105 7.53302 9.11513 6.96863 7.75 7.00134V7ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V14.5C12.75 14.9142 12.4142 15.25 12 15.25C11.5858 15.25 11.25 14.9142 11.25 14.5V12C11.25 11.5858 11.5858 11.25 12 11.25Z"
                    fill="#e01b24"
                  />
                </g>
              </svg>`;
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }
  function cold() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = `<svg
                height="45px"
                width="45px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.003 512.003"
                xml:space="preserve"
              >
                <circle
                  style="fill: #3fa9f5"
                  cx="256.001"
                  cy="256.001"
                  r="256.001"
                />
                <path
                  style="fill: #1e96ec"
                  d="M310.859,474.208c-141.385,0-256-114.615-256-256c0-75.537,32.722-143.422,84.757-190.281
	C56.738,70.303,0,156.525,0,256c0,141.385,114.615,256,256,256c65.849,0,125.883-24.87,171.243-65.718
	C392.325,464.135,352.77,474.208,310.859,474.208z"
                />
                <g>
                  <circle
                    style="fill: #ffffff"
                    cx="211.414"
                    cy="176.754"
                    r="74.262"
                  />
                  <circle
                    style="fill: #ffffff"
                    cx="419.675"
                    cy="176.754"
                    r="74.262"
                  />
                </g>
                <g>
                  <circle
                    style="fill: #224275"
                    cx="223.911"
                    cy="176.754"
                    r="20.829"
                  />
                  <circle
                    style="fill: #224275"
                    cx="435.241"
                    cy="176.754"
                    r="20.829"
                  />
                  <path
                    style="fill: #224275"
                    d="M385.938,392.582c-3.656,0-7.203-1.927-9.108-5.349c-12.728-22.847-36.862-37.041-62.984-37.041
		c-25.446,0-49.828,14.304-63.634,37.328c-2.956,4.932-9.354,6.532-14.287,3.577c-4.934-2.958-6.535-9.354-3.577-14.287
		c17.546-29.266,48.774-47.447,81.498-47.447c33.672,0,64.778,18.291,81.18,47.734c2.799,5.024,0.996,11.367-4.03,14.165
		C389.393,392.157,387.653,392.582,385.938,392.582z"
                  />
                </g>
                <ellipse
                  transform="matrix(0.2723 -0.9622 0.9622 0.2723 145.8683 333.4213)"
                  style="fill: #5ac0ff"
                  cx="293.371"
                  cy="70.272"
                  rx="29.854"
                  ry="53.46"
                />
              </svg>`;
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }
  function chu() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = `<svg
                height="45px"
                width="45px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.001 512.001"
                xml:space="preserve"
              >
                <circle
                  style="fill: #fddf6d"
                  cx="224.707"
                  cy="255.998"
                  r="224.707"
                />
                <g>
                  <path
                    style="fill: #f9a880"
                    d="M140.239,247.548c-16.687,0-30.216,13.528-30.216,30.215h60.432
		C170.455,261.076,156.927,247.548,140.239,247.548z"
                  />
                  <path
                    style="fill: #f9a880"
                    d="M403.798,243.499c-16.687,0-30.216,13.528-30.216,30.215h60.432
		C434.014,257.027,420.487,243.499,403.798,243.499z"
                  />
                </g>
                <path
                  style="fill: #fcc56b"
                  d="M272.858,447.536c-124.102,0-224.705-100.604-224.705-224.705c0-66.303,28.722-125.89,74.396-167.02
	C49.802,93.008,0,168.688,0,256.004C0,380.106,100.604,480.71,224.705,480.71c57.799,0,110.495-21.83,150.309-57.684
	C344.366,438.695,309.646,447.536,272.858,447.536z"
                />
                <g>
                  <path
                    style="fill: #7f184c"
                    d="M371.28,201.492c-3.209,0-6.322-1.693-7.994-4.695c-5.866-10.53-16.987-17.07-29.023-17.07
		c-11.739,0-23.011,6.637-29.416,17.321c-2.597,4.329-8.21,5.735-12.541,3.14c-4.331-2.596-5.736-8.21-3.14-12.541
		c9.69-16.163,26.969-26.204,45.096-26.204c18.664,0,35.905,10.137,44.994,26.455c2.457,4.411,0.874,9.979-3.537,12.435
		C374.312,201.119,372.784,201.492,371.28,201.492z"
                  />
                  <path
                    style="fill: #7f184c"
                    d="M210.425,201.492c-3.209,0-6.322-1.693-7.994-4.695c-5.866-10.53-16.987-17.07-29.023-17.07
		c-11.739,0-23.011,6.637-29.416,17.321c-2.597,4.329-8.211,5.735-12.541,3.14c-4.331-2.596-5.736-8.21-3.14-12.541
		c9.69-16.163,26.969-26.204,45.096-26.204c18.664,0,35.905,10.137,44.994,26.455c2.457,4.411,0.874,9.979-3.537,12.435
		C213.458,201.119,211.931,201.492,210.425,201.492z"
                  />
                  <path
                    style="fill: #7f184c"
                    d="M327.664,390.327c-12.438,0-25.096-1.73-37.503-2.596c-4.462-0.312-11.241,0.302-14.978-2.629
		c-8.643-6.779-0.651-16.574,7.991-16.186c13.73,0.614,27.417,2.365,41.151,2.873c8.046,0.297,14.291-9.099,6.195-14.902
		c-5.273-3.78-13.278-5.799-19.18-8.375c-6.718-2.931-13.349-9.909-6.137-16.835c4.27-4.1,10.886-6.818,15.891-9.875
		c5.095-3.111,13.015-5.909,13.126-12.92c0.13-8.289-7.38-8.961-13.547-7.799c-13.406,2.524-26.918,5.9-40.449,7.617
		c-9.291,1.179-17.113-10.142-7.72-16.409c3.934-2.625,10.58-2.733,15.047-3.574c8.718-1.642,17.437-3.284,26.155-4.925
		c8.238-1.552,16.06-3,24.08,0.903c12.275,5.972,17.528,20.469,13.233,33.158c-3.39,10.013-11.592,14.179-19.985,19.304
		c11.361,5.38,21.089,11.75,21.455,25.857C352.837,376.48,341.775,390.327,327.664,390.327z"
                  />
                </g>
                <path
                  style="fill: #fd4dd7"
                  d="M497.078,302.24c-12.697-8.729-28.766-7.819-40.207,0.589c-1.014,0.745-2.369,0.826-3.458,0.196l0,0
	c-1.09-0.63-1.695-1.844-1.555-3.095c1.576-14.098-5.641-28.467-19.519-35.121c-15.342-7.356-34.073-2.249-43.574,11.865
	c-5.818,8.643-7.206,18.806-4.845,27.999l0,0l14.881,67c2.228,10.031,12.568,16.003,22.371,12.92l64.204-20.193
	c9.748-2.312,18.479-8.813,23.254-18.745C515.953,330.421,511.007,311.816,497.078,302.24z"
                />
                <ellipse
                  transform="matrix(0.2723 -0.9622 0.9622 0.2723 91.9446 320.0762)"
                  style="fill: #fceb88"
                  cx="257.586"
                  cy="99.25"
                  rx="26.205"
                  ry="46.925"
                />
              </svg>`;
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }
  function devil() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = `<svg
                height="45px"
                width="45px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.007 512.007"
                xml:space="preserve"
              >
                <path
                  style="fill: #7d45b2"
                  d="M451.965,3.052c-3.285-5.472-11.631-3.103-11.624,3.28c0,0.075,0,0.152,0,0.227
	c0,82.493-47.388,153.907-116.421,188.538v120.504c90.396-23.114,157.029-104.278,157.981-202.113
	C482.294,73.081,471.309,35.27,451.965,3.052z"
                />
                <circle
                  style="fill: #a66edd"
                  cx="256.004"
                  cy="268.7"
                  r="243.307"
                />
                <path
                  style="fill: #7d45b2"
                  d="M308.141,476.082c-134.375,0-243.306-108.931-243.306-243.306c0-71.791,31.1-136.311,80.554-180.845
	C66.62,92.205,12.695,174.152,12.695,268.694C12.695,403.069,121.627,512,256.002,512c62.583,0,119.641-23.637,162.752-62.459
	C385.567,466.509,347.972,476.082,308.141,476.082z"
                />
                <g>
                  <circle
                    style="fill: #fc4c59"
                    cx="255.489"
                    cy="263.328"
                    r="26.998"
                  />
                  <circle
                    style="fill: #fc4c59"
                    cx="399.962"
                    cy="256.03"
                    r="26.998"
                  />
                </g>
                <g>
                  <path
                    style="fill: #3a2568"
                    d="M324.961,417.164c-26.143,0-51.379-11.178-71.535-31.803c-3.821-3.91-3.748-10.177,0.161-13.997
		c3.912-3.822,10.177-3.748,13.997,0.161c17.363,17.766,39.072,26.903,61.179,25.743c21.79-1.152,42.599-12.871,58.596-32.999
		c3.4-4.279,9.628-4.991,13.907-1.589c4.279,3.401,4.99,9.628,1.589,13.907c-19.574,24.628-45.517,38.993-73.05,40.447
		C328.19,417.12,326.572,417.164,324.961,417.164z"
                  />
                  <path
                    style="fill: #3a2568"
                    d="M256.053,300.218c-14.499,0-28.388-8.291-34.8-22.314c-4.692-10.26-4.527-22.85,0.443-33.681
		c2.121-4.624,4.979-8.634,8.434-11.903c-1.519-0.781-3.055-1.574-4.61-2.382c-6.761-3.511-12.194-6.719-17.451-9.82
		c-6.212-3.666-12.635-7.458-21.763-12.081c-4.876-2.469-6.828-8.425-4.358-13.302c2.469-4.878,8.425-6.831,13.302-4.358
		c9.697,4.911,16.4,8.867,22.882,12.693c5.259,3.105,10.227,6.037,16.51,9.299c4.227,2.195,8.325,4.288,12.263,6.299
		c16.843,8.605,31.387,16.034,41.069,23.893c1.182,0.961,2.129,2.182,2.764,3.569c8.76,19.159,0.302,41.871-18.855,50.629
		C266.748,299.106,261.358,300.218,256.053,300.218z M250.68,242.882c-0.202,0.074-0.41,0.14-0.62,0.201
		c-5.778,1.672-8.828,6.031-10.371,9.394c-2.525,5.501-2.695,12.25-0.434,17.194c4.222,9.23,15.164,13.306,24.394,9.086
		c4.473-2.046,7.88-5.708,9.596-10.315c1.458-3.918,1.547-8.118,0.284-12.037C267.811,252.158,259.889,247.709,250.68,242.882z"
                  />
                  <path
                    style="fill: #3a2568"
                    d="M401.302,293.503c-5.41,0-10.802-1.164-15.867-3.481c-9.279-4.243-16.353-11.847-19.914-21.409
		c-3.561-9.563-3.186-19.94,1.058-29.222c0.697-1.524,1.771-2.848,3.12-3.844c10.406-7.687,24.146-15.676,40.835-23.745
		c25.046-12.109,26.708-13.084,47.071-25.029l3.112-1.825c4.711-2.766,10.781-1.185,13.544,3.533
		c2.766,4.715,1.182,10.78-3.533,13.545l-3.108,1.824c-17.843,10.467-21.821,12.799-39.396,21.372
		c3.822,3.85,6.828,8.479,8.819,13.679c3.987,10.421,3.631,22.182-0.981,32.264c-4.243,9.279-11.847,16.353-21.409,19.915
		C410.314,292.698,405.803,293.503,401.302,293.503z M383.739,249.826c-1.21,3.875-1.106,8.013,0.334,11.879
		c1.716,4.607,5.123,8.271,9.596,10.315c4.47,2.043,9.473,2.222,14.078,0.509c4.607-1.717,8.272-5.125,10.316-9.596
		c2.379-5.205,2.564-11.544,0.494-16.957c-1.316-3.439-4.16-8.083-10.252-10.89C398.702,240.129,390.477,245.063,383.739,249.826z"
                  />
                </g>
                <path
                  style="fill: #a66edd"
                  d="M130.498,134.379C99.504,101.854,80.475,57.826,80.475,9.349c0-0.066,0-0.131,0-0.195
	c0.005-5.487-7.171-7.525-9.996-2.82c-16.635,27.707-26.081,60.221-25.744,94.97c0.284,29.146,7.346,56.573,19.688,80.798
	c0,0,3.848,8.086,8.302,13.53"
                />
                <ellipse
                  transform="matrix(0.2723 -0.9622 0.9622 0.2723 113.9525 341.1105)"
                  style="fill: #b486ef"
                  cx="282.496"
                  cy="95.217"
                  rx="28.374"
                  ry="50.809"
                />
              </svg>`;
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }
  function angry() {
    const all = document.querySelector('.all');
    const create = document.createElement('div');
    create.classList.add('hearts');
    create.innerHTML = `<svg
                height="45px"
                width="45px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.003 512.003"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <circle
                    style="fill: #c01c28"
                    cx="256.001"
                    cy="256.001"
                    r="256.001"
                  />
                  <path
                    style="fill: #e01b24"
                    d="M310.859,474.208c-141.385,0-256-114.615-256-256c0-75.537,32.722-143.422,84.757-190.281 C56.738,70.303,0,156.525,0,256c0,141.385,114.615,256,256,256c65.849,0,125.883-24.87,171.243-65.718 C392.325,464.135,352.77,474.208,310.859,474.208z"
                  />
                  <g>
                    <circle
                      style="fill: #ffffff"
                      cx="220.676"
                      cy="176.754"
                      r="73.651"
                    />
                    <circle
                      style="fill: #ffffff"
                      cx="399.027"
                      cy="176.754"
                      r="46.379"
                    />
                  </g>
                  <g>
                    <circle
                      style="fill: #7f184c"
                      cx="318.072"
                      cy="365.603"
                      r="34.77"
                    />
                    <circle
                      style="fill: #7f184c"
                      cx="242.935"
                      cy="176.754"
                      r="20.829"
                    />
                    <circle
                      style="fill: #7f184c"
                      cx="406.414"
                      cy="176.754"
                      r="20.829"
                    />
                  </g>
                  <ellipse
                    transform="matrix(0.2723 -0.9622 0.9622 0.2723 154.0971 360.7811)"
                    style="fill: #fceb88"
                    cx="315.574"
                    cy="78.512"
                    rx="29.854"
                    ry="53.46"
                  />
                </g>
              </svg>`;
    create.style.left = Math.random() * 100 + 'vw';
    create.style.animationDuration = (Math.random() * 3 + 2) + 's';
    all.appendChild(create);
  }
  const emoji=[tree,heart,cold,chu,devil,angry]
  const emotion =  document.querySelectorAll('.emoji span')
  emotion.forEach((item , index)=>{
    item.addEventListener('click',()=>{
      if (!emojiIntervalId) {
              emojiIntervalId = setInterval(emoji[index], 332);
              setTimeout(() => {
                clearInterval(emojiIntervalId);
                emojiIntervalId = null; 
                const hearts = document.querySelectorAll('.hearts');
                hearts.forEach(heart => heart.remove());
              }, 5000);
            }
    })
  })

}

function clearInput(){ 
  const input = document.querySelector(".comment input");
  input.value= "";  
}

const sentButton = document.querySelector(".comment .sent");
sentButton.addEventListener("click",clearInput);


const home = document.querySelector('.all .header .main .home');
const friend=document.querySelector('.all .header .main .friend');
const market = document.querySelector('.all .header .main .market');
const story= document.querySelector('.all .header .main .story');
const personal=document.querySelector('.all .header .right .avatar');

const changePage = ()=>{
    home.addEventListener('click',()=>{
        document.location.href='../newFeed/newfeed.html'
    });
    friend.addEventListener('click',()=>{
        document.location.href='../friendList/friendList.html'
    });
     market.addEventListener('click',()=>{
         document.location.href='../'
     })
    story.addEventListener('click',()=>{
        document.location.href='../story/story.html'
    });
  
    personal.addEventListener('click',()=>{
        document.location.href='../personalPage/personalPage.html'
    });
}
listStory();
changePage();
startEmoji();
storyScroll();
storyClick();
