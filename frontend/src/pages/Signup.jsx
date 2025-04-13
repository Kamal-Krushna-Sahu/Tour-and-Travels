import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="pt-30 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-blue-400">Signup</h1>
      <form
        action="http://localhost:3000/signup"
        method="post"
        className="flex flex-col justify-center items-center gap-5 rounded bg-blue-300 backdrop-blur-xl px-5 py-10"
      >
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username..."
          onChange={(e) => setUsername(e.target.value)}
          className="bg-zinc-200 rounded px-10 py-1 outline-none"
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter Email..."
          onChange={(e) => setEmail(e.target.value)}
          className="bg-zinc-200 rounded px-10 py-1 outline-none"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password..."
          onChange={(e) => setPassword(e.target.value)}
          className="bg-zinc-200 rounded px-10 py-1 outline-none"
        />
        <input
          type="submit"
          className="bg-blue-500 text-white px-10 py-1 rounded"
        />
      </form>
      <div>
        Already have an account
        <button
          className="text-blue-500 text-xl cursor-pointer ml-2"
          onClick={() => navigate("/")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
