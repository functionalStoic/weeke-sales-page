import React from 'react';
import machine1 from '../assets/images/machinePictures/Weeke_Vantech_510_1.jpg';
import machine10 from '../assets/images/machinePictures/Weeke_Vantech_510_10.jpg';
import machine11 from '../assets/images/machinePictures/Weeke_Vantech_510_11.jpg';
import machine12 from '../assets/images/machinePictures/Weeke_Vantech_510_12.jpg';
import machine13 from '../assets/images/machinePictures/Weeke_Vantech_510_13.jpg';
import machine14 from '../assets/images/machinePictures/Weeke_Vantech_510_14.jpg';
import machine15 from '../assets/images/machinePictures/Weeke_Vantech_510_15.jpg';
import machine2 from '../assets/images/machinePictures/Weeke_Vantech_510_2.jpg';
import machine3 from '../assets/images/machinePictures/Weeke_Vantech_510_3.jpg';
import machine4 from '../assets/images/machinePictures/Weeke_Vantech_510_4.jpg';
import machine5 from '../assets/images/machinePictures/Weeke_Vantech_510_5.jpg';
import machine6 from '../assets/images/machinePictures/Weeke_Vantech_510_6.jpg';
import machine7 from '../assets/images/machinePictures/Weeke_Vantech_510_7.jpg';
import machine8 from '../assets/images/machinePictures/Weeke_Vantech_510_8.jpg';
import machine9 from '../assets/images/machinePictures/Weeke_Vantech_510_9.jpg';



export default function PhotoGallery() {
  return (
    <section id="three" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Photo Gallery</h2>
          </header>
          <p>Here are some close up photos to show you the machine</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine1} alt="" />
          </span>
          <h3>CNC Router (outfeed end)</h3>
          <p>It's a beautiful machine. Ready to work!</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine2} alt="" />
          </span>
          <h3>CNC Router (Automatic Tool Changer end)</h3>
          <p>8-Tool holders to the left</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine3} alt="" />
          </span>
          <h3>Automatic Sheet Unloading Conveyer Belt</h3>
          <p>Unload & process parts while next sheet is running. Huge Efficiency Gain!</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine4} alt="" />
          </span>
          <h3>View from the Rear with sheet ready to cut</h3>
          <p>Safety fences keep employees out of here while machine is running</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine5} alt="" />
          </span>
          <h3>Automatic Sheet Unloader (front view) </h3>
          <p>Sheet has been offloaded so next sheet can begin</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine6} alt="" />
          </span>
          <h3>8 Tool changer locations</h3>
          <p>Automatic Tool changing allows for multiple operations with no manual effort</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine8} alt="" />
          </span>
          <h3>Dust Collection for Automatic Sheet Unload</h3>
          <p>Dust Collection cleans table to prepare for next sheet. Huge Time Saver!</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine10} alt="" />
          </span>
          <h3>Spindle View</h3>
          <p>Blowers to keep cutting area clear for the Powerful Spindle</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine11} alt="" />
          </span>
          <h3>7-drill block</h3>
          <p>Drill Holes as a separate process. Multiple at a time if necessary</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine9} alt="" />
          </span>
          <h3>Spindle + Duct Collector Hood</h3>
          <p>Duct Collection to prevent manual cleanup & efficient cutting</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine12} alt="" />
          </span>
          <h3>12 KW (16 Horsepower) HSD Spindle (up-close view)</h3>
          <p>Downdraft exhaust fan</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine15} alt="" />
          </span>
          <h3>Computer + Controls Box</h3>
          <p>Computer allows for basic cad & machine modification. Separate computer included for general CAD/CAM work</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine7} alt="" />
          </span>
          <h3>Sheet Edge Bar</h3>
          <p>Black bar raises up to allow for sheet edge alignment</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine13} alt="" />
          </span>
          <h3>Safety Eye</h3>
          <p>Safety Eye ensures employees are safetly kept way from cutting & machine movement</p>
        </div>
        <div className="col-4">
          <span className="image fit">
            <img src={machine14} alt="" />
          </span>
          <h3>4 Vacuum Pumps</h3>
          <p>4 powerful vacuum pumps keep the sheet tightly held to the table</p>
        </div>
      </div>
    </section>
  );
}
