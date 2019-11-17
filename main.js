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
  };

  const winningOption = {
    drizzyD: {
      name: "Drake",
      description: "You are Drake! You're extremely loyal and sentimental. You ride or die for your city and cry in public about past relationships. You also have a son that you kept hidden from everyone",
      image: "assets/drake.png"
    },
    kanyeW: {
      name: "Kanye West",
      description: "You are Kanye West! You're very down to earth and easy going - you don't care what others think about you. You also hang out with Donald Trump",
      image: "assets/kanye.png"
    },
    nickiM: {
      name: "Nicki Minaj",
      description: "You are Nicki Minaj! You're extremely influential towards other people and are not afraid to put yourself out there! You are easy to get along with however you're not someone to be messed with! You also assume people can't spell prague.",
      image: "assets/nickiminaj.png"
    },
    postM: {
      name: "Post Malone",
      description: "You are Post Malone! You're super laid back and easy to get along with. You are the type to invite everyone over for a BBQ on a nice Saturday afternoon. You drink beer in the morning instead of coffee.",
      image: "assets/postmalone.png"
    },
    snoopD: {
      name: "Snoop Dogg",
      description: "You are Snoop Dogg! You're very outgoing and relaxed, you get along with almost everybody. You love to hang out in the sun and prefer to stay at home rather than go out to clubs to have fun.",
      image: "assets/snoopdogg.png"
    }
  };



  // smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  });

  
  
  // calling the rapper object list
  // console.log(rapperTally);

  
  // function that finds the answer of questions and tallies them
  $('form').on('submit', function(e){ 
    e.preventDefault();
    let result = $(this).find('input:checked')


    // targeting the value in the object
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].value);
        rapperTally[result[i].value]++;
    }

    let winner = Object.keys(rapperTally).reduce((a, b) => rapperTally[a] > rapperTally[b] ? a : b);
    console.log(`You got ${winner}`);
    if (winner) {
      $('.endResult').html(`<p>You got ${winningOption[winner]}`)
    }

    // let winnerNumber = Number(rapperTally);
    // console.log(winnerNumber)




  

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
