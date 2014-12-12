  var handler = StripeCheckout.configure({
    key: 'pk_live_ASYn1sdSvyGNAMxVO1pFLjdk',
    image: 'images/mike.png',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });


//reward1
$(document).ready(function(){
  $('#tier1').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'You are donating \u00A31',
      description: 'Thank you!',
      currency: 'gbp',
      amount: 100
    });
    e.preventDefault();
  });
});

//reward2
$(document).ready(function(){
  $('#tier2').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: '2 Down it Tokens',
      description: 'You are donating \u00A35.',
      currency: 'gbp',
      amount: 500
    });
    e.preventDefault();
  });
});

//reward3
$(document).ready(function(){
  $('#tier3').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Get out of jail free card',
      description: 'You are donating \u00A310.',
      currency: 'gbp',
      amount: 1000
    });
    e.preventDefault();
  });
});

//reward4
$(document).ready(function(){
  $('#tier4').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Dominion over Worms',
      description: 'You are donating \u00A315.',
      currency: 'gbp',
      amount: 1500
    });
    e.preventDefault();
  });
});

//reward5
$(document).ready(function(){
  $('#tier5').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'The Vibes Captain',
      description: 'You are donating \u00A315',
      currency: 'gbp',
      amount: 1500
    });
    e.preventDefault();
  });
});

//reward6
$(document).ready(function(){
  $('#tier6').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Be Mike Jones',
      description: 'You are donating \u00A315',
      currency: 'gbp',
      amount: 1500
    });
    e.preventDefault();
  });
});

//reward7
$(document).ready(function(){
  $('#tier7').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Tweak, the Performing Monkeys Token',
      description: 'You are donating \u00A315.',
      currency: 'gbp',
      amount: 1500
    });
    e.preventDefault();
  });
});

//reward8
$(document).ready(function(){
  $('#tier8').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Gecko Master',
      description: 'You are donatinqg \u00A315.',
      currency: 'gbp',
      amount: 1500
    });
    e.preventDefault();
  });
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
  handler.close();
});