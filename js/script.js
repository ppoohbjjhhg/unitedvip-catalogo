console.log("UnitedVip Mostruário carregado.");const heroTitle = document.querySelector(".hero-title");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (heroTitle) {
    heroTitle.style.transform = `translateY(${scrollY * 0.12}px)`;
  }
});

console.log("UnitedVip Mostruário carregado.");