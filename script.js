`use strict`

/////////storage of projects
const projectPre = {
  1: [`<img src="./img/pooper.png" id="pooper" alt="pooper" class="fullHeight">`,`Pooper`, `Web app created to find clean restrooms around you. Users are able to upload, delte, update, and review bathrooms. Created this ‘yelp-like’ project in 2 weeks from wireframe to uploading onto a server. React.js frontend and Node.js/Express backend`, "https://github.com/gbertkim/pooper", "https://pooper.gbertkim.now.sh/"],
  2: [`<img src="./img/sample_1.png" id="RRN" alt="RRN" class="fullHeight">`,`RRN`, `RRN is a JavaScript, HTML, CSS, Instagram API, and Google Maps API project. RRN is a project that was made for the band Run River North. In 2019, they will go on a Spring Tour. This app allows for the user to track their location via their most recent instagram posts and future concert dates.`,"https://github.com/gbertkim/RRN","https://gbertkim.github.io/RRN/"],
  3: [`<img src="./img/braintimer_1.png" id="brainTimer" alt="Brain Timer Project Start" class="fullHeight">`,`Brain Timer`, `Brain Timer is a JavaScript, HTML, and CSS quiz with 10 logic questions and brain teasers. Project was designed for the Thinkful course. There is a timer function that will start and stop as you progress through the quiz. The user must complete all questions before the timer hits "0".`, "https://github.com/gbertkim/BrainTimer","https://gbertkim.github.io/BrainTimer/"]
}

////////global variables
let keys = Object.keys(projectPre);

//////home
let pageLoad = function(){
  $('.links').on('click', function(event){
    var linkAttr = $(this).attr("href");
    console.log(linkAttr + " was clicked")
    $("#preview").removeClass("smoothScroll").scrollTop(0); ////removes smooth scrolling
    if (linkAttr === '#home'){
      $('header').removeClass('headerShrink');
      $('.part').hide();
      $('.main').removeClass('eightyFive').css('background-color','rgb(245, 106, 106)');
      setTimeout (function(){
        $("#title").html(`
          Hello, my name is <a id="yourName" href="index.html">Gilbert Kim</a> and I am a full-stack web developer and a Thinkful, New York graduate.
        `);
      },500);
      $("#title").fadeOut(500).fadeIn(500);
    } else if (linkAttr === '#portfolio' || linkAttr === '#about'){
      $(linkAttr).siblings().hide();
      $(linkAttr).delay(1000).fadeIn(1000);
      faded();
      if (linkAttr === '#portfolio'){
        loadPreview();
      }
    } 
  })
}

let faded = function(){
  console.log("Header is shrinking");
  $('header').addClass('headerShrink');
  console.log("Main is growing");
  $('.main').addClass('eightyFive').css('background-color','white');
  setTimeout(function(){
    $("#title").html(`
      Gilbert Kim
    `);
  },500);
  $("#title").fadeOut(500).fadeIn(500);
}

/////////load preview section
let loadPreview = function(){
  $('#preview').empty();
  console.log("Preview is emptied and rendering new preview");
  for (let i=1; i<=keys.length; i++){
    $('#preview').append(`
      <div class="appD">
        <a class="previewLinks" target="_blank" href="${projectPre[i][3]}" data-value="${i}">${projectPre[i][0]}</a>
        <div class="minShow">
          <h3>${projectPre[i][1]}</h3>
          <p>${projectPre[i][2]}</p></div>
        <div id="gitLinks">
          <a role="link" target="_blank" href="${projectPre[i][3]}">View Code</a>
          <a role="link" target="_blank" href="${projectPre[i][4]}">View Link</a>
        </div>
      </div>
    `)
  }
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
  $('#about').hide();
  $('#portfolio').hide();
  smoothScrolling();
  pageLoad();
});
