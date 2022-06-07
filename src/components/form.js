import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormCheck, Row, Col } from 'react-bootstrap';

const Checkout = () => {


  //reiks taisyti 'null', beda declaruojant 0 kad ismeta ir i forma, easy fix veliau
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    zipCode: null,
    birthDay: null,
    password: "",
    gender: "",
    cardHolderName: "",
    cardNumber: null,
    expirationDate: null,
    cvv: null
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    alert('rezultatas dev tools consoleje')
  }

  const NumericOnly = (e) => {
    const reg = /^[0-9\b]+$/
    let preval = e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0, (preval.length - 1))
  }


  //forma
  return (
    <div className="container">
      <Form onSubmit={handleSubmit} className="formContainer">

        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            value={formData.fullName}
            type="text"
            pattern="([a-zA-Z]+\s){1,}([a-zA-Z]+)"
            required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
            type="email"
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            required
          />
        </Form.Group>

        <Form.Group controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            // kvieciama papildoma funkcija, nes su type='number' atsirado problema sprendziant maxLength ir required apibreztis, veliau ieskosiu sprendimo su regex ar pan.
            onKeyUp={NumericOnly}
            value={formData.zipCode}
            type="text"
            maxLength="5"
            required
          />
        </Form.Group>

        <Form.Group controlId="birthDay">
          <Form.Label>Birth Day</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, birthDay: e.target.value })}
            value={formData.birthDay}
            type="date"
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            value={formData.password}
            type="password"
            required
          />
        </Form.Group>

        <Form.Group
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          value={formData.gender}
          className="form-row"
          controlId="gender"
        >
          <Form.Label>Gender</Form.Label>
          <Row>
            <Col className="checkBox mr">
              <FormCheck
                value="Female"
                className="checkPaddings"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                label="Female"
                defaultChecked
              />
            </Col>
            <Col className="checkBox">
              <FormCheck
                value="Male"
                className="checkPaddings"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                label="Male"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="cardHolderName">
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, cardHolderName: e.target.value })}
            value={formData.cardHolderName}
            type="text"
            required
          />
        </Form.Group>

        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            value={formData.cardNumber}
            type="text"
            onKeyUp={NumericOnly}
            required
          />
        </Form.Group>

        <Form.Group className="form-row">
          <Row>
            <Col className="expirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                value={formData.expirationDate}
                type="date"
                required
              />
            </Col>
            <Col>
              <Form.Label>CVV</Form.Label>
              <Form.Control
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                onKeyUp={NumericOnly}
                value={formData.cvv}
                type="text"
                maxLength="3"
                required
              />
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