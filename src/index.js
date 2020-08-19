import React from 'react';
import ReactDOM from 'react-dom';
// import FirstPage from './components/FirstPage';
import PersoneScils from './components/PersonScills';
import "./stylesheet/index.scss";
import "./stylesheet/media.scss";


function App() {
  return (
    <div>
      <PersoneScils />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
