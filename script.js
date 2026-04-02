const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting){
            e.target.classList.add('visible');
            obs.unoberserve(e.target);
        }

    });
}

,{threshold:0.15});
reveals.forEach(r => obs.observe(r));

// SKILL BARS — Preenche as barras em cascata quando a seção aparece
const skillObs = new  IntersectionObserver((entries) => {
    entries.forEach(e =>{
        if(e.isIntersecting){
            e.target.querySelectorAll('.skill-item').forEach((item, i)=>{
                setTimeout(() => item.classList.add('visible'), i * 100);

            });
            skillObs.unobserve(e.target);
        }
    })
}, {threshold: 0.2});
document.querySelectorAll('.skill-grid').forEach(g => skillObs.observe(g));

// FORM — Envia mensagem pro email
function handleForm(e) {
  const btn = e.target.querySelector('button');
  btn.textContent = '⏳ Enviando...';
  btn.disabled = true;
}

// SMOOTH NAV — Rola suavemente até a seção ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});