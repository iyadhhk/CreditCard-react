import React from "react";
import "./Card.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ali",
      cardNumber: 564645,
      valid: ""
    };
  }
  changeCardNum = e => {
    let cardNum = e.target.value;
    let prevState = this.state.cardNumber;
    if (cardNum.length <= 16) {
      if (isNaN(cardNum)) {
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
    return str.slice(0, 4).concat('  ', str.slice(4, 8)).concat('  ', str.slice(8, 12)).concat('  ', str.slice(12));

  };
  changeName = e => {
    let nameInput = e.target.value;
    if (nameInput.length <= 20) {
      this.setState({ name: nameInput });
    }
    else {
      e.target.value = nameInput.substr(0, 20);
    }
  };

  changeValid = (e) => {
    let v = e.target.value;
    let prevState = this.state.valid;
    if (v.length <= 5) {
      if (v.length === 1) {
        if (Number(v) === 0 || Number(v) === 1) {
          this.setState({ valid: v });
        } else {
          e.target.value = "";
          v = "";
          this.setState({ valid: "" });
        }
      }
      else if (v.length === 2 && prevState.length === 1) {
        if (Number(v) >= 1 && Number(v) <= 12) {
          e.target.value = v + '/';
          v += '/';
          this.setState({ valid: v });
        }
        else {
          e.target.value = prevState;
          v = prevState;
          this.setState({ valid: v });
        }
      }
      else if (v.length >= 4 && isNaN(v.substr(3, 2))) {
        e.target.value = prevState;
      }
      else {
        this.setState({ valid: v });
      }
    }
    else {
      e.target.value = v.substr(0, 5);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="creditcard">
          <h1 className="right-al">Company Name</h1>
          <img
            className="puce"
            src="https://s4i6r5r7.stackpathcdn.com/wp/wp-content/themes/simoptions/assets/img/sim-card-bg-min.png"
            alt=""
          ></img>
          <div className="infos">

            <p>{this.formatCardNumber()}</p>
            <p className="right-al">
              {String(this.state.valid).padEnd(5, "*")}
            </p>
            <p>{this.state.name.toUpperCase()}</p>
          </div>
          <img
            className="smartcard"
            src="https://i.pinimg.com/originals/28/99/08/289908a6bb2d5f2ab846f0606e72e0fe.png"
            alt=""
          ></img>
        </div>
        <div className="inputs">
          <input type="text" onChange={this.changeCardNum}></input>
          <input type="text" onChange={this.changeName}></input>
          <input type="text" onChange={this.changeValid}></input>
        </div>
      </div>
    );
  }
}

export default Card;
