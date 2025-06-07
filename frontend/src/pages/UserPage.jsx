import axios from "axios";

const UserPage = () => {
  const children = [
    {
      id: 1,
      name: "Bads",
      paymentDue: 1200,
    },
    {
      id: 2,
      name: "Anonymous",
      paymentDue: 1300,
    },
  ];

  const handleCheckout = async (amount) => {
    const { data: keyData } = await axios.get("/api/v1/getkey");
    const { key } = keyData;
    // console.log(key);

    const { data: orderData } = await axios.post("/api/v1/payment/process", {
      amount,
    });
    const { order } = orderData;
    // console.log(order);

    const options = {
      key, // Replace with your Razorpay key_id
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Maa Santoshi Car Rental",
      description: "Test Transaction",
      order_id: order.id, // This is the order_id created in the backend
      callback_url: "api/v1/paymentverification", // Your success URL
      prefill: {
        name: "Bads",
        email: "Bads@gmail.com",
        contact: "1234567890",
      },
      theme: {
        color: "#00FF00",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <h2 className="text-xl text-blue-400 m-2 text-shadow-lg">
        Welcome User{" "}
        <span className="font-bold text-green-400">Payments Page</span>
      </h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-5">
        {children.map((child) => (
          <div
            key={child.id}
            className="h-50 w-80 my-2 flex flex-col justify-center items-center gap-2 bg-lime-400/40 md:hover:bg-lime-500/40 rounded-lg shadow-lg"
          >
            <h2 className="text-zinc-500">
              Name of Child:{" "}
              <span className="font-bold text-lg text-blue-500">
                {child.name}
              </span>
            </h2>
            <h2 className="text-zinc-500">
              Pending:{" "}
              <span className="font-bold text-lg text-green-400">
                {child.paymentDue}
              </span>
            </h2>
            <button
              className="bg-green-400 md:hover:bg-green-500 px-10 py-1 mt-5 rounded text-white"
              onClick={() => handleCheckout(child.paymentDue)}
            >
              Pay {child.paymentDue}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
