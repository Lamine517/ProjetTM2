var divs = ["page_accueil","gestion_ventes","depenses_recettes"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
   divs[i].style.backgroundColor ="green";
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "block";
      
    } else {
      div.style.display = "none";
    }
  }
}  
