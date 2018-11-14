import React, { Component } from "react";

class DisplayTable extends Component {
  getRows = row => {
    return (
      <tr>
        <td>{row.rank}</td>
        <td>{row.name}</td>
        <td>{row.symbol}</td>
        <td>{row.price_usd}</td>
        <td>{row.price_btc}</td>
      </tr>
    );
  };
  render() {
    return (
      <div className="DisplayTable">
        <table>
          <thead>
            <tr>
              <th>
                Rank
                <button onClick={e => this.props.sortBy("rank", e)}>^</button>
              </th>
              <th>Name</th>
              <th>Symbol</th>
              <th>
                Price USD
                <button onClick={e => this.props.sortBy("price_usd", e)}>
                  ^
                </button>
              </th>
              <th>
                Price BTC
                <button onClick={e => this.props.sortBy("price_btc", e)}>
                  ^
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{this.props.data.map(row => this.getRows(row))}</tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
