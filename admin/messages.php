<?php 
if(!isset($_SESSION))
{
session_start();
}
 
include($_SERVER['DOCUMENT_ROOT'].'/btslab/header.php'); 
include($_SERVER['DOCUMENT_ROOT'].'/btslab/mysqlconnection.php');

if(isset($_REQUEST['msgid']))
{
	$msgid=$_REQUEST['msgid'];

	$result=mysqli_query($con,"select * from Messages where msgid=".$msgid) or die(mysql_error());
	$row=mysqli_num_rows($result);
	if($row>=1)
	{
	echo "</br></br>Message: </br>";
	 
		while($row=mysqli_fetch_array($result))
		{
			echo "Sender: ".$row['name']."<br/>";
			echo "Email: ".$row['email']."<br/>";
			echo "Message: ".$row['msg']."<br/>";
			
		}
	 
	}
	 
}

?>
 </br>
<a href="MessageList.php"> Back to Messages List</a>
<?php include($_SERVER['DOCUMENT_ROOT'].'/btslab/footer.php');  ?>
