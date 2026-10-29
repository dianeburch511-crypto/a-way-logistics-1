const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const quoteForm = document.getElementById('quoteForm');
quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const subject = `Quote Request — ${data.get('service') || 'Logistics Service'}`;
  const body = [
    'A WAY LOGISTICS LLC — QUOTE REQUEST',
    '',
    `Name: ${data.get('name') || ''}`,
    `Business: ${data.get('business') || ''}`,
    `Email: ${data.get('email') || ''}`,
    `Phone: ${data.get('phone') || ''}`,
    `Service: ${data.get('service') || ''}`,
    `Pickup / Origin: ${data.get('origin') || ''}`,
    `Destination: ${data.get('destination') || ''}`,
    '',
    'Shipment details:',
    data.get('details') || ''
  ].join('\n');
  const status = document.getElementById('formStatus');
  status.textContent = 'Your email app should open with the quote request prepared. Please review and send it to the company email.';
  // Replace this address with the company's confirmed email before publishing.
  window.location.href = `mailto:info@awaylogistics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
