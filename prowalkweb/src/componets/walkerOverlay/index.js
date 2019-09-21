import React from 'react'
import Headshot from "./Headshot"
import Buttonbox from "./Buttonbox"


export default function walkerOverlay () {
    return (
        <div className="walkerCard">
            <Headshot/>
            <Buttonbox/>
        </div>
    )
}