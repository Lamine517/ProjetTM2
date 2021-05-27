$.post('server/traitement.php', (data)=> {

})
$.get('server/recup.php', function(data) {
    var donnees = JSON.parse(data);
    donnees.forEach(function (el) {
        $('#body').append(ligneTableau(el));
    });
    // console.log(donnees);
});
function ligneTableau(donnees) {
    return '<tr>' +
            '<td>' + donnees.id + '</td>' +
            '<td>' + donnees.name + '</td>' +
            '<td> ' + donnees.description + '</td>' +
            '<td> ' + donnees.age + '</td>' +
            '<td> ' + donnees.nickname + '</td>' +
            '<td> ' + donnees.employe + '</td>' +
            '<td> ' +  "<a href='#>'<i class='fa fa-edit m-2'></i> </a> " + "<a href='#>'<i class='fa fa-eye m-2'></i></a>  " + "<a href='#>'<i class='fa fa-trash-alt m-2'></i></a>  "  + '</td>' +
            '</tr>';
}
//cote client
$.get('server/client.php', function(data){
    var client = JSON.parse(data);
    client.forEach(function(list){
        $('#txtHint').append(ligneClient(list));
    });
});
function ligneClient(client){
    return '<label>'+
                 'Nouvelle commande' + client.id + client.prenom + client.nom +
            '</label>';
            
}