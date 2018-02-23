

$(document).ready(function() {
	$('#fullpage').fullpage({
    responsiveWidth: 772,
    responsiveHeight: 700,
    scrollHorizontally: true,
    paddingTop: 90,
    anchors: ['1', '2', '3', '4', '5', '6', '7'],
    menu: '.navigation',
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);

      // $('#2x').fadeOut();

        $('#'+index+'x').removeClass('fadeOut');
        $('#'+index+'x').addClass('fadeInUp');
  
      //using index
      // if(index == 3){
      //   alert("Section 3 ended loading");
      // }
  
      // //using anchorLink
      // if(anchorLink == '2'){
      //   $('#2x').addClass('rotateInUpRight');
      // }
    }
  });
  if(window.innerWidth < 772 || window.innerHeight < 700) {
    setTimeout(()=> {
      scrollFunction(0); 
    }, 200);
  } else {
    
  }
  disableScroll();
});
jQuery('html').bind('mousewheel DOMMouseScroll', (e) => {
  scrollFunction(e);
});

// window.onscroll = function() {scrollFunction()};

const elements = ['1x', '2x', '3x', '4x', '5x', '6x'];
function scrollFunction(e) {
  if(window.innerWidth < 772 || window.innerHeight < 700) {
    var delta;
    if(e === 0) {
      delta = 0;
    } else {
      delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
    }
    // console.log(delta);
    //USE THIS DELTA (negative = down | positive = down) TO STOP MULTIPLE ACTIVE SECTIONS
    let in_view = [];
    for(var i = 0; i < elements.length; i++){
      var isElementInView = Utils.isElementInView($('#'+elements[i]), false);
      if(isElementInView) {
        // console.log(elements[i]);
        in_view.push(elements[i]);
        // $('.nav-'+elements[i]).addClass('active');
      } else {
        // $('.nav-'+elements[i]).removeClass('active');        
      }
    }
    let el = null;
    if (in_view > 1) {
      if(delta > 0) {
        el = in_view[0];
      } else {
        el = in_view[1];
      }
    } else {
      el = in_view[0];
    }
    setClass(el);
  }
}

function setClass(el) {
  $('#'+el).removeClass('fadeOut');
  $('#'+el).addClass('fadeIn');
  for(var i = 0; i < elements.length; i++) {
    if(elements[i] === el) {
      $('.nav-'+elements[i]).addClass('active'); 
    } else {
      $('.nav-'+elements[i]).removeClass('active');   
    }
  }     
}

function isElementInViewport (id) {
  const el = document.getElementById(id);
  //special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

function Utils() {

}


function getStarted() {
  $('#splash').addClass('fadeOutDown', $('#splash').hide());
  enableScroll();
}

function closeMenu() {
  $('#mobile-menu').fadeOut();
}

function openMenu() {
  $('#mobile-menu').fadeIn();
}

var isHiddenNow = (function(el) {
  console.log(el);
});

function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 1000);
  function checkReady() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
          window.clearInterval(intervalID);
          callback.call(this);
      }
  }
}

onReady(function () {
  $('#loading-splash').addClass('fadeOut', $('#loading-splash').hide());
  if(is_touch_device()) {
    $('#nav-circles').hide();
    for(var i = 1; i < elements.length+1; i++) {
      $('#'+i+'x').removeClass('fadeOut');
      $('#'+i+'x').addClass('fadeIn');
    }
  }
});

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash+'x');
      var tarStr = this.hash.substring(1, this.hash.length) + 'x';
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        if(window.innerWidth < 772 || window.innerHeight < 780) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 0, function() {
            setClass(tarStr);
            closeMenu();
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });

        } else {

          console.log("nono!", window.innerWidth);
        }
      }
    }
  });

// $('.send-message').click(function(){
//   $('#myModal').modal('show');
// });


$('#errorModal').modal({ show: false});
$('#successModal').modal({ show: false});
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
  $.fn.fullpage.setMouseWheelScrolling(false);
  $.fn.fullpage.setAllowScrolling(false);
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

$(document).ready(function() {
  $('.carousel-1').owlCarousel({
      loop:true,
      dots: false,
      items: 1,
      autoplay: true,
      nav:true,
  });

  $('.carousel-2').owlCarousel({
      loop:true,
      dots: false,
      items: 1,
      autoplay: false,
      nav:true,
      responsive: {
          992: {
            items: 2
          },
          1499: {
            items: 3
          }
      }
  });

  $('.carousel-3').owlCarousel({
      loop:true,
      dots: false,
      items: 1,
      autoplay: false,
      nav:true,
  });


  $( ".owl-prev").html('<i class="material-icons">keyboard_arrow_left</i>');
  $( ".owl-next").html('<i class="material-icons">keyboard_arrow_right</i>');
});