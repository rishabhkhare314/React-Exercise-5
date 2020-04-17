import React, { Component } from "react";

import {
  EuiButtonEmpty,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPagination,
  EuiPopover,
} from "@elastic/eui";

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      activePage: 0,
      pageCount: 5,
    };
  }
  setIsPopoverOpen = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  };
  closePopover = () => this.setIsPopoverOpen();

  setActivePage = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };

  goPage = (pageNumber) => {
    this.setActivePage(pageNumber);
    const { goToPage } = this.props;
    goToPage(pageNumber);
  };

  changePageSize = (param) => {
    // console.log("###########################",param)
    this.props.pageSize(param);
    this.setActivePage(param);
    this.closePopover();
  };

  render() {
    // console.log("####",this.props.dataLength)
    const button = (
      <EuiButtonEmpty
        size="s"
        color="text"
        iconType="arrowDown"
        iconSide="right"
        onClick={this.setIsPopoverOpen}
      >
        Row per page {this.props.sizePage}
      </EuiButtonEmpty>
    );

    const items = [
      <EuiContextMenuItem
        key="2 rows"
        icon="empty"
        onClick={() => {
          this.changePageSize(2);
        }}
      >
        2 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="4 rows"
        icon="empty"
        onClick={() => {
          this.changePageSize(4);
        }}
      >
        4 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="6 rows"
        icon="check"
        onClick={() => {
          this.changePageSize(6);
        }}
      >
        6 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="8 rows"
        icon="empty"
        onClick={() => {
          this.changePageSize(8);
        }}
      >
        8 rows
      </EuiContextMenuItem>,
    ];

    console.log("@@", this.props.pageCount);
    return (
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiPopover
            button={button}
            isOpen={this.state.isPopoverOpen}
            closePopover={this.closePopover}
            panelPaddingSize="none"
          >
            <EuiContextMenuPanel items={items} />
          </EuiPopover>
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiPagination
            // pageCount={this.props.pageCount}
            pageCount={this.props.sizePage}
            activePage={this.state.activePage}
            onPageClick={this.goPage}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }
}
export default Pagination;
