<?php  
include($_SERVER['DOCUMENT_ROOT'].'/btslab/mysqlconnection.php');
$em="";

if(isset($_POST['Login']))
{

//$username=$con ->real_escape_string($_POST['username']);
//$password=$con ->real_escape_string($_POST['password']);
//
//		$result=mysqli_query($con,"select * from users where username='{$username}' and password='{$password}' ") or die(mysqli_error());;
//
//	    if(mysqli_num_rows($result))
//		{
//		$data=mysqli_fetch_array($result);

//		$username = $_POST['username'];
//		$password = $_POST['password'];
//		$stmt = $con -> prepare("SELECT * FROM users WHERE username=? AND password=?");
//		$stmt -> bind_param("ss", $username, $password);
//		$stmt -> execute();
//	    $result=$stmt ->get_result();
//	var_dump(mysqli_num_rows($result));
//	if(mysqli_num_rows($result)){
//		$data = mysqli_fetch_array($result);

	//select * from users where username='admin' or '1'='1' and password=''


		session_start();
		$_SESSION['isLoggedIn']=1;
		$_SESSION['userid']=$data["ID"];
		$_SESSION['username']=$data["username"];
		$_SESSION['avatar']=$data['avatar'];
		header("Location: index.php");
		}
		else
		{
		$em="Username/Password is wrong";
		}
	
}
include('header.php');
?>

<form action="login_fixed.php" method="post">
<table> 
<tr><td>UserName: </td><td><input type="text" name="username" /></td></tr>
<tr><td>Password :</td><td><input type="password" name="password"/></td></tr>
<tr><td><input type="submit" name="Login" value="Login"/></td></tr>
</table>  
</form>

<?php

echo "<span style='color:red'>".$em."</span>";
include('footer.php'); ?>
