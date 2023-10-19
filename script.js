document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('navBtnN').addEventListener('click',()=>{
    document.querySelector('.navbar_wrapper').classList.toggle('navbar_transform');
    document.querySelector('.page_body').classList.toggle('disableScroll');
  })
});




// navbar
// image dragable

// jQuery(document).ready(function($){
//   var dragging = false,
//       scrolling = false,
//       resizing = false;
//   //cache jQuery objects
//   var imageComparisonContainers = $('.cd-image-container');
//   //check if the .cd-image-container is in the viewport
//   //if yes, animate it
//   checkPosition(imageComparisonContainers);
//   $(window).on('scroll', function(){
//       if( !scrolling) {
//           scrolling =  true;
//           ( !window.requestAnimationFrame )
//               ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
//               : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
//       }
//   });
//   //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
//   imageComparisonContainers.each(function(){
//       var actual = $(this);
//       drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
//   });
//   //upadate images label visibility
//   $(window).on('resize', function(){
//       if( !resizing) {
//           resizing =  true;
//           ( !window.requestAnimationFrame )
//               ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
//               : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
//       }
//   });
//   function checkPosition(container) {
//       container.each(function(){
//           var actualContainer = $(this);
//           if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
//               actualContainer.addClass('is-visible');
//           }
//       });
//       scrolling = false;
//   }
//   function checkLabel(container) {
//       container.each(function(){
//           var actual = $(this);
//           updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
//           updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
//       });
//       resizing = false;
//   }
//   //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
//   function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
//       dragElement.on("mousedown vmousedown", function(e) {
//           dragElement.addClass('draggable');
//           resizeElement.addClass('resizable');
//           var dragWidth = dragElement.outerWidth(),
//               xPosition = dragElement.offset().left + dragWidth - e.pageX,
//               containerOffset = container.offset().left,
//               containerWidth = container.outerWidth(),
//               minLeft = containerOffset + 10,
//               maxLeft = containerOffset + containerWidth - dragWidth - 10;
//           dragElement.parents().on("mousemove vmousemove", function(e) {
//               if( !dragging) {
//                   dragging =  true;
//                   ( !window.requestAnimationFrame )
//                       ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
//                       : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
//               }
//           }).on("mouseup vmouseup", function(e){
//               dragElement.removeClass('draggable');
//               resizeElement.removeClass('resizable');
//           });
//           e.preventDefault();
//       }).on("mouseup vmouseup", function(e) {
//           dragElement.removeClass('draggable');
//           resizeElement.removeClass('resizable');
//       });
//   }
//   function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
//       var leftValue = e.pageX + xPosition - dragWidth;
//       //constrain the draggable element to move inside his container
//       if(leftValue < minLeft ) {
//           leftValue = minLeft;
//       } else if ( leftValue > maxLeft) {
//           leftValue = maxLeft;
//       }
//       var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
//       $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
//           $(this).removeClass('draggable');
//           resizeElement.removeClass('resizable');
//       });
//       $('.resizable').css('width', widthValue);
//       updateLabel(labelResizeElement, resizeElement, 'left');
//       updateLabel(labelContainer, resizeElement, 'right');
//       dragging =  false;
//   }
//   function updateLabel(label, resizeElement, position) {
//       if(position == 'left') {
//           ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//       } else {
//           ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
//       }
//   }
// });




