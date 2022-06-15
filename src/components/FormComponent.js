import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import InputOptions from './FormInputOptions';

const FormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const submitSucced = (data) => console.log(data) || alert("data consoleje");
  const handleError = (errors) => { };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit(submitSucced, handleError)} className="formContainer">

        {/* full name */}
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            {...register('fullName', InputOptions.fullName)}
            name="fullName"
            type="text"
          />
          <small className="text-danger">
            {errors?.fullName && errors.fullName.message}
          </small>
        </Form.Group>

        {/* email */}
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register('email', InputOptions.email)}
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
            {...register('zipCode', InputOptions.zipCode)}
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
            {...register('birthDay', InputOptions.birthDay)}
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
          <Form.Check
            {...register("gender", { required: true })}
            type="radio"
            value="Male"
            label="Male"
            inline>
          </Form.Check>
          <Form.Check
            {...register("gender", { required: true })}
            type="radio"
            value="Female"
            label="Female"
            inline>
          </Form.Check>
          <small className="text-danger">
            {errors?.gender && errors.gender.message}
          </small>
        </Form.Group>

        {/* card holder name */}
        <Form.Group>
          <Form.Label>Card Holder Name</Form.Label>
          <Form.Control
            {...register('cardHolderName', InputOptions.cardHolderName)}
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
            {...register('cardNumber', InputOptions.cardNumber)}
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
                {...register('expirationDate', InputOptions.expirationDate)}
                className="colFix"
                name="expirationDate"
                type="date"
              />
              <small className="text-danger">
                {errors?.expirationDate && errors.expirationDate.message}
              </small>
            </Col>
            <Col>
              <Form.Label className="colFix">CVV</Form.Label>
              <Form.Control
                {...register('cvv', InputOptions.cvv)}
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