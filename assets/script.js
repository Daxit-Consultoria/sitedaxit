// Animação de fade-in nas seções ao rolar a página
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const showSection = (section) => {
    section.classList.add('visible');
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
