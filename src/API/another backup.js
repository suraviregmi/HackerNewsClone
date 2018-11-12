import React, { Component } from "react";
import NewsTitle from "../Body/NewsTitle";

const APIS = "https://hacker-news.firebaseio.com/v0/item/";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allIds: [],
      pageNo: 1,
      tenEntries: [],
      isLoaded: false
    };
  }
  //"https://hacker-news.firebaseio.com/v0/item/18379394.json"
  componentDidMount() {
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(res => res.json())
      .then(json => {
        //console.log("console", json);
        this.setState({
          isLoaded: true,
          allIds: json
        });
        this.selectTen();
        //console.log(this.state.allIds);
      });
  }
  selectTen() {
    let tenIds = [];
    let allitems = this.state.allIds;
    for (let i = 0 * this.state.pageNo; i < 10 * this.state.pageNo; i++) {
      tenIds.push(allitems[i]);
    }
    console.log(tenIds);
    this.setState({
      tenEntries: tenIds
    });
  }
  callTenTitle() {
    console.log(this.state.tenEntries);
  }

  render() {
    let isLoaded = this.state.isLoaded;

    if (isLoaded) {
      return <div>{this.callTenTitle()}</div>;
    } else {
      //return loading screen
      return <div> Loading ...</div>;
    }
  }
}

export default API;
