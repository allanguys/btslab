<?php
include($_SERVER['DOCUMENT_ROOT'].'/btslab/config.php');
$con=mysqli_connect($db_server,$db_user,$db_password) or die("Connection Failure: ".mysql_error());
mysqli_select_db($con,$db_name);
?>