function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


const button = document.getElementById('menu-button');
    const menu = document.getElementById('dropdown-menu');

    button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', (e) => {
      if (!button.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });