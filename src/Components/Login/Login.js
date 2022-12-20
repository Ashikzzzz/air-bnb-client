import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-orange-500 my-10">
        Log In Your Account
      </h1>

      <form>
        <div className="text-center">
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            required
            className="input input-bordered input-info rounded-lg w-full max-w-xs text-center"
          />
        </div>

        <div className="text-center mt-4">
          <input
            name="password"
            type="text"
            placeholder="Your Password"
            required
            className="input input-bordered input-info w-full rounded-lg max-w-xs text-center"
          />
        </div>
        <div className="text-center mt-4">
          <input
            type="submit"
            value="Sign In"
            className="btn btn-outline btn-info rounded-lg w-full max-w-xs "
          />
        </div>
      </form>
      <div className="text-center">
        <button className="btn btn-outline rounded max-w-xs  w-full my-4 btn-success ">
          Log In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
