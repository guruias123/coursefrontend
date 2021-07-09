import {React,Component} from 'react'
const url ="http://localhost:8500/signup"
class Signup extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            confirmpassword:''   
        }
    }
    handleChange =(event)=>{
        console.log('>>>>>',event.target.value)
        console.log(this.state.email)
        this.setState({[event.target.name]:event.target.value})
        
    }
 
    handleSubmit = ()=>{
      
            
            fetch(url,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(this.props.history.push('/login'))
        
    }
    render(){
        return(
            <>
            <h2>this is Signup page</h2>
            <form className="container">
                <div>
                <label>name</label>
                <input  type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                </div>
                <div>
                <label>email</label>
                <input   type='email' name="email" value={this.state.email} onChange={this.handleChange} required/>
                </div>
                <div>
                <label>pasword</label>
                <input   type='password' name="password" value={this.state.password} onChange={this.handleChange} required/>
                </div>
                <div>
                <label>confirm password</label>
                <input   type='password' name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange} required/>
                </div>
                <div>
                    <button onClick={this.handleSubmit}>Signup</button>
                </div>
            </form>
            </>
        )
    }
}

export default Signup;