import { NavLink } from "react-router";

const AdminPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h2 className="p-2 text-lg text-orange-500 self-start text-shadow-lg">
        Welcome Admin
      </h2>
      <div className="flex flex-col gap-2 w-88">
        <h2 className="bg-zinc-300 text-2xl text-center font-bold text-blue-400 shadow-md rounded p-1">
          Parents List
        </h2>
        <div className="bg-lime-400/40 rounded flex flex-col p-2 justify-center items-center shadow-md">
          <div className="text-zinc-500 font-bold">
            Parent: <span className="text-xl">Parent kumar sahu</span>
          </div>

          <div className="font-bold text-zinc-500">No of children: 2</div>
          <div className="font-bold text-zinc-500">
            Bads kumar sahu:{" "}
            <span className="text-green-400 text-xl">1200/-</span>{" "}
          </div>
          <div className="font-bold text-zinc-500">
            Anonymous kumar sahu:{" "}
            <span className="text-green-400 text-xl">1200/-</span>{" "}
          </div>
          <NavLink className="bg-blue-400 text-white px-10 py-1 rounded mt-4">
            {" "}
            Edit
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
