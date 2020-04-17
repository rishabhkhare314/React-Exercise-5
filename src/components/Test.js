import React, { Component } from "react";
// import './App.css';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
  EuiButton,
  EuiFieldText,
  EuiIcon,
} from "@elastic/eui";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "ag-grid-enterprise";
import PopOver from "./PopOver";
import Pagination from "./Pagination";
import { EuiButtonIcon } from "@elastic/eui";
import { EuiSpacer } from "@elastic/eui";
import ComboBox from "./ComboBox";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      hide: true,
      sizePage: 5,
      pageCount: null,
      filterField: "",
      updateRowData: null,
      columnDefs: [
        {
          headerName: "studentID",
          field: "studentID",
          checkboxSelection: true,
          filter: true,
          sortable: true,
          //rowGroup: true,
          cellClass: "grid-cell-centered",
          resizable: true,
          visibleFields: true,
          hidden: false,
        },
        {
          headerName: "firstName",
          field: "firstName",
          sortable: true,
          filter: true,
          resizable: true,
          visibleFields: true,
          hidden: false,
        },
        {
          headerName: "lastName",
          field: "lastName",
          resizable: true,
          visibleFields: true,
          hidden: false,
        },
        {
          headerName: "rollNo",
          field: "rollNo",
          filter: true,
          sortable: true,
          resizable: true,
        },
        {
          headerName: "branch",
          field: "branch",
          filter: true,
          sortable: true,
          resizable: true,
        },
        {
          headerName: "semester",
          field: "semester",
          filter: true,
          sortable: true,
          resizable: true,
        },
        {
          headerName: "Tag Name",
          field: "tagName",
          filter: true,
          sortable: true,
          resizable: true,
          width: 400,
          cellRendererFramework: function (params) {
            return <ComboBox />;
          },
        },
        {
          headerName: "Action",
          colId: "edit",
          resizable: true,
          cellRendererFramework: function (params) {
            return (
              // <EuiIcon type="trash" className="icons"/>
              <EuiFlexGroup alignItems="center" gutterSize="s">
                <EuiButtonIcon
                  iconType="trash"
                  className="icons"
                  onClick={() => this.rowDelete()}
                />
                <EuiButtonIcon
                  iconType="pencil"
                  className="icons"
                  onClick={() => this.rowDelete()}
                />
              </EuiFlexGroup>
            );
          }.bind(this),
        },
      ],
      rowData: null,
    };
    this.filter = this.filter.bind(this);
    // this.rowDelete = this.rowDelete.bind(this);
  }

  componentDidMount() {
    // fetch("https://rishabhkhare314.github.io/hello/name.json");
    fetch("https://rishabhkhare314.github.io/hello/data.json")
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData, updateRowData: rowData }))
      .catch((err) => console.log(err));
    console.log("Did mount", this.state.rowData);
  }

  onGridReady = (params) => {
    console.log("grid readry paramsS");
    this.gridApi = params.api;
    this.gridApi.paginationSetPageSize(this.state.sizePage);
    this.setState(
      {
        pageCount: this.gridApi.paginationProxy.totalPages,
      },
      () => {
        console.log("page", this.state.pageCount);
      }
    );
    console.log(this.gridApi.paginationProxy.totalPages);
  };

  onButtonClick = (e) => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.firstName + " " + node.lastName)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  rowDelete = () => {
    const selectedData = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedData });
  };

  filter = (e) => {
    console.log(e.target.value);
    console.log(this.state.rowData);
    const filterData = this.state.rowData.filter((element) => {
      if (element.firstName.search(e.target.value) !== -1) {
        return element;
      }
    });
    this.setState({
      updateRowData: filterData,
    });
    console.log("Fillllter", this.state.updateRowData);
  };

  pageSize = (params) => {
    //  debugger;
    this.setState({
      sizePage: params,
    });
    this.gridApi.paginationSetPageSize(params);
  };
  // count = () => {
  //   goconst length =  this.state.rowData.length
  // }

  goToPage = (params) => {
    this.gridApi.paginationGoToPage(params);
  };
  render() {
    return (
      <div
        className="ag-theme-material ag-react-container table"
        style={{
          height: "60vh",
          width: "100%",
        }}
      >
        {" "}
        <button onClick={this.count}>Show @@@@Selected Data</button>
        <EuiFlexGroup gutterSize="s" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty
              color="text"
              onClick={() => window.alert("Button clicked")}
            >
              Text
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
        <h1>Exercise 5</h1>
        <button onClick={this.onButtonClick}>Show Selected Data</button>
        <input
          type="text"
          name="filterField"
          // value={this.state.filterField}
          onChange={this.filter}
          className="search"
          placeholder="Enter Search here..."
        />
        <PopOver column={this.state.columnDefs} />
        <AgGridReact
          pagination={true}
          // paginationAutoPageSize="true"
          paginationPageSize={this.state.sizePage}
          columnDefs={this.state.columnDefs}
          rowData={this.state.updateRowData}
          rowSelection="multiple"
          onGridReady={(e) => this.onGridReady(e)}
        ></AgGridReact>
        <Pagination
          pageSize={this.pageSize}
          pageCount={this.state.pageCount}
          goToPage={this.goToPage}
          sizePage={this.state.sizePage}
          length={this.state.count}
        />
        <button onClick={this.onButtonClick} className="btn btn-primary">
          Show Selected Data
        </button>
      </div>
    );
  }
}

export default Test;
