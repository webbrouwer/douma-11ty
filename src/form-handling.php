<?php

if (isset($_POST['g-recaptcha-response'])) {
    $captcha = $_POST['g-recaptcha-response'];
} else {
    $captcha = false;
}

if (!$captcha) {
  // Feedback that captcha is not set
  header('Location: /failed/');
  exit;
} else {
    $secret   = '6LcGoMUZAAAAAO1_BYcR5ODRjad9Ekl2h1W9k2Cf';
    $response = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']
    );
    // use json_decode to extract json response
    $response = json_decode($response);

    if ($response->success === false) {
      // Feedback form sending failed
      header('Location: /failed/');
      exit;
    }
}

//... The Captcha is valid you can continue with the rest of your code
//... Add code to filter access using $response . score
if ($response->success==true && $response->score <= 0.5) {
  // Feedback form sending failed
  header('Location: /failed/');
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

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/plain;charset=UTF-8" . "\r\n";
    $headers .= "From: info@douma-dakdekkers.nl";

    // Create admin mail
    $message = "Nieuwe aanvraag ontvangen van: \n";
    $message .= "Naam: " . $name . "\n";
    $message .= "E-mail: " . $email . "\n";
    $message .= "Tel: " . $phone . "\n";
    $message .= "Dienst: " . $service . "\n";
    $message .= "Vraag: \n" . $comment;

    // Send admin mail
    mail("mickey@mademarketing.nl", "Nieuwe aanvraag", $message, $headers);

    // Create user mail
    $thankYouMessage = "Beste " . $name . ", \n\n";
    $thankYouMessage .= "Bedankt voor uw aanvraag. Wij nemen zo spoedig mogelijk contact met u op. Spoed of direct antwoord op uw vraag? Neem contact op met: 06 - 55 88 70 64. \n\n";
    $thankYouMessage .= "Met vriendelijke groet, \n\n";
    $thankYouMessage .= "Kas Douma \n";
    $thankYouMessage .= "Douma Dakdekkers";

    // Send user mail
    mail($email, "Bedankt voor uw aanvraag!", $thankYouMessage, $headers);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);

  return $data;
}

header('Location: /bedankt/index.html');
