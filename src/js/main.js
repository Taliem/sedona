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