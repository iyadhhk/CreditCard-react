import React from 'react'
import './creditcard.css'
class CreditCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ccname: 'Name LastName',
            ccnumber: '•••• •••• •••• ••••',
            ccvalidthru: '-- / --',
        };
        this.ccDataUpdate = this.ccDataUpdate.bind(this);

    }

    ccDataUpdate(event) {
        this.setState({
            ccname: event.target.ccname,
            ccnumber: event.target.ccnumber,
            ccvalidthru: event.target.ccvalidthru
        });
    }
    render() {
        return (
            <div className="creditcard">
                <div className="physicalcard">
                    <p className="companyname">Company Name</p>
                    <img src="https://www.sherpaz.nl/plaatjes/spellen/maken/CHIPCARD.jpg" className="smartchip" width="80px" height="auto"></img>
                    <div className="datacontainer">
                        <div className="carddata">
                            <p className="cardnumber">{this.state.ccnumber}</p>
                            <p className="validthru">{this.state.ccvalidthru}</p>
                            <p className="name">{this.state.ccname}</p>
                        </div>
                        <div className="mastercarddiv">
                            <img src="https://ya-webdesign.com/images600_/master-card-png.png" width="170px" height="auto" className="mastercard"></img>
                        </div>

                    </div>
                </div>
                <div className="inputdata">
                    <input className="inputname" name="ccname" placeholder="Full Name" value={this.state.ccname} onChange={this.setState.ccname}></input>
                    <input className="inputnumber" name="ccnumber" placeholder="Credit Card Number" value={this.state.ccnumber} onChange={this.setState.ccnumber}></input>
                    <input className="inputvalidthru" name="ccvalidthru" placeholder="Credit Card's Valid Thru" value={this.state.ccvalidthru} onChange={this.setState.ccvalidthru}></input>
                </div>
            </div>
        )
    }
}
export default CreditCard