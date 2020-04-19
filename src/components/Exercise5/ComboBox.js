import { EuiComboBox } from '@elastic/eui';
import React, { useState } from 'react';

const options = [
  {
    label: 'Titan',
    'data-test-subj': 'titanOption',
  },
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
  
];

export default () => {
  const [selectedOptions, setSelected] = useState([options[2], options[3]]);

  const onChange = selectedOptions => {
    setSelected(selectedOptions);
  };

  const onCreateOption = (searchValue, flattenedOptions = []) => {
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

  return (
    <EuiComboBox
      placeholder="Select or create options"
      options={options}
      delimiter=","
      selectedOptions={selectedOptions}
      onChange={onChange}
      onCreateOption={onCreateOption}
      isClearable={true}
      data-test-subj="demoComboBox"
    />
  );
};