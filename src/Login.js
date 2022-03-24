import React, { useState } from "react";
import CheckBox from "./CheckBox";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <article>
      <form className="form">
        <div className='form-control'>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className='form-control'>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
      <div className='form-control'>
        <CheckBox/>
      </div>
     
      <button
        type="submit"
        onClick={() => {
          console.log("data submitted");
        }}
      >
        Submit
      </button>
      </form>
    </article>
  );
};
