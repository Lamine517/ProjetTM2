<?php

try {
    $pdo = new pdo ("mysql:host=localhost;dbname=companyprojet","root","");
} catch (Exception $th) {
    die("Erreur".$th->getMessage());
}

$articles = "SELECT * FROM articles";
$result = $pdo->prepare($articles);
$result->execute();

$tableau = array();
while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    $tableau[] = array("id"=> $row["id"],"name"=> $row["name"],"description"=> $row["description"],"age"=> $row["age"],"nickname"=> $row["nickname"],"employe"=> $row["employe"]);
}
echo json_encode($tableau);


