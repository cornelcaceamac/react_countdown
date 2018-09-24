import React, { Component } from 'react';
import Timer from './Timer';
import ErrorNotify from './ErrorNotify';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class App extends Component {
   constructor (props) {
      super(props)
      this.state = {
        startDate: moment(),
        show: false
      };
      this.handleChange = this.handleChange.bind(this);
    }
   
    handleChange(date) {
      this.setState({
        startDate: date,
        show: ((Date.parse(new Date(date)) - Date.parse(new Date()))>0) ? false : true
      });
    }

   render() {
    return (
      <div className="App">
        <div className="App-header">
           <p>The final Countdown</p>
        </div>
        <main>
        <p>Select the date:</p>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            withPortal
          />
          <ErrorNotify show={this.state.show} />
          <Timer date={this.state.startDate.format('YYYY-MM-DD')} />
        </main>
      </div>
    );
  }
}

export default App;
