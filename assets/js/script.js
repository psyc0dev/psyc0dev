'use strict';

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function() {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelectorAll('.navbar-link').forEach(link => {
      link.classList.remove('active');
    });
    
    this.classList.add('active');
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('article[id]');
  const navLinks = document.querySelectorAll('.navbar-link');
  
  let current = '';
  const scrollPosition = window.pageYOffset + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop) {
      current = sectionId;
    }
  });
  
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 200) {
    current = 'contact';
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('[data-form]');
  const inputs = contactForm.querySelectorAll('[data-form-input]');
  const submitBtn = contactForm.querySelector('[data-form-btn]');

  const BOT_TOKEN = '7843339243:AAFQD-1o-ibmbTtTm7RM1lmQVEVusch-QIk';
  const CHAT_ID = '1022239785';

  contactForm.addEventListener('input', () => {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    submitBtn.disabled = !allFilled;
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = contactForm.fullname.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    const text = `📥 *New Contact Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n💬 *Message:* ${message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        contactForm.reset();
        submitBtn.disabled = true;
      } else {
        const result = await response.json();
        console.error('Telegram API error:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  });
});