import react , {Component} from 'react';
class Event extends Component{
    Handler(){
        alert("it is clicked");
    }

render(){
    return (
        <>
        <button onClick={this.Handler}>click here</button>
        </>
    );
}
}
export default Event;