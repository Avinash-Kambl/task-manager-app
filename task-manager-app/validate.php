<?php
$email = $_POST['email'];
$mobile = $_POST['mobile'];

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Invalid email format.";
  exit;
}

if (!preg_match("/^[6-9]\d{9}$/", $mobile)) {
  echo "Invalid mobile number.";
  exit;
}

echo "Valid";
?>
