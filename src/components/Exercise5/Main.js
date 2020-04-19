import React, { Component } from "react";
import { EuiFlexGroup } from "@elastic/eui";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import PopOver from "./PopOver";
import Pagination from "./Pagination";
import { EuiButtonIcon } from "@elastic/eui";
import ComboBox from "./ComboBox";
import Filter from "./Filter";
import Delete from "./Delete";
import Pop from "./Pop";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      hide: true,
      sizePage: 5,
      pageCount: null,
      totalPages: 0,
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
          width: 150,
        },
        {
          headerName: "firstName",
          field: "firstName",
          sortable: true,
          filter: true,
          resizable: true,
          visibleFields: true,
          hidden: false,
          width: 200,
        },
        {
          headerName: "lastName",
          field: "lastName",
          resizable: true,
          visibleFields: true,
          hidden: false,
          width: 200,
        },
        {
          headerName: "rollNo",
          field: "rollNo",
          filter: true,
          sortable: true,
          resizable: true,
          width: 200,
        },
        {
          headerName: "branch",
          field: "branch",
          filter: true,
          sortable: true,
          resizable: true,
          width: 150,
        },
        {
          headerName: "semester",
          field: "semester",
          filter: true,
          sortable: true,
          resizable: true,
           width: 150,
        },
        {
          headerName: "Tag Name",
          field: "tagName",
          filter: true,
          sortable: true,
          resizable: true,
          width: 350,
          cellRendererFramework: function (params) {
            return <ComboBox />;
          },
        },
        {
          headerName: "Action",
          field : "action",
          colId: "edit",
          resizable: true,
          cellRendererFramework:  (params) => {
            return (
              <Delete delete={this.rowDelete} /> 
            );
          }
        },
      ],
      rowData: null,
    };
    // this.filter = this.filter.bind(this);
    // this.rowDelete = this.rowDelete.bind(this);

    this.popRef = React.createRef();
  }

  componentDidMount() {
    fetch("https://rishabhkhare314.github.io/hello/data.json")
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData, updateRowData: rowData }))
      .catch((err) => console.log(err));
    // console.log("Did mount", this.state.rowData);
  }

  onGridReady = (params) => {
    // console.log("grid readry paramsS");
    this.gridApi = params.api;
    this.gridcolumnApi = params.columnApi;
    this.gridApi.paginationSetPageSize(this.state.sizePage);
    this.setState(
      {
        pageCount: this.gridApi.paginationProxy.totalPages,
      },
      () => {
        // console.log("page", this.state.pageCount);
      }
    );
    this.gridApi.paginationSetPageSize(this.state.sizePage);
    // console.log(this.gridApi);
  };

  onButtonClick = (e) => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.firstName + " " + node.lastName)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  // ----------- Manage Delete Rows   -----------
  rowDelete = () => {
    const selectedData = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({ remove: selectedData });
  };

  // ----------- Manage Pagination   -----------

  pageSize = (params) => {
    //  debugger
    console.log("hello", this.gridApi);
    this.setState({
      sizePage: params,
    });
    this.gridApi.paginationSetPageSize(params);
  };

  goToPage = (params) => {
    this.gridApi.paginationGoToPage(params);
  };
  changePages = () => {
    if(this.gridApi != undefined){
      this.setState({
        totalPages: this.gridApi.paginationProxy.totalPages,
      })
    }
  }

  // -----------  Manage Filter Data  -----------

  filterData = (params) => {
    // console.log("param############",params)
    this.setState({
      updateRowData: params,
    });
  };

  // // -----------  Manage PopOver   -----------
  showHide = (e, fieldName, stateName) => {
    console.log(e.target.checked);
    this.change = e.target.checked;
    this.gridcolumnApi.setColumnVisible(fieldName, !this.change);
    this.popRef.current.changeStatus(stateName, this.change);
  };

  hideShow = (field,boolean) => {
    console.log(field)
    console.log(boolean)
    this.gridcolumnApi.setColumnVisible(field,boolean)
  }

  render() {
    return (
      <div
        className="ag-theme-material ag-react-container table"
        style={{
          height: "60vh",
          width: "100%",
        }}
      >
        <Filter rowData={this.state.rowData} filterData={this.filterData} />

        <PopOver
          column={this.state.columnDefs}
          showHide={this.showHide}
          ref={this.popRef}
        />

        <AgGridReact
          pagination={true}
          // paginationAutoPageSize="true"
          paginationPageSize={this.state.sizePage}
          columnDefs={this.state.columnDefs}
          rowData={this.state.updateRowData}
          rowSelection="multiple"
          onGridReady={(e) => this.onGridReady(e)}
          onPaginationChanged ={ this.changePages}
        />

        <Pagination
          pageSize={this.pageSize}
          pageCount={this.state.pageCount}
          goToPage={this.goToPage}
          sizePage={this.state.sizePage}
          totalPages={this.state.totalPages}
        />
        <Pop column = {this.state.columnDefs} visibility = {this.hideShow} />
        <button onClick={this.onButtonClick} className="btn btn-primary">
          Show Selected Data
        </button>
      </div>
    );
  }
}

export default Main;
