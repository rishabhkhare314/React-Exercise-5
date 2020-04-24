import React, { Component } from 'react'
import {
    EuiPopover,
    EuiButtonToggle,
  } from "@elastic/eui";

export default class DynamicPopOver extends Component {

constructor(props) {
    super(props)

    this.state = {
        isPopoverOpen: false, 
        columnFields: [],
    }
}

popoverOpen = () => {
    this.setState({
        isPopoverOpen: !this.state.isPopoverOpen
    })
}

closePopover = () => {
    this.setState({
        isPopoverOpen: false
    })
}

hideColumns = field => {
    const { showHideColumns } = this.props;
    let array = this.state.columnFields;

    if(array[0].hasOwnProperty(field)){
        let temp = array[0][field]
        if(temp === true){
            array[0][field] = false
        }else{
            array[0][field] = true
        }
    }
    this.setState({
        field: array
    })
    showHideColumns(field, array[0][field])
}

componentDidMount() {
    const { columnDefs } = this.props
    let temp = true
    let columnObj = {}
    columnDefs.map((element) => {
        columnObj[element.field] = temp
    })
    this.setState({
        columnFields: [columnObj]
    })
  }

render() {
    const { columnDefs } = this.props
    const array = this.state.columnFields
    return (
    
        <EuiPopover 
               button={<EuiButtonToggle 
                        label=""
                        iconType="gear" 
                        onChange={this.popoverOpen}                                   
                        isEmpty                                        
                        >
                        </EuiButtonToggle>
                        }
                        isOpen={this.state.isPopoverOpen}
                        closePopover={this.closePopover}
                        style ={{ float: 'right' }}
        >
             {
                 columnDefs.map(element => {
                     let temp = false;
                     if(array[0]){
                         temp = array[0][element.field]
                     }
                     return (
                        <EuiButtonToggle
                        label = {element.headerName}
                        iconType={temp ? "eye" : "eyeClosed"}
                        onChange={() => this.hideColumns(element.field)}
                        isSelected={this.state.isEye}
                        isEmpty
                        isIconOnly
                      />
                     )
                 })
             }
        </EuiPopover>
    )
}
}