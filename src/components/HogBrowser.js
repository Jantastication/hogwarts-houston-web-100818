import React from "react";

import Hog from "./Hog";

export default class HogBrowser extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => {
          //   console.log(hog);
          return <Hog hog={hog} key={hog.id} />;
        })}
      </div>
    );
  }
}
