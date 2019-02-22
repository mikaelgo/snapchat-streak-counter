import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Streak from "./components/Streak";

class App extends React.Component {
  state = {
    streak: undefined,
    error: undefined
  };

  calculateStreak = e => {
    e.preventDefault();

    let date = new Date();
    console.log("DATE BEFORE SETSTATE: " + date);
    const streakValue = e.target.elements.streak.value;
    const streakNumber = Number(streakValue);
    console.log("STREAK: " + streakNumber);
    date.setDate(date.getDate() - streakNumber);
    const formattedDate = new Intl.DateTimeFormat().format(date);
    const streakDateString = String(formattedDate);

    console.log("DATE: " + date);

    if (streakValue) {
      this.setState({
        streak: streakDateString,
        error: ""
      });
    } else {
      this.setState({
        streak: undefined,
        error: "Please enter the correct values!"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <div className="title-container">
                  <Title />
                </div>
              </div>
              <div className="row">
                <div className="col-8 form-container">
                  <Form calculateStreak={this.calculateStreak} />
                </div>
              </div>
              <div className="row">
                <div className="streak-container">
                  <Streak streak={this.state.streak} error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
