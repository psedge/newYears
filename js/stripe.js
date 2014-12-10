  var handler = StripeCheckout.configure({
    key: 'pk_test_tMYhXmZ6NqCmbbMjjcjg9mOK',
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
      name: 'You are donating 1 whole pound',
      description: 'Thank you!',
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
      description: 'You are donating 5 whole pounds.',
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
      description: 'You are donating 10 whole pounds.',
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
      description: 'You are donating 15 whole pounds',
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
      description: 'You are donating 15 whole pounds',
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
      description: 'You are donating 15 whole pounds',
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
      description: 'You are donating 15 whole pounds',
      amount: 1500
    });
    e.preventDefault();
  });
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
  handler.close();
});