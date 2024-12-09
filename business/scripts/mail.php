<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:" . $name . "<" . $email . ">\r\n";

$recipient = "rdooley5@outlook.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo '

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Linked styles below -->
    <link
      href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Press+Start+2P&family=Teko:wght@300&display=swap"
      rel="stylesheet" />
    <link rel="stylesheet" href="../styles/styles.css" />
    <link rel="stylesheet" href="../styles/queries.css" />
    <link rel="stylesheet" href="../styles/animate.css" />
    <title>Thankyou for contacing me!</title>
  </head>
  <body>
    <!-- NavBar -->
    <nav class="nav">
      <a href="../index.html">
        <img style="max-height: 70px;" class="logo" src="../imgs/rjdlogo.png" alt="Company logo" />
      </a>
      <button class="hamburger" id="hamburger">
        <i class="fas fa-2x fa-bars"></i>
      </button>
      <ul class="navbar" id="nav-list">
        <a class="link" href="../pages/about.html">
          <li class="nav-item">ABOUT ME</li></a
        >
        <a class="link" href="../pages/services.html">
          <li class="nav-item">SERVICES</li></a
        >
        <a class="link" href="../pages/work.html">
          <li class="nav-item">MY WORK</li></a
        >
        <a class="link" href="../pages/contact.html"
          ><li class="nav-item active">GET IN TOUCH</li></a
        >
      </ul>
    </nav>
    <!-- End of Nav -->

    <div class="first-container" style="background-color: black">
      <h1 class="slogan">Thank-you for reaching out to me!</h1>
      <div class="center-words-cont">
        <p class="white-p">I will get back to you as soon as possible.</p>
        <a href="../index.html">
          <input
            class="submit-button"
            type="submit"
            value="Click to return to the homepage"
            style="
              background-color: red;
              font-family: Fjalla One, sans-serif;
            " />
        </a>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-p">RYAN DOOLEY</p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/ryan-dooley-1713541a8/?original_referer="
        ><i style="color: white" class="fa-brands fa-2x fa-linkedin"></i
      ></a>
      <p class="footer-p">WATERLOO, ONTARIO</p>
      <p class="footer-p">ALL RIGHTS RESERVED &copy 2023.</p>
    </footer>

    <!-- Scripts Below -->
    <script
      src="https://kit.fontawesome.com/d2c157295a.js"
      crossorigin="anonymous"></script>
    <script src="../scripts/hamburger.js"></script>
    <script defer src="../scripts/animate.js"></script>
  </body>
</html>




';


?>