`use strict`

/////////storage of projects
const projectPre = {
  1: [`<img src="./img/pooper.png" id="pooper" alt="pooper" class="fullHeight">`,`Pooper`, `Web app created to find clean restrooms around you. Users are able to upload, delte, update, and review bathrooms. Created this ‘yelp-like’ project in 2 weeks from wireframe to uploading onto a server. React.js frontend and Node.js/Express backend`, "https://pooper-gbertkim.vercel.app/", "https://pooper.gbertkim.now.sh/"],
  2: [`<img src="./img/RRN.png" id="RRN" alt="RRN" class="fullHeight">`,`RRN`, `RRN is a JavaScript, HTML, CSS, Instagram API, and Google Maps API project. RRN is a project that was made for the band Run River North. In 2019, they will go on a Spring Tour. This app allows for the user to track their location via their most recent instagram posts and future concert dates.`,"https://github.com/gbertkim/RRN","https://gbertkim.github.io/RRN/"],
  3: [`<img src="./img/braintimer.png" id="brainTimer" alt="Brain Timer Project Start" class="fullHeight">`,`Brain Timer`, `Brain Timer is a JavaScript, HTML, and CSS quiz with 10 logic questions and brain teasers. Project was designed for the Thinkful course. There is a timer function that will start and stop as you progress through the quiz. The user must complete all questions before the timer hits "0".`, "https://github.com/gbertkim/BrainTimer","https://gbertkim.github.io/BrainTimer/"]
}
const bgColors = {
  1: "#404664",
  2: "#da7b08",
  3: "#8ba6bc",
}

////////global variables
let keys = Object.keys(projectPre);

/////////load preview section
let loadPreview = function(){
  $('#preview').empty();
  console.log("Preview is emptied and rendering new preview");
  for (let i=1; i<=keys.length; i++){
    $('#preview').append(`
      <div class="appD" id="appD${i}">
        <h3 class="projTitle">${projectPre[i][1]}</h3>
        <a class="previewLinks" target="_blank" href="${projectPre[i][3]}" data-value="${i}">${projectPre[i][0]}</a>
        <div class="minShow">
          <p>${projectPre[i][2]}</p></div>
        <div id="gitLinks">
          <a role="link" target="_blank" href="${projectPre[i][3]}">View Code</a>
          <a role="link" target="_blank" href="${projectPre[i][4]}">View Link</a>
        </div>
      </div>
    `)
    $(`#appD${i}`).css("background-color", `${bgColors[i]}`);
  }
}

//////// hover functions
let hoverPhoto = function(){
  let handlerIn = function (){
    $('header').addClass('blackOut');
    $('#title, #hoverMe').css('color','black')
    $('#profilePic').fadeIn();
  }
  let handlerOut = function(){
    $('header').removeClass('blackOut');
    $('#title').css('color','rgb(85, 85, 85)')
    $('#hoverMe').css('color','rgb(255, 145, 0)')
    $('#profilePic').fadeOut();
  }
  $('#yourName').hover(handlerIn, handlerOut)
}
let hoverAbout = function(){
  let handlerIn = function (){
    $('#about').removeClass('about');
    $('#about').addClass('blackOut');
    $('#title, #hoverMe').css('color','black')
    $('.hovered').css('color','black')
    var hoveredEl = $(this).attr('id')
    if(hoveredEl == 'fashion') {
      $(`#${hoveredEl}`).css('color','rgb(255, 145, 0)');
      $('#soloPhoto').fadeIn();
    };
    if (hoveredEl == 'bass') {
      $(`#${hoveredEl}`).css('color','rgb(255, 145, 0)');
      $('#bassPhoto').fadeIn();
    };
    if (hoveredEl == 'bags'){
      $(`#${hoveredEl}`).css('color','rgb(255, 145, 0)');
      $('#miimPhoto').fadeIn();
    }
  }
  let handlerOut = function(){
    $('.hovered').css('color','rgb(255, 145, 0)');
    $('#about').removeClass('blackOut, whiteFont');
    $('#about').addClass('about');
    $('.hoverPhoto').fadeOut();
  }
  $('#fashion, #bass, #bags').hover(handlerIn, handlerOut)
}

///////////adds smooth scrolling for some links and not others
let smoothScrolling = function (){
  $(".portLinks").on('click', function(){
    $("#preview").addClass("smoothScroll")
  })
}

/////////document ready functions
$(document).ready(function(){
  console.log("Page is loaded");
  hoverPhoto();
  hoverAbout();
  loadPreview();
  smoothScrolling();
});
