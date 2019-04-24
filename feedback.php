<?php
  $name = htmlspecialchars($POST['first_name']);
  $email = htmlspecialchars($POST['email']);
  $telephone = htmlspecialchars($POST['telephone']);
  $subject = htmlspecialchars($POST['subject']);
  $comments = htmlspecialchars($POST['comments']);
  if ($name == '' || $email == '' || $telephone == '' || $subject == '' || $comments == '') {
      echo 'field required';
      exit;
  }
  $subject = "=?utf-8?B?".base64_encode($subject)."?=";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
  if (mail("ajaxpeledonna@gmail.com", $subject, $message, $headers))
    echo "Message sent";
  else {
      echo "Message not sent";
  }
?>