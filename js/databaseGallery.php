<?php
//Including database connectoins
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root","", "maakonnad");

//---------------------gallery
$resultG = $conn->query("SELECT * from gallery");
$outpgallery = "";
$outp2 = "";
	while($rs = $resultG->fetch_array(MYSQLI_ASSOC)){
		$outp2 .= '{';
		$outp2 .= '"id":"'.$rs["id"].'",';
		$outp2 .= '"picture":"'.$rs["picture"].'",';
		$outp2 .= '"idCity":"'.$rs["idCity"].'"';
		$outp2 .= '},';
	}
	$outp2 =trim($outp2,',');
$outpgallery = '{"records": ['.$outp2.']}';
$conn->close();

echo($outpgallery);

?>