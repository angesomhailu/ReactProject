import react , {Component} from 'react';
class Conditional extends Component{
    constructor(){
       super();
       this.state={
         iscorrect: false,
       }
    }
  render(){
    
    if(this.state.iscorrect){
        return (
            <>
              <h1>the statement is true</h1>
            </>
        );
    }
    else{
        return (
            <>
              <h1>the statement is not true</h1>
            </>
        );
    }
    
  }
}
export default Conditional;