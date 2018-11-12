import React, { Component } from "react";
import NewsTitle from "../Body/NewsTitle";

const APIS = "https://hacker-news.firebaseio.com/v0/item/";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allIds: [],
      allEntries: [],
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
        //console.log(this.state.allIds);
      });
  }

  callTenTitle() {
    const allItems = this.state.allIds;
    console.log("allIds in call ten allIds");
    let rows = [];
    for (let i = 0; i < 10; i++) {
      let id = allItems[i];
      rows.push(this.objectRow(id));
    }
    return rows;
  }

  objectRow(i) {
    let tofetch = APIS + i + ".json";

    fetch(tofetch)
      .then(res => res.json())
      .then(entry => {
        this.setState({
          allEntries: entry
        });
      });
  }

  singleRow(entry) {
    console.log("insingle row", entry.id, entry.title);
    return <NewsTitle key={entry.id} title={entry.title} />;
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
