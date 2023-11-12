let cerrarSessionBoton = document.getElementById("cerrarSessionBoton");

cerrarSessionBoton.addEventListener("click", cerrarCookie);

function cerrarCookie(){
    document.cookie = "isLoggedIn=false";
  window.location.href = "index.html";
}