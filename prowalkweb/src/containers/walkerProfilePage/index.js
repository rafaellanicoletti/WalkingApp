import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Map from '../../componets/util/map';
import WalkerProfile from '../../componets/walkerOverlay';
// import WalkConfirmation from '../../componets/util/walkConfirmation';
import walkerData from '../../data/walkerInfo/affiliatesInfo';
import AlertService from '../../componets/util/alertServiceintheway';
import Rating from '../../componets/util/rating';
import Timer from '../../componets/util/timer';





export default class WalkerPage extends Component {
    state={
        redirect: false
    }
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
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (!user) {
            this.setState({ 

                redirect: true,
                pictureprofile: selectedAffiliate.pictureProfile,
                name: selectedAffiliate.name,
                occupation: selectedAffiliate.Ocuppation,
                city: selectedAffiliate.city,
                description: selectedAffiliate.description 
            })
        }
        console.log('selectedAffiliate', selectedAffiliate)
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
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
                    <Map
                    showline = {this.state.showline}
                       latitude= {this.state.userposition.latitude}
                        longitude={this.state.userposition.longitude}
                        affiliateslatitude={this.state.selectedAffiliate.latitude}
                        affiliateslongitude={this.state.selectedAffiliate.longitude}
                    />
                </div>
                
                <div>
                    <AlertService
                        alert= {() => 
                        this.showline()
                        
                        } />
                </div>
                <div>
                    <Rating />
                </div>
                <div>
                    <Timer />
                </div>
                
            </div>

        );
    }
}

