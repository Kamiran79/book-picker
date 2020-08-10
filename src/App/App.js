import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Book Picker</h1>
        <button className="btn btn-info"><i className="fas fa-book-reader"></i> I am a button <i className="fas fa-book-reader"></i></button>
      </div>
    );
  }
}

export default App;
