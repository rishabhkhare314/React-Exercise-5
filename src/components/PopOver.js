import React, { Component, useState } from "react";
import {
  EuiButton,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiIcon,
  EuiSwitch,
  EuiButtonToggle,
} from "@elastic/eui";
import { EuiButtonIcon } from "@elastic/eui";

class PopOver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      visiblityName: true,
      visiblityBranch: true,
      visiblityRollNo: true,
      visiblitySemester: true,
    };
  }

  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  };

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  };

  hideRollno = () => {
    console.log("hide rolll no");
  };

  hideName = (e) => {
    this.setState({
      visiblityName: e.target.checked,
    });
  };
  hideBranch = (e) => {
    this.setState({
      visiblityBranch: e.target.checked,
    });
  };
  hideRollNo = (e) => {
    this.setState({
      visiblityRollNo: e.target.checked,
    });
  };
  hideSemester = (e) => {
    this.setState({
      visiblitySemester: e.target.checked,
    });
  };
  render() {
    // console.log("valuesss",props.column)
    const button = (
      <EuiButtonIcon
        iconType="gear"
        iconSide="right"
        gutterSize="l"
        onClick={this.onButtonClick}
        className="gear"
      ></EuiButtonIcon>
    );
    // console.log("ROLLLLLLL", this.state.visiblityRollNo);
    return (
      <EuiPopover
        className="pull-right button"
        ownFocus
        button={button}
        isOpen={this.state.isPopoverOpen}
        closePopover={this.closePopover}
      >
        <EuiButtonToggle
          label="Name"
          iconType={this.state.visiblityName ? "eye" : "eyeClosed"}
          onChange={this.hideName}
          isSelected={this.state.visiblityName}
          isEmpty
        />

        <EuiSpacer />
        <EuiButtonToggle
          label="Branch"
          iconType={this.state.visiblityBranch ? "eye" : "eyeClosed"}
          onChange={this.hideBranch}
          isSelected={this.state.visiblityBranch}
          isEmpty
        />
        <EuiSpacer />
        <EuiButtonToggle
          label="Roll no"
          iconType={this.state.visiblityRollNo ? "eye" : "eyeClosed"}
          onChange={this.hideRollNo}
          isSelected={this.state.visiblityRollNo}
          isEmpty
        />

        <EuiSpacer />
        <EuiButtonToggle
          label="Semster"
          iconType={this.state.visiblitySemester ? "eye" : "eyeClosed"}
          onChange={this.hideSemester}
          isSelected={this.state.visiblitySemester}
          isEmpty
        />
        {/* <EuiButton fill>Copy IFRAME code</EuiButton> */}
      </EuiPopover>
    );
  }
}
export default PopOver;
