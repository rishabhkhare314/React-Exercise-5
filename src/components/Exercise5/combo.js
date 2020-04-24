// // import { EuiPopover, EuiButton, EuiButtonIcon, EuiComboBox } from '@elastic/eui';
// // import React, { Component } from 'react';
// // class combo extends Component{

// // constructor(props) {
// //     super(props)

// //     this.state = {
         
// //  options : [
// //     {
// //       label: 'Titan',
// //       'data-test-subj': 'titanOption',
// //     },
// //     {
// //       label: 'Enceladus is disabled',
// //       disabled: true,
// //     },
// //     {
// //       label: 'Mimas',
// //     },
// //     {
// //       label: 'Dione',
// //     },
// //     {
// //       label: 'Iapetus',
// //     },
// //     {
// //       label: 'Phoebe',
// //     },
// //     {
// //       label: 'Rhea',
// //     },
// //     {
// //       label:
// //         "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
// //     },
// //     {
// //       label: 'Tethys',
// //     },
// //     {
// //       label: 'Hyperion',
// //     },
// //   ],
// //   isPopoverOpen :false,
// //   selectedOptions : []
// //     }
// // }



// //   onChange = (selectedOptions) => {
// //     this.setState({
// //       selectedOptions: selectedOptions,
// //     });
// //   };

  
// //   onCreateOption = (searchValue, flattenedOptions = []) => {
// //     if (!searchValue) {
// //       return;
// //     }

// //     let normalizedSearchValue = searchValue.trim().toLowerCase();

// //     if (!normalizedSearchValue) {
// //       return;
// //     }

// //     const newOption = {
// //       label: searchValue,
// //     };
// //     if (
// //       flattenedOptions.findIndex(
// //         (options) =>
// //           options.label.trim().toLowerCase() === normalizedSearchValue
// //       ) === -1
// //     ) {
// //       this.setState({
// //         // style = {{width:200}}
// //         options: [...this.state.options, newOption],
// //       });
// //     }
// //     this.setState({
// //       selectedOptions: [...this.state.selectedOptions, newOption],
// //     });
// //   };

// //    onButtonClick = () =>{ this.setState({isPopoverOpen : !this.state.isPopoverOpen})} 
// //    closePopover = () => { this.setState({isPopoverOpen:false}) 
// //   // selectedOptions.map((item) => {
// //   //   console.log('itemitemitem', item)
// //   // })
// // }
// //  render(){
// //   const button = (
// //     <div>
// //       <EuiButtonIcon aria-label="tagButton" iconType="plusInCircle" onClick={this.onButtonClick} />
// //       {this.state.selectedOptions.map((item) => (
// //         <span>
// //           {item.label},
// //         </span>
// //       ))}
// //     </div>
   
// //   );
// //   console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
// //   return (
// //      <>
// //      {} 
// //     {/* {button} */}
// //     <EuiPopover
// //       button={button}
// //       isOpen={this.state.isPopoverOpen}
// //       closePopover={this.closePopover}>
// //       <div style={{ width: '300px' }}>
// //         <EuiComboBox
// //           placeholder="Select or create options"
// //           options={this.state.options}
// //           selectedOptions={this.state.selectedOptions}
// //           onChange={this.onChange}
// //           onCreateOption={this.onCreateOption}
// //           isClearable={true}
// //           data-test-subj="demoComboBox"
// //         />
// //       </div>
// //     </EuiPopover>
// //     </>
// //   );
// // }
// // }

// // export default combo

// import { EuiPopover, EuiButton, EuiButtonIcon, EuiComboBox } from '@elastic/eui';
// import React, { useState } from 'react';
// const options = [
//   {
//     label: 'Titan',
//     'data-test-subj': 'titanOption',
//   },
//   {
//     label: 'Enceladus is disabled',
//     disabled: true,
//   },
//   {
//     label: 'Mimas',
//   },
//   {
//     label: 'Dione',
//   },
//   {
//     label: 'Iapetus',
//   },
//   {
//     label: 'Phoebe',
//   },
//   {
//     label: 'Rhea',
//   },
//   {
//     label:
//       "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
//   },
//   {
//     label: 'Tethys',
//   },
//   {
//     label: 'Hyperion',
//   },
// ]
// export default () => {
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
//   const [selectedOptions, setSelected] = useState([options[2], options[4]]);


//   const onChange = selectedOptions => {
//     // console.log('selectedOptions', selectedOptions)
//     setSelected(selectedOptions);
//   };

//   const onCreateOption = (searchValue, flattenedOptions = []) => {
//     // console.log('calling the function onCreateOption');
//     const normalizedSearchValue = searchValue.trim().toLowerCase();

//     if (!normalizedSearchValue) {
//       return;
//     }

//     const newOption = {
//       label: searchValue,
//     };

//     // Create the option if it doesn't exist.
//     if (
//       flattenedOptions.findIndex(
//         option => option.label.trim().toLowerCase() === normalizedSearchValue
//       ) === -1
//     ) {
//       options.push(newOption);
//     }

//     // Select the option.
//     setSelected([...selectedOptions, newOption]);
//   };
//   const onButtonClick = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);
//   const closePopover = () => setIsPopoverOpen(false);
//   // selectedOptions.map((item) => {
//   //   console.log('itemitemitem', item)
//   // })
//   const button = (
//     <div>
//       <EuiButtonIcon aria-label="tagButton" iconType="plusInCircle" onClick={onButtonClick} />
//       {/* <div> */}
//       {selectedOptions.map((item) => (
//         <span>
//           {item.label},
//         </span>
//       ))}
//       {/* </div> */}
//     </div>
//   );

//   return (
//     <EuiPopover
//       button={button}
//       isOpen={isPopoverOpen}
//       closePopover={closePopover}>
//       <div style={{ width: '300px' }}>
//         <EuiComboBox
//           placeholder="Select or create options"
//           options={options}
//           selectedOptions={selectedOptions}
//           onChange={onChange}
//           onCreateOption={onCreateOption}
//           isClearable={true}
//           data-test-subj="demoComboBox"
//         />
//       </div>
//     </EuiPopover>
//   );
// };