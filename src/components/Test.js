import React, { Component } from "react";
// import './App.css';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "ag-grid-enterprise";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterField: "",
      updateData: null,
      columnDefs: [
        {
          headerName: "studentID",
          field: "studentID",
          // checkboxSelection: true,
          filter: true,
          sortable: true,
          //rowGroup: true,
          cellClass: "grid-cell-centered",
          resizable: true,
        },
        {
          headerName: "firstName",
          field: "firstName",
          sortable: true,
          filter: true,
          resizable: true,
        },

        {
          headerName: "lastName",
          field: "lastName",
          resizable: true,
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
          headerName: "Action",
          colId: "edit",
          resizable: true,
          cellRenderer: function (params) {
            return '<div><i class="fa fa-edit" onClick{this.onEdit}></i> <i class="fa fa-trash-o"></i></div>';
          },
          
        },
        
      ],
      rowData: null,
    };
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    fetch("https://rishabhkhare314.github.io/hello/name.json");
    fetch("https://rishabhkhare314.github.io/hello/data.json")
      // fetch('./data.json')
      .then((res) => res.json())
      .then((rowData) => this.setState({ rowData }))
      .catch((err) => console.log(err));
  
  }

  onButtonClick = (e) => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + " " + node.model)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  filter = (e) => {
    console.log(e.target.value);
    console.log(this.state.rowData);
    const filterData = this.state.rowData.filter((element) => {
      if (element.firstName.indexOf(e.target.value) != -1) {
        return element;
      }
    });
    //console.log(filterData)
    this.setState({
      rowData: filterData,
    });
    console.log("Fillllter",this.state.rowData)
  };

  render() {
    // console.log(this.state.rowData);
    return (
      <div
        className="ag-theme-material ag-react-container"
        style={{
          height: "80vh",
          width: "100%",
        }}
      >
        <h1 className="ag-react-container">Welcome</h1>
        <button onClick={this.onButtonClick}>Show Selected Data</button>

        <input
          type="text"
          name="filterField"
          // value={this.state.filterField}
          onChange={this.filter}
          className = "search"
        />

        <AgGridReact
          pagination="true"
          paginationAutoPageSize="true"
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
          onGridReady={(params) => (this.gridApi = params.api)}
        ></AgGridReact>
      </div>
    );
  }
}

export default Test;
