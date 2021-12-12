//déclaration des noeuds html en tant que variables globales et ajout des events listener associés
const nodeMenuBurger = document.querySelector(".menuBurger");
nodeMenuBurger.addEventListener("click", openMenu);
const nodeMenuMobil = document.querySelector(".menu");
const nodeCrossClose = document.querySelector(".closeBurger");
nodeCrossClose.addEventListener("click", closeMenu);
//fonction qui ouvre le menu responsive
function openMenu() {
  nodeMenuMobil.style.display = "flex";
  nodeMenuBurger.style.display = "none";
  nodeCrossClose.style.display = "flex";
}
//fonction qui ferme le menu responsive
function closeMenu() {
  nodeMenuMobil.style.display = "none";
  nodeMenuBurger.style.display = "flex";
  nodeCrossClose.style.display = "none";
}
