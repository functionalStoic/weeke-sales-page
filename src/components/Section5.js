import React from 'react';

export default function SectionFive() {
  return (
    <section id="five" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Key Features</h2>
          </header>
          <p>Here is more info to help you make your decision</p>
        </div>
        <div className="col-4">
          <h3>Automatic Tool Changer</h3>
          <p>No manual tool changes allows for significant efficiency gains</p>
        </div>
        <div className="col-4">
          <h3>Automatic Sheet Unloader</h3>
          <p>
            No manual unloading. Immediately load a new sheet to be cut.
            Then process the parts while next sheet is running
          </p>
        </div>
        <div className="col-4">
          <h3>Powerful 12 KW (16 Horsepower) Spindle</h3>
          <p>A powerful spindle means cutting you can cut thick material quickly and smoothly</p>
        </div>

      </div>
    </section>
  );
}
