<?php
try {
    $pdo = new pdo ("mysql:host=localhost;dbname=companyprojet","root","");
} catch (Exception $th) {
    die("Erreur".$th->getMessage());
}
if(isset($_POST)){
    $client = $_POST['users'];
    $date = $_POST['date'];
    $montantT = $_POST['montant'];
    $achat = $_POST['cpt'];
    $avance = $_POST['avance'];
    $reste_a_Payer = $_POST['reste'];
    $qte = $_POST['quantite'];
    $article = $_POST['article'];
    $pUnitaire = $_POST['prixUnitaire'];
    $pTotal = $_POST['prixTotal'];
    

    $insert = "INSERT INTO commandes(id_client,date_livraison,montantTotal,achat,avance,reste_a_Payer,qte,article,pUnitaire,pTotal) VALUES (:prenom_nom,:date_livraison,:montantTotal,:achat,:avance,:reste_a_Payer,:qte,:article,:pUnitaire,:pTotal)";
    $result = $pdo->prepare($insert);
    $result->execute([$client,$date,$montantT,$achat,$avance,$reste_a_Payer,$qte,$article,$pUnitaire,$pTotal]);
				// mysql_query("INSERT INTO people (nom, prenom, adresse, zip, ville, telephone, email, created_on, updated_on) VALUES ( '".utf8_decode($nom)."', '".utf8_decode($prenom)."', '".utf8_decode($adresse)."', '".utf8_decode($zip)."', '".utf8_decode($ville)."', '".utf8_decode($telephone)."', '".utf8_decode($email)."', '".$datetime."','".$datetime."')");
	} else { 
		header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
		exit();
	}
 