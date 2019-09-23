import React from 'react';
import { Component } from 'react';
import Map from '../../componets/util/map';
import WalkerProfile from '../../componets/walkerOverlay';
// import WalkConfirmation from '../../componets/util/walkConfirmation';
import walkerData from '../../data/walkerInfo/affiliatesInfo';
import AlertService from '../../componets/util/alertServiceintheway'


// import ServiceConfirmation from '../../componets/util/confirmationAlert'


export default class WalkerPage extends Component {
    state={}
    componentDidMount(){
        console.log(window.location.pathname)
        var pathname = window.location.pathname
        var id = pathname.split("/")[pathname.split("/").length-1]
        console.log("id", id);
        console.log("walker data", walkerData )
        var selectedAffiliate = {}
        walkerData.affiliates.forEach(e => {
            // you should use 2 equal signes when trying to compare a string with integer
            console.log('e', e)
            if (e.id == id){
                selectedAffiliate= e
            }
        })
        this.setState(
            {
                pictureprofile: selectedAffiliate.pictureProfile,
                name: selectedAffiliate.name,
                occupation: selectedAffiliate.Ocuppation,
                city: selectedAffiliate.city,
                description: selectedAffiliate.description,

            }
        )
        console.log('selectedAffiliate', selectedAffiliate)
    }
    render() {
        return (
            <div>
                <div>
                <h1>WALKER PAGE</h1>
                
                <WalkerProfile 
                pictureprofile={this.state.pictureprofile}
                namexyz= {this.state.name}
                ocuppationxyz={this.state.occupation}
                city={this.state.city}
                description={this.state.description}
                />
                
                </div>
                <div>
                    <Map/>
                </div>
                {/* <div>
                    <WalkConfirmation />
                </div> */}
                <div>
                    <AlertService />
                </div>
            </div>

        );
    }
}

