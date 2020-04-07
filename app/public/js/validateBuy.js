document.addEventListener('DOMContentLoaded', function(){
document.forms["compras"].addEventListener('submit', validateForm());
});


function validateForm() {
    var x = document.forms["compras"]["caso"].value;
    console.log(x)
    if (x == "noCart" || x == "initial" ) {
      alert("No posee productos agregados al carrito");
      return false;
    }
  }