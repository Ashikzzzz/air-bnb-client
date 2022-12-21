import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, IconName } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLogin, userLogin, loading } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // user login
    userLogin(email, password).then((result) => {
      const user = result.user;
      toast.success("Login successful");
      navigate(from, { replace: true });
    });
  };

  const handleGoogleLogin = () => {
    // google login
    googleLogin(googleProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-orange-500 my-10">
        Log In Your Account
      </h1>

      <form onSubmit={handleSignIn}>
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
        <ToastContainer></ToastContainer>
      </form>
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline rounded max-w-xs gap-x-2  w-full my-4 btn-success "
        >
          Log In with Google <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default Login;
