import React from "react";
import logo from "../img/fire-emoji.png";


class Streak extends React.Component {
  render() {
    return (
      <div >
        <img className="img-fluid" alt={logo} src={logo}/>
        {this.props.streak && (
          <p className=" streak__key">
            Streak started: <span>{this.props.streak}</span>
          </p>
        )}
        {this.props.error && <p className=" streak__key">{this.props.error}</p>}
      </div>
    );
  }
}

export default Streak;
