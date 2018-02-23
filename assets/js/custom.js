

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

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
if(isMobile) {
  alert("umwat");
  $('#nav-circles').hide();
  for(var i = 0; i < elements.length; i++) {
    $('#'+i+'x').removeClass('fadeOut');
    $('#'+i+'x').addClass('fadeIn');
  }
}
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
  $('#splash').addClass('fadeOutDown', () => $('#splash').hide());
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