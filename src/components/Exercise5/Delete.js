import React, { Component } from "react";
import { EuiButtonIcon,EuiFlexGroup } from "@elastic/eui";
export class Delete extends Component {
  render() {
    console.log("delete",this.props)
    return (
      <>
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiButtonIcon
            iconType="trash"
            className="icons"
            onClick={this.props.delete}
          />
          <EuiButtonIcon iconType="pencil" className="icons" onClick={ () => console.log("edit")} />
        </EuiFlexGroup>
      </>
    );
  }
}

export default Delete;
