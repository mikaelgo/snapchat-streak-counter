import React from "react";

class Streak extends React.Component {
  render() {
    return (
      <div>
        {this.props.streak && (
          <p className="streak__key">
            Streak started: <span>{this.props.streak}</span>
          </p>
        )}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Streak;
