import React from 'react'


export default function Headshot (props) {
    return (
        <div className= "headshotBigDiv">
        <img src={props.pictureprofile} className="profilePic" />
        <p>{props.walkername}</p>
        <p>{props.ocuppation}</p>
        <p>{props.city}</p>
        </div>
        
    )
}