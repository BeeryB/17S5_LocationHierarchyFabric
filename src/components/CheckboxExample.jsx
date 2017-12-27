import React, { Component } from 'react';  
import {
  Checkbox,
  ICheckboxStyles,
  ICheckboxProps
} from 'office-ui-fabric-react/lib/Checkbox';

export interface ICheckboxBasicExampleState {
  isChecked: boolean;
}

class CheckboxExample extends Component<{}, ICheckboxBasicExampleState> {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  render() {
    let { isChecked } = this.state;
    let styles: ICheckboxStyles = {
      root: {
        marginTop: '10px'
      }
    };

    return (
      <div>
        <h2>Checkbox </h2>
        <Checkbox
          label='Standard checkbox'
          onChange={ this.handleCheckboxChange }
          ariaDescribedBy={ 'descriptionID' }
        />
        <Checkbox
          label='Disabled checkbox'
          disabled={ true }
          defaultChecked={ true }
          onChange={ this._onCheckboxChange }
          styles={ styles }
        />
      </div>
    );
  }

  handleCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
    console.log(`The option has been changed to ${isChecked}.`);
  }
}

export default CheckboxExample;