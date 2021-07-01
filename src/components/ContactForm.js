import React from 'react';

export default function ContactForm() {
  return (
    <div style={{ margin: '0 auto', maxWidth: '700px' }}>
      <form name="contact" method="POST" data-netlify="true">
        <FormElement>
          Your Name: <input type="text" name="name" />
        </FormElement>
        <FormElement>
          Your Email: <input type="email" name="email" />
        </FormElement>
        <FormElement>
          Your Phone: <input type="text" name="phone" />
        </FormElement>
        <FormElement>
          Message: <textarea name="message"></textarea>
        </FormElement>
        <FormElement>
          <button type="submit">Contact Me</button>
        </FormElement>
      </form>
    </div>
  );
}

function FormElement(props) {
  return (
    <p>
      <label>{props.children}</label>
    </p>
  );
}
