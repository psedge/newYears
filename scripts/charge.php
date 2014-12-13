<?php
/**
The MIT License (MIT)

Copyright (c) 2014 Peter Sedgewick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Peter Sedgewick, TotoMoto
@ 13/12/2014 10:19
*/

require_once('Stripe.php');

$liveMode = false;

$response = array(
    'is_mike_jones_sexxy' => 'true',
    'is_new_years_going_to_be_kickass' => 'true',
);

if (isset($_POST['token']) && is_string($_POST['token']) && isset($_POST['amount']) && is_numeric($_POST['amount'])) {
    $token = $_POST['token'];
    $amount = $_POST['amount'];
    //FIll in the correct API KEYS HERE. FIRST THE LIVE SECRET, THEN THE TEST SECRET.
    $apiKey = $liveMode ? '' : '';
    Stripe::setApiKey($apiKey);
    try {
        Stripe_Charge::create(array(
            "amount" => $amount,
            "currency" => "gbp",
            "card" => $token,
            "description" => "Happy New Years from the Vaseys <3"
        ));
    } catch (Stripe_CardErrors $e) {
        $response['message'] = $e->getMessage();
        $response['error_type'] = 'stripe';
    } catch (Exception $e) {
        $response['message'] = $e->getMessage();
        $response['error_type'] = 'core';
    }
    $response['status'] = 'success';
} else {
    $response['status'] = 'failed';
    if (!isset($_POST['token']) OR !is_numeric($_POST['token'])) {
        $response['reason'] = 'Token not posted in correct format, or at all for that matter.';
    }
    if (!isset($_POST['amount']) OR !is_numeric($_POST['amount'])) {
        $response['reason'] = 'Amount not posted in correct format, or at all for that matter.';
    }
}

echo json_encode($response);
die();
