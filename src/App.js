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
        <Title />
        <Form calculateStreak={this.calculateStreak} />
        <Streak 
        streak={this.state.streak}
        error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
