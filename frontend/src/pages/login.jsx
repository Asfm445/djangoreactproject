import React from 'react'
import Form from '../components/fotm';
function Login() {
    return ( <Form route="/api/token/" method='login'></Form> );
}

export default Login;