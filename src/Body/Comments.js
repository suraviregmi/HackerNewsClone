import React, { Component } from "react";
import SingleComment from "./SingleComment";

let comments = [];
const URL = "https://hacker-news.firebaseio.com/v0/item/";

class Comments extends Component {
  constructor(props) {
    super(props);
  }
  async getAllComments(comment, padding) {
    // console.log("comment is ", comment);
    let finalList = await Promise.all(
      comment.map(async cId => {
        let fetched = await fetch(URL + cId + ".json");
        let { by, id, kids, text } = await fetched.json();
        const details = [{ by, id, kids, text, padding }];
        // console.log("details", details);
        if (kids) {
          details.push(...(await this.getAllComments(kids, padding + 20)));
        }
        return details;
      })
    );
    return [].concat(...finalList);
  }

  async componentDidMount() {
    let fetched = await fetch(URL + this.props.id + ".json");
    let result = await fetched.json();
    //console.log("result", result);

    if (result.kids) {
      comments = await this.getAllComments(result.kids, 20);
    }
  }

  showComment(comment) {
    //console.log("comment is ", comment);
    return (
      <SingleComment
        id={comment.id}
        key={comment.id}
        by={comment.by}
        padding={comment.padding}
        text={comment.text}
      />
    );
  }
  render() {
    return <div>{comments.map(comment => this.showComment(comment))}</div>;
  }
}

export default Comments;
