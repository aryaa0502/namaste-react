import React from "react";
import Childofuserclass from "./Childofuserclass";


class UserClass extends React.Component {
 constructor(props) {
    super(props);
    
    // console.log("child constructor");
 }

componentDidMount() {
    // console.log("child comp did mount");
}
  render() {
    const {avatar, name, location, public_repositories} = this.props;
    // console.log("child render");
    return (
      <div className="user-card">
      <img src={avatar} style={{width:"250px"}}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Public Repositories: {public_repositories}</h4>
       {/* <Childofuserclass /> */}
      </div>
    );
  }
}

export default UserClass;
