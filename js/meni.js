let podfolder = window.location.pathname.includes("/istorija/") ||
                window.location.pathname.includes("/vladari/") ||
                window.location.pathname.includes("/vojska/") ||
                window.location.pathname.includes("/civilizacija/") ||
                window.location.pathname.includes("/arhitektura/") ||
                window.location.pathname.includes("/umetnost/") ||
                window.location.pathname.includes("/galerija/") ||
                window.location.pathname.includes("/izvori/");


let putanja = podfolder ? "../meni.html" : "meni.html";


fetch(putanja)
.then(response => response.text())
.then(data => {

    let meni = document.getElementById("meni");

    if(meni){

        meni.innerHTML = data;


        if(podfolder){

            let linkovi = meni.querySelectorAll("a");


            linkovi.forEach(link => {

                let href = link.getAttribute("href");


                if(href && !href.startsWith("../") && !href.startsWith("#")){

                    link.setAttribute("href", "../" + href);

                }

            });

        }

    }

});