import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import {
  Rating,
  RatingSize
} from 'office-ui-fabric-react/lib/Rating';
import './Rating.Basic.Example.scss';


class RatingBasicExample extends Component {
  constructor() {
    super();

    this.state = {
      largeStarRating: null,
      smallStarRating: null,
      tenStarRating: null
    }
    this.onChangedLarge = this.handleLargeStarChanged.bind(this);  
    this.onChangedSmall = this.handleSmallStarChanged.bind(this);  
    this.onChangedTen = this.handleTenStarChanged.bind(this);  
  }

    handleLargeStarChanged(rating: number) {
      this.setState({
        largeStarRating: rating
      })
    }

    handleSmallStarChanged(rating: number) {
      this.setState({
        smallStarRating: rating
      })
    }

    handleTenStarChanged(rating: number) {
      this.setState({
        tenStarRating: rating
      })
    }

    getRatingComponentAriaLabel(rating: number, maxRating: number) {
      
          return 'Rating value is ' + rating + ' of ' + maxRating;
      
    }

    render() {
      return (
        <div className='ms-RatingBasicExample'>
          Large Stars:
          <Rating
            id={ 'largeRatingStar' }
            min={ 1 }
            max={ 5 }
            size={ RatingSize.Large }
            rating={ this.state.largeStarRating }
            getAriaLabel={ this.getRatingComponentAriaLabel }
            onChangedLarge={ this.handleLargeStarChanged }
            onFocus={ () => console.log('onFocus called') }
            onBlur={ () => console.log('onBlur called') }
            ariaLabelFormat={ '{0} of {1} stars selected' }
          />

          Small Stars
          <Rating
            id={ 'smallRatingStar' }
            min={ 1 }
            max={ 5 }
            rating={ this.state.smallStarRating }
            onChangedSmall={ this.handleSmallStarChanged }
            getAriaLabel={ this._getRatingComponentAriaLabel }
            onFocus={ () => console.log('onFocus called') }
            onBlur={ () => console.log('onBlur called') }
            ariaLabelFormat={ '{0} of {1} stars selected' }
          />

          10 Small Stars
          <Rating
            id={ 'tenRatingStar' }
            min={ 1 }
            max={ 10 }
            rating={ this.state.tenStarRating }
            onChangedTen={ this.handleTenStarChanged }
            getAriaLabel={ this._getRatingComponentAriaLabel }
            onFocus={ () => console.log('onFocus called') }
            onBlur={ () => console.log('onBlur called') }
            ariaLabelFormat={ '{0} of {1} stars selected' }
          />

          Disabled:
          <Rating
            min={ 1 }
            max={ 5 }
            rating={ this.state.rating }
            disabled={ true }
            onFocus={ () => console.log('onFocus called') }
            onBlur={ () => console.log('onBlur called') }
            ariaLabelFormat={ '{0} of {1} stars selected' }
          />

          Half star in readOnly mode:
          <Rating
            id={ 'readOnlyRatingStar' }
            min={ 1 }
            max={ 5 }
            rating={ 2.5 }
            getAriaLabel={ this._getRatingComponentAriaLabel }
            readOnly={ true }
            ariaLabelFormat={ '{0} of {1} stars selected' }
          />
      </div>
    );
  }
}

export default RatingBasicExample;

