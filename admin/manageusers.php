<?php 
include($_SERVER['DOCUMENT_ROOT'].'/btslab/header.php');
 
include($_SERVER['DOCUMENT_ROOT'].'/btslab/mysqlconnection.php');

if(isset($_POST['delete']))
{
mysqli_query($con,"Delete from users where username='".$_POST['user']."'");
}

?>
	
<form action="manageusers.php" method="POST">		

<?php		
$result=mysqli_query($con,"select * from users where privilege='user'") or die(mysql_error());
$row=mysqli_num_rows($result);
if($row>=1)
{
echo "</br></br>List of Registered users: </br>";
while($row=mysqli_fetch_array($result))
{

echo "<input type='radio' name='user' value='{$row['username']}'/> ".$row['username']."<br/>";
}
}
else
{
echo "No register users : Please register first";
}
?>
<br/>
<input type="submit" value="Delete" name="delete"/>

</form>
<br/>
<a href="admin.php"> Back to Admin Panel</a>
<?php include($_SERVER['DOCUMENT_ROOT'].'/btslab/footer.php');  ?>
