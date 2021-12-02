`use strict`

/////////storage of projects
const projectPre = [
  {
    img: `<img src="./img/jubo.png" id="jubo" alt="jubo app screenshot" class="fullHeight">`,
    title: `JUBO`, 
    description: `Digital Church Bulletin created to save time, paper, and ink. React.js frontend and Node/PostgreSQL/Express backend`, 
    github: "https://github.com/gbertkim/jubo", 
    web: "https://jubo.vercel.app/",
    short: 'digital bulletin'
  },
  {
    img: `<img src="./img/pooper.png" id="pooper" alt="pooper app screenshot" class="fullHeight">`,
    title: `POOPER`, 
    description: `Web app created to find clean restrooms around you. React.js frontend and Node/Express backend`, 
    github: "https://github.com/gbertkim/pooper", 
    web: "https://pooper-gbertkim.vercel.app/",
    short: 'bathroom finder'

  },
  {
    img: `<img src="./img/RRN.png" id="RRN" alt="RRN app screenshot" class="fullHeight">`,
    title: `RRN`, 
    description: `Track Run River North as they go on their spring music tour. JavaScript, HTML, CSS, Instagram API, and Google Maps API.`, 
    github: "https://github.com/gbertkim/RRN", 
    web: "https://gbertkim.github.io/RRN/",
    short: 'band tracker'

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
      <div class="projInfo">
        <h3 class='projNumber'>${`${projectPre[i].title} - ${projectPre[i].short}`}</h3>
      </div>
        <div class='imageCont'>
          <a class="previewLinks" data-value="${i}">${projectPre[i].img}</a>
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
          <button class='openDescButt'>
            <img src='./img/information-icon.png' alt='information icon' />
        </button>

        <div class='projLinks'>
          <a class='projGit' role="link" target="_blank" href="${projectPre[i].github}"><img class='projIcons' src='./img/github1.png' alt='github icon' /></a>
          <a class='projGit' role="link" target="_blank" href="${projectPre[i].web}"><img class='projIcons' src='./img/view-icon.png' alt='github icon' /></a>
        </div>
      </div>
    `)
    $(`#appD${i}`).css("background-color", `${bgColors[i+1]}`);
  }
}
const overlayFunctions = () => {
  $('.descOverlay').click((e) => {
    e.preventDefault();
    $(e.target).parents('.descOverlay').fadeOut();
  });
  $('.openDescButt').click((e)=> {
    e.preventDefault();
    $(e.target).parent().siblings('.descOverlay').fadeIn();
    e.stopPropagation();
  });
  $('.previewLinks').click((e) => {
    $(e.target).parent().parent().siblings('.descOverlay').fadeIn();
    e.stopPropagation();
  });
}

const hoverPhoto = () => {
  $('#yourName').click((e)=> { 
    $('.banner').fadeIn(100);
    e.stopPropagation();
  });
  $('header').click(() => {
    $('.banner').fadeOut(100);
  });
};
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
    $('.navigation').animate({ width: navWidth }, 250);
    $('#hamburger').css({'display': 'none'});
  });
  $('#fries').click(()=> {
    $('#fries').css({'display': 'none'});
    $('#hamburger').fadeIn(); 
    $('.navigation').animate({ width: '0' }, 250);
  });
  $('.nav-links > a').click(()=> {
    $('#fries').css({'display': 'none'});
    $('#hamburger').fadeIn(); 
    $('.navigation').animate({ width: '0' }, 250);
  })
}

const hoverAbout = function(){
  $('#about').click((e)=> {
    if(e.target.id == 'fashion') {
      $('.aboutPhoto').removeClass('bg1 bg3 bg4');
      $('.aboutPhoto').addClass('bg2');
    } else if (e.target.id == 'bass') {
      $('.aboutPhoto').removeClass('bg1 bg2 bg4');
      $('.aboutPhoto').addClass('bg3');
    } else if (e.target.id == 'bags'){
      $('.aboutPhoto').removeClass('bg1 bg2 bg3');
      $('.aboutPhoto').addClass('bg4');
    } else {
      $('.aboutPhoto').removeClass('bg2 bg3 bg4');
      $('.aboutPhoto').addClass('bg1');
    }
  })
  $('#aboutTitle')
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
