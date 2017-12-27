import React, { Component } from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { Link } from 'office-ui-fabric-react/lib/Link';


export interface ICalloutBaiscExampleState {
  isCalloutVisible?: boolean;
}

class CallOuts extends Component<{}, ICalloutBaiscExampleState> {
   menuButtonElement: HTMLElement | null;

  constructor(props) {
    super(props);

    this.handleShowMenuClicked = this.handleShowMenuClicked.bind(this);
    this.handleCalloutDismiss = this.handleCalloutDismiss.bind(this);

    this.state = {
      isCalloutVisible: false
    };
  }

  render() {
    let { isCalloutVisible } = this.state;

    var Wrapper = {
        backgroundColor: '#ffffff',
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative'
    }

    var headerStyle = {
        padding: '18px 24px 12px'
    }

    var headerTitle = {
        margin: 0,
        fontSize: 21,
        fontWeight: 100,
        color: '#333333',
        fontWeight: 300
    }

    var inner = {
        height: '100%',
        padding: '0 24px 20px',
        width: 300
    }

    var innerContent = {
        margin: 0,
        fontSize: 12,
        color: '#333333',
        fontWeight: 300
    }

    var linkSection = {
        position: 'relative',
        marginTop: 20,
        width: '100%',
        whiteSpace: 'nowrap',
        width: 300
    }

    var linkText = {
        textDecoration: 'none',
        color: 'inherit',
    }

    return (
      <div className='ms-CalloutExample'>
      <h2>Call Out</h2>
        <div className='ms-CalloutBasicExample-buttonArea' ref={ (menuButton) => this.menuButtonElement = menuButton }>
          <DefaultButton
            onClick={ this.handleShowMenuClicked }
            text={ isCalloutVisible ? 'Hide callout' : 'Show callout' }
          />
        </div>
        { isCalloutVisible && (
          <Callout
            className='ms-CalloutExample-callout'
            ariaLabelledBy={ 'callout-label-1' }
            ariaDescribedBy={ 'callout-description-1' }
            role={ 'alertdialog' }
            gapSpace={ 0 }
            target={ this.menuButtonElement }
            onDismiss={ this.handleCalloutDismiss }
            setInitialFocus={ true }
          >
            <div style={headerStyle}>
              <p style={headerTitle} id={ 'callout-label-1' }>
                Create a New Badge
              </p>
            </div>
            <div style={inner} className='ms-CalloutExample-inner'>
              <div className='ms-CalloutExample-content'>
                <p style={innerContent} className='subText' id={ 'callout-description-1' }>
                  Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.
                </p>
              </div>
              <div style={linkSection} className='ms-CalloutExample-actions'>
                <Link style={linkText} className='ms-CalloutExample-link' href='http://microsoft.com'>Go to Badgr</Link>
              </div>
            </div>
          </Callout>
        ) }
      </div>
    );
  }

  handleShowMenuClicked() {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  handleCalloutDismiss() {
    this.setState({
      isCalloutVisible: false
    });
  }
}

export default CallOuts;