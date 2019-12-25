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
  

  $('label').on('click' function(){
    
  })
  // function that finds the answer of questions and tallies them
  $('form').on('submit', function(e){ 
    e.preventDefault();
    const result = $(this).find('input:checked')
    if (result) {
    // targeting the value in the object
    for (let i = 0; i < result.length; i++) {
        rapperTally[result[i].value]++;
      } 
    } 

    // Finding the most tallied rapper and declaring as a variable
    const winner = Object.keys(rapperTally).reduce((a, b) => rapperTally[a] > rapperTally[b] ? a : b);
    if (winner) {
      $('.quizResult').html(`<div id="quizEnd" class="resultContent wrapper"><h2>You Are...</h2><h3>${winningOption[winner].name}</h3><p>${winningOption[winner].description}</p><img src="${winningOption[winner].image}"></div>`);
    } 
    // finish button that smooth scrolls to the end result
      $('html, body').animate({
        scrollTop: $("#quizEnd").offset().top
      }, 1000);

  })

});
