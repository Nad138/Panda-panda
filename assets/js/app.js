var fotos = document.getElementById("fotos");
for(var i=1;i<5;i++){
  var img = document.createElement("img");
  img.setAttribute("src","assets/img/"+i+".jpg");
  fotos.appendChild(img);
  }
