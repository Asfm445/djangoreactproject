import React from 'react'
import Form from '../components/fotm';
function Register() {
    return ( <Form route="/api/user/register/" method='register'></Form>);
}

export default Register;