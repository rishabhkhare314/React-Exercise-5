import React, { Component } from "react";

export class Style extends Component {
  render() {
    return (
      <div
        class="ag-react-container custom-tooltip"
        style="display: inline-block; height: 100%"
      >
        <span>Hello World</span>
      </div>
      //     <FontContext.Consumer>
      //     {fontWeight => <span style={{fontWeight}}>Stylised Component!</span> }
      // </FontContext.Consumer>
    );
  }
}

export default Style;
