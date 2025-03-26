import react , {Component} from 'react';
class List extends Component{
  
    constructor() {
        super();
        this.state = {
            subject: ['English', 'Biology', 'Chemstry', 'mathematics', 'mathematics'],
            
        }
    }
    render() {

        const change={
            color:'red',
            backgroundColor:'green',
            fontSize:'60px'
        }

        return (
            <div>
                {
                    this.state.subject.map((x, index) => <h1  style={change}  key={index}>{x}</h1>)
                }
            </div>
        );
    }
}

export default List;