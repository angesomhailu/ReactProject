import './App.css';
import './index.css';
import Event from './event';
import Conditional from './conditional';
import {Component} from 'react';
import List from './list';
import Inline from './inline';
import Form from './form'
class App extends Component{
  render(){
    return (
      <div className='App'>
        <Form/>
      {/* <StateChange/> */}
      {/* < Event/> */}
      {/* <Conditional/> */}
        {/* <List/> */}
        {/* <Inline/> */}
      </div>
    );
  }
}
export default App;