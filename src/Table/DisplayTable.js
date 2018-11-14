import React, { Component } from "react";

class DisplayTable extends Component {
  getRows = row => {
    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.by}</td>
        <td>{row.score}</td>
        <td>{row.type}</td>
        <td>{row.title}</td>
      </tr>
    );
  };

  render() {
    //console.log(this.props.data);
    return (
      <div className="DisplayTable">
        <table>
          <thead>
            <tr>
              <th>
                ID
                <button onClick={e => this.props.sortBy("id", e)}>^</button>
              </th>
              <th>BY</th>
              <th>Score</th>
              <th>
                Type
                {/* <button onClick={e => this.props.sortBy("price_usd", e)}>
                  ^
                </button> */}
              </th>
              <th>
                Title
                {/* <button onClick={e => this.props.sortBy("price_btc", e)}>
                  ^
                </button> */}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data
              .slice(0, this.props.displayNumber)
              .map(row => this.getRows(row))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
