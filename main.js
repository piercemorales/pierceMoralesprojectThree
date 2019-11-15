  // MVP(Minimum Viable Product) Goals *
    // The quiz loads a prompt for users name
    // userName shall be saved in variable for the end
    // quiz generates 5 sets of questions
    // user chooses an option and eliminates others 
    // quiz runs through users input
    // quiz tailors a rapper who the user would be



    // Stretch Goals *
    // animations to go along with rappers pictures
    // sounds to go along with end result
    // add more rappers and questions
    // revise the point system




// SAFI SYSTEM
// point system
// 3 rappers 3 questions add up totals

// each rapper tallies points
// kanye 1-3, drake 4-6, chance, 7,8,9






// NEW AND IMPROVED
// tally system 
// the questions provided are each tailored towards one rapper
// Each response will then be tallied to the rapper; ie - Fastfood = mcdonalds --- 1 tally towards chance the rapper
// randomize for tie 







// Pseudocode
// On load - there will be a prompt for an input for the user to enter their name
// userName will be saved for the end result
// The game starts by generating 5 sets of questions with multiple choice answers
$(document).ready(function () {

  const rapperTally = {
    drizzyD: 0,
    kanyeW: 0,
    nickiM: 0,
    postM: 0,
    snoopD: 0
  }

  
  // calling the rapper object list
  // console.log(rapperTally);

  
  $('form').on('submit', function(e){ 
    e.preventDefault();
    let answer = $(this).find('input:radio:checked').attr('data-rapper');
    console.log(answer)


  })
});

// Each question has 4 multiple choice options the user is able to choose.



// The questions will consist of different types of topics; ie (Where would you go for dinner, political views, genre of rap)

// Responses will be based off a point system with each question tallied to a specific rapper

// User can only choose 1 option out of the 4

// The inputs taken from the user will then return the input provided

// the results are based off various rappers personality types and lifestyle       - researched through the internet


// After all questions are answered the user is able to click 'submit' button
    // If any questions were missed, user will be reminded to answer all questions before being able to submit the quiz
    // required attribute

// Depending on the user input/choice the quiz will tally the total answers towards the rapper


// the rapper with the most tallies will be the users end result
  // randomize if the user ends with a tie between two rappers
// It will then generate a page with userName, matched along with a picture of appointed rapper


// tally system example:
// kanye: 3
// drake: 2
// chance: 5
