var handler = StripeCheckout.configure({
    key: 'pk_live_ASYn1sdSvyGNAMxVO1pFLjdk',
    //key: 'pk_test_tMYhXmZ6NqCmbbMjjcjg9mOK',
    image: 'images/mike.png',
    token: function(token) {
        $.post('scripts/charge.php', {token: token.id, amount: amount, meta: meta}, function(response) {
            var resp = JSON.parse(response);
            if (resp.status == 'success') {
                //Do something for sucecss
                alert('Payment Successful');
            } else {
                //Do something for failure
                alert('Payment Failed')
            }
        })
    }
});

var amount = 0;
var meta = '';

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
        amount = 100;
        meta = 'Donation';
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
        amount = 500;
        meta = 'Down it Tokens';
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
        amount = 1000;
        meta = 'Out-of-Jail card';
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
        amount = 1500;
        meta = 'Dominion over Worms';
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
        amount = 1500;
        meta = 'Captain d\'Vibes';
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
        amount = 1500;
        meta = 'Mike Jones ';
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
        amount = 1500;
        meta = 'Tweak performance';
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
        amount = 1500;
        meta = 'Gecko Master';
        e.preventDefault();
    });
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
    handler.close();
});