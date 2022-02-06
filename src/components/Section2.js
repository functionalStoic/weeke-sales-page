import React from 'react';
import pic01 from '../assets/images/machinePictures/Weeke_Vantech_510_1.jpg';

export default function SectionTwo() {
  return (
    <section id="two" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <span className="image fit">
            <img src={pic01} alt="" />
          </span>
        </div>
        <div className="col-6">
          <header className="major">
            <h2>$50,000+ Savings vs. New Machine</h2>
          </header>
          <p>
            The purchase of a new CNC Router is not as straight-forward as it should be. Additional expenses will include:
          </p>
          <ul>
            <li>Dust Collector for dust collection (included)</li>
            <li>Duct work for dust collection (included)</li>
            <li>Electrical Work & possibly a transformer (included)</li>
            <li>CAD Software (AlphaCam included $10k value)</li>
            <li>Tooling holders & router bits (included)</li>
            <li>Fork Lift (included)</li>
          </ul>
          <p>
            This CNC includes a full business ready to move and will
            produce revenue immediately with the Amazon product (Wood Plyo Boxes) as it has since 2013
          </p>
        </div>
      </div>
    </section>
  );
}
