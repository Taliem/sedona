document.addEventListener("DOMContentLoaded", ready)

function ready() {
    document.querySelector(".menu-btn")
        .addEventListener("click", toogleMenu)
}

function toogleMenu() {
    const useSvgNode = document.querySelector("#toggle-menu__icon");
    const hrefId = useSvgNode.getAttribute("xlink:href");
    const menuList = document.querySelector(".menu-list")

    if (hrefId === "#menu-burger")
        useSvgNode.setAttribute("xlink:href", "#menu-close")
    if (hrefId === "#menu-close")
        useSvgNode.setAttribute("xlink:href", "#menu-burger")
    
    menuList.classList.toggle("menu-list--show")
}

function initMap() {
    var sedona = {lat: 34.870, lng: -111.760};
    var map = new google.maps.Map(document.querySelector("#map"), {
        center: sedona,
        zoom: 8
    });
    var iconMarker = "img/map-marker.svg";
    var marker = new google.maps.Marker({
        icon: iconMarker,
        position: sedona,
        map: map,
    })
}