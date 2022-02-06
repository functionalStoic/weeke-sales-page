import React from 'react';
import hero from '../assets/images/weeke_cnc_hero.jpg';

export default function Section1() {
  return (
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>Excellent shape with light use</h2>
          </header>
          <p>
            Our machine was purchased from Stiles Machinery and put into service
            in August 2013. Since then, it has primarily been used to cut 2 premium
            grades of material:
          </p>
          <ul>
            <li>Trupan MDF (Picture Frames)</li>
            <li>Radiate Pine Plywood (Wood Plyo Boxes)</li>
          </ul>
          <p>
            This high grade material means the machine has been used in such a way
            to keep it in excellent condition.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit">
            <img src={hero} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
}
