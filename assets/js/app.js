var fotos = document.getElementById("fotos");
fotos.setAttribute("display","block");
for(var i=1;i<5;i++){
  var figure = document.createElement("figure");
  var span = document.createElement("span");
  span.setAttribute("content","X");
  var img = document.createElement("img");
  img.setAttribute("src","assets/img/"+i+".jpg");
  figure.appendChild(img);
  figure.appendChild(span);
  fotos.appendChild(figure);
  }

  function fotos(){
    var pandas = document.getElementById("fotos");
    if(fotos.display=none){
      fotos.display=inline;
    }
    else{
      fotos.display=none;
    }
  }
  var restaurar =document.getElementById("restaurar");
  restaurar.addEventListener("onclick", fotos());
