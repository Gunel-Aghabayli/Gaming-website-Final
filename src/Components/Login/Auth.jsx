import React, { useState } from "react";
import style from "./Auth.module.css";
import { supabase } from "../../supabase";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      if (isLogin) {
        const {
          data: { user },
          error: signInError,
        } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw new Error(signInError.message);

        const { data: session } = await supabase.auth.getSession();
        const userRole = session?.session?.user?.email;

        if (userRole === "admin@gmail.com") {
          toast.success("Logged in as Admin!");
          navigate("/");
        } else {
          toast.success("Sign In successfully");
          navigate("/");
        }
      } else {
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          return;
        }

        const { data: user, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        });
        if (signUpError) throw new Error(signUpError.message);

        toast.success("Sign Up successfully, please check your email");
        navigate("/login");
      }
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className={style.loginBg}>
      <Link className={style.back} to="/">
        Back To Home Page
      </Link>
      <a href="">
        <img
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo-white.svg"
          width="400px"
          height="60px"
          alt="Logo"
        />
      </a>
      <h2>{isLogin ? "Sign in" : "Sign up"}</h2>
      <form className={style.loginForm} onSubmit={handleAuth}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button className={style.submit} type="submit">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p className={style.create}>
        {isLogin ? "Create an account:" : "Sign in to your account"}{" "}
        <button className={style.signUp} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
      </p>
      <Link className={style.back} to="/">
        Back To Home Page
      </Link>
    </div>
  );
};

export default Auth;


