import React from 'react';
import {
    StripeProvider,
    Elements,
    PaymentRequestButtonElement,
    injectStripe
  } from "@stripe/react-stripe-js";
  
  class _PaymentRequestForm extends React.Component {
    constructor(props) {
      super(props); 
  
      // For full documentation of the available paymentRequest options, see:
      // https://stripe.com/docs/stripe.js#the-payment-request-object
      const paymentRequest = props.stripe.paymentRequest({
        country: "UK",
        currency: "gbp",
        total: {
          label: "French nails checklist",
          amount: 499
        }
      });
  
      paymentRequest.on("token", ({ complete, token, ...data }) => {
        console.log("Received Stripe token: ", token);
        console.log("Received customer information: ", data);
        complete("success");
      });
  
      paymentRequest.canMakePayment().then(result => {
        this.setState({ canMakePayment: !!result });
      });
  
      this.state = {
        canMakePayment: false,
        paymentRequest
      };
    }
  
    render() {
      return this.state.canMakePayment ? ( 
        <PaymentRequestButtonElement
          paymentRequest={this.state.paymentRequest}
          className="PaymentRequestButton"
          style={{
            // For more details on how to style the Payment Request Button, see:
            // https://stripe.com/docs/elements/payment-request-button#styling-the-element
            paymentRequestButton: {
              theme: "light",
              height: "64px"
            }
          }}
          onClick={() => console.log("button clicked")}
        />
      ) : null;
    }
  }
  
  
  const PaymentRequestForm = injectStripe(_PaymentRequestForm);
  
  export default function Button_payment() {
    return (
      <StripeProvider apiKey="pk_test_51MJajVLhCNXj8fAXOh8k7KxSgwwDK8PXI5jOectUpLJkBBtXOMA3t2UA7UQnwJQC1sKPDKhKfQKydjn21TIN75R200tAQgfT6P">
        <div className="button_payment">
          <Elements>
            <PaymentRequestForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }