var modal = document.querySelector('.modal-window');
var modalToggle = document.querySelector('.modal-toggle');

modalToggle.onclick = function() {
  setTimeout(function(){
    modal.style.display = "none";
  }, 5000);
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


