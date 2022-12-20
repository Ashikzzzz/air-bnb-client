import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail, loading } =
    useContext(AuthContext);
  // form function
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    // 316ea586e002246a2c4c300c353a1510
    const url =
      "https://api.imgbb.com/1/upload?key=316ea586e002246a2c4c300c353a1510";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // create user
    // createUser(email, password).then((result) => {});
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-orange-500 my-10">
        Create An Account
      </h1>
      <div className="bg-slate-100 shadow-lg p-16 w-1/3 rounded-lg mx-auto">
        <form onSubmit={handleRegister}>
          <div className="text-center">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="input input-bordered input-info rounded-lg w-full max-w-xs text-center"
            />
          </div>
          <div className="text-center mt-4">
            <input
              name="email"
              type="text"
              placeholder="Your Email"
              required
              className="input input-bordered input-info rounded-lg w-full max-w-xs text-center"
            />
          </div>
          <div className="text-center mt-4">
            <label htmlFor="image">Select image</label>
            <br />
            <input type="file" name="image" />
          </div>
          <div className="text-center mt-4">
            <input
              name="password"
              type="password"
              placeholder="Your Password"
              required
              className="input input-bordered input-info w-full rounded-lg max-w-xs text-center"
            />
          </div>
          <div className="text-center my-4">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-outline btn-accent rounded-lg w-full max-w-xs "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
