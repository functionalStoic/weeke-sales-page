import React from 'react';

export default function ContactForm() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '700px' }}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <Field>
          Your Name: <input type="text" name="name" />
        </Field>
        <Field>
          Your Email: <input type="email" name="email" />
        </Field>
        <Field>
          Your Phone: <input type="text" name="phone" />
        </Field>
        <Field>
          Message: <textarea name="message"></textarea>
        </Field>
        <Field>
          <button type="submit">Contact Me</button>
        </Field>
      </form>
    </div>
  );
}

function Field({ children }) {
  return (
    <p>
      <label>{children}</label>
    </p>
  );
}
