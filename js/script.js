function change(element){
    var d = document.getElementById('d1');
    d.className = "have-img";
    d.style.backgroundImage = "url('" + element.src +"')";

    document.getElementById('alt-text').innerText = element.alt
}

function setDefault(){
    document.getElementById('d1').className = "default";
    document.getElementById('d1').style.backgroundImage = "";
    document.getElementById('alt-text').innerText = "img alt here";
}