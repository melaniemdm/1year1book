let nodeMenuMobil = document.querySelector(".menuBurger");
nodeMenuMobil.addEventListener("click", openMenu);

function openMenu() {
  let nodeMenuMobil = document.querySelector(".menu");
  nodeMenuMobil.style.display = "flex";
  let nodeMenuBurger = document.querySelector(".menuBurger");
  nodeMenuBurger.style.display = "none";
  let nodeCrossClose = document.querySelector(".closeBurger");
  nodeCrossClose.style.display = "flex";
}
let nodeCloseBurger = document.querySelector(".closeBurger");
nodeCloseBurger.addEventListener("click", closeMenu);

function closeMenu() {
  let nodeMenuMobil = document.querySelector(".menu");
  nodeMenuMobil.style.display = "none";
  let nodeMenuBurger = document.querySelector(".menuBurger");
  nodeMenuBurger.style.display = "flex";
  let nodeCrossClose = document.querySelector(".closeBurger");
  nodeCrossClose.style.display = "none";
}
