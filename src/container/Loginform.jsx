import React from 'react';
import { Form, Button, Card, ListGroup } from "react-bootstrap";
export default function Loginform(props){
    return(
        <div className="outerpage">
        <Card>
        <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={props.onSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={props.onChange}/>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onChange={props.onChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
              <Card.Text>Don't have an account?</Card.Text>
            <Card.Link href="/register">Register</Card.Link>
            
          </Card.Body>
            <ListGroup>
            <ListGroup.Item><Card.Link href="/forgot-password">Forgot Password?</Card.Link>
            <Card.Link href="/">Back to Homepage</Card.Link></ListGroup.Item>
            </ListGroup>
        </Card>
      </div>
    )
}