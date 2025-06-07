import React from "react";
// import useLocation from "react-router";

const PaymentSuccess = () => {
  //   const query = new URLSearchParams(useLocation().search);
  //   const reference = query.get("reference");
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-50 w-100 flex flex-col justify-center items-center rounded-xl shadow-2xl gap-2">
        <h1 className="text-xl font-bold text-green-400">Payment Succesful</h1>
        <p className="text-xl">Your Transsaction was Successful.</p>
        {/* {reference && (
          <p>
            <strong>Reference ID:</strong>
            {reference}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default PaymentSuccess;
