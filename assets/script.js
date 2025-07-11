// Scroll suave, destaque de menu ativo, header com sombra, botão voltar ao topo, animação ícones, formulário interativo
window.addEventListener("DOMContentLoaded", function () {
  // Fade-in nas seções
  const sections = document.querySelectorAll("section");
  const showSection = (section) => section.classList.add("visible");
  const hideSection = (section) => section.classList.remove("visible");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) showSection(entry.target);
        else hideSection(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach((section) => observer.observe(section));

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Destaque do menu ativo
  const navLinks = document.querySelectorAll(".nav-list a");
  const sectionIds = Array.from(navLinks).map((link) =>
    link.getAttribute("href")
  );
  function highlightMenu() {
    let scrollPos = window.scrollY + 120;
    let activeId = sectionIds[0];
    for (let id of sectionIds) {
      const sec = document.querySelector(id);
      if (sec && sec.offsetTop <= scrollPos) activeId = id;
    }
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.getAttribute("href") === activeId)
    );
  }
  window.addEventListener("scroll", highlightMenu);
  highlightMenu();

  // Header com sombra ao rolar
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  // Botão voltar ao topo
  let backToTop = document.getElementById("back-to-top");
  if (!backToTop) {
    backToTop = document.createElement("button");
    backToTop.id = "back-to-top";
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
  }
  window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Formulário de contato interativo
  const form = document.querySelector(".form-contato");
  if (form) {
    const feedback = form.querySelector(".form-feedback");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      feedback.textContent = "Enviando...";
      setTimeout(() => {
        feedback.textContent = "Mensagem enviada com sucesso!";
        form.reset();
      }, 1200);
    });
  }

  // Menu sanduíche responsivo
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
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
});
