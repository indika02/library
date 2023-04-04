import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import {Link}  from 'react-router-dom';
import Register from './Register';

function Login() {
  return (
    <div class="row align-items-center" style={{height: '75vh'}}>
        <div class="mx-auto col-10 col-md-8 col-lg-6  shadow-lg p-5 bg-light">
    <Form>
      <h1 class='mb-4'>Welcome</h1>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div class="d-grid gap-2 col-5 mx-auto mb-3">
  <button class="btn btn-primary" type="button">Login</button>
  </div>
  <div className='center'>
  <p class='mb-3'>or</p>
  <p>Don't have an Account? <Link as={Link}  to="./Register">Sign Up Now</Link></p>
  </div>
 
    </Form>
    </div>
    </div>
  );
}

export default Login;