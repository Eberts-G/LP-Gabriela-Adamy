document.addEventListener('DOMContentLoaded', () => {

  // 1. Animação Scroll Reveal (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 2. Formulário de Indicação enviado diretamente ao WhatsApp
  const formIndicacao = document.getElementById('form-indicacao');

  if (formIndicacao) {
    formIndicacao.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = formIndicacao.querySelector('input[name="nome"]').value;
      const email = formIndicacao.querySelector('input[name="email"]').value;
      const amiga = formIndicacao.querySelector('input[name="amiga"]').value;
      const telefone = formIndicacao.querySelector('input[name="telefone"]').value;

      const texto = `*Nova Indicação pelo Lírios Club!* ✨%0A%0A` +
                    `*De:* ${nome} (${email})%0A` +
                    `*Indicou:* ${amiga}%0A` +
                    `*WhatsApp da amiga:* ${telefone}`;

      const whatsappUrl = `https://wa.me/5545999872288?text=${texto}`;
      window.open(whatsappUrl, '_blank');
      formIndicacao.reset();
    });
  }

  // 3. Sombra dinâmica no Header ao rolar
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav').classList.toggle('active');
});

});