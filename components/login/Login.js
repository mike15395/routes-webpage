import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import './Login.css'
function Login() {
    console.log(useAuth0);
    const {loginWithRedirect} = useAuth0();
    
    return (
       
      <div className='login-page'>
          <h2>This is login page</h2>  
          <h3>Get started by clicking on Login</h3>
          <button type="button" class="btn btn-outline-primary btn-lg" onClick={()=>loginWithRedirect()}>Login</button>
     </div>
  )
}

export default Login