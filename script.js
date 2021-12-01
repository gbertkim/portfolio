`use strict`

/////////storage of projects
const projectPre = [
  {
    img: `<img src="./img/jubo.png" id="jubo" alt="jubo app screenshot" class="fullHeight">`,
    title: `Jubo`, 
    description: `Digital Church Bulletin created to save time, paper, and ink. React.js frontend and Node/PostgreSQL/Express backend`, 
    github: "https://github.com/gbertkim/jubo", 
    web: "https://jubo.vercel.app/"
  },
  {
    img: `<img src="./img/pooper.png" id="pooper" alt="pooper app screenshot" class="fullHeight">`,
    title: `Pooper`, 
    description: `Web app created to find clean restrooms around you. React.js frontend and Node/Express backend`, 
    github: "https://github.com/gbertkim/pooper", 
    web: "https://pooper-gbertkim.vercel.app/"
  },
  {
    img: `<img src="./img/RRN.png" id="RRN" alt="RRN app screenshot" class="fullHeight">`,
    title: `RRN`, 
    description: `Track Run River North as they go on their spring music tour. JavaScript, HTML, CSS, Instagram API, and Google Maps API.`, 
    github: "https://github.com/gbertkim/RRN", 
    web: "https://gbertkim.github.io/RRN/"
  }
]
const bgColors = {
  1: "#5e85fe",
  2: "#a9a9a9",
  3: "#fad1bf"
}

/////////load preview section
const loadPreview = function(){
  let keys = Object.keys(projectPre);
  $('#preview').empty();
  for (let i=0; i<keys.length; i++){
    $('#preview').append(`
      <div class="appD" id="appD${i}">
        <div class='imageCont'>
          <a class="previewLinks" target="_blank" href="${projectPre[i].web}" data-value="${i}">${projectPre[i].img}</a>
        </div>
        <div class='descOverlay'>
          <div class='descContainer'>
            <button class='cancelButt'>
              <img src='./img/cancel-icon.png' alt='cancel icon' />
            </button>
            <p class='descP'>
              ${projectPre[i].description}
            </p>
          </div>
        </div>
        <h2 class="projTitle">${projectPre[i].title}</h3>
        <h3 class='projNumber'>${'0'+i}</h3>
        <button class='openDescButt'>
          <img src='./img/information-icon.png' alt='information icon' />
        </button>
        <a class='projGit' role="link" target="_blank" href="${projectPre[i].github}"><img class='projIcons' src='./img/github1.png' alt='github icon' /></a>
      </div>
    `)
    $(`#appD${i}`).css("background-color", `${bgColors[i+1]}`);
  }
}
const overlayFunctions = () => {
  $('.cancelButt').click((e) => {
    e.preventDefault();
    $(e.target).parents('.descOverlay').fadeOut();
  })
  $('.openDescButt').click((e)=> {
    e.preventDefault();
    $(e.target).parent().siblings('.descOverlay').fadeIn();
  })
}
const hoverPhoto = function(){
  let toggle = 0;
  if (toggle === 1) {
    $('header').click(() => {
      $('.banner').fadeOut(100);
    })
  }
  const handlerIn = function (){
    toggle = 1;
    $('.banner').fadeIn(100);
  }
  const handlerOut = function(){
    toggle = 0;
    $('.banner').fadeOut(100);
  }

  $('#yourName').hover(handlerIn, handlerOut)
}
const navigationFunctions = () => {
  let navWidth = '50%'
  $(window).resize(function() {
    if ($(window).width() < 600) {
      navWidth = '100%'
      console.log(navWidth)
    } else {
      navWidth = '50%'
      console.log(navWidth)
    }
  });

  if ($(window).width() < 600) {
    navWidth = '100%'
    console.log(navWidth)
  } else {
    navWidth = '50%'
    console.log(navWidth)
  }

  $('#hamburger').click(()=> {
    $('#fries').fadeIn();
    $('.navigation').animate({ width: navWidth });
    $('#hamburger').css({'display': 'none'});
  });
  $('#fries').click(()=> {
    $('#fries').css({'display': 'none'});
    $('#hamburger').fadeIn(); 
    $('.navigation').animate({ width: '0' });
  });
  $('.nav-links > a').click(()=> {
    $('#fries').css({'display': 'none'});
    $('#hamburger').fadeIn(); 
    $('.navigation').animate({ width: '0' });
  })
}

const hoverAbout = function(){
  const handlerIn = function (){
    let hoveredEl = $(this).attr('id')
    if(hoveredEl == 'fashion') {
      $('.aboutPhoto').removeClass('bg1 bg3 bg4');
      $('.aboutPhoto').addClass('bg2');
    };
    if (hoveredEl == 'bass') {
      $('.aboutPhoto').removeClass('bg1 bg2 bg4');
      $('.aboutPhoto').addClass('bg3');
    };
    if (hoveredEl == 'bags'){
      $('.aboutPhoto').removeClass('bg1 bg2 bg3');
      $('.aboutPhoto').addClass('bg4');
    }
    if (hoveredEl == 'aboutTitle'){
      $('.aboutPhoto').removeClass('bg2 bg3 bg4');
      $('.aboutPhoto').addClass('bg1');
    }
  }
  $('#fashion, #bass, #bags, #aboutTitle').hover(handlerIn)
}

/////////document ready functions
$(document).ready(function(){
  loadPreview();
  $('.banner').css({'display':'none'});
  $('#fries').css({'display':'none'});
  $('.descOverlay').hide();
  navigationFunctions();
  hoverPhoto();
  hoverAbout();
  overlayFunctions();
});
