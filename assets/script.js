// Animação de fade-in nas seções ao rolar a página
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const showSection = (section) => {
    section.classList.add("visible");
  };
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showSection(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Menu sanduíche responsivo
window.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");
  if (menuToggle && navList) {
    menuToggle.addEventListener("click", function () {
      navList.classList.toggle("open");
      menuToggle.classList.toggle("active");
      menuToggle.innerHTML = menuToggle.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
    // Fecha o menu ao clicar em um link
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
});
