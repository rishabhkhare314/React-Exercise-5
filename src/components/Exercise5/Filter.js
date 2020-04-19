import React, { Component } from "react";

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowData: this.props.rowData,
    };
  }

  filter = (e) => {
    const filterData = this.props.rowData.filter((element) => {
      if (element.firstName.search(e.target.value) !== -1) {
        return element;
      }
    });
    // console.log("!!!!!!",filterData)

    this.setState(
      {
        rowData: filterData,
      },
      () => {
        this.props.filterData(filterData);
      }
    );
  };

  render() {
    // console.log("@@@", this.props.rowData);

    return (
      <>
        <input
          type="text"
          name="filterField"
          onChange={this.filter}
          className="search"
          placeholder="Enter Search here..."
        />
      </>
    );
  }
}

export default Filter;
