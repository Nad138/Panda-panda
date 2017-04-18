var fotos = document.getElementById("fotos");
for(var i=1;i<5;i++){
  var figure = document.createElement("figure");
  var span = document.createElement("span");
  span.setAttribute("content","x");
  var img = document.createElement("img");
  img.setAttribute("src","assets/img/"+i+".jpg");
  figure.appendChild(img);
  figure.appendChild(span);
  fotos.appendChild(figure);
  }
