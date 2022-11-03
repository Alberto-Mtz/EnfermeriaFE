document.getElementById('window-select').style.display = "none";
var seleccion;
var value;

function mostrar(value){
    var selectButton = document.getElementsByName('seleccionar');
    document.getElementById('window-select').style.display = "block";
    seleccion = selectButton[value];
    console.log(seleccion);
}

var close_button = document.getElementById('close-button');

close_button.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("window-select").style.display = "none";
});

function ShowMateria(){
    var text = document.getElementById('materias');
    var materia = text.options[text.selectedIndex].text;

    console.log(materia);
    seleccion.innerHTML = materia;
}

function elegirHorario(value){
    var horas = document.getElementsByName('hora');
    var mañana = new Array('7:00 a 8:00','8:00 a 9:00','9:00 a 10:00','10:00 a 11:00','11:00 a 12:00','12:00 a 13:00','13:00 a 14:00');
    var tarde = new Array('14:00 a 15:00','15:00 a 16:00','16:00 a 17:00','17:00 a 18:00','18:00 a 19:00','19:00 a 20:00','20:00 a 21:00');

    for(var i = 0; i<horas.length; i++){
        if(value == 0){
            horas[i].innerHTML = mañana[i];
        }else if(value == 1){
            horas[i].innerHTML = tarde[i];
        }
    }
}


