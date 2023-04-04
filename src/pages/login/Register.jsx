import React from 'react';
import Form from 'react-bootstrap/Form';

const Register = () => {
  return (
    <div class="row align-items-center" style={{height: '75vh'}}>
    <div class="mx-auto col-10 col-md-8 col-lg-3">
    <Form class="row g-3">
    <h1 class='mb-4'>Welcome</h1>
    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Tel No</Form.Label>
        <Form.Control type="Text" placeholder="Tel No" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Address</Form.Label>
        <Form.Control type="Text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div class="col-4">
      <button type="button" class="btn btn-outline-primary">Sign up</button>
      </div>
    </Form>
    </div>
    </div>
  );
}

export default Register;

