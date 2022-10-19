<?php
//Including database connectoins
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root","", "maakonnad");
//-------------------city
$result = $conn->query("SELECT * from city");
$outpmaakond = "";
$outp = "";
	while($rs = $result->fetch_array(MYSQLI_ASSOC)){
		$outp .= '{';
		$outp .= '"id":"'.$rs["id"].'",';
		$outp .= '"name":"'.$rs["name"].'",';
		$outp .= '"people":"'.$rs["people"].'",';
		$outp .= '"text":"'.$rs["text"].'",';
		$outp .= '"idMaakond":"'.$rs["idMaakond"].'",';
		$outp .= '"photo":"'.$rs["photo"].'"';
		$outp .= '},';
	}
	$outp =trim($outp,',');
$outpmaakond = '{"records": ['.$outp.']}';
$conn->close();

echo($outpmaakond);

?>