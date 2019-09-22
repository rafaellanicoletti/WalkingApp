import React from 'react'
import Headshot from "./Headshot"
import Buttonbox from "./Buttonbox"


export default function walkerOverlay (props) {
    return (
        <div className="walkerCard">
            <Headshot 
            walkername= {props.namexyz}
            ocuppation={props.ocuppationxyz} 
            city={props.city}
            />

            <Buttonbox
            description= {props.description}
            />
        </div>
    )
}