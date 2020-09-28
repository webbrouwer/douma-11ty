<?php

if (isset($_POST['g-recaptcha-response'])) {
    $captcha = $_POST['g-recaptcha-response'];
} else {
    $captcha = false;
}

if (!$captcha) {
  header('Location: /contact/');
  exit;
} else {
    $secret   = 'Your secret key here';
    $response = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']
    );
    // use json_decode to extract json response
    $response = json_decode($response);

    if ($response->success === false) {
      header('Location: /contact/');
      exit;
    }
}

//... The Captcha is valid you can continue with the rest of your code
//... Add code to filter access using $response . score
if ($response->success==true && $response->score <= 0.5) {
  header('Location: /contact/');
  exit;
}

// define variables and set to empty values
$name = $email = $phone = $service = $comment = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $phone = test_input($_POST["phone"]);
    $service = test_input($_POST["service"]);
    $comment = test_input($_POST["comment"]);

    // send email
    mail("mickey@mademarketing.nl", "Nieuwe aanvraag", $message);
}

$message = 'Naam: ' . $name;

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

header('Location: /bedankt/index.html');
