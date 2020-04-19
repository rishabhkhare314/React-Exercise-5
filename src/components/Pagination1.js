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

export class Pagination1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      activePage: 0,
      PAGE_COUNT: 10,
    };
  }
  setIsPopoverOpen = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  };

  closePopover = () => this.setIsPopoverOpen(false);

  goToPage = (pageNumber) => this.setActivePage(pageNumber);

  render() {
    const button = (
      <EuiButtonEmpty
        size="s"
        color="text"
        iconType="arrowDown"
        iconSide="right"
        onClick={this.setIsPopoverOpen}
      >
        Rows per page: 50
      </EuiButtonEmpty>
    );

    const items = [
      <EuiContextMenuItem
        key="3 rows"
        icon="empty"
        onClick={() => {
            this.changePageSize(3);
          }}
      >
        3 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="5 rows"
        icon="empty"
        onClick={() => {
            this.changePageSize(4);
          }}
      >
        5 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="7 rows"
        icon="check"
        onClick={() => {
          this.closePopover();
          window.alert("7 rows");
        }}
      >
        7 rows
      </EuiContextMenuItem>,
      <EuiContextMenuItem
        key="9 rows"
        icon="empty"
        onClick={() => {
            this.changePageSize(4);
          }}
      >
        9 rows
      </EuiContextMenuItem>,
    ];
    return (
      <div>
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
              pageCount={this.state.PAGE_COUNT}
              activePage={this.activePage}
              onPageClick={this.goToPage}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }
}

export default Pagination1;
