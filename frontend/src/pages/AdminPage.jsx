const AdminPage = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <h2 className="p-2 text-lg text-orange-500 self-start text-shadow-lg">
        Welcome Admin
      </h2>
      <div className="flex flex-col gap-2">
        <h2 className="bg-zinc-300 text-2xl text-center font-bold text-green-500 shadow-md rounded p-1">
          Parents List
        </h2>
        <div className="bg-lime-400/40 rounded p-1 flex flex-col justify-center items-center shadow-md">
          <div className="text-zinc-500 text-center font-bold w-80 ">
            Parent: <span className="text-xl">Parent1</span>
          </div>
          <div className="font-bold text-zinc-500">No of children: 2</div>
          <div className="font-bold text-zinc-500">
            Bads: <span className="text-green-400 text-xl">1200/-</span>{" "}
          </div>
          <div className="font-bold text-zinc-500">
            Anonymous: <span className="text-green-400 text-xl">1200/-</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
