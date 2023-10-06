import {Component} from "react";

class Childofuserclass extends Component {
    constructor(props){
        super(props);
        console.log("Childofuserclass constructor");
    }

    componentDidMount() {
        console.log("Childofuserclass comp did mount");
    }

    render() {
        console.log("Childofuserclass render");
        return (
<div className="Childofuserclass">
Childofuserclass
        </div>
        );
    }
}

export default Childofuserclass