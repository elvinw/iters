<?php

// Login Info
$servername = "localhost";
$username = "sql_admin";
$password = "w6PsPx7exHD6zVTF";
$dbname = "itersdba";

// Establishing connection...

$connection = mysqli_connect($servername, $username, $password, $dbname);

if (!$connection) {
  die('Could not connect: ' . mysql_error());
} else {
  echo "connected";
}

// Scrubbing data...
// include 'sanitize.php';

//Fetching Values from URL
$name2=$_POST['name'];
$email2=$_POST['email'];
$subject2=$_POST['subject'];
$message2=$_POST['message'];

//Insert query
$insertquery = "INSERT INTO form_element (name, email, subject, message) VALUES ('$name2', '$email2', '$subject2', '$message2')";


if (mysqli_query($connection, $insertquery)) {
  echo 'new record entered';
} else {
  echo 'error';
}

mysqli_close($connection);

?>
