import React, { Component } from "react";
import CoinTable from "./CoinTable";
import data from "../data/coins.json";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
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

  sortBy = value => {
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
    return (
      <div className="Table">
        <CoinTable
          key={this.state.data}
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    );
  }
}

export default Table;
