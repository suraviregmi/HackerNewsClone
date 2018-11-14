import React, { Component } from "react";

class NumberSelect extends Component {
  constructor() {
    super();
    this.state = {
      value: 10
    };
  }
  handelChange = e => {
    this.setState({
      value: e.target.value
    });

    console.log(this.state.value);
    this.props.displayNumber(this.state.value);
  };

  render() {
    return (
      <div>
        <form>
          <select
            value={this.state.value}
            onChange={this.handelChange.bind(this)}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </form>
      </div>
    );
  }
}

export default NumberSelect;
