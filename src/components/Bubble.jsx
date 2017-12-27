import React, { Component } from 'react';        
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { TeachingBubble } from 'office-ui-fabric-react/lib/TeachingBubble';


class Bubble extends Component {
  
  constructor(props) {
    super(props);

    this.handleDismiss = this.handleDismiss.bind(this);

    this.state = {
      isTeachingBubbleVisible: false,
    };
  }

  handleDismiss() {
    this.setState({
      isTeachingBubbleVisible: !this.state.isTeachingBubbleVisible
    });
  }


  render() {
          let { isTeachingBubbleVisible } = this.state;
          let examplePrimaryButton: IButtonProps = {
            children: 'Try it out'
          };
          let exampleSecondaryButtonProps: IButtonProps = {
            children: 'Maybe later',
            onClick: this.handleDismiss
          };
    return(
      <div className='ms-TeachingBubbleExample'>
      <h2>Teaching Bubble</h2>
        <span className='ms-TeachingBubbleBasicExample-buttonArea' ref={ (menuButton) => this._menuButtonElement = !menuButton }>
          <DefaultButton
            onClick={ this.handleDismiss }
            text={ isTeachingBubbleVisible ? 'Hide Bubble' : 'Show Bubble' }
          />
        </span>
        { isTeachingBubbleVisible ? (
          <div>
            <TeachingBubble
              targetElement={ this._menuButtonElement }
              primaryButtonProps={ examplePrimaryButton }
              secondaryButtonProps={ exampleSecondaryButtonProps }
              onDismiss={ this._onDismiss }
              headline='Create a Badge'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?
            </TeachingBubble>
          </div>
        ) : (null) }
      </div>
    );
  }
}

export default Bubble;
