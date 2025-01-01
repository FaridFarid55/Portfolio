/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_gw1x92a', 'template_4ux7mph', '#contact-form', 'HT8IG-xKeKHj4IrLe')
  .then(() => {

      // Show sent message
    contactMessage.textContent = 'Message sent successfully ✅';

     // Remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = '';
    }, 4000);

    // Clear input fields
    contactForm.reset();

  }, () => {
    // Show error message
    contactMessage.textContent = 'Message not sent (service error) ❌';
  });
}

contactForm.addEventListener('submit', sendEmail);