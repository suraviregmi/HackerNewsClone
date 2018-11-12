import React, { Component } from "react";

const APIS = "https://hacker-news.firebaseio.com/v0/item/";

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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
          items: json,
          entry: []
        });
        //console.log(this.state.items);
      });
  }

  getTenIds() {
    console.log("in displa itens");
    const tenitems = [];
    for (var i = 0; i < 10; i++) {
      tenitems[i] = this.state.items[i];
    }
    return tenitems;
    //console.log("temitems", tenitems);
  }
  getDetails(tenitems) {
    console.log("in ger details", tenitems);
    for (var i = 0; i < 10; i++) {
      let tofetch = APIS + tenitems[i] + ".json";
      // console.log("to fetch", tofetch);
      fetch(tofetch)
        .then(res => res.json())
        .then(entry => {
          console.log("entries is ", entry);
          console.log(entry.title);
          console.log(entry.kids);
          console.log(entry.url);
        });
    }
  }

  render() {
    let isLoaded = this.state.isLoaded;

    if (!isLoaded) {
      return null;
    } else {
      let tenitems = this.getTenIds();
      console.log("in render", tenitems);
      this.getDetails(tenitems);
      console.log("in render single items");

      return null;
    }
  }
}

export default API;
