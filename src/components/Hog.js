import React from "react";

export default class Hog extends React.Component {
  //   state = { hasBeenClicked: false };
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  }

  hogClickHandler = () => {
    // console.log("click");
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    if (this.state.showDetails === false) {
      return (
        <div
          className="ui four wide column card"
          onClick={this.hogClickHandler}
        >
          <h1>{this.props.hog.name}</h1>
          <img src={this.props.hog.image} alt="" />
        </div>
      );
    } else {
      return (
        <div
          className="ui four wide column card"
          onClick={this.hogClickHandler}
        >
          <h1>{this.props.hog.name}</h1>
          <img src={this.props.hog.image} alt="" />
          <h6>{this.props.hog.specialty}</h6>
          <h6>{this.props.hog.greased}</h6>
          <h6>
            {
              this.props.hog[
                "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
              ]
            }
          </h6>
          <h6>{this.props.hog["highest medal achieved"]}</h6>
        </div>
      );
    }
  }
}
