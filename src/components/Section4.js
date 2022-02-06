import React from 'react';

export default function SectionFour() {
  return (
    <section id="four" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Technical Specs</h2>
          </header>
        </div>

        <div className="col-6">
          <h4>
            General Info
          </h4>
          <p>
            <ul style={{ textAlign: 'left' }}>
              <li>Serial #: 0-250-80-3064</li>
              <li>Location: Tulsa, OK</li>
              <li>Brand: Weeke</li>
              <li>Model: Optimat BHP 008 Vantech 510</li>
              <li>Year: 2013</li>
              <li>Approx. Shipping Weight: 7,716 Lbs (Not Including Outfeed Table)</li>
              <li>Loading Fee: Rigging Required</li>
            </ul>
          </p>
        </div>
        <div className="col-6">
          <h4>
            Specifications:
          </h4>
          <p>
            <ul style={{ textAlign: 'left' }}>
              <li>Table Size: 122″ x 61″</li>
              <li>Maximum Workpiece Thickness: 100 mm</li>
              <li>Positioning Speeds: 72 m/min (x), 62 m/min (y), 25 m/min (z)</li>
              <li>X/Y Vector Speed: 96 m/min</li>
              <li>Spindle HP: 12 KW (16 HP)</li>
              <li>Number of Pneumatic Pop Up Pins: 3</li>
              <li>Router Spindle Speed: 1,250 – 24,000 RPM</li>
              <li>Air Volume Requirements: 1900 CFM</li>
              <li>Consumption Volume: 600/700 NL/min</li>
              <li>Electrical: 480 V/ 3PH/ 60 Hz</li>
              <li>Total Connected Load: 27.5 kW</li>
            </ul>
          </p>
        </div>
        <div className="col-6">
          <h4>
            Equipped With:
          </h4>
          <p>
            <ul style={{ textAlign: 'left' }}>
              <li>12 KW (16 HP) HSD Air Cooled Spindle w/ HSK63 Taper (24,000 RPM)</li>
              <li>8 Position Tool Bar</li>
              <li>Automatic Tool Length Sensor</li>
              <li>7 Position Drill Bank</li>
              <li>Unload Rake and Outfeed Conveyor Table</li>
              <li>Safety Light Curtains</li>
              <li>4 Vacuum Pumps (432 m3/h)</li>
              <li>80 Gallon Compressor</li>
              <li>Belfab BEL 75 Dust Collector</li>
            </ul>
          </p>
        </div>
      </div>
    </section >
  )
}
