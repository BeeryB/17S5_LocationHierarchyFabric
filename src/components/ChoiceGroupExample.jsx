import React, { Component } from 'react';  
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';

/**
 * Interface for ChoiceGroupBasicExample state.
 */
export interface IChoiceGroupBasicExampleState {
  imageKey: string;
}

class ChoiceGroupExample extends Component<{}, IChoiceGroupBasicExampleState> {
  constructor(props) {
    super(props);

    this.state = {
      imageKey: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Choice Group </h2>
        <ChoiceGroup
          defaultSelectedKey='B'
          options={ [
            {
              key: 'A',
              text: 'Option A',
              'data-automation-id': 'auto1'
            },
            {
              key: 'B',
              text: 'Option B',
            },
            {
              key: 'C',
              text: 'Option C',
              disabled: true
            },
            {
              key: 'D',
              text: 'Option D',
              disabled: true
            }
          ] }
          onChange={ this.handleChange }
          label='Pick one'
          required={ true }
        />
      </div>
    );
  }
}

export default ChoiceGroupExample;