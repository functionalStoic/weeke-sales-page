import React from 'react';

export default function Header() {
  return (
    <section id="header">
      <div className="inner">
        <h1>
          Hi, I'm <strong>Jason.</strong> I'm selling our
          <br />
          Weeke 5x10 CNC Router.
        </h1>
        <ul>
          <li>Weeke Optimat BHP008 Vantech 510</li>
          <li>Clean and in excellent shape. Spindle Rebuilt in 2021</li>
          <li><b>$50,000+</b> savings compared with buying a new one</li>
        </ul>
        <iframe
          width="100%"
          style={{ maxWidth: 750 }}
          height="422"
          src="https://www.youtube.com/embed/Bws8X6uZmtU"
          title="Weeke CNC Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <ul className="actions">
          <li>
            <a
              aria-label="photo-gallery"
              href="#four"
              className="button scrolly"
              children="View Photo Gallery"
              onClick={() => window.analytics ? window.analytics.track("Button Clicked", { section: "Photo Gallery" }) : null}
            />
          </li>
          <li>
            <a
              aria-label="technical-specs"
              href="#five"
              className="button scrolly"
              children="View Technical Specs"
              onClick={() => window.analytics ? window.analytics.track("Button Clicked", { section: "Technical Specs" }) : null}
            />
          </li>
          <li>
            <a
              aria-label="key-features"
              href="#six"
              className="button scrolly"
              children="Key Features"
              onClick={() => window.analytics ? window.analytics.track("Button Clicked", { section: "Key Features" }) : null}
            />
          </li>
          <li>
            <a
              aria-label="contact"
              href="#six"
              className="button scrolly"
              children="Contact"
              onClick={() => window.analytics ? window.analytics.track("Button Clicked", { section: "Contact" }) : null}
            />
          </li>
        </ul>
      </div>
    </section >
  );
}
