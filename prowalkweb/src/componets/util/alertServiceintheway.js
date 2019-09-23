import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import mobiscroll from '@mobiscroll/react-lite';


mobiscroll.settings = {
    theme: 'ios'
}


export default class App extends React.Component {
    submit = () => {
        confirmAlert({
            title: 'Confirmation',
            message: 'Are you sure you want to book this walker?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('GET READY FOR YOUR SERVICE, YOUR WALKER WILL ARRIVE IN 20 MIN!')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    showConfirm() {
        mobiscroll.confirm({
            title: 'Please Rate your Walker',
            message: 'How did you like the service?',
            okText: 'Agree',
            cancelText: 'Disagree',

            // Add a rating function here 
            callback: (res) => {
                mobiscroll.toast({
                    message: res ? 'Agreed' : 'Disagreed'
                });
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <button onClick={this.submit}>Book Now</button>
                <mobiscroll.Form>
                    <mobiscroll.FormGroup>
                        <mobiscroll.FormGroupTitle></mobiscroll.FormGroupTitle>
                        <div className="mbsc-btn-group-block">
                            {/* <mobiscroll.Button onClick={this.showAlert}>Alert</mobiscroll.Button> */}
                            <mobiscroll.Button onClick={this.showConfirm}>Finish Service</mobiscroll.Button>
                            {/* <mobiscroll.Button onClick={this.showPrompt}>Prompt</mobiscroll.Button> */}
                        </div>
                    </mobiscroll.FormGroup>
                </mobiscroll.Form>
            </div>
            
           
        );
    }
}