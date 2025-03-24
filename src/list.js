import react , {Component} from 'react';
class List extends Component{
  
    constructor() {
        super();
        this.state = {
            subject: ['English', 'Biology', 'Chemstry', 'mathematics', 'mathematics'],
            
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.subject.map((x, index) => <h1  key={index}>{x}</h1>)
                }
            </div>
        );
    }
}

export default List;