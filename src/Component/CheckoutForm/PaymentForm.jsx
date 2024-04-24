import React from 'react'

import {Typography, Button, Divider} from '@mui/material'
import{Elements, CardElement,
    ElementsConsumer} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Review from './review'

const stripePromise= loadStripe(' pk_test_51KhltjIRqqH2NVe1TWvGiIEVB6H13UraC8kwrRg4uk2hvSjuFUTxBMnDzknWB0t8RrB17cnEx8EqUQ4YZCkmXbHi00tzhLeIrR')
const PaymentForm=({checkoutToken, backStep, shippingData, handleCaptureCheckout, nextStep,timeout})=>{
const handleSubmit= async (event , elements, stripe)=>{
        event.preventDefault()
        if(!stripe || !elements) return
        const cardElement= elements.getElement(CardElement)
        const {error, paymentMethod}= await stripe.createPaymentMethod({type:'card', card:cardElement})

        if(error){
            console.log(error)
        }
else{
   const orderData= {
       line_items:checkoutToken.live.line_items,
       customer:{ firstname: shippingData.firstName, 
        lastname: shippingData.lastName,
        email: shippingData.email},
        shpping:{name:'primary', street:shippingData.address1, 
        town_city:shippingData.city, county_state: shippingData.subdivision,
        postal_zip: shippingData.zip,
        country:shippingData.shippingCountry},
        fulfillment:{
            shipping_method: shippingData.shippingOption},
        payment:{gateway:'stripe',
                 stripe:{payment_method_id:paymentMethod.id
                }
                }
        
    
        
       
   }
   handleCaptureCheckout(checkoutToken.id, orderData)
   timeout()
   nextStep()
   

   
}
    
    }
    return(<>
        <>
        <Review checkoutToken={checkoutToken} />
        <Divider />
        <Typography variant="h6" gutterBottom style={{margin:'20px 0'}}>Payment Method</Typography>
        <Elements stripe={stripePromise}>
            <ElementsConsumer>
                { ({elements, stripe})=>(
                    <form onSubmit={(e)=>handleSubmit(e,elements,stripe)}>
                        <CardElement />
                        <br /> <br />
                        <div style={{display:'flex',marginBottom:20, justifyContent: 'space-between'}}>
                        <Button variant='outlined' onClick={backStep}>Back</Button>
        <Button  type=' submit' variant='contained' disabled={!stripe} color='primary'>
        Pay {checkoutToken.live.subtotal.formatted_with_symbol}</Button>

                        </div>
                    </form>
                )}
            </ElementsConsumer>
        </Elements>
        </>
    </>)
}

export default PaymentForm