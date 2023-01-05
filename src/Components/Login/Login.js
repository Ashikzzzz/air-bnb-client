import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, IconName } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

// import { setAuthToken } from "../../Auth/Auth";

const Login = () => {
  const { userEmail, setUserEmail } = useState("");
  const { googleLogin, userLogin, loading, setLoading, resetPass, user } =
    useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // send data to storage batabase (email)

    // user login
    userLogin(email, password)
      .then((result) => {
        // get token
        // setAuthToken(result.user);
        const currentUser = {
          email: result?.user?.email,
        };
        fetch(`http://localhost:5000/user/${result?.user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("airbnb-token", data.token);
          });
        navigate(from, { replace: true });
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  // send data to storage batabase (google login)

  const handleGoogleLogin = () => {
    // google login
    googleLogin(googleProvider)
      .then((result) => {
        // get token
        // setAuthToken(result.user);
        const currentUser2 = {
          email: result?.user?.email,
        };
        fetch(`http://localhost:5000/user/${result?.user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser2),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("airbnb-token", data.token);
          });
        console.log(result);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleResetPass = () => {
    resetPass(userEmail).then((result) => {
      toast.success("chack your email to password reset");
      setLoading(false);
    });
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-orange-500 my-10">
        Log In Your Account
      </h1>

      <div className="bg-slate-100 shadow-lg p-16 w-1/3 rounded-lg mx-auto">
        <form onSubmit={handleSignIn}>
          <div className="text-center">
            <input
              onBlur={(event) => setUserEmail(event.target.value)}
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
            {loading ? (
              <progress className="progress w-56"></progress>
            ) : (
              <motion.input
                whileHover={{ scale: 0.9 }}
                type="submit"
                value="Sign In"
                className="btn btn-outline btn-info rounded-lg w-full max-w-xs "
              />
            )}
          </div>
          <ToastContainer></ToastContainer>
          <motion.button
            whileHover={{ scale: 0.9 }}
            onClick={handleResetPass}
            className="text-sm mt-2  w-1/2 mx-auto border-b-2   "
          >
            Forgot Password?
          </motion.button>
        </form>
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 0.9 }}
          onClick={handleGoogleLogin}
          className="btn btn-outline rounded max-w-xs gap-x-2  w-full my-4 btn-success "
        >
          Log In with Google <FaGoogle></FaGoogle>
        </motion.button>
      </div>
    </div>
  );
};

export default Login;
