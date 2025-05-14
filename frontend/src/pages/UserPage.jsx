import { NavLink } from "react-router";

const UserPage = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <h2 className="text-xl text-blue-400 m-2 text-shadow-lg">Welcome User <span className="font-bold text-green-400">Payments Page</span></h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-5">
        <div className="h-50 w-80 my-2 flex flex-col justify-center items-center gap-2 bg-lime-400/40 md:hover:bg-lime-500/40 rounded-lg shadow-lg">
          <h2 className="text-zinc-500">
            Name of Child: <span className="font-bold text-lg text-blue-500">Bads</span>
          </h2>
          <h2 className="text-zinc-500">
            Pending:{" "}
            <span className="font-bold text-lg text-green-400">1200/-</span>
          </h2>
          <NavLink className="bg-green-400 md:hover:bg-green-500 px-10 py-1 mt-5 rounded text-white">Pay Now</NavLink>
        </div>
        <div className="h-50 w-80 my-2 flex flex-col justify-center items-center gap-2 bg-lime-400/40 md:hover:bg-lime-500/40 rounded-lg shadow-lg">
          <h2 className="text-zinc-500">
            Name of Child: <span className="font-bold text-lg text-blue-500">Anonymous</span>
          </h2>
          <h2 className="text-zinc-500">
            Pending:{" "}
            <span className="font-bold text-lg text-green-400">1200/-</span>
          </h2>
          <NavLink className="bg-green-400 md:hover:bg-green-500 px-10 py-1 mt-5 rounded text-white">Pay Now</NavLink>
        </div>
        
      </div>
    </div>
  );
};

export default UserPage;
