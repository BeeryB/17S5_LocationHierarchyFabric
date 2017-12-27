import React, { Component } from 'react';      
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

class PanelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false,
    };
  }

  
  handleClosePanel() {
    this.setState({ showPanel: false });
  }

  handleRenderFooterContent() {
    return (
      <div>
        <PrimaryButton
          onClick={ this.handleClosePanel }
          style={ { 'marginRight': '8px' } }
        >
          Save
        </PrimaryButton>
        <DefaultButton
          onClick={ this.handleClosePanel }
        >
          Cancel
        </DefaultButton>
      </div>
    );
  }

  handleShowPanel() {
    this.setState({ showPanel: true });
  }

  render() {
    return (
      <div>
        <DefaultButton
          description='Opens the Sample Panel'
          onClick={ this.handleShowPanel }
          text='Open Panel'
        />
        <Panel
          isOpen={ this.state.showPanel }
          type={ PanelType.smallFixedFar }
          onDismiss={ this._onClosePanel }
          headerText='Panel - Small, right-aligned, fixed, with footer'
          closeButtonAriaLabel='Close'
          onRenderFooterContent={ this.handleRenderFooterContent }
        >
          <ChoiceGroup
            options={ [
              {
                key: 'A',
                text: 'Option A'
              },
              {
                key: 'B',
                text: 'Option B',
                checked: true
              },
              {
                key: 'C',
                text: 'Option C',
                disabled: true
              },
              {
                key: 'D',
                text: 'Option D',
                checked: true,
                disabled: true
              }
            ] }
            label='Pick one'
            required={ true }
          />
        </Panel>
      </div>
    );
  }
}

export default PanelExample;