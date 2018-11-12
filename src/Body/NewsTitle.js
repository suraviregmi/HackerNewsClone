import React, { Component } from "react";
import Popup from "./Popup";

const URL = "https://hacker-news.firebaseio.com/v0/item/";
class NewsTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PopupVisible: false,
      id: 0,
      title: ""
    };

    this.openPopUp = this.openPopUp.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
  }
  openPopUp() {
    this.setState({
      PopupVisible: true
    });
  }
  closePopUp() {
    this.setState({
      PopupVisible: false
    });
  }
  async componentDidMount() {
    let fetched = await fetch(URL + this.props.id + ".json");
    let result = await fetched.json();
    this.setState({
      title: result.title,
      id: result.id
    });
  }

  render() {
    const { PopupVisible } = this.state;
    //console.log("in news title", this.props.id);
    return (
      <div>
        <div className="NewsTitle" onClick={this.openPopUp}>
          <h3>{this.state.title}</h3>
        </div>

        {PopupVisible ? (
          <Popup
            onClose={this.closePopUp}
            key={this.state.id}
            id={this.state.id}
            title={this.state.title}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NewsTitle;
