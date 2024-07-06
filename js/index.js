/* Left Menu Aside */
let leftMenuWidth = $('.leftMenu').outerWidth(); // Get the width of the left menu
$('.leftMenu').animate({marginLeft: -leftMenuWidth}, 0); // Initially hide the left menu by setting its margin-left to negative width
$('.homeContact, .slider-aside').animate({marginLeft: 0}, 0); // Ensure homeContact and slider-aside sections are in their original position

// Show left menu and move other sections to the right when slider-aside is clicked
$('.slider-aside').on('click', function () {
    $('.homeContact, .slider-aside').animate({marginLeft: leftMenuWidth}, 500);
    $('.leftMenu').animate({marginLeft: 0}, 500);
});

// Hide left menu and move other sections back to their original position when close button is clicked
$('#btnClose').on('click', function () {
    $('.homeContact, .slider-aside').animate({marginLeft: 0}, 500);
    $('.leftMenu').animate({marginLeft: -leftMenuWidth}, 500);
});

/* Accordion */
$('.innerFirst').css('display', 'block'); // Initially display the first inner content
$('.sliderDown .toggle').on('click', function (e) {
    // Slide up all other inner elements except the one clicked
    $('.inner').not($(this).next()).slideUp(500);
    // Toggle the display of the clicked inner element
    $(e.target).next().slideToggle(500);
});

// Scroll Behavior

// Scroll to top when scroll button is clicked
$('.scrollbtn').on('click', function () {
    $('html,body').animate({scrollTop: 0}, 750);
});

// Show or hide the scroll button based on scroll position
$(window).on('scroll', function () {
    if (Number($(window).scrollTop()) > 750) {
        $('.scrollbtn').css('display', 'flex');
    }
    if (Number($(window).scrollTop()) < 750) {
        $('.scrollbtn').css('display', 'none').fadeOut(500);
    }
});

// Smooth scroll to section when a link in the left menu is clicked
$(".leftMenu a").on('click', function (e) {
    var sectionId = $(e.target).attr('href'); // Get the target section ID
    var positionOfSection = $(sectionId).offset().top; // Get the top position of the target section
    $('html, body').animate({scrollTop: positionOfSection}, 2000); // Animate the scroll to the target section
});

// Countdown
window.onload = function() {
    countDownToTime("25 December 2024 9:56:00"); // Initialize countdown on page load
}

function countDownToTime(countTo) {
    let futureDate = new Date(countTo).getTime() / 1000; // Convert future date to timestamp
    let now = new Date().getTime() / 1000; // Get current timestamp
    let timeDifference = futureDate - now; // Calculate the time difference

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * 24 * 60 * 60)) / 3600);
    let mins = Math.floor((timeDifference - (days * 24 * 60 * 60) - (hours * 3600)) / 60);
    let secs = Math.floor(timeDifference - (days * 24 * 60 * 60) - (hours * 3600) - (mins * 60));

    // Update countdown display
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`);

    setInterval(function() {
        countDownToTime(countTo);
    }, 1000); // Update countdown every second
}

// Contact
$('textarea').keydown(function (e) {
    let lengths = this.value; // Get the current value of the textarea
    console.log(lengths.length); // Log the length of the textarea content

    if (lengths.length < 100) {
        $('#remchar').html(`${100 - lengths.length}`); // Display remaining characters if less than 100
    }
    if (lengths.length > 100) {
        $('#remchar').html(`Your available characters finished 0`); // Indicate that character limit is exceeded
    }
});
