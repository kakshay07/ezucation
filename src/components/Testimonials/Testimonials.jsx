/* eslint-disable no-unused-vars */
import {useRef} from "react";
import React from "react";
import "./Testimonials.css";
import next_icon from "../../assets/project images/next-icon.png";
import back_icon from "../../assets/project images/back-icon.png";
import user1 from "../../assets/project images/user-1.png";
import user2 from "../../assets/project images/user-2.png";
import user3 from "../../assets/project images/user-3.png";
import user4 from "../../assets/project images/user-4.png";
// import { useRef } from "react";

const Testimonials = () => {
const slider=useRef();
let tx=0;

function slideForward(){
    if(tx > -50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`

}

function slideBackward(){
    if(tx < 0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`


}

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward}/>

      <img src={back_icon} className="back-btn"onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                   <h3>virat kholi</h3> 
                   <span>Educai ,India</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque sit repellendus ea aliquam facere porro mollitia ad minima saepe. Quam repudiandae harum exercitationem nam, necessitatibus nostrum dolores laudantium possimus.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                   <h3> william jacks</h3> 
                   <span>educ ,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque sit repellendus ea aliquam facere porro mollitia ad minima saepe. Quam repudiandae harum exercitationem nam, necessitatibus nostrum dolores laudantium possimus.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                   <h3> FAF d f</h3> 
                   <span>Educai ,UK</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque sit repellendus ea aliquam facere porro mollitia ad minima saepe. Quam repudiandae harum exercitationem nam, necessitatibus nostrum dolores laudantium possimus.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                   <h3>Dk</h3> 
                   <span>Educai ,UK07</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque sit repellendus ea aliquam facere porro mollitia ad minima saepe. Quam repudiandae harum exercitationem nam.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
