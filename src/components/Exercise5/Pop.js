import React, { Component } from 'react';
import { EuiPopover, EuiButton, EuiButtonToggle } from '@elastic/eui';
import { EuiFlexItem } from '@elastic/eui';
import { EuiFormRow } from '@elastic/eui';

  class Pop extends Component {
    constructor(props) {
      super(props)
      this.state = {
        setIsPopoverOpen: false,
        toggleOn: []

  }
}
onButtonClick = () => {

 this.setState({
   setIsPopoverOpen: !this.state.setIsPopoverOpen
})
console.log(this.state.setIsPopoverOpen)
  }

  closePopover = () => {
    this.setState({
      setIsPopoverOpen: false
      // toggleOn: true
    })
  }

  onToggleChange = (i,field,flag) => {
    console.log(this.state.toggleOn)
    console.log(i)
    console.log(typeof i)
    console.log(typeof this.state.toggleOn)
    let arr = this.state.toggleOn
    if(arr[i] === true){
    flag = false;
    arr[i] = false
    } else {
    if(arr[i] === false) {
    flag = true;
    arr[i] = true
    }
  }
    this.setState({
        toggleOn: arr
      })
      console.log(this.state.toggleOn)
      this.props.visibility(field,flag)
   }

  componentDidMount = () => {
    const arr = []
    const value = true
    for(let i=0;i<this.props.column.length;i++) {
      arr.push(value)
    }
    this.setState({
      toggleOn: [...this.state.toggleOn, ...arr]
    })
  }

render() {

  return(

    <EuiFlexItem grow={false}>
    <EuiPopover
    button = {<EuiButton iconType="gear" iconSide="right" onClick={this.onButtonClick} ></EuiButton>}
    isOpen=  {this.state.setIsPopoverOpen}
    closePopover={this.closePopover}
    anchorPosition="upLeft">

{this.props.column.map((col,index) => { 
  const a = this.state.toggleOn
  //this.state.toggleOn[index] = true
   return( 
     <div key={index}> 
    <EuiFormRow>
    <EuiButtonToggle 
    label= {col.headerName}
    iconType={a[index] ? 'eye' : 'eyeClosed'}
    onChange={() => this.onToggleChange(index,col.field)}
    //isSelected={this.state.toggleOn}
  />
  </EuiFormRow>
 </div>
 ) 
   }) 
 } 
    </EuiPopover>
    </EuiFlexItem>
  )
}
  }
  export default Pop