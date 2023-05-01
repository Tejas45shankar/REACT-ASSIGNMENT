import React, { Component } from "react";

class Colour extends Component {
  state = {
    title: "Colour-list",
    allColours: ["Red", "Blue", "Green"],
  };
  render() {
    return (<React.Fragment>
<div className="container">
    <h2 className="text-success">{this.state.title}</h2>
    <ul className="list-group">
        {this.state.allColours.map((eachother)=>(
            <li className="list-group-item" key={eachother}> {eachother}</li>
        ))}
    </ul>


</div>

    </React.Fragment>
    );
  }
}

export default Colour;
