import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './ShirtSub.css'



// const url = 'https://amazon1543.herokuapp.com/shirts/'
const url = 'https://resumebackend123.herokuapp.com/courses/'

class ShirtSub extends Component{
      
      constructor(){
            super()
            this.state={
                  shirts1:'',
                
                  image : ''
                 
                       
                  
            }
      }
      
     
      componentDidMount(){

            console.log(this.props.match.params.id)
            
            const id = this.props.match.params.id;
            console.log(`${url}${id}`)
            fetch(`${url}${id}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({shirts1:data}))
          
      }
     
        handleImg=(img)=>{
            this.setState({image:img})
     
            console.log('??????',img)
            
            
        }
       
      shirt = (data)=>{
            if(data){
                 return(
                        data.map((product)=>{
                              
                              return(
                                    <React.Fragment>
                                          
                                    <div className='back-to-result'>
                                          <Link  to='/'>Back to result</Link>
                                    </div>
                                    <div className='details'>
                                          <div className='details-image' >
                                            
                                                <img style={{height:'40%'}} src={product.image}    onLoad={()=>{this.handleImg(product.image)}} />
                                          </div>
                                          <div className='details-info' >
                                                <ul>
                                                    
                                                
                                                      <li>
                                                           <b>{product.course}  </b> 
                                                      </li>
                                                      <li>
                                                           Duration: {product.Duration} 
                                                      </li>
                                                      <li>
                                                            Fee: {product.Fee}
                                                      </li>
                                                      <li>
                                                          Description: {product.Description}
                                                      </li>
                                                </ul>
                                          
                                          </div>
                                         
                                    </div>
                              </React.Fragment>
                              )
                        })
                 )
                 
            }else{
                  return(
                      <img src='/images/loader.gif' style={{height:'320px', width:'420px',marginTop:'10%'}} />
                      
                  )
            }
      }
      
      render(){
            
           
            return(
                        <>
                        
                        {this.shirt(this.state.shirts1)}
                        
                        </>
            )
      }
}
export default ShirtSub;