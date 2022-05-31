function responder(idPalavra) {
    for (var i = 0; i < document.getElementsByClassName("inpC").length; i++) {
        document.getElementsByClassName("inpC")[i].style.display = "none"
    }
    var idInp = "id_" + idPalavra + "input"
    document.getElementById(idInp).style.display = "flex"
}

function mudar(inp) {
    var idInp = document.getElementById("id_" + inp + "input")
    var idPalavra = document.getElementById("id_" + inp + "resp")
    for(var i = 0; i < idInp.value.length; i++) {
        document.getElementById(inp+i).innerHTML = idInp.value.toUpperCase()[i]
    }
    if (idInp.value.toUpperCase() == idPalavra.innerHTML.toUpperCase()) {
        idPalavra.style.color = "lightgreen"
        idInp.style.backgroundColor = "lightgreen"
        setTimeout(() => {
            idInp.style.opacity = "0" 
        }, 500);
        setTimeout(() => {
            idInp.style.display = "none"
        }, 1000);
    }
}