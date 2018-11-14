import React, { Component } from "react";
import DisplayTable from "./DisplayTable";
import data from "../data/coins.json";

class ProcessTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

      direction: {
        price_usd: "asc",
        price_btc: "asc",
        rank: "asc",
        name: "asc",
        symbol: "asc"
      }
    };
    this.sortBy = this.sortBy.bind(this);
  }

  componentWillMount() {
    this.setState({ data: this.props.parentState.detailEntry });
  }
  sortBy = (value = 10) => {
    console.log("value", this.state.data);

    this.setState({
      data: data.sort((a, b) =>
        this.state.direction[value] === "asc"
          ? a[value] - b[value]
          : b[value] - a[value]
      ),
      direction: {
        [value]: this.state.direction[value] === "asc" ? "desc" : "asc"
      }
    });
  };

  render() {
    // console.log("in process table  the ", this.props.parentState.detailEntry);
    let detailData = this.props.parentState.detailEntry;
    // console.log(" detail dat a", detailData);
    return (
      <div className="ProcessTable">
        <DisplayTable
          key=""
          data={detailData}
          sortBy={this.sortBy}
          displayNumber={this.props.displayNumber}
        />
      </div>
    );
  }
}

export default ProcessTable;
