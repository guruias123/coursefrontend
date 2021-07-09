import {React,Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state={
                user:''
        }
    }
    handleClick(){
        
    }
    render(){
        return(
            <>
            <h2>this is Login page</h2>
            <form>
               
            <div>
                <label>email</label>
                <input type='text' />
                </div>
                <div>
                <label>pasword</label>
                <input type='password' />
            </div>
               <div>
                   <button onClick={this.handleClick()}>Login</button>
               </div>
            </form>
            </>
        )
    }
}

export default Login;