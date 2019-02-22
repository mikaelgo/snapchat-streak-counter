import React from "react";
import logo from "../img/fire-emoji.png";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.calculateStreak}>
      <img alt={logo} src={logo}/>
        <input type="text" name="streak" placeholder="enter streak..." />
        <button>Get Streak</button>
      </form>
    );
  }
}

export default Form;
