// Business Logic
  // if we have a number of conditions that will be evaluated, the first behavior is what will ultimately be the else statement when none of the conditions are true.
  // the first behavior is for a year that is NOT a leap year which means it is not divisible by 4, 100 or 400.
var leapYear = function(year) {
  console.log(year);
  if (isNaN(year) || year.toString().length > 4) {  // error handling
    return 'nope';
  } else if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}  // Instead of returning a boolean from the leapYear() function, we could have returned the string year + " is a leap year." or year + " is not a leap year.". Then we could have simply replaced the text in the output div with that string. Arguably that would have been simpler, but this seriously mixes up the role of business logic and user interface logic. If we wanted to change the user interface later, we would have to go back and modify the business logic code in order to change what will appear on the screen.

// User Interface Logic
$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var year = parseInt($('input#year').val());
    var result = leapYear(year);  // we'll use leapYear(year) later, in our Business logic
    var enterYear = '<h4 class="red empty">Please enter in just a year consisting of 4 integers!</h4>';

    $('.year').text(year);
    $('#result').show();

    if (result === 'nope') {
      $('#result h4').remove();
      $('#result').append(enterYear);
    } else if (result === false) {
      $('.not').text('not');
    } else {
      $('.not').text('');
    }



  });







  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});
