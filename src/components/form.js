import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormCheck, Row, Col } from 'react-bootstrap';

const Checkout = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    zipCode: 0,
    birthDay: 0,
    password: "",
    gender: "",
    cardHolderName: "",
    cardNumber: 0,
    expirationDate: 0,
    cvv: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="formContainer">

        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} value={formData.fullName} type="text" required pattern="([a-zA-Z]+\s){1,}([a-zA-Z]+)" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} type="email" pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$' />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} value={formData.zipCode} maxLength="5" type="text" />
          <Form.Control.Feedback type="number">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="birthDay">
          <Form.Label>Birth Day</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, birthDay: e.target.value })} value={formData.birthDay} type="date" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} type="password" />
        </Form.Group>

        <Form.Group className="form-row" controlId="gender" onChange={(e) => setFormData({ ...formData, gender: e.target.value })} value={formData.gender}>
          <Form.Label>Gender</Form.Label>
          <Row>
            <Col className="checkBox mr">
              <FormCheck value="Female" className="checkPaddings" type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Female" />
            </Col>
            <Col className="checkBox">
              <FormCheck value="Male" className="checkPaddings" type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Male" defaultChecked />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="cardHolderName">
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, cardHolderName: e.target.value })} value={formData.cardHolderName} type="text" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })} value={formData.cardNumber} type="number" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="form-row">
          <Row>
            <Col className="expirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })} value={formData.expirationDate} type="date" />
            </Col>
            <Col>
              <Form.Label>CVV</Form.Label>
              <Form.Control onChange={(e) => setFormData({ ...formData, cvv: e.target.value })} value={formData.cvv} type="number" />
            </Col>
          </Row>
        </Form.Group>

        <div className="d-grid mt-2">
          <Button className="" variant="success" type="submit">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Checkout;