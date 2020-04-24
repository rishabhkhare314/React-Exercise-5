import { EuiPopover, EuiButtonIcon, EuiComboBox,EuiBadge } from '@elastic/eui';
import React, { Component } from 'react';
import { euiPaletteColorBlindBehindText } from '@elastic/eui/lib/services';
class combo extends Component{
 visColorsBehindText = euiPaletteColorBlindBehindText();
constructor(props) {
    super(props)   
    this.state = {
    
     options : [
        {
          label: 'Titan',
          'data-test-subj': 'titanOption',
          color: this.visColorsBehindText[0],
        },
        {
          label: 'Enceladus is disabled',
          color: this.visColorsBehindText[1],
        },
        {
          label: 'Mimas',
          color: this.visColorsBehindText[2],
        },
        {
          label: 'Dione',
          color: this.visColorsBehindText[3],
        },
        {
          label: 'Iapetus',
          color: this.visColorsBehindText[4],
        },
        {
          label: 'Phoebe',
          color: this.visColorsBehindText[5],
        },
        {
          label: 'Rhea',
          color: this.visColorsBehindText[6],
        },
        {
          label: 'Tethys',
          color: this.visColorsBehindText[8],
        },
        {
          label: 'Hyperion',
          color: this.visColorsBehindText[9],
        },
      ],
  isPopoverOpen :false,
  selectedOptions : []
    }
}

  // onChange = (selectedOptions) => {
  //   this.setState({
  //     selectedOptions: selectedOptions,
  //   });
  // };


  onCreateOption = (searchValue, flattenedOptions = []) => {
    if (!searchValue) {
      return;
    }

let normalizedSearchValue = searchValue.trim().toLowerCase();

if (!normalizedSearchValue) {
  return;
}

const newOption = {
  label: searchValue,
};
if (
  flattenedOptions.findIndex(
    (options) =>
      options.label.trim().toLowerCase() === normalizedSearchValue
  ) === -1
) {
  this.setState({
    // style = {{width:200}}
    options: [...this.state.options, newOption],
  });
}
this.setState({
  selectedOptions: [...this.state.selectedOptions, newOption],
});
  };

   onButtonClick = () =>{ this.setState({isPopoverOpen : !this.state.isPopoverOpen})} 
   closePopover = () => { this.setState({isPopoverOpen:false}) 
  // selectedOptions.map((item) => {
  //   console.log('itemitemitem', item)
  // })
}
displayIcon = () => {
  const {selectedOptions} = this.state
  if(selectedOptions.length <=2){
    return selectedOptions.map((options,index) => {
      return <EuiBadge  >{options.label}</EuiBadge>
    }) 
  }
  else {
    return(
      <>
      <EuiBadge iconType="cross" iconSide="right">{selectedOptions[0].label}</EuiBadge>
      <EuiBadge iconType="cross" iconSide="left">{selectedOptions[1].label}</EuiBadge>      
      + {selectedOptions.length - 2 }
      </>
    )
  }
}

onChange = (selectedOptions) => {
  console.log(selectedOptions)
this.setState({
  selectedOptions:selectedOptions
},()=>{
  this.props.comboCallBack(this.state.selectedOptions);
  console.log("onchange combo",this.state.selectedOptions)})
// this.props.comboCallBack(this.state.selectedOptions)
//  console.log("onchange combo",this.state.selectedOptions)
} 

 render(){
  const button = (
    <div>
       {this.displayIcon()}
      <EuiButtonIcon aria-label="tagButton" iconType="plusInCircle" onClick={this.onButtonClick} />
      {this.state.selectedOptions.map((item) => (
        <span>
          {/* {item.label}, */}
        </span>
      ))}
    </div>

  );
  return (
     <>
    <EuiPopover
      button={button}
      isOpen={this.state.isPopoverOpen}
      closePopover={this.closePopover}>
      <div style={{ width: '300px' }}>
        <EuiComboBox
          placeholder="Select or create options"
          options={this.state.options}
          selectedOptions={this.state.selectedOptions}
          onChange={this.onChange}
          onCreateOption={this.onCreateOption}
          isClearable={true}
          data-test-subj="demoComboBox"
        />
      </div>
    </EuiPopover>
    </>
  );
}
}

export default combo


