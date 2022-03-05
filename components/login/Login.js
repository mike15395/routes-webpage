import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function Login() {
    console.log(useAuth0);
    const {loginWithRedirect} = useAuth0();
    
    return (
       
      <div>
          <h2>This is login page</h2>  
          <h3>Get started by clicking on Login</h3>
          <button onClick={()=>loginWithRedirect()}>Login</button>
     </div>
  )
}

export default Login