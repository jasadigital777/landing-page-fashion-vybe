// Mobile Menu Functions
function bukaMenu() {
  document.getElementById('menuMob').classList.add('buka');
  document.getElementById('overlay').classList.add('buka');
}

function tutupMenu() {
  document.getElementById('menuMob').classList.remove('buka');
  document.getElementById('overlay').classList.remove('buka');
}

// FAQ Accordion Functions
function bukaTutupFaq(el) {
  const item = el.parentElement;
  const sudahBuka = item.classList.contains('buka');
  document.querySelectorAll('.item-faq').forEach(i => i.classList.remove('buka'));
  if (!sudahBuka) item.classList.add('buka');
}

// Product Filter Functions
function filterProduk(btn, kategori) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('aktif'));
  btn.classList.add('aktif');
  
  document.querySelectorAll('.kartu-produk').forEach((k, i) => {
    const tampil = kategori === 'semua' || k.dataset.kategori === kategori;
    k.style.display = tampil ? '' : 'none';
    if (tampil) {
      k.style.opacity = '0';
      k.style.transform = 'scale(.95)';
      k.style.transition = `opacity .35s ${i*0.04}s, transform .35s ${i*0.04}s`;
      requestAnimationFrame(() => { 
        k.style.opacity = '1'; 
        k.style.transform = 'scale(1)'; 
      });
    }
  });
}

// Newsletter Form Submission
function kirimForm() {
  const input = document.getElementById('emailInput');
  if (input.value && input.value.includes('@')) {
    input.value = '';
    input.placeholder = '✅ Berhasil! Cek inbox kamu ya.';
    setTimeout(() => { 
      input.placeholder = 'Masukkan email kamu...'; 
    }, 3500);
  } else {
    input.style.outline = '2px solid #d93025';
    input.placeholder = 'Masukkan email yang valid ya!';
    setTimeout(() => { 
      input.style.outline = 'none'; 
      input.placeholder = 'Masukkan email kamu...'; 
    }, 2000);
  }
}

// Scroll Reveal Animation
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { 
      e.target.style.opacity = '1'; 
      e.target.style.transform = 'translateY(0)'; 
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.kartu-layanan,.kartu-testi,.kartu-produk,.kartu,.item-faq').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = `opacity .5s ${i*0.04}s, transform .5s ${i*0.04}s`;
  obs.observe(el);
});

// Navbar Shadow on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 32px rgba(0,0,0,.7)' : 'none';
  }
});
