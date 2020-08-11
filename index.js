

var database=firebase.database();
var infoPersonal=database.ref ('infoPersonal/');
infoPersonal.once('value',function (snapshot) {
    var info = snapshot.val()
    console.log(info)

    $(".nombre").text(info.nombre)
    $(".apellido").text(info.apellido)
    $(".telefono").text(info.telefono)
    $(".mail").text(info.mail)
});

var expLaboral= database.ref('expLaboral/');
expLaboral.once('value',function(snapshot) {

    var exp = snapshot.val()
    cadena=""
    for (var i in exp){
        var elem = exp[i]
        cadena+="<li>"
        cadena+="<strong>Empresa:</strong>" + elem.empresa 
        cadena+="<br>"
        cadena+="<strong>Tareas:</strong>"+ elem.Tareas
        cadena+="<br>" 
        cadena+="<strong>Desde:</strong>" + elem.desde
        cadena+="<br>"
        cadena+="<strong>Hasta:</strong>" + elem.hasta
        cadena+="<br>"
        cadena+="</li>"
    }
    $(".expLaboral").html(cadena)
}

)

var formacionAcademica= database.ref('formacionAcademica/');
formacionAcademica.on('value',function(snapshot) {

    var form= snapshot.val()
    cadena=""
    for (var i in form){
        var elem = form[i]
        cadena+="<li>"
        cadena+= "<strong>Academia:</strong> " + elem.academia
        cadena+="<br>"
        cadena+="Desde: " + elem.desde
        cadena+="<br>"
        cadena+="Hasta: " + elem.hasta
        cadena+="<br>"
        cadena+="</li>"
    }
    $(".formacionAcademica").html(cadena)
}

)
$(".btnguardar").click((ev)=>{
    const key = database.ref('contacto/').push().key
     var data={
         nombre:$(".name").val(),
         email:$(".email").val(),
         telefono:$(".telef").val(),
         comentario:$(".coment").val(),
         id:key
     }
         database.ref('contacto/' + data.id).set(data);
    
     
 })



 
 
 