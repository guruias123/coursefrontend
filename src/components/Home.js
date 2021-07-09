import {React , Component} from 'react'
import {Link} from 'react-router-dom'
class Home extends Component{
    render(){
        return(
            <>
            <h1>This is the home</h1>
            <Link to='/signup'><button>Signup</button></Link>
            <Link to='/login'><button>Login</button></Link>

            </>
        )
    }
}

export default Home;
