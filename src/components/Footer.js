import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://www.youtube.com/channel/UCxusLlp2Rh1zvPfbYiHrShQ"
              className="icon alt fa-youtube"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Youtube</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.amazon.com/boundplyobox"
              className="icon alt fa-amazon"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Amazon</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/boundplyobox"
              className="icon alt fa-instagram"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@weekecnc.us"
              className="icon alt fa-envelope"
              target="_blank"
              rel="noreferrer"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; WeekeCNC.us</li>
        </ul>
      </section>
    );
  }
}

export default Footer;
