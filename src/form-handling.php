<?php

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
