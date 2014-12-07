  var handler = StripeCheckout.configure({
    key: 'pk_test_tMYhXmZ6NqCmbbMjjcjg9mOK',
    image: 'images/mike.png',
    token: function(token) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

$(document).ready(function(){
  $('#thing').on('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Give uz a quid m8',
      description: 'Thank yo!',
      amount: 10
    });
    e.preventDefault();
  });
});
  // Close Checkout on page navigation
  $(window).on('popstate', function() {
    handler.close();
  });