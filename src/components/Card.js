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
    let cardNumber = e.target.value;
    if (cardNumber.length <= 16) {
      this.setState({ cardNumber: cardNumber });
    } else {
      e.target.value = cardNumber.substr(0, 16);
    }
  };
  changeName = e => {
    this.setState({ name: e.target.value });
  };

  changeValid = (e) => {
    let v = e.target.value;
    let prevState = this.state.valid;
    if (v.length <= 5) {
      if (v.length === 2 && prevState.length === 1) {
        if (Number(v) >= 1 && Number(v) <= 12) {
          e.target.value = v + '/';
          v += '/';
          this.setState({ valid: v });
        }
        else {
          e.target.value = "";
          v = "";
          this.setState({ valid: "" });
        }
      }
      this.setState({ valid: v });
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
            <p>{String(this.state.cardNumber).padEnd(16, "*")}</p>
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
