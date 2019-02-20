import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.calculateStreak}>
        <input type="text" name="streak" placeholder="enter streak..." />
        <button>Get Streak</button>
      </form>
    );
  }
}

export default Form;
