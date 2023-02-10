import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditForm=()=> {
  return (
    <>
   
    <Form className='Container'>
    <Form.Group className="mb-3">
        
        <Form.Control type="Text" placeholder="*Enter Your Name" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="*Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="*Password" />
      </Form.Group>
      
      
      <Form.Select aria-label="Default select example">
      <option>Select your Location</option>
      <option value="text">Indore</option>
      <option value="text">Bhopal</option>
      <option value="text">Ujjain</option>
    </Form.Select>
    <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
 
      
    </>
  )
}

export default EditForm;
