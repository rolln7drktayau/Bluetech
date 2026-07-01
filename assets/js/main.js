
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if(toggle && links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form = document.querySelector('[data-contact-form]');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault();const note=document.querySelector('[data-form-note]'); if(note){note.textContent='Merci. Votre demande est prête à être connectée à votre outil CRM ou email.'; note.style.color='#006BFF';} form.reset();});}
