import React, { Component } from "react";
import {
    EuiComboBox,
    EuiModal,
    EuiModalBody,
    EuiOverlayMask,
    EuiButtonIcon,
    EuiFlexGroup,
    
} from "@elastic/eui";
import { EuiBadge } from "@elastic/eui";
 class ComboBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                {
                    label: 'Titan',
                    'data-test-subj': 'titanOption',
                },
                {
                    label: 'Enceladus',
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
            ],
            selectedOptions: [],
            // setSelected: [],
            isModalVisible: false,
            setModalVisible:false
        };
    }

    closeModal = () => {
        this.setState({
          isModalVisible: false,
          setModalVisible :false,
        })
    };

    showModal = () => {
        this.setState({
          isModalVisible: !this.state.isModalVisible,
          // setModalVisible :!
        })
    };

    onChange = (selectedOptions) => {
        this.setState({
          selectedOptions: selectedOptions,
        });
    };

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
            this.setState({ // style = {{width:200}}
                options: [...this.state.options, newOption],
            });
        }
        this.setState({
          selectedOptions: [...this.state.selectedOptions, newOption],
        });
    };
    componentDidMount() {
        let { options } = this.state;
        this.setState({
            selectedOptions: [options[2]],
        });
    }

    displayIcon = () => {
        const {selectedOptions} = this.state
        if(selectedOptions.length <=2){
          return selectedOptions.map((options,index) => {
            return <EuiBadge  iconType="cross" >{options.label}</EuiBadge>
          }) 
        }
        else {
          return(
            <>
            <EuiBadge iconType="cross">{selectedOptions[0].label}</EuiBadge>
            <EuiBadge iconType="cross">{selectedOptions[1].label}</EuiBadge>           + {selectedOptions.length - 2 }
            </>
          )
        }
      }
    render() {
     
        const comboBox = (
            <>
             {this.displayIcon()}
                <EuiComboBox
                    options={this.state.options}
                    selectedOptions={this.state.selectedOptions}
                    onChange={this.onChange}
                    onCreateOption={this.onCreateOption}
                    // style = {{width:200}}
                > </EuiComboBox> 
            </>
        );
        let modal;
        if (this.state.isModalVisible) {
            modal = (
                <EuiOverlayMask >
                    <EuiModal onClose={this.closeModal} style = {{width:800}}>
                        <EuiModalBody >{comboBox}</EuiModalBody>
                    </EuiModal>
                  </EuiOverlayMask>
            );
        }
        // console.log("dddddd",this.state.selectedOptions.length);
        
        return (
            <>
              
                <EuiFlexGroup>
                    {comboBox}
                    <EuiButtonIcon
                        iconType="plusInCircle"
                        onClick={this.showModal}
                    />
                </EuiFlexGroup>
                {modal}
            </>
        );
        
    }
}

export default ComboBox;

