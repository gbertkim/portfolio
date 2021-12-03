`use strict`

/////////storage of projects
const projectPre = [
  {
    img: `<img src="./img/jubo.png" id="jubo" alt="jubo app screenshot" class="fullHeight">`,
    title: `JUBO`, 
    description: `Digital church bulletin created to save time, paper, and ink.`, 
    code: 'ReactJS/Node/PostgreSQL/Express',
    github: "https://github.com/gbertkim/jubo", 
    web: "https://jubo.vercel.app/",
    short: 'digital bulletin'
  },
  {
    img: `<img src="./img/pooper.png" id="pooper" alt="pooper app screenshot" class="fullHeight">`,
    title: `POOPER`, 
    description: `Find clean restrooms around you.`,
    code: 'ReactJS/Node/PostgreSQL/Express', 
    github: "https://github.com/gbertkim/pooper", 
    web: "https://pooper-gbertkim.vercel.app/",
    short: 'bathroom finder'

  },
  {
    img: `<img src="./img/RRN.png" id="RRN" alt="RRN app screenshot" class="fullHeight">`,
    title: `RRN`, 
    description: `Track RRN on their spring tour.`,
    code: 'JavaScript/HTML/CSS/Instagram & Google Maps API.', 
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
        <h3 class='projTitle'>${projectPre[i].title}</h3>
        <p class='projDesc'>${projectPre[i].description}
        <p class='projCode'>${projectPre[i].code}</p>
      </div>
        <div class='imageCont'>
          <a class="previewLinks" data-value="${i}">${projectPre[i].img}</a>
        </div>
        <div class='projLinks'>
        <a class='projGit' role="link" target="_blank" href="${projectPre[i].github}">View Live</a>
        <a class='projGit' role="link" target="_blank" href="${projectPre[i].web}">View Code</a>
        </div>
      </div>
    `)
    $(`#appD${i}`).css("background-color", `${bgColors[i+1]}`);
  }
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
  navigationFunctions();
  hoverPhoto();
  hoverAbout();
});
