import React, { useState } from "react";
import CheckBox from "./CheckBox";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [conform, setConform] = useState("");
  return (
    <>
    <article>
      <form className="form">
        <div className='form-control'>
        <label htmlFor="name">Name :</label>
        <input
          type="name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>
        <div className='form-control'>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className='form-control'>
        <label htmlFor="tel">Mobile :</label>
        <input
          type="tel"
          id="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        </div>
        <div className='form-control'>
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <div className='form-control'>
        <label htmlFor="conform">Re-Enter Password :</label>
        <input
          type="password"
          id="conform"
          value={conform}
          onChange={(e) => setConform(e.target.value)}
          required
        />
        </div>
        <div className="form-control">
          <CheckBox/>
        </div>
        <button type="submit" onClick={() => console.log("data submitted")}>
          Register
        </button>
      </form>
      </article>
    </>
  );
}

export default Registration;
