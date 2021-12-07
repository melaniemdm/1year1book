let nodeModalMag = document.querySelector(".btnMag")
nodeModalMag.addEventListener("click", openModalMag)
let nodeModalLivre = document.querySelector(".btnLivre")
nodeModalLivre.addEventListener("click", openModalLivre)

function openModalMag(){
    
    let nodeModalMag = document.querySelector("#modalMag")
    nodeModalMag.style.display="flex";
    let nodeModalLivre = document.querySelector("#modalLivre")
    nodeModalLivre.style.display="none";
}
function openModalLivre(){
    let nodeModalLivre = document.querySelector("#modalLivre")
    nodeModalLivre.style.display="flex";
    let nodeModalMag = document.querySelector("#modalMag")
    nodeModalMag.style.display="none";
}

let nodeModalMagClose = document.querySelectorAll(".close")
nodeModalMagClose.forEach((close)=> close.addEventListener("click", closeModal));

function closeModal(){
    let nodeModalMagClose = document.querySelector("#modalMag")
    nodeModalMagClose.style.display="none";
    let nodeModalLivreClose = document.querySelector("#modalLivre")
    nodeModalLivreClose.style.display="none";
    }

  let nodePriceMag = document.querySelector(".priceMag").innerHTML  
let nodeInputMag = document.querySelector("#nombreExemplaireMag")
nodeInputMag.addEventListener("keyup",newPrice)
let nodeInputLivre = document.querySelector("#nombreExemplaireLivre")
nodeInputLivre.addEventListener("keyup",newPrice)

  function newPrice(e){
      let nodeNbrExemplaire = parseInt(e.target.value);
if(nodeNbrExemplaire > 0){
    let nodeNbrExemplaire = parseInt(e.target.value);  
    let pricePriceMag = parseInt(document.querySelector(".priceMag").innerHTML) ;
    var resultat = (nodeNbrExemplaire*pricePriceMag)
    let nodePriceMag = document.querySelector(".priceMag");
    nodePriceMag.innerHTML = resultat + "€"
}else{
    let nodePriceMag = document.querySelector(".priceMag");
    let resultat = 15;
    nodePriceMag.innerHTML = resultat + "€" 
  }

  }
  