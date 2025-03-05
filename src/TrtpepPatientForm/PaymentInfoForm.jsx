// import React from "react";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   ElementsConsumer,
// } from "@stripe/react-stripe-js";

// const PaymentInfoForm = ({ onSubmit }) => {
//   const stripe = useStripe();

//   const elements = useElements();
//   return (
//     <div>
//       <div className="mb-4">
//         <p className="font-semibold text-base text-blue-900">Total</p>
//         <p className="font-normal mt-2 text-base">$250</p>
//       </div>

//       <div className="flex flex-col items-start gap-1 mt-4">
//         <p className="text-sm font-semibold text-gray-500 mb-2">
//           Payment Info <span className="text-red-500">*</span>
//         </p>

//         <CheckoutComponent />
//       </div>
//     </div>
//   );
// };

// export default PaymentInfoForm;

// const CheckoutComponent = () => {
//   return (
//     <div className="w-full">
//       <CardElement />
//     </div>
//   );
// };

// src/components/PaymentInfoForm.js

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const PaymentInfoForm = ({ onSubmit, totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // if (!stripe || !elements) {
    //   // Stripe.js has not yet loaded.
    //   setLoading(false);
    //   return;
    // }

    // const cardElement = elements.getElement(CardElement);

    // const { error, token } = await stripe.createToken(cardElement);

    // if (error) {
    //   console.log("[error]", error);
    //   setLoading(false);
    //   return;
    // }

    // Pass the token to the parent component for further processing
    onSubmit();
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Proceed to Payment</h2>
      <div>
        <div className="mb-4">
          <p className="font-semibold text-base text-[#c00000]">Total</p>
          <p className="font-normal mt-2 text-base">${totalAmount}</p>{" "}
        </div>{" "}
        <div className="flex flex-col items-start gap-1 mt-4">
          {" "}
          {/* <p className="text-sm font-semibold text-gray-500 mb-2">
            Payment Info <span className="text-red-500">*</span>{" "}
          </p> */}
          {/* <CardElement className="mb-4 w-full" /> */}
          <button
            type="button"
            onClick={handleSubmit}
            // disabled={!stripe}
            className="bg-color  text-white rounded-md text-sm px-4 py-2"
          >
            {loading ? "Loading..." : "Pay"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoForm;
