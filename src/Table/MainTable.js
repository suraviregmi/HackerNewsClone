import React, { Component } from "react";
import ProcessTable from "./ProcessTable";
import NumberSelect from "./NumberSelect";

const URL = "https://hacker-news.firebaseio.com/v0/item/";
class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfEntries: 10,
      entries: [],
      detailEntry: []
      // detailEntry: {
      //   id: 1,
      //   title: "",
      //   by: "",
      //   kids: 0
      // }
    };
  }

  componentWillMount() {
    this.pullData();
  }

  async pullData() {
    let fetched = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let result = await fetched.json();
    let NewsInAPage = [];
    for (let i = 0; i < 100; i++) {
      NewsInAPage.push(result[i]);
      //console.log("result id is ", result[i]);
      this.pullRequiredEntries(result[i]);
    }
    this.setState({ entries: NewsInAPage });
  }

  displayNumber = value => {
    //console.log("in main value is ", value);
    this.setState({
      noOfEntries: value
    });
    // show that no of entries
    for (let i = 0; i < value; i++) {
      // console.log("id value ", i, this.state.entries[i]);
    }
  };

  async pullRequiredEntries(id) {
    let fetched = await fetch(URL + id + ".json");
    let result = await fetched.json();
    this.setState({
      detailEntry: [...this.state.detailEntry, result]
    });
  }

  render() {
    return (
      <div className="MainTable">
        <NumberSelect displayNumber={this.displayNumber.bind(this)} />
        <ProcessTable
          parentState={this.state}
          displayNumber={this.state.noOfEntries}
        />
      </div>
    );
  }
}

export default MainTable;
