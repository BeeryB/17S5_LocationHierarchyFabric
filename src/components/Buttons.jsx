import React, { Component } from 'react';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import {
  Checkbox,
  ICheckboxStyles,
  ICheckboxProps
} from 'office-ui-fabric-react/lib/Checkbox';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';


export interface ICheckboxBasicExampleState {
  isChecked: boolean;
}


class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  render() {
    let { disabled, checked } = this.props;
    let { isChecked } = this.state;
    let styles: ICheckboxStyles = {
      root: {
        marginTop: '10px'
      }
    };

    var divStyle = {
      display: 'inline-block',
      padding: '0px 15px'
    }

    var LabelStyle = {
      padding: '15px 0px'
    }

    var paddingL = {
      paddingLeft: 45,
    }

    var paddingB = {
      paddingBottom: 15,
    }

    return (
      <div class="ms-Grid">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-lg4">
            <h2>Buttons</h2>
              <div style={divStyle}>
                <Label style={LabelStyle} className="ms-textAlignCenter">Standard</Label>
                <DefaultButton
                  data-automation-id='test'
                  disabled={ disabled }
                  checked={ checked }
                  text='Button'
                  split={ true }
                  splitButtonAriaLabel={ 'See 2 sample options' }
                  style={ { height: '35px' } }
                  menuProps={ {
                    items: [
                      {
                        key: 'emailMessage',
                        name: 'Email message',
                        icon: 'Mail'
                      },
                      {
                        key: 'calendarEvent',
                        name: 'Calendar event',
                        icon: 'Calendar'
                      }
                    ]
                  } }
                />
              </div>
              <div style={divStyle}>
                <Label style={LabelStyle} className="ms-textAlignCenter">Primary</Label>
                <DefaultButton
                  primary={ true }
                  data-automation-id='test'
                  disabled={ disabled }
                  checked={ checked }
                  text='Button'
                  onClick={ this.handleClick }
                />
              </div>
          </div>
          <div style={paddingL} class="ms-Grid-col ms-lg4">
          <h2 style={paddingB}>Checkbox</h2>
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
          <div class="ms-Grid-col ms-lg4">
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
        </div>
      </div>
    );
  }
  handleCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
    console.log(`The option has been changed to ${isChecked}.`);
  }
}

export default Buttons