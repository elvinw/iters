<?php
$connection = new mysqli('localhost', 'sql_admin', 'JTQfHb3uXG9mSqua', 'itersdba');

// Establishing connection with SQL server...

if (!$connection) {
  die('Could not connect: ' . mysql_error());
} else {
  echo "connected";
}


//Fetching Values from URL
$name2=$_POST['name'];
$email2=$_POST['email'];
$subject2=$_POST['subject'];
$message2=$_POST['message'];

//Insert query
$insertquery = 'INSERT INTO form_element(name, email, subject, message) VALUES ('$name2', '$email2', '$subject2', '$message2')';
if (mysqli_query($connection, $insertquery)) {
  echo 'new record entered';
} else {
  echo 'error';
}

mysqli_close($connection);

?>
