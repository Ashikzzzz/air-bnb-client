export const addHome = async (homeData) => {
  const url = `${process.env.REACT_APP_API_URL}/homes`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(homeData),
  });
  const data = await response.json();
  return data;
};

// get homes for single host

// export const getHomeBySingleHost = async (email) => {
//   const url = `${process.env.REACT_APP_API_URL}/homes/${email}`;
//   const response = fetch(url, {
//     method: "GET",
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// };

// update home info
// export const updateHomeInfo = async (homeData) => {
//   const url = `${process.env.REACT_APP_API_URL}/homes`;
//   const response = await fetch(url, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(homeData),
//   });
//   const data = await response.json();
//   return data;
// };
