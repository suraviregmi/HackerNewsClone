import React, { Component } from "react";

class SingleComment extends Component {
  render() {
    return (
      <div
        className="SingleComment"
        style={{ paddingLeft: this.props.padding }}
      >
        <p className=" Author">{this.props.by}</p>
        <p className="Text">{this.props.text}</p>
      </div>
    );
  }
}

export default SingleComment;
