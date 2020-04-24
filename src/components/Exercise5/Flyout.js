import React, { Component } from "react";

import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiText,
  EuiTitle,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiBadge,
  EuiSpacer,
} from "@elastic/eui";

class Flyout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlyoutVisible: false,
      closeBadge: true,
    };
  }

  visibleFlyout = () => {
    this.setState({
      isFlyoutVisible: !this.state.isFlyoutVisible,
    });
  };

  setIsFlyoutVisible = () => {
    this.setState({
      isFlyoutVisible: false,
    });
    this.props.closeFlyout();
  };

  closeBadge = () => {
    this.setState({
      closeBadge: false,
    });
  };

  render() {
    const { firstName, lastName, rollNo, branch } = this.props.selectedData[0];
    console.log(this.props.rowIndex);

    return (
      <div>
        <EuiFlyout
          onClose={() => this.setIsFlyoutVisible()}
          aria-labelledby="flyoutTitle"
          size="s"
        >
          <EuiFlyoutHeader hasBorder>
            <EuiTitle size="m">
              <h2 id="flyoutTitle">Details about : {firstName}</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <EuiText></EuiText>
            <EuiText>
              <h3>First Name :: {firstName}</h3>
            </EuiText>
            <EuiText>
              <h3>Last Name :: {lastName}</h3>
            </EuiText>
            <EuiText>
              <h3>Roll No :: {rollNo}</h3>
            </EuiText>
            <EuiText>
              <h3>Branch :: {branch}</h3>
            </EuiText>
            <EuiSpacer />
            <EuiText>
              <h3>
                Tags ::
              
                {this.props.tags.map((tag) => {
                  return (
                    <EuiBadge o iconType="cross" iconSide="left">
                      {tag.label}
                    </EuiBadge>
                  );
                })}
              </h3>
            </EuiText>
          </EuiFlyoutBody>

          {/* <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              iconType="cross"
              onClose={() => this.setIsFlyoutVisible()}
              flush="left"
            >
              Close
            </EuiButtonEmpty>
          </EuiFlexItem> */}
        </EuiFlyout>
      </div>
    );
  }
}
export default Flyout;
