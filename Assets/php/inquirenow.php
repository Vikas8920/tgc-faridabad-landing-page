<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize it
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    //$formName = filter_input(INPUT_POST, 'formName', FILTER_SANITIZE_STRING);

    // Validate that email is a valid address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h2>Invalid Input</h2>";
        echo "<p>Please provide a valid email address.</p>";
        exit;
    }

    // Send email to administrator
    $to = "info@tgcfaridabad.com, info@tgcindia.com, faridabad.tgc@gmail.com";  
    $subject = "New Form Submission: Graphic Design - Inquire Now Form, TGC Faridabad";
    $headers = "From: info@tgcfaridabad.com\r\n";
    $headers .= "Reply-To: info@tgcfaridabad.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    $message = "You have received a new form submission.\n\n";
    $message .= "Name: $name\nEmail: $email\nPhone: $phone\nForm Name: $formName";

    if (mail($to, $subject, $message, $headers)) {
        echo "<h2>Form Submitted Successfully</h2>";
        echo "<p>Thank you, $name! Your information has been successfully submitted.</p>";
        // Send confirmation email to the user
        sendConfirmationEmail($name, $email);

        // Redirect to thank-you page before output
        header("Location: https://tgcfaridabad.com/thanks");
        exit; 

    } else {
        echo "<h2>Error Submitting Form</h2>";
        echo "<p>Sorry, there was an error submitting your information. Please try again later.</p>";
    }
}

function sendConfirmationEmail($name, $email) {
    $to = $email;
    $subject = "Thank You for Your Submission";
    $headers = "From: info@tgcfaridabad.com\r\nReply-To: info@tgcfaridabad.com\r\nX-Mailer: PHP/" . phpversion();
    $message = "Dear $name,\n\nThank you for your interest. We have received your submission and will contact you shortly.\n\nBest regards,\nTGC India";

    mail($to, $subject, $message, $headers);
}
?>
