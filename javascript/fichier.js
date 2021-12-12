//déclaration des noeuds html en tant que variables globales et ajout des events listener associés
const nodeBtnMag = document.querySelector(".btnMag");
nodeBtnMag.addEventListener("click", openModalMag);
const nodeBtnLivre = document.querySelector(".btnLivre");
nodeBtnLivre.addEventListener("click", openModalLivre);
const nodeModalMag = document.querySelector("#modalMag");
const nodeModalLivre = document.querySelector("#modalLivre");
const nodeModalMagClose = document.querySelectorAll(".close");
nodeModalMagClose.forEach((close) =>
  close.addEventListener("click", closeModal)
);
const nodePriceMag = document.querySelector(".priceMag");
const nodePriceLivre = document.querySelector(".priceLivre");
const nodeInputMag = document.querySelector("#nombreExemplaireMag");
nodeInputMag.addEventListener("change", newPrice);
const nodeInputLivre = document.querySelector("#nombreExemplaireLivre");
nodeInputLivre.addEventListener("change", newPrice);
//déclaration des constantes prix
const magPrice = 15;
const livrePrice = 25;
//fonction qu i permet d'ouvrir la modalMag et de fermer lamodal du livre
function openModalMag() {
  nodeModalMag.style.display = "flex";
  nodeModalLivre.style.display = "none";
}
//fonction qu i permet d'ouvrir la modalLivre et de fermer lamodal du livreMag
function openModalLivre() {
  nodeModalLivre.style.display = "flex";
  nodeModalMag.style.display = "none";
}
//fonction qui ferme les modal mag et livre
function closeModal() {
  nodeModalMag.style.display = "none";
  nodeModalLivre.style.display = "none";
}
//fonction de calcul et d'affichage du prix
function newPrice(e) {
  let nbrExemplaire = parseInt(e.target.value);
  if (nbrExemplaire > 0) {
    if (e.target === nodeInputMag) {
      let resultat = nbrExemplaire * magPrice;
      nodePriceMag.innerHTML = resultat + "€";
    } else {
      let resultat = nbrExemplaire * livrePrice;
      nodePriceLivre.innerHTML = resultat + "€";
    }
  } else {
    if (e.target === nodeInputMag) {
      nodePriceMag.innerHTML = magPrice + "€";
    } else {
      nodePriceLivre.innerHTML = livrePrice + "€";
    }
  }
}
