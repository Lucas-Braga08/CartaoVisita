
let index = 0;
const imagens = document.querySelectorAll(".carousel-img");
const btnNext = document.querySelector(".carousel-btn.next");
const btnPrev = document.querySelector(".carousel-btn.prev");

function mostrar(i){
  if(!imagens || imagens.length === 0) return;
  imagens.forEach(img => img.classList.remove("active"));
  imagens[i].classList.add("active");
}

if(btnNext) {
  btnNext.addEventListener("click", () => {
    index = (index + 1) % imagens.length;
    mostrar(index);
  });
}

if(btnPrev) {
  btnPrev.addEventListener("click", () => {
    index = (index - 1 + imagens.length) % imagens.length;
    mostrar(index);
  });
}


mostrar(index);

