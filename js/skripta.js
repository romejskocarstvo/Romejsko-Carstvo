/* ==========================================================
   РОМЕЈСКО ЦАРСТВО
   JavaScript v1.0
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    napraviDugmeNaVrh();

});


/* ==========================================================
   ДУГМЕ "НАЗАД НА ВРХ"
========================================================== */

function napraviDugmeNaVrh() {

    const dugme = document.createElement("button");

    dugme.id = "nazadNaVrh";
    dugme.innerHTML = "▲";

    document.body.appendChild(dugme);

    dugme.style.position = "fixed";
    dugme.style.right = "25px";
    dugme.style.bottom = "25px";
    dugme.style.width = "50px";
    dugme.style.height = "50px";
    dugme.style.border = "none";
    dugme.style.borderRadius = "50%";
    dugme.style.background = "#D4AF37";
    dugme.style.color = "#ffffff";
    dugme.style.fontSize = "22px";
    dugme.style.cursor = "pointer";
    dugme.style.display = "none";
    dugme.style.zIndex = "9999";
    dugme.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            dugme.style.display = "block";
        } else {
            dugme.style.display = "none";
        }

    });

    dugme.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}