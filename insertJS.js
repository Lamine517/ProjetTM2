$(function() {
$(".btn").click(function() {
    
    var client = $("#users").val();
    var date = $("#date").val();
    var montantT  = $("#montant").val();
    var achat = $("#cpt").val();
    var avance = $("#avance").val();
    var reste_a_Payer = $("#reste").val();
    var qte = $("#quantite").val();
    var article = $("#article").val();
    var pUnitaire = $("#prixUnitaire").val();
    var pTotal = $("#prixTotal").val();
    
     
    /* DATASTRING */
    var dataString ='users='+ client + '&date='+ date +'&montant='+ montantT  + '&cpt='+ achat +'&avance='+ avance + '&reste='+ reste_a_Payer +'&quantite='+ qte+ '&article='+ article +'&prixUnitaire='+ pUnitaire + '&prixTotal='+ pTotal;
 
    if(client=='' || article=='') {
    $('.success').fadeOut(200).hide();
    $('.error').fadeOut(200).show();
    
    } else {
    $.ajax({
        type: "POST",
        url: "server/insert.php",
        data: dataString,
            success: function(){
                $('.success').fadeIn(200).show();
                $('.error').fadeOut(200).hide();
                }
            });
                }//EOC
        return false;
    }); //EOF    
});
    
    