import './App.css';
import './index.css';
// import Event from './event';
// import Conditional from './conditional';
import {Component} from 'react';
import List from './list';
import Inline from './inline';
class App extends Component{
  render(){
    return (
      <div className='App'>
      {/* <StateChange/> */}
      {/* < Event/> */}
      {/* <Conditional/> */}
        {/* <List/> */}
        <Inline/>
      </div>
    );
  }
}
export default App;