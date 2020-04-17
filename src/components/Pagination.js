import React, { Component, useState } from "react";

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
    super(props)

    this.state = {
      isPopoverOpen: false,
      activePage: 1,
      pageCount:5,

    }
  }
  setIsPopoverOpen = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen
    })
  }
  closePopover = () => this.setIsPopoverOpen(false)
  goToPage = (pageNumber) => this.setActivePage(pageNumber);
  setActivePage = (pageNumber) => {
    this.setState({
      activePage: pageNumber
    })
  }
  changePageSize = (param) => {

    console.log("###########################",param)
    const z = this.props.pageSize(param)
    console.log("&&&&&&&&",z)
    this.setActivePage(param)
    this.closePopover()

  }
  
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
        onClick={this.changePageSize.bind(this, 2)}
      >
        2 rows
    </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="4 rows"
        icon="empty"
        onClick={this.changePageSize.bind(this, 4)}

      >
        4 rows
    </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="6 rows"
        icon="check"
        onClick={this.changePageSize.bind(this, 6)}

      >
        6 rows
    </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="8 rows"
        icon="empty"
        onClick={this.changePageSize.bind(this, 8)}

      >
        8 rows
    </EuiContextMenuItem>,
    ];


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
            pageCount={this.props.sizePage}
            activePage={this.state.activePage}
            onPageClick={this.goToPage}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    );
  }
}
export default Pagination;