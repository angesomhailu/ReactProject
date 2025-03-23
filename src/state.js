import react , {Component} from 'react';
class StateChange extends Component{
    constructor(){
        super()
        this.state={
            channel:"hey this is the angesoms you tube channel,please subscribe by click the below subscribe button",
        };
    }
    Subscription(){
        this.setState(
            {
                channel:"thanks for the subscription",
            }
        )
    };
    render(){
        return (
          <> 
          <h1>{this.state.channel}</h1>
              <button onClick={()=>this.Subscription()}>Subscribe</button>
          </>
        );
    }
}
export default StateChange;
