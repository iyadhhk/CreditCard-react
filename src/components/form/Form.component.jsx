import React from "react";
import Card from "../card/Card.component";
import "./Form.component.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      valid: ""
    };
  }

  //  Card Number validation function using regex

  changeCardNum = e => {
    const numReg = new RegExp(/^[0-9]{0,16}$/);
    let cardNum = e.target.value;
    let prevState = this.state.cardNumber;
    if (!numReg.test(cardNum)) { e.target.value = prevState; }
    else { this.setState({ cardNumber: cardNum }); }
  };

  // formatting card Number function : 5555 1111 6666 1111

  formatCardNumber = () => {
    let str = String(this.state.cardNumber).padEnd(16, "*");
    return str
      .slice(0, 4)
      .concat("  ", str.slice(4, 8))
      .concat("  ", str.slice(8, 12))
      .concat("  ", str.slice(12));
  };

  // Name's validation function using regex 

  changeName = e => {
    const regName = new RegExp(/(^[a-zA-Z]*$)|(^[a-zA-Z]+ $)|(^[a-zA-Z]+ [a-zA-Z]+$)/);
    let nameInput = e.target.value;
    let prevState = this.state.name;
    if (nameInput.length <= 20) {
      if (regName.test(nameInput)) { this.setState({ name: nameInput }); }
      else { e.target.value = prevState; }
    } else { e.target.value = nameInput.substr(0, 20); }
  };

  // Validation Date function using regex

  changeValid = e => {
    const monthRegex = new RegExp(/^$|(^(0|1)$)|(^0[1-9]\/?[1-9]?[1-9]?$)|(^1[0-2]\/?[1-9]?[1-9]?$)/);
    let date = e.target.value;
    let prevState = this.state.valid;
    if (monthRegex.test(date)) {
      if (date.length === 2 && prevState.length === 1) {
        e.target.value += "/";
      }
      this.setState({ valid: date });
    } else {
      e.target.value = prevState;
    }
  };


  render() {
    return (
      <div className="container">
        <Card infos={this.state} number={this.formatCardNumber()} />
        <div className="inputs">
          <input type="text" onChange={this.changeCardNum}></input>
          <input type="text" onChange={this.changeName}></input>
          <input type="text" onChange={this.changeValid}></input>
        </div>
      </div>
    );
  }
}

export default Form;
