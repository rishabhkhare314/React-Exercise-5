import React, { Component } from "react";
import { EuiPopover, EuiButton, EuiButtonToggle } from "@elastic/eui";
import { EuiFlexItem } from "@elastic/eui";
import { EuiFormRow, EuiToolTip } from "@elastic/eui";

class Pop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setIsPopoverOpen: false,
      toggleOn: [],
    };
  }

  onButtonClick = () => {
    this.setState({
      setIsPopoverOpen: !this.state.setIsPopoverOpen,
    });
    // console.log(this.state.setIsPopoverOpen);
  };

  closePopover = () => {
    this.setState({
      setIsPopoverOpen: false,
      // toggleOn: true
    });
  };

  onToggleChange = (i, field, flag) => {
    console.log("toggle");
    console.log(this.state.toggleOn);
    console.log(i);
    console.log(typeof i);
    console.log(typeof this.state.toggleOn);
    let arr = this.state.toggleOn;
    if (arr[i] === true) {
      flag = false;
      arr[i] = false;
    } else {
      if (arr[i] === false) {
        flag = true;
        arr[i] = true;
      }
    }
    console.log("toggle", this.state.toggleOn);
    this.setState({
      toggleOn: arr,
    });
    this.props.visibility(field, flag);
  };

  componentDidMount = () => {
    const arr = [];
    const value = true;
    for (let i = 0; i < this.props.column.length; i++) {
      arr.push(value);
    }
    this.setState({
      toggleOn: [...arr],
    });
  };

  componentDidUpdate(prev, state) {
    console.log(prev, this.props);
  }
  render() {
    // // console.log(this.props.columnArr)

    // if (this.props.columnArr) {
    //     const arr = this.props.columnArr.map((column, index) => {
    //     // console.log(column)
    //     let key = Object.keys(column);
    //     console.log(key)

    //   });
    //   console.log('props column',this.props.columnArr)
    // }
    // ??????????????????????????????????????????????????

    // this.setState({
    //   toggleOn: [...arr],
    // });

    // console.log('keys',column[key]);
    // console.log("pop", index, column);
    // this.onToggleChange(index, column.field)
    // return column.field;
    //  console.log("render",this.state.toggleOn)
    //  console.log("render22",this.props.columnArr)

    return (
      <EuiFlexItem grow={false}>
        <EuiPopover
          button={
            <EuiToolTip title="Show Hide PopOver Dynamic">
              <EuiButton
                iconType="gear"
                iconSide="right"
                onClick={this.onButtonClick}
              ></EuiButton>
            </EuiToolTip>
          }
          isOpen={this.state.setIsPopoverOpen}
          closePopover={this.closePopover}
          anchorPosition="upLeft"
        >
          {this.props.column.map((col, index) => {
            console.log("col abc", col.abc)
            if(col.abc === undefined){
              col.abc = true;
            }
            return (
              <div key={index}>
                <EuiFormRow>
                  <EuiButtonToggle
                    label={col.field}
                    iconType={col.abc ? "eye" : "eyeClosed"}
                    onChange={() => this.onToggleChange(index, col.field)}
                    //isSelected={this.state.toggleOn}
                  />
                </EuiFormRow>
              </div>
            );
          })}
        </EuiPopover>
      </EuiFlexItem>
    );
  }
}
export default Pop;
