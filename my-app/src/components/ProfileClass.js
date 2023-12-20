import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      userInfo: { name: "something", location: "dubia" },
    };
  }
  async componentDidMount() {
    console.log("componentDidMount");
    const d = await fetch("https://api.github.com/users/tabindaa");
    const res = await d.json();
    this.setState({
      userInfo: res,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <div>
        AboutProfileClass.....
        <p>{this.state.userInfo.name}</p>
        <p>{this.state.userInfo.location}</p>
      </div>
    );
  }
}
export default Profile;
