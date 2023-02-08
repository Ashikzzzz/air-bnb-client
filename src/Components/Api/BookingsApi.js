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
