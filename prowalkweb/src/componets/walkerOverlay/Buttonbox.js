import React from 'react'
import './walkerOverlay.css';

export default function Buttonbox () {
    return (
        <div className="buttonBox">
        

            <div className="btn1"> 
                <img src="../walkingIcon.png" className="walkBtn" />
                <p>15 minutes</p>
            </div>
            
            <div className="btn2"> 
                <img src="../walkingIcon.png" className="walkBtn" />
                <p>30 minutes</p>
            </div>
            
            <div className="btn3"> 
                <img src="../walkingIcon.png" className="walkBtn" />
                <p>45 minutes</p>
            </div>
            

        </div>
    )
}