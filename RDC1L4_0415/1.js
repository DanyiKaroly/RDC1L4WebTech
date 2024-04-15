document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("inputField");
    const paragraphs = document.querySelectorAll("p");
    const link = document.getElementById("link");

    // A beviteli mezőre kattintva elrejtjük a két bekezdést
    inputField.addEventListener("click", function() {
        paragraphs.forEach(paragraph => {
            paragraph.style.display = "none";
        });
    });

    // A linkre kattintva megjelenik a weboldal
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Megakadályozza a link alapértelmezett működését
        paragraphs.forEach(paragraph => {
            paragraph.style.display = "block";
        });
    });
});
