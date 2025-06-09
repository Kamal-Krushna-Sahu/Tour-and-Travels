import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", { name, contactNumber, password, address })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="pt-30 flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl text-blue-400">User Signup</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5 rounded bg-blue-50 backdrop-blur-xl px-5 py-10"
      >
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter name..."
          onChange={(e) => setName(e.target.value)}
          className="shadow-md rounded px-10 py-1 outline-none"
        />
        <input
          type="text"
          name="contactNumber"
          value={contactNumber}
          placeholder="Enter Contact Number..."
          onChange={(e) => setContactNumber(e.target.value)}
          className="shadow-md rounded px-10 py-1 outline-none"
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password..."
          onChange={(e) => setPassword(e.target.value)}
          className="shadow-md rounded px-10 py-1 outline-none"
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="Enter Your Address..."
          onChange={(e) => setAddress(e.target.value)}
          className="shadow-md rounded px-10 py-1 outline-none"
        />
        <input
          type="submit"
          className="bg-blue-400 hover:bg-blue-500 text-white px-10 py-1 rounded cursor-pointer"
        />
      </form>
      <div>
        Already have an account
        <Link to="/login" className="bg-blue-500 text-white px-2 py-1 rounded-full text-xl ml-2">
          Login
        </Link>
      </div>
      <div>
        Back to
        <Link to="/" className="text-xl text-blue-500 ml-2">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Signup;
