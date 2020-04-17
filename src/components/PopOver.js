import React, { Component, useState } from "react";
import {
  EuiButton,
  EuiFormRow,
  EuiPopover,
  EuiSpacer,
  EuiIcon,EuiSwitch
} from "@elastic/eui";

function PopOver(props) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const onButtonClick = () =>
    setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  const button = (
    <EuiButton
      iconType="apps"
      iconSide="right"
      onClick={onButtonClick}
    ></EuiButton>
  );

  const hideRollno = () => {
      console.log("hide rolll no")
  }
  console.log("valuesss",props.column)
  return (
    <EuiPopover
      className="pull-right button"
      ownFocus
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}
    >
      <EuiSwitch
          name="switch"
          label="Current time range"
          checked={false}
          onClick={() => {}}
        />
      <EuiFormRow id="rollno">
        <EuiButton iconType="eye" name="Roll No" onClick={(params) => {}} > 
          Roll No.
        </EuiButton>
      </EuiFormRow>
      <EuiFormRow id="branch">
        <EuiButton iconType="eye" onChange={() => {}}>
          Branch
        </EuiButton>
      </EuiFormRow>
      <EuiFormRow id="semesteer">
        <EuiButton iconType="eye" onChange={(e) => {}}>
          Semester
        </EuiButton>
      </EuiFormRow>

      <EuiSpacer />

      {/* <EuiButton fill>Copy IFRAME code</EuiButton> */}
    </EuiPopover>
  );
}

export default PopOver;
