// import React from "react";
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import PaymentForm from './PaymentForm.js';

const PUBLIC_KEY = 'pk_test_51MJajVLhCNXj8fAXOh8k7KxSgwwDK8PXI5jOectUpLJkBBtXOMA3t2UA7UQnwJQC1sKPDKhKfQKydjn21TIN75R200tAQgfT6P';

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )

}

export default StripeContainer;