<?php
if(isset($_POST['btn-submit'])){
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  //$message = "Course Name: " . $_POST['course-name'];

  // Send email to info@tgcindia.com
  $to = "info@tgcfaridabad.com, info@tgcindia.com, faridabad.tgc@gmail.com";
  $subject = "New Inquiry Form of 'Graphic Design - Inquire Now Form' From TGC Faridabad";
  $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();
  $mail_body = "Name: $name\nPhone: $phone\nEmail: $email";
  mail($to, $subject, $mail_body, $headers);

  // Send confirmation email to user
  $user_subject = "Query Submitted";
  $user_headers = "From: info@tgcfaridabad.com" . "\r\n" . "Reply-To: info@tgcfaridabad.com" . "\r\n" . "X-Mailer: PHP/" . phpversion();
  $user_mail_body = "Dear $name,\n\nThank you for submitting your query. We will get back to you soon.\n\nBest regards,\nTGC India";
  mail($email, $user_subject, $user_mail_body, $user_headers);

  // Redirect to thank you page
  header('Location:  https://tgcfaridabad.com/thanks');
}

?>