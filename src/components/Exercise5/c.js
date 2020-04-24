// import { EuiComboBox } from '@elastic/eui';
// import React, { useState } from 'react';

// const options = [
//   {
//     label: 'Titan',
//     'data-test-subj': 'titanOption',
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
// ];

// export default () => {
//   const [selectedOptions, setSelected] = useState([options[2], options[4]]);

//   const onChange = selectedOptions => {
//     setSelected(selectedOptions);
//   };

//   const onCreateOption = (searchValue, flattenedOptions = []) => {
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

//   return (
//     <EuiComboBox
//       placeholder="Select or create options"
//       options={options}
//       delimiter=","
//       selectedOptions={selectedOptions}
//       onChange={onChange}
//       onCreateOption={onCreateOption}
//       isClearable={true}
//       data-test-subj="demoComboBox"
//     />
//   );
// };

import { EuiPopover, EuiButton, EuiButtonIcon, EuiComboBox } from '@elastic/eui';
import React, { useState } from 'react';
const options = [
  {
    label: 'Titan',
    'data-test-subj': 'titanOption',
  }a,
  {
    label: 'Enceladus is disabled',
    disabled: true,
  },
  {
    label: 'Mimas',
  },
  {
    label: 'Dione',
  },
  {
    label: 'Iapetus',
  },
  {
    label: 'Phoebe',
  },
  {
    label: 'Rhea',
  },
  {
    label:
      "Pandora is one of Saturn's moons, named for a Titaness of Greek mythology",
  },
  {
    label: 'Tethys',
  },
  {
    label: 'Hyperion',
  },
]
export default () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedOptions, setSelected] = useState([options[2], options[4]]);


  const onChange = selectedOptions => {
    // console.log('selectedOptions', selectedOptions)
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
    // console.log('calling the function onCreateOption');
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption = {
      label: searchValue,
    };

    // Create the option if it doesn't exist.
    if (
      flattenedOptions.findIndex(
        option => option.label.trim().toLowerCase() === normalizedSearchValue
      ) === -1
    ) {
      options.push(newOption);
    }

    // Select the option.
    setSelected([...selectedOptions, newOption]);
  };
  const onButtonClick = () => setIsPopoverOpen(isPopoverOpen => !isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);
  // selectedOptions.map((item) => {
  //   console.log('itemitemitem', item)
  // })
  const button = (
    <div>
      <EuiButtonIcon aria-label="tagButton" iconType="plusInCircle" onClick={onButtonClick} />
      {/* <div> */}
      {selectedOptions.map((item) => (
        <span>
          {item.label},
        </span>
      ))}
      {/* </div> */}
    </div>
  );

  return (
    <EuiPopover
      button={button}
      isOpen={isPopoverOpen}
      closePopover={closePopover}>
      <div style={{ width: '300px' }}>
        <EuiComboBox
          placeholder="Select or create options"
          options={options}
          selectedOptions={selectedOptions}
          onChange={onChange}
          onCreateOption={onCreateOption}
          isClearable={true}
          data-test-subj="demoComboBox"
        />
      </div>
    </EuiPopover>
  );
};