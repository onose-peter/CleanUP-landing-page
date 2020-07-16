<?php

$email = filter_input(INPUT_POST, "email");

if (!empty($email)) {


    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "my_database";
}
else {
    echo "Email should not be empty";
    die();
}


//creating connection

$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno .')'
    .mysqli_connect_error());
}
else{
    $sql = "INSERT INTO email_capture (email) 
    value ('$email')";

    if ($conn -> query($sql)){
        echo "New record is inserted";
    }
    else{
        echo "Error: ". $sql ."<br>". $conn->error;
    }
    $conn->close();
}













?>