// import { EuiPopover,EuiBadge ,EuiButton, EuiButtonIcon, EuiComboBox } from '@elastic/eui';
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
// const display = () => {
//     console.log(selectedOptions)
//       if(selectedOptions.length <=2 ){
//         return selectedOptions.map((option,index)=>{
//           return (<EuiBadge key={index} iconType="cross" iconSide="right">{option.label}</EuiBadge>)
//         })
//       }
//      else{
//        return (
//                <>
//                  <p>
//                  <EuiBadge iconType="cross" iconSide="right">{selectedOptions[0].label}</EuiBadge>
//                  <EuiBadge iconType="cross" iconSide="right">{selectedOptions[1].label}</EuiBadge>
//                   + {selectedOptions.length - 2}
//                 </p>
//                </>
//               )
//      }
//     }

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
// import React, { Component } from "react";
// import {
//   EuiPopover,
//   EuiButton,
//   EuiInputPopover,EuiComboBox,
//   EuiButtonIcon,
// } from "@elastic/eui";
// export class ConboBox1 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPopoverOpen: false,
//       name :'',
//       options: [
//         {
//           label: "Titan",
//           "data-test-subj": "titanOption",
//         },
//         {
//           label: "Enceladus",
//         },
//         {
//           label: "Mimas",
//         },
//         {
//           label: "Dione",
//         },
//         {
//           label: "Iapetus",
//         },
//         {
//           label: "Phoebe",
//         },
//         {
//           label: "Rhea",
//         },
//         {
//           label:
//             "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
//         },
//         {
//           label: "Tethys",
//         },
//         {
//           label: "Hyperion",
//         },
//       ],
//       selectedOptions:[],
//     };
//   }

//   onButtonClick = () =>
//     this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
//   closePopover = () => this.setState({ isPopoverOpen: false });

//   button = (
//     <EuiButtonIcon
//       iconType="plusInCircleFilled"
//       anchorPosition="rightDown"
//       iconSide="right"
//       onClick={this.onButtonClick}
//   ></EuiButtonIcon>
//   );

//   inputCombo = (e) => {
//       this.setState({
//           [e.target.name]: e.target.value
//       })
//       console.log("input combo",e.target.name)
//       // this.state.arr.push(e.target.name)
//   }

//   onChange = (selectedOptions) => {
//     this.setState({
//       selectedOptions: selectedOptions,
//     });
//   };

//   onCreateOption = (searchValue, flattenedOptions = []) => {
//     if (!searchValue) {
//       return;
//     }

//     let normalizedSearchValue = searchValue.trim().toLowerCase();

//     if (!normalizedSearchValue) {
//       return;
//     }

//     const newOption = {
//       label: searchValue,
//     };
//     if (
//       flattenedOptions.findIndex(
//         (options) =>
//           options.label.trim().toLowerCase() === normalizedSearchValue
//       ) === -1
//     ) {
//       this.setState({
//         // style = {{width:200}}
//         options: [...this.state.options, newOption],
//       });
//     }
//     this.setState({
//       selectedOptions: [...this.state.selectedOptions, newOption],
//     });
//   };

//   render() {
//     const comboBox = (
//       <>
//        {/* {this.displayIcon()} */}
//        <EuiComboBox
//         selectedOptions={this.state.selectedOptions}
//         onCreateOption={this.onCreateOption}
//         onChange={this.onChange}
//         onSearchChange={this.onSearchChange}
//         isInvalid={this.isInvalid}
//       />
        
//       </>
//   );
//     return (
//       <EuiPopover
//         button={this.button}
//         isOpen={this.state.isPopoverOpen}
//         closePopover={this.closePopover}
//       >
//         <input type="text" name="t"  onChange={this.inputCombo}/>
//         {comboBox}
//       </EuiPopover>
//     );
//   }
// }

// export default ConboBox1;

// import { EuiButtonEmpty, EuiBadge } from "@elastic/eui";
// import React, { Component } from "react";
// export class EuiBtn extends Component {
//   render() {
//     const {selectedOptions}=this.props
//     console.log("selceete" ,selectedOptions)
//     return (
//       <div>
//         <EuiButtonEmpty
//           onClick={this.props.onClick}
//           iconType="plusInCircle"
//           iconSide="right"
//         >
//           {/* {display()} */}
//         </EuiButtonEmpty>
//       </div>
//     );
//   }
// }

// export default EuiBtn;

//   // const display = () => {
//     // const {selectedOptions}=props
//     // console.log(selectedOptions)
//     //   if(selectedOptions.length <=2 ){
//     //     return selectedOptions.map((option,index)=>{
//     //       return (<EuiBadge key={index} iconType="cross" iconSide="right">{option.label}</EuiBadge>)
//     //     })
//     //   }
//     //  else{
//     //    return (
//     //            <Fragment>
//     //              <p>
//     //              <EuiBadge iconType="cross" iconSide="right">{selectedOptions[0].label}</EuiBadge>
//     //              <EuiBadge iconType="cross" iconSide="right">{selectedOptions[1].label}</EuiBadge>
//     //               + {selectedOptions.length - 2}
//     //             </p>
//     //            </Fragment>
//     //           )
//     //  }
