import React, { Component } from "react";
import { EuiButtonIcon,EuiFlexGroup } from "@elastic/eui";
export class Delete extends Component {
  render() {
    return (
      <>
        <EuiFlexGroup alignItems="center" gutterSize="s">
          <EuiButtonIcon
          aria-label="deleteButton"
            iconType="trash"
            className="icons"
            onClick={this.props.delete}
          />
          <EuiButtonIcon aria-label="editButton" iconType="pencil" className="icons" onClick={ () => console.log("edit")} />
        </EuiFlexGroup>
      </>
    );
  }
}

export default Delete;
