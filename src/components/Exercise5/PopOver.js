import React, { Component } from "react";
import {
  

  EuiPopover,
  EuiSpacer,
  EuiButtonToggle,
} from "@elastic/eui";
import { EuiButtonIcon } from "@elastic/eui";

class PopOver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      visiblityFirstName: true,
      visiblityLastName: true,
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


    showHideStatus = (e) => {
    this.setState({
      visiblityName: e.target.checked,
    })
  };

    changeStatus = (e,status) => {
      this.setState({
        [e] : !status
      })
    }
  
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
          label="First Name"
          iconType={this.state.visiblityFirstName ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'firstName','visiblityFirstName')}
          // isSelected={this.state.visiblityName}
          isEmpty
        />
        <EuiSpacer />
        <EuiButtonToggle
          label="Last Name"
          iconType={this.state.visiblityLastName ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'lastName','visiblityLastName')}
          // isSelected={this.state.visiblityName}
          isEmpty
        />

        <EuiSpacer />
        <EuiButtonToggle
          label="Branch"
          iconType={this.state.visiblityBranch ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'branch','visiblityBranch')}
      
          isEmpty
        />
        <EuiSpacer />
        <EuiButtonToggle
          label="Roll no"
          iconType={this.state.visiblityRollNo ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'rollNo','visiblityRollNo')}         
          isEmpty
        />

        <EuiSpacer />
        <EuiButtonToggle
          label="Semester"
          iconType={this.state.visiblitySemester ? "eye" : "eyeClosed"}
          onChange={(e) => this.props.showHide(e,'semester','visiblitySemester')}

          isEmpty
        />
        {/* <EuiButton fill>Copy IFRAME code</EuiButton> */}
      </EuiPopover>
    );
  }
}



export default PopOver;




