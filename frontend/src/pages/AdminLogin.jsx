import { NavLink } from "react-router";

const AdminLogin = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg--500">
      <h1 className="text-4xl text-red-500 m-2">Admin Login</h1>
      <form className="flex flex-col justify-center items-center gap-2 bg-orange-50 px-5 py-10 rounded">
        <input
          type="email"
          className="shadow-md px-10 py-2 rounded outline-none"
          placeholder="Enter Email..."
        />
        <input
          type="password"
          className="shadow-md px-10 py-2 rounded outline-none"
          placeholder="Enter Password..."
        />
        <input
          type="submit"
          className="shadow-lg mt-4 bg-red-400 hover:bg-red-500 px-5 py-2 rounded text-white cursor-pointer"
        />
      </form>
      <div className="mt-4">
        Back to
        <NavLink to="/" className="text-blue-500 text-xl ml-2">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default AdminLogin;
