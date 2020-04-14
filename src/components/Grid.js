import React, { Component } from 'react';
// import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props)

    this.state = {
       columnDefs : [ 
         {  headerName : 'studentID' , field : 'studentID'},
         {  headerName : 'firstName' , field : 'firstName'},
         {  headerName : 'lastName' , field : 'lastName'},
         {  headerName : 'rollNo' , field : 'rollNo'},
         {  headerName : 'branch' , field : 'branch'},
         {  headerName : 'semester' , field : 'semester'},
         {  headerName : 'dateOfBirth' , field : 'dateOfBirth'},
         {  headerName : 'contact' , field : 'contact'},
         {  headerName : 'email' , field : 'email'},
       ],
       rowData : [
        {
          studentID: 1,
          firstName: "Hardik",
          lastName: "Motwani",
          rollNo: 5200,
          branch: "IT",
          semester: 8,
          dateOfBirth: "20-02-1998",
          contact: 8488866756,
          email: "hardik.motwani@rapidops.com"
      },

  {
      studentID: 2,
      firstName: "Meet",
      lastName: "Shah",
      rollNo: 5201,
      branch: "CS",
      semester: 8,
      dateOfBirth: "15-05-1999",
      contact: 7982124770,
      email: "meet.shah@rapidops.com"
  },
  {
      studentID: 3,
      firstName: "Darshan",
      lastName: "Raval",
      rollNo: 5202,
      branch: "IT",
      semester: 6,
      dateOfBirth: "12-11-1997",
      contact: 9870912667,
      email: "darshan.raval@gmail.com"
  },
  
  ]
    }
  }

  render() {
      console.log(this.state.columDefs);
      console.log(this.state.rowData)

    return (
      <div className="ag-theme-balham" 
      style={{width:600,height:600}}>
        <h1>Hello World</h1>
        <AgGridReact 
        columnDefs = {this.state.columnDefs} 
        rowData={this.state.rowData}
        
        />
      </div>
    );
  }
}

export default Grid