import React from 'react';
import mobiscroll from '@mobiscroll/react-lite';
// import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios'
}

export default class App extends React.Component {
    // showAlert() {
    //     mobiscroll.alert({
    //         title: 'Cellular Data is Turned Off for "Safari"',
    //         message: 'You can turn on cellular data for this app in Settings.',
    //         callback: () => {
    //             mobiscroll.toast({
    //                 message: 'Alert closed'
    //             });
    //         }
    //     });
    // }
    showConfirm() {
        mobiscroll.confirm({
            title: 'Use location service?',
            message: 'Help apps determine location. This means sending anonymous location data, even when no apps are running.',
            okText: 'Agree',
            cancelText: 'Disagree',
            callback: (res) => {
                mobiscroll.toast({
                    message: res ? 'Agreed' : 'Disagreed'
                });
            }
        });
    }

    // showPrompt() {
    //     mobiscroll.prompt({
    //         title: 'Sign in to iTunes Store',
    //         message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
    //         placeholder: 'Password',
    //         inputType: 'password',
    //         callback: (value) => {
    //             mobiscroll.toast({
    //                 message: value === null ? 'Cancel was pressed.' : ('The password: ' + value)
    //             });
    //         }
    //     });
    // }

    render() {
        return (
            <mobiscroll.Form>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle></mobiscroll.FormGroupTitle>
                    <div className="mbsc-btn-group-block">
                        {/* <mobiscroll.Button onClick={this.showAlert}>Alert</mobiscroll.Button> */}
                        <mobiscroll.Button onClick={this.showConfirm}>Confirm Service</mobiscroll.Button>
                        {/* <mobiscroll.Button onClick={this.showPrompt}>Prompt</mobiscroll.Button> */}
                    </div>
                </mobiscroll.FormGroup>
            </mobiscroll.Form>
        );
    }
}

