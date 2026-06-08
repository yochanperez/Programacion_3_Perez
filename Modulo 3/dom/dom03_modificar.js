document.addEventListener("DOMContentLoaded",
    function() {
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = "Texto Modificado desde JavaScript";
        console.log("Mensaje:", mensaje);

        const link = document.getElementById("link");
        link.textContent = "www.google.com";
        link.href = "https://www.google.com";
        link.classList.add("boton");
        console.log("Link:", link);

    }
);
