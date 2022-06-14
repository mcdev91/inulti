import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitSucced = (data) => console.log(data) || alert("data consoleje");
  const handleError = (errors) => { };

  //reiks mesti tolyn ir importuoti
  const inputOptions = {
    fullName: {
      required: "Full Name is required",
      pattern: {
        value: /([a-zA-Z]+\s){1,}([a-zA-Z]+)/,
        message: "Name And Female required"
      }
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
        message: "Invalid email address"
      }
    },
    zipCode: {
      required: "Zip Code is required",
      minLength: {
        value: 5,
        message: "At least 5 digits"
      }
    },
    birthDay: {
      required: "Birth Day is required"
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    },
    gender: {
      required: "You must select"
    },
    cardHolderName: {
      required: "Card Holder Name is required"
    },
    cardNumber: {
      required: "Card number is required"
    },
    expirationDate: {
      required: "Expiration date is required"
    },
    cvv: {
      required: "CVV is required"
    }

  };

  //reiks mesti i input options, nereikes viso eilerascio
  const NumericOnly = (e) => {
    const reg = /^[0-9\b]+$/
    let preval = e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) return true
    else e.target.value = preval.substring(0, (preval.length - 1))
  }

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(submitSucced, handleError)} className="formContainer">

        {/* full name */}
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            {...register('fullName', inputOptions.fullName)}
            name="fullName"
            type="text"
          // pattern="([a-zA-Z]+\s){1,}([a-zA-Z]+)"
          />
          <small className="text-danger">
            {errors?.fullName && errors.fullName.message}
          </small>
        </Form.Group>

        {/* email */}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register('email', inputOptions.email)}
            name="email"
            type="email"
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </Form.Group>

        {/* zip code */}
        <Form.Group>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            {...register('zipCode', inputOptions.zipCode)}
            onChange={NumericOnly}
            name="zipCode"
            type="text"
          />
          <small className="text-danger">
            {errors?.zipCode && errors.zipCode.message}
          </small>
        </Form.Group>

        {/* birthday */}
        <Form.Group>
          <Form.Label>Birth Day</Form.Label>
          <Form.Control
            {...register('birthDay', inputOptions.birthDay)}
            name="birthDay"
            type="date"
          />
          <small className="text-danger">
            {errors?.birthDay && errors.birthDay.message}
          </small>
        </Form.Group>

        {/* gender */}
        <Form.Group className="text-center">
          <div className="mt-2" />
          <Form.Label>Gender</Form.Label>
          <div className="mt-2" />
          <Form.Check {...register("gender", { required: true })} type="radio" value="Male" label="Male" inline></Form.Check>
          <Form.Check {...register("gender", { required: true })} type="radio" value="Female" label="Female" inline></Form.Check>
          <small className="text-danger">
            {errors?.gender && errors.gender.message}
          </small>
        </Form.Group>

        {/* card holder name */}
        <Form.Group>
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control
            {...register('cardHolderName', inputOptions.cardHolderName)}
            name="cardHolderName"
            type="text"
          />
          <small className="text-danger">
            {errors?.cardHolderName && errors.cardHolderName.message}
          </small>
        </Form.Group>

        {/* card number */}
        <Form.Group>
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            {...register('cardNumber', inputOptions.cardNumber)}
            onChange={NumericOnly}
            name="cardNumber"
            type="text"
          />
          <small className="text-danger">
            {errors?.cardNumber && errors.cardNumber.message}
          </small>
        </Form.Group>

        {/* expiration date / CVV */}
        <Form.Group className="form-row">
          <Row>
            <Col>
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                {...register('expirationDate', inputOptions.expirationDate)}
                name="expirationDate"
                type="date"
              />
              <small className="text-danger">
                {errors?.expirationDate && errors.expirationDate.message}
              </small>
            </Col>
            <Col>
              <Form.Label>CVV</Form.Label>
              <Form.Control
                {...register('cvv', inputOptions.cvv)}
                onChange={NumericOnly}
                type="text"
                maxlength="3"
              />
              <small className="text-danger">
                {errors?.cvv && errors.cvv.message}
              </small>
            </Col>
          </Row>
        </Form.Group>
        <br />

        {/* Submit btn */}
        <div className="text-center">
          <Form.Group>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;