jQuery(document).ready(function($) {
    var dragging = false,
      scrolling = false,
      resizing = false;
    //cache jQuery objects
    var imageComparisonContainers = $('.cd-image-container');
    //check if the .cd-image-container is in the viewport
    //if yes, animate it
    checkPosition(imageComparisonContainers);
    $(window).on('scroll', function() {
      if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ?
        setTimeout(function() {
          checkPosition(imageComparisonContainers);
        }, 100):
          requestAnimationFrame(function() {
            checkPosition(imageComparisonContainers);
          });
      }
    });
    //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
    imageComparisonContainers.each(function() {
      var actual = $(this);
      drags(actual.find('.cd-handle'), actual.find('.cd-resize-img , .cd-resize-img-mobile-1'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
    });
    //upadate images label visibility
    $(window).on('resize', function() {
      if (!resizing) {
        resizing = true;
        (!window.requestAnimationFrame) ?
        setTimeout(function() {
          checkLabel(imageComparisonContainers);
        }, 100):
          requestAnimationFrame(function() {
            checkLabel(imageComparisonContainers);
          });
      }
    });
  
    function checkPosition(container) {
      container.each(function() {
        var actualContainer = $(this);
        if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
          actualContainer.addClass('is-visible');
        }
      });
      scrolling = false;
    }
  
    function checkLabel(container) {
      container.each(function() {
        var actual = $(this);
        updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img , .cd-resize-img-mobile-1'), 'left');
        updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img ,cd-resize-img-mobile-1'), 'right');
      });
      resizing = false;
    }
  
    //draggable functionality
    function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
      dragElement.on("mousedown vmousedown touchstart", function(e) {
        e.preventDefault(); // Prevent default browser behavior for touch events
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');
        var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - (e.pageX || e.originalEvent.touches[0].pageX),
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
  
        $(document).on("mousemove vmousemove touchmove", function(e) {
          if (!dragging) {
            dragging = true;
            (!window.requestAnimationFrame) ?
            setTimeout(function() {
              animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
            }, 100):
              requestAnimationFrame(function() {
                animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);
              });
          }
        }).on("mouseup vmouseup touchend", function() {
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
      }).on("mouseup vmouseup touchend", function() {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
    }
  
    function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
      var leftValue = (e.pageX || e.originalEvent.touches[0].pageX) + xPosition - dragWidth;
      //constrain the draggable element to move inside his container
      if (leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
      $('.draggable').css('left', widthValue).on("mouseup vmouseup touchend", function() {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
      updateLabel(labelResizeElement, resizeElement, 'left');
      updateLabel(labelContainer, resizeElement, 'right');
      dragging = false;
    }
  
    function updateLabel(label, resizeElement, position) {
      if (position == 'left') {
        (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
      } else {
        (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden'): label.addClass('is-hidden');
      }
    }
  });
  











// mobile


$("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
 
    $('.foreground-img').css('width', `${sliderPos}%`)

    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });


// sites





(function(){
  init();

  var g_containerInViewport;
  function init(){
      setStickyContainersSize();
      bindEvents();
  }

  function bindEvents(){
      window.addEventListener("wheel", wheelHandler);        
  }

  function setStickyContainersSize(){
      document.querySelectorAll('.sticky-container').forEach(function(container){
          const stikyContainerHeight = container.querySelector('.sites').scrollWidth;
          container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
      });
  }

  function isElementInViewport (el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
  }

  function wheelHandler(evt){
      
      const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function(container){
          return isElementInViewport(container);
      })[0];

      if(!containerInViewPort){
          return;
      }

      var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
      var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
      let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

      if(g_canScrollHorizontally){
          containerInViewPort.querySelector('.sites').scrollLeft += evt.deltaY;
      }
  }
})();



$('.reveiw-carousel').owlCarousel({
   margin: 0,
   loop: true,
   nav: false,
   dots: false,
   autoWidth: true,
   responsive: {
     0: {
       items: 2,
       autoWidth: true
     },
     600: {
       items: 2,
       autoWidth: false
     }
   }
});



// marquee

// video tab

$(document).ready(function () {
    $(".tabs-content").eq(0).show();
    $("#tabs li").eq(0).addClass("active");
    $("#tabs li").click(function () {
        var number = $(this).index();
        $("#tabs li").removeClass("active");
        $(".tabs-content").hide().eq(number).fadeIn("slow");
        $("#tabs li").eq(number).addClass("active");
    });
});

// video player
function videoPlay($wrapper) {
    var $iframe = $wrapper.find(".js-videoIframe");
    var src = $iframe.data("src");
    $wrapper.addClass("videoWrapperActive");
    $iframe.attr("src", src);
    $(".home-video-close").removeClass("is-hidden");
 }
 
 function videoStop($wrapper) {
    if (!$wrapper) {
       var $wrapper = $(".js-videoWrapper");
       var $iframe = $(".js-videoIframe");
    } else {
       var $iframe = $wrapper.find(".js-videoIframe");
    }
    $wrapper.removeClass("videoWrapperActive");d
    $iframe.attr("src", "");
    $(".home-video-close").addClass("is-hidden");
 }
 
 function touchVideo() {
    var isVisible = $("#js-pointer-detector").is(":visible");

    if (isVisible === true) {

       $(".videoWrapper").addClass("videoWrapperActive");
   
       var source = $(".js-videoIframe").data("src");
   
       $(".js-videoIframe").attr("src", source);
    } else {
    }
 }
 

 $(document).on("click", ".js-videoPoster", function(ev) {
    ev.preventDefault();
    var $poster = $(this);
    var $wrapper = $poster.closest(".js-videoWrapper");
    videoPlay($wrapper);
 });
 
 $(document).ready(function() {
    touchVideo();
 });
 


//  about crousel

$('.stratgies-reveiw-carousel').owlCarousel({
    margin: 30,
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      }
    }
 });


