import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://192.168.147.242:3000/", { email, password })
      .then((res) => {
        if (res.data === "success") {
          navigate("/app");
        } else {
          alert(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-40 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-blue-400">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 rounded bg-blue-300 backdrop-blur-xl px-5 py-10"
      >
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
        Does not have an account
        <Link
          to="/signup"
          className="text-blue-500 text-xl cursor-pointer ml-2"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
