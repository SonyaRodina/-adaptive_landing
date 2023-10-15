function myFunction() {
  document.getElementById ("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.querySelector('.dropdown-content');
  
      if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
      }
    }
  }
