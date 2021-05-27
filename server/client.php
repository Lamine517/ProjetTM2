<?php
try {
    $pdo = new pdo ("mysql:host=localhost;dbname=companyprojet","root","");
} catch (Exception $th) {
    die("Erreur".$th->getMessage());
}

$q = $_GET["q"];
if($q == true){
    
    $sql = "SELECT id,prenom,nom FROM users WHERE id ='".$q."'";
    $result = $pdo ->prepare($sql);
    $result->execute();

    while($row = $result->fetch(PDO::FETCH_ASSOC))
    {
        echo "<label>"."<h6>Nouvelle Commande Client N°:".$row['id']." ".$row['prenom']." ".$row['nom']."</h6></label><hr>";
        
    }
}else{
    echo "<h6 style='color:red'>Aucune personne n'est selectionnée</h6>";
}

    $con = null;