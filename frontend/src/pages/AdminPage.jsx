import { NavLink } from "react-router";

const AdminPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h2 className="p-2 text-2xl text-orange-500">Welcome Admin</h2>
      <div className="flex flex-col gap-2 mt-5 p-2">
        <h2 className="text-xl text-center font-bold text-green-500">USERS</h2>
        <div className="h-20 bg-yellow-400/80 rounded p-1 flex justify-center items-center">
          <NavLink className="text-zinc-500 text-center font-bold text-lg w-80">User1</NavLink>
        </div>
        
      </div>
    </div>
  );
};

export default AdminPage;
