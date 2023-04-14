class MyContactForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Fetch the contact form content from Odoo site
        fetch('https://swimm.odoo.com/contactform')
            .then(response => response.text())
            .then(data => {
                // Extract the relevant elements from the response
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const contactForm = doc.getElementById('contact-form');

                // Insert the contact form content into this custom element
                this.innerHTML = contactForm.innerHTML;
            });
    }
}

customElements.define('my-contact-form', MyContactForm);
