// const yesBtn = document.querySelector('#yesBtn');

// yesBtn.addEventListener('click',function () {
//     alert('SABIA QUE DIRIAS SI')
//     alert('ME HACES LA PERSONA MAS FELIZ')
// });

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
} )

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


document.addEventListener("DOMContentLoaded", function() {
    const hearts = document.querySelectorAll(".heart");
    const positions = [];

    hearts.forEach(heart => {
        let validPosition = false;
        let top, left;

        while (!validPosition) {
            // Calcula posiciones aleatorias
            top = Math.random() * (window.innerHeight - heart.clientHeight);
            left = Math.random() * (window.innerWidth - heart.clientWidth);

            // Verifica si la posición es válida (no se superpone)
            validPosition = !positions.some(pos => {
                return (
                    left < pos.left + heart.clientWidth &&
                    left + heart.clientWidth > pos.left &&
                    top < pos.top + heart.clientHeight &&
                    top + heart.clientHeight > pos.top
                );
            });
        }

        // Guarda la posición
        positions.push({ top, left });

        // Aplica la posición a la imagen
        heart.style.top = `${top}px`;
        heart.style.left = `${left}px`;
    });
});



