import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
    this.state = {
      userInfo: {
        avatar: "url",
        name: "aayu",
        location: "def",
        publicRepos: "abc@gmail.com",
      },
    };
  }

  async componentDidMount() {
    // console.log("parent comp did mount");
    const data = await fetch("https://api.github.com/users/aryaa0502");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {}

  render() {
    // console.log("parent render");
    const { avatar_url, name, location, public_repos } = this.state.userInfo;
    return (
      <div className="about">
        <h1 style={{ textAlign: "center" }}>We are a food delivery service.</h1>
        <h1 style={{ textAlign: "center" }}>Our Team Members:</h1>
        <div className="user-grid">
          <UserClass
            avatar={avatar_url}
            name={name}
            location={location}
            public_repositories={public_repos}
          />
        </div>
      </div>
    );
  }
}
// const About = () => {
//      return (
//         <div className="about">
//             <h1 style={{textAlign:"center"}}>We are a food delivery service.</h1>
//             <h1 style={{textAlign:"center"}}>Our Team Members:</h1>
//             <div className="user-grid">
//             <User name={"Aayushi (function)"} location={"Patna"} mail={"ayushiarya599@gmail.com"}  />
//             <UserClass name={"Aayushi (class)"} location={"Patna"} mail={"ayushiarya599@gmail.com"} />

//             </div>
//         </div>
//      );
// }

export default About;
