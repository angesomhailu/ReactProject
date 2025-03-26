import {Component} from 'react';

class Form extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
        framework:''
      }
    }
    
    User=(event)=>{
        this.setState({
            username:event.target.value,
        })
    }
    Comment=(event)=>{
        this.setState({
            comment:event.target.value ,
        })
    }
    Frameworks=(event)=>{
        this.setState({
            framework:event.target.value
        })
    }
    Submit=(event)=>{       
        alert(`${this.state.username} ${this.state.framework} ${this.state.comment}  `)
    }
    render(){
        return(
            <form onSubmit={this.Submit}>
                <div>
                   <label>UserName:</label>
                   <input type='text' value={this.state.username} onChange={this.User}/>
                </div>
                <div>
                   <label>The Comment:</label>
                   <textarea value={this.state.comment} onChange={this.Comment}>
                   </textarea>
                </div>
                <div>
                    <label>javascript frame works</label>
                    <select value={this.state.framework} onChange={this.Frameworks}>
                        <option value="React" selected>React</option>
                        <option value="Angular">Angular</option>
                        <option value="Nextjs">Nextjs</option>
                    </select>
                </div>
                <div>
                    <button type='submit' onClick={this.Submit} >Submit</button>
                </div>
            </form>
            
        );
    }
}
export default Form;

