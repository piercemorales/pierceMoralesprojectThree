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
  
  // restarts the quiz
  $('a.reset').on('click', function () {
    location.reload();
    $('html,body').scrollTop(0);
  });
  

  
  
  // calling the rapper object list
  // console.log(rapperTally);

  
  // function that finds the answer of questions and tallies them
  $('form').on('submit', function(e){ 
    e.preventDefault();
    const result = $(this).find('input:checked')
    if (result) {
    // targeting the value in the object
    for (let i = 0; i < result.length; i++) {
      // console.log(result[i].value);
        rapperTally[result[i].value]++;
     } 
    } 
    $('form').on('submit'), function(){
      $('html,body').scrollBottom(0);

    }


    // Finding the most tallied rapper and declaring as a variable
    const winner = Object.keys(rapperTally).reduce((a, b) => rapperTally[a] > rapperTally[b] ? a : b);
    if (winner) {
      $('.quizResult').html(`<div id="quizEnd" class="resultContent wrapper"><h2>You Are...</h2><h3>${winningOption[winner].name}</h3><p>${winningOption[winner].description}</p><img src="${winningOption[winner].image}"></div>`);
    } 
     

  

  })
});
