var form = document.getElementById('compras');
var userFld = form.elements['caso'];

if ( window.addEventListener ) { // avoid errors in incapable browsers
    form.addEventListener('submit', checkOnSubmit, true);
    userFld.addEventListener('focus', showUserInfo, false);
    userFld.addEventListener('blur', checkUserInfo, false);
}


function checkOnSubmit(e) {
    var fld;
    
    // check user
    fld = this.elements['caso'];
    console.log(fld.value);
    if ( fld.value == "noCart" || fld.value == "0" ) {
        alert( 'You have no items in your cart');
        fld.focus();
        e.preventDefault();
    }
    
}

function showUserInfo(e) {
    //alert(e.type); // access event properties
    //var form = this.form; // to access form 
    //var terms = form.elements['terms']; // acccess other form elements
    //alert(terms.value);
    
    this.className = 'active'; // display span with validation info
}

function checkUserInfo(e) {
    this.className = '';
    
    if ( this.value == "noCart" || this.value == "0"  ) {
        this.className = 'error';
    }
}












/* function validateForm() {
    var x = document.forms["compras"]["caso"].value;
    console.log(x);
    if (x == "noCart" || x == "initial" ) {
      alert("No posee productos agregados al carrito");
      return false;
    }
  } */