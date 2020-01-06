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
  changeCardNum = e => {
    const numReg = new RegExp(/^[0-9]*$/);
    let cardNum = e.target.value;
    let prevState = this.state.cardNumber;
    if (cardNum.length <= 16) {
      if (isNaN(cardNum) || !numReg.test(cardNum)) {
        e.target.value = prevState;
      } else {
        this.setState({ cardNumber: cardNum });
      }
    } else {
      e.target.value = cardNum.substr(0, 16);
    }
  };
  formatCardNumber = () => {
    let str = String(this.state.cardNumber).padEnd(16, "*");
    return str
      .slice(0, 4)
      .concat("  ", str.slice(4, 8))
      .concat("  ", str.slice(8, 12))
      .concat("  ", str.slice(12));
  };
  changeName = e => {
    const regName = new RegExp(/^[a-zA-Z ]+$/);
    let nameInput = e.target.value.trim();
    if (nameInput.length <= 20) {
      if (regName.test(nameInput)) {
        this.setState({ name: nameInput });
      } else {
        e.target.value = "";
        this.setState({ name: "" });
      }
    } else {
      e.target.value = nameInput.substr(0, 20);
    }
  };

  changeValid = e => {
    let v = e.target.value;
    let prevState = this.state.valid;
    if (v === " ") {
      e.target.value = "";
      this.setState({ valid: "" });
    } else {
      if (v.length <= 5) {
        if (v.length === 1) {
          if (Number(v) === 0 || Number(v) === 1) {
            this.setState({ valid: v });
          } else {
            e.target.value = "";
            v = "";
            this.setState({ valid: "" });
          }
        } else if (v.length === 2 && prevState.length === 1) {
          if (Number(v) >= 1 && Number(v) <= 12) {
            e.target.value = v + "/";
            v += "/";
            this.setState({ valid: v });
          } else {
            e.target.value = prevState;
            v = prevState;
            this.setState({ valid: v });
          }
        } else if (v.length >= 4 && isNaN(v.substr(3, 2))) {
          e.target.value = prevState;
        } else {
          this.setState({ valid: v });
        }
      } else {
        e.target.value = v.substr(0, 5);
      }
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
