// export const getUserSpecifiedBooking = async (user) => {
//   const url = `${process.env.REACT_APP_API_URL}/email=${user?.email}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// booking payment
export const getPaymentIntent = async (price) => {
  const url = "http://localhost:5000/payment-intent";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ price }),
  });

  const data = await response.json();
  return data;
};
