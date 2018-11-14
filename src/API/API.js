import React, { Component } from "react";
import NewsTitle from "../Body/NewsTitle";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      pageNo: 1,
      isLoaded: false
    };
  }
  //"https://hacker-news.firebaseio.com/v0/item/18379394.json"

  componentWillMount() {
    this.fetchNewsStories();
  }

  async fetchNewsStories() {
    let fetched = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );
    let result = await fetched.json();
    let NewsInAPage = [];
    for (let i = 0; i < 100; i++) {
      NewsInAPage.push(result[i]);
    }
    this.setState({ entries: NewsInAPage });
    console.log("entries", this.state.entries);
  }
  showCards = ids => {
    // console.log("ids is ", ids);
    return <NewsTitle key={ids} id={ids} />;
  };

  render() {
    return <div>{this.state.entries.map(entry => this.showCards(entry))}</div>;
  }
}

export default API;
