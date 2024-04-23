import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import  './styles.css';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, handleCaptureCheckout, order,totalItems}) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished]= useState(false);

  const navigate= useNavigate();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          console.log('token')

          setCheckoutToken(token);
        } catch(error) {
navigate('/')      
  }
      };

      generateToken();
    }
  }, [cart]);
const empty=()=>{
  totalItems=0
}
  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout=()=>{
    setTimeout(()=>{
setIsFinished(true)
    },3000)
  }
  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className='divider' />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  ):isFinished ? (<>
          <h5 className='thank'>Thanks for your purchase</h5>

                  <div className='review-div'>
          <Button component={Link} variant="outlined" onClick={empty}
          type="button" to="/">Back to home</Button>

                  </div>
            </>) : (
    <div className='spinner'>
      <CircularProgress />
    </div>
  ));

 

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken}
     nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <PaymentForm checkoutToken={checkoutToken} 
    nextStep={nextStep} backStep={backStep}
     shippingData={shippingData} 
     handleCaptureCheckout={handleCaptureCheckout} timeout={timeout}/>);

  return (
    <>
      <div className="review" >
      <main className="reviewr">
        <div className="reviewr">
          <h5  className="title-checkout">Checkout</h5>
          <Stepper activeStep={activeStep} className='stepper'>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> :
           checkoutToken && <Form />}
        </div>
      </main>
      </div>
    </>
  );
};

export default Checkout;