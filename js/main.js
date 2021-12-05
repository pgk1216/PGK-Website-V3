let currentPage = 0;
let pageButtons = ['#home-button', '#about-button', '#portfolio-button', '#contact-button'];
let pages = ['#home', '#about', '#portfolio', '#contact'];
let currentPfPage = 1;
let totalPfPages = 2;

$(document).ready(function() {
    setupPagination();
    setupPages();
    pageChanges();
    panelToggle();
});

function setupPages() {
    $('#home').hide();
    $('#about').hide();
    $('#portfolio').hide();
    $('#contact').hide();
    setTimeout(function() {
        $('#home-button').css("opacity", "1");

        $('#welcome').fadeOut();

        $('#home').fadeIn("slow");
        console.log("ready");
    }, 2500);
}

function setupPagination() {
    for(var i = 1; i <= totalPfPages; i++) {
        if(i > 1) $('#project-page-' + i).hide();
    }
}

function changePages(buttonIndex) {
    if(currentPage == buttonIndex) return;
    /*
    0: home-button
    1: about-button
    2: portfolio-button
    3: contact-button
    */

    $(pageButtons[currentPage]).css("opacity", "0.5");
    // $(pageButtons[currentPage]).hover(function(event) {
    //     $(this).css("opacity", event.type === "mouseenter" ? "1" : "0.5");
    // });
    $(pages[currentPage]).fadeOut("fast");

    setTimeout(function() {
        $(pages[buttonIndex]).fadeIn("fast");
        $(pageButtons[buttonIndex]).css("opacity", "1");

        currentPage = buttonIndex;
    }, 200);
}

function changePfPages(pageIndex) {
    if(currentPfPage == pageIndex) return;

    $('#project-page-' + currentPfPage).fadeOut("fast");

    setTimeout(function() {
        $('#project-page-' + pageIndex).fadeIn("fast");
        $('#project-pagebtn-' + currentPfPage).removeClass('active');
        $('#project-pagebtn-' + pageIndex).addClass('active');

        currentPfPage = pageIndex;
    }, 200);
}

function pageChanges() {
    $('.next').click(function() {
        $('.pagination').find('.page-number.active').next().addClass('active');
        $('.pagination').find('.page-number.active').prev().removeClass('active');

        $('#project-page-' + currentPfPage).fadeOut("fast");
        setTimeout(function() {
            $('#project-page-' + (++currentPfPage)).fadeIn("fast");
        }, 200);
    });
    $('.prev').click(function() {
        $('.pagination').find('.page-number.active').prev().addClass('active');
        $('.pagination').find('.page-number.active').next().removeClass('active');
        
        $('#project-page-' + currentPfPage).fadeOut("fast");
        setTimeout(function() {
            $('#project-page-' + (--currentPfPage)).fadeIn("fast");
        }, 200);
    });
}

function panelToggle() {
    $('#panel-opener').click(function() {
        $('#main-screen').toggleClass('toggle');
        $('#panel-opener').toggleClass('toggle');
    });
}