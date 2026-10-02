document.addEventListener("DOMContentLoaded", ()=>{
    const menuResponsivo = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click", ()=>{
        navMenu.classList.toggle("active")
    })
}); //fechamento do evento carrregar página html