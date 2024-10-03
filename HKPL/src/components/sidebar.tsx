import { Link } from "wouter";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-64 bg-yellow-500">
        <Link href="/">
          <div className="w-full h-24 p-4 border-y-yellow-700/50 flex items-center justify-center">
            
            <h1 className="text-neutral-50 text-2xl">Go to Dashboard</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
