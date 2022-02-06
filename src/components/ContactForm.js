import { navigate } from 'gatsby-link';
import React from 'react';



function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    console.log('e', e)
    console.log('state', state)
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div style={{ margin: '0 auto', maxWidth: '700px' }}>
      <form
        netlify="true"
        name="contact"
        method="POST"
        data-netlify-honeypot="bot-field"
        action="/thanks/"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <Field>
          Your Name: <input type="text" name="name" onChange={handleChange} />
        </Field>
        <Field>
          Your Email: <input type="email" name="email" onChange={handleChange} />
        </Field>
        <Field>
          Your Phone: <input type="text" name="phone" onChange={handleChange} />
        </Field>
        <Field>
          Message: <textarea name="message" onChange={handleChange} />
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
