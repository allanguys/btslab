<?php
include($_SERVER['DOCUMENT_ROOT'].'/btslab/mysqlconnection.php');
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$About=$_POST['About'];
$em="";
$e=0;
if($username=='' || $password == '' || $email=='')
{
$em="Please Fill all fields";
$e=1;
}
if(strlen($username) < 3)
{
$em=$em."<br/>"."Your Name must be more than 4 characters";
$e=1;
header('Location: register.php?em='.$em);
}
$result=mysqli_query($con,"select * from users where username='$username'") or die(mysqli_error());
if(mysqli_num_rows($result)>0)
{
$e=1;
$em=$em."<br/>"."Username is already taken";
}
if($e==1)
{
header('Location: register.php?em='.$em);
}
else
{
$query="INSERT into users(username, password, email, About,avatar,privilege) values ('$username','$password','$email','$About','default.jpg','user')";
mysqli_query($con,$query) or die(mysql_error());
mysqli_close($con);
header('Location: login.php');
}

?>
