import react,{Component} from 'react';

class Inline extends Component {
    constructor() {
        super();
    }

    render() {
        const heading = {
            color: 'red',
            backgroundColor: 'aqua',
            fontSize:'80px'
        }
        return (
           <h1 style={heading}>hello world</h1>
        );
    }
}

export default Inline;