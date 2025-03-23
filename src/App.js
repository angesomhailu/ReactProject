import './App.css';
import './index.css';
import Event from './event';
import {Component} from 'react';

class App extends Component{
  render(){
    return (
      <div className='App'>
      {/* <StateChange/> */}
      < Event/>
      </div>
    );
  }
}
export default App;