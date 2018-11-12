import React, { Component } from "react";
import Comments from "./Comments";

const URL = "https://hacker-news.firebaseio.com/v0/item/";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);

    this.state = {
      link: "",
      title: "",
      id: "",
      descendants: 0
    };
  }
  close() {
    this.props.onClose();
  }
  async componentDidMount() {
    let fetched = await fetch(URL + this.props.id + ".json");
    let result = await fetched.json();
    this.setState({
      title: result.title,
      id: result.id,
      link: result.url,
      descendants: result.descendants
    });
  }
  render() {
    return (
      <div className="Popup">
        <div className="PopupInner">
          <div className="EntryTop">
            <a href={this.state.link}>
              <h1 className="NewsStoryTitle">{this.props.title}</h1>
            </a>
            <button className="CloseBtn" onClick={this.close}>
              Close
            </button>
          </div>

          <h3 className="commentsHeading">Comments</h3>
          <div className="CommentsWrapper">
            <Comments key={this.props.id} id={this.props.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
