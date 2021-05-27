      
    $(document).ready(function(){
        $(".add-row").click(function(){
            var quantite = $("#quantite").val();
            var article = $("#article").val();

            var prixUnitaire = $("#prixUnitaire").val();

            var prixTotal= $("#prixTotal").val();
            
            var markup = "<tr><td> <div class='col-2'><label class='form-label mt-0'>Quantite</label> <input type='text' name='record' placeholder='Quantite' value="+quantite+"> </div></td>              <td> <div class='col-3'><label class='form-label mt-0'>Article</label> <input type='text' name='record' placeholder='Article' value="+ article +"> </div></td>                  <td> <div class='col-2'><label class='form-label mt-0'>PU</label> <input type='text' name='record' placeholder='Prix Unitaire' value="+prixUnitaire+"> </div></td>               <td> <div class='col-3'><label class='form-label mt-0'>Prix Total</label> <input type='text' name='record' placeholder='Prix Total'  value="+prixTotal+"> </div></td>     <td><div class='form-group'><a href='#'><input type='checkbox' name='record'><i class='fa fa-trash'></i> </a><i class='fa fa-edit'></i>   <i class='fa fa-save'></i></div></td> </tr>";
            $("table tbody").append(markup);
        });
        
        // Find and remove selected table rows
        $("#delete-row").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
                if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });  


    function showUser(str)
    {
        if (str=="")
          {
          document.getElementById("txtHint").innerHTML="";
        //   return;
          }
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
          if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
            document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
            }
          }
        xmlhttp.open("GET","server/client.php?q="+str,true);
        xmlhttp.send();
    }
//envoyer des donnes dans la bd
    function sendData()
    {
    var id_client = document.getElementById("prenom_nom").value;
    var date_livraison = document.getElementById("date").value;
    var montantT = document.getElementById("montant").value;
    var achat = document.getElementById("cpt").value;
    var avance = document.getElementById("avance").value;
    var reste_a_Payer = document.getElementById("reste").value;
    var qte = document.getElementById("quantite").value;
    var article = document.getElementById("article").value;
    var pUnitaire = document.getElementById("prixUnitaire").value;
    var pTotal= document.getElementById("prixTotal").value;
    $.ajax({
        type: 'post',
        url: 'server/client.php',
        data: {
            id_client:prenom_nom,
            date_livraison:date_livraison,
            montantTotal:montantTotal,
            achat:achat,
            avance:avance,
            reste_a_Payer:reste_a_Payer,
            qte:qte,
            article:article,
            pUnitaire:pUnitaire,
            pTotal:pTotal
        },
        success: function (response) {
        $('#res').html("Vos données seront sauvegardées");
        }
    });
        
    return false;
    }