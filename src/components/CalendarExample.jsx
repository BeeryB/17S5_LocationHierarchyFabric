import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { addDays, getDateRangeArray } from 'office-ui-fabric-react/lib/utilities/dateMath/DateMath';
import {
  Calendar,
  DayOfWeek
} from 'office-ui-fabric-react/lib/Calendar';
import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar';


const DayPickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],

  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],

  shortDays: [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S'
  ],

  goToToday: 'Go to today'
};

export interface ICalendarInlineExampleState {
  selectedDate: Date | null;
  selectedDateRange: Date[] | null;
}

export interface ICalendarInlineExampleProps {
  isMonthPickerVisible?: boolean;
  dateRangeType: DateRangeType;
  autoNavigateOnSelection: boolean;
  showGoToToday: boolean;
  showNavigateButtons?: boolean;
  highlightCurrentMonth?: boolean;
  isDayPickerVisible?: boolean;
  showMonthPickerAsOverlay?: boolean;
  showWeekNumbers?: boolean;
  minDate?: Date;
  maxDate?: Date;
  showSixWeeksByDefault?: boolean;
}

class CalendarExample extends React.Component<ICalendarInlineExampleProps, ICalendarInlineExampleState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      selectedDateRange: null
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSelectDate = this.onSelectDate.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  render() {
    let divStyle: React.CSSProperties = {
      height: '340px'
    };

    let buttonStyle: React.CSSProperties = {
      margin: '17px 10px 0 0'
    };

    let dateRangeString: string | null = null;
    if (this.state.selectedDateRange) {
      let rangeStart = this.state.selectedDateRange[0];
      let rangeEnd = this.state.selectedDateRange[this.state.selectedDateRange.length - 1];
      dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
    }

    return (
      <div style={ divStyle }>
        <h2>Calendar</h2>
        <Calendar
          onSelectDate={ this._onSelectDate }
          onDismiss={ this._onDismiss }
          isMonthPickerVisible={ this.props.isMonthPickerVisible }
          dateRangeType={ this.props.dateRangeType }
          autoNavigateOnSelection={ this.props.autoNavigateOnSelection }
          showGoToToday={ this.props.showGoToToday }
          value={ this.state.selectedDate }
          firstDayOfWeek={ DayOfWeek.Sunday }
          strings={ DayPickerStrings }
          highlightCurrentMonth={ this.props.highlightCurrentMonth }
          isDayPickerVisible={ this.props.isDayPickerVisible }
          showMonthPickerAsOverlay={ this.props.showMonthPickerAsOverlay }
          showWeekNumbers={ this.props.showWeekNumbers }
          minDate={ this.props.minDate }
          maxDate={ this.props.maxDate }
          showSixWeeksByDefault={ this.props.showSixWeeksByDefault }
        />
        { this.props.showNavigateButtons &&
          <div>
            <DefaultButton style={ buttonStyle } onClick={ this._goPrevious } text='Previous' />
            <DefaultButton style={ buttonStyle } onClick={ this._goNext } text='Next' />
          </div>
        }
      </div>
    );
  }

  onDismiss() {
    this.setState((prevState: ICalendarInlineExampleState) => {
      return prevState;
    });
  }

  goPrevious() {
    this.setState((prevState: ICalendarInlineExampleState) => {
      let selectedDate = prevState.selectedDate || new Date();
      let dateRangeArray = getDateRangeArray(selectedDate, this.props.dateRangeType, DayOfWeek.Sunday);

      let subtractFrom = dateRangeArray[0];
      let daysToSubtract = dateRangeArray.length;

      if (this.props.dateRangeType === DateRangeType.Month) {
        subtractFrom = new Date(subtractFrom.getFullYear(), subtractFrom.getMonth(), 1);
        daysToSubtract = 1;
      }

      let newSelectedDate = addDays(subtractFrom, -daysToSubtract);
      return prevState.selectedDate = newSelectedDate;
    });
  }

  goNext() {
    this.setState((prevState: ICalendarInlineExampleState) => {
      let selectedDate = prevState.selectedDate || new Date();
      let dateRangeArray = getDateRangeArray(selectedDate, this.props.dateRangeType, DayOfWeek.Sunday);
      let newSelectedDate = addDays(dateRangeArray.pop(), 1);
      return prevState.selectedDate = newSelectedDate;
    });
  }

  onSelectDate(date: Date, dateRangeArray: Date[]) {
    this.setState((prevState: ICalendarInlineExampleState) => {
      prevState.selectedDate = date;
      prevState.selectedDateRange = dateRangeArray;
      return prevState;
    });
  }
}

export default CalendarExample;