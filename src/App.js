import React, { Component } from 'react';
import './App.css';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { MessageBarButton } from 'office-ui-fabric-react/lib/Button';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { MessageBar, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from 'office-ui-fabric-react/lib/Persona';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { Label } from 'office-ui-fabric-react/lib/Label';
import Typography from './components/Typography';
import Circle from './components/Circle';
import Icons from './components/Icons';
import Buttons from './components/Buttons';
import CalendarExample from './components/CalendarExample';
import Bubble from './components/Bubble';
import CallOuts from './components/CallOuts';
import CheckboxExample from './components/CheckboxExample';
import ChoiceGroupExample from './components/ChoiceGroupExample';
import PanelExample from './components/PanelExample';
import DocumentCardExample from './components/DocumentCardExample';
import TextFieldExample from './components/TextFieldExample';


class App extends Component {
  constructor() {
    super();

    this.state = {
      isTeachingBubbleVisible: false,
    };
  }

  render() {

    let { isTeachingBubbleVisible } = this.state;
    let examplePrimaryButton: IButtonProps = {
      children: 'Try it out'
    };
    let exampleSecondaryButtonProps: IButtonProps = {
      children: 'Maybe later',
      onClick: this._onDismiss
    };

    let { renderPersonaDetails } = this.state;
    const examplePersona = {
      imageUrl: 'src/avatarkat.png',
      imageInitials: 'AL',
      primaryText: 'Annie Lindqvist',
      secondaryText: 'Software Engineer',
      tertiaryText: 'In a meeting',
      optionalText: 'Available at 4:00pm'
    };

    var center = {
      margin: '100px 200px'
    }

    return (
    <div  style={center}>
      <Typography />
      <br /><hr /><br />
      <h2>Colors</h2>
      <Circle colorName='themeDarker' circleHex='#004578' />
      <Circle colorName='themeDark' circleHex='#005a9e' />
      <Circle colorName='themeDarkAlt' circleHex='#106ebe' />
      <Circle colorName='themePrimary' circleHex='#0078d7' />
      <Circle colorName='themeSecondary' circleHex='#2b88d8' />
      <Circle colorName='themeTertiary' circleHex='#71afe5' />
      <Circle colorName='themeLight' circleHex='#c7e0f4' />
      <Circle colorName='themeLighter' circleHex='#deecf9' />
      <Circle colorName='themeLighterAlt' circleHex='#eff6fc' />
      <br /><hr /><br />
      <Icons />    
      <br /><hr /><br />
      <Buttons />
      <br /><hr /><br />
      <TextFieldExample />
      <br /><hr /><br />
      <div class="ms-Grid">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-lg6">
              <DocumentCardExample />   
          </div>
          <div class="ms-Grid-col ms-lg6">
              <Bubble />  
              <br /><br /><br />
              <CallOuts />
          </div>
        </div>
      </div>
      <hr />
    </div>
    );
  }
}

export default App;
