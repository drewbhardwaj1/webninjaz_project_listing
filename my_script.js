document.addEventListener("DOMContentLoaded", function () {

    // const listings = document.querySelectorAll('.single_listing');

    // listings.forEach((listing)=>{
    //     listing.addEventListener('mousemove', (e) => {
    //         const cursorFollower = listing.querySelector('.cursor_text');
    //         const offset = -150;
    //         cursorFollower.style.opacity = '1';
    //         cursorFollower.style.left = e.clientX + offset + 'px';
    //         cursorFollower.style.top = e.clientY + offset + 'px';
    //     });
    //     listing.addEventListener('mouseout', (e) => {
    //         cursorFollower.style.opacity = '0';
    //     });
    // })
});

let tabsMenu = $('#tabsMenu');
var topOffset = tabsMenu.offset().top;

let tabsOffset = tabsMenu.offset().top;
let challengeTab = $('#challengeTab');
let challengeBtn = document.querySelector('[data-id="challengeTab"]');
let overviewBtn = document.querySelector('[data-id="overviewTab"]');

let solutionTab = $('#solutionTab');
let solutionBtn = document.querySelector('[data-id="solutionTab"]');

let outcomeTab = $('#outcomeTab');
let outcomeBtn = document.querySelector('[data-id="outcomeTab"]');

$(window).scroll(function() {
    var window_top = $(window).scrollTop() + 80;

    if (window_top > tabsOffset && window_top < outcomeTab.offset().top) {
        if (!$('#tabsMenu').is('.stickyCS')) {
            $('#tabsMenu').addClass('stickyCS');
        }
    }
    else if(window_top > outcomeTab.offset().top) {
        let translateYValue = - window_top + 3820;
        $('#tabsMenu').css('transform', 'translateY(' + translateYValue + 'px)');
    }
    else{
        $('#tabsMenu').removeClass('stickyCS');
    }
    if(window_top+500 > challengeTab.offset().top && window_top < 2400){
        tabsMenu.children().removeClass('active');
        challengeBtn.classList.add('active');
        // console.log("challenge:" + window_top, challengeTab.offset().top, challengeTab.outerHeight());
    }
    else if(window_top+500 > solutionTab.offset().top && window_top < 3250){
        tabsMenu.children().removeClass('active');
        solutionBtn.classList.add('active');
        // console.log("solution:" + window_top, solutionTab.offset().top, solutionTab.outerHeight());
    }
    else if(window_top+1500 > outcomeTab.offset().top && window_top < 4250){
        tabsMenu.children().removeClass('active');
        outcomeBtn.classList.add('active');
        // console.log("outcome:" + window_top, outcomeTab.offset().top, outcomeTab.outerHeight());
    }
    else{
        tabsMenu.children().removeClass('active');
        overviewBtn.classList.add('active');
    }
});

