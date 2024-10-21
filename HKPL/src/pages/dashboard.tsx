const Dashboard = () => {
  return (
    <>
      <div className="h-screen w-screen pl-64">
        <div className="title-area items-center justify-center h-16 p-4 border-b-2 border-b-neutral-950/50 flex">
          <h1 className="text-2xl text-center font-bold text-neutral-950">
            Dashboard
          </h1>
        </div>
        <div className="grid grid-cols-6 gap-4 m-4">
          <div className="w-full h-64 p-4 border-2 border-neutral-500 bg-neutral-700 col-span-3">
            1
          </div>
          <div className="w-full h-64 p-4 border-2 border-neutral-500 bg-neutral-700 col-span-3">
            2
          </div>
          <div className="grid grid-cols-subgrid col-span-6 mt-4">
            <div className="w-full h-64 p-4 border-2 border-neutral-500 bg-neutral-700 col-span-2">
              3
            </div>
            <div className="w-full h-64 p-4 border-2 border-neutral-500 bg-neutral-700 col-span-2">
              4
            </div>
            <div className="w-full h-64 p-4 border-2 border-neutral-500 bg-neutral-700 col-span-2">
              5
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
