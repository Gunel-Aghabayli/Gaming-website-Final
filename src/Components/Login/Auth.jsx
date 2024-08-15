// src/components/Auth.js
import React, { useState } from "react";
import style from "./Auth.module.css";
import { supabase } from "../../supabase";
import { Link } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error.message);
      else alert("Sign In successfully");
    } else {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) setError(error.message);
      else {
        const { error: userError } = await supabase
          .from("users")
          .insert([{ email, username }]);
        if (userError) setError(userError.message);
        else alert("Sign Up successfully");
      }
    }
  };

  return (
    <div className={style.loginBg}>
    <Link className={style.back} to='/'>Back To Home Page</Link>
      <a href="">
        <img
          src="https://demo2.wpopal.com/gamico/wp-content/uploads/2023/12/logo-white.svg"
          width="400px"
          height="60px"
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
        <button className={style.submit} type="submit">{isLogin ? "Sign In" : "Sign Up"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p className={style.create}>
        {isLogin ? "Create an account:" : "Sign in to your account"}{" "}
        <button className={style.signUp} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
      </p>
      <Link className={style.back} to='/'>Back To Home Page</Link>
    </div>
  );
};

export default Auth;
