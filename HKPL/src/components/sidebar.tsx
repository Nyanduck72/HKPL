import { Link } from "wouter";
import { BsGraphUp } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="h-screen w-64 bg-yellow-500 fixed z-[99] shadow-right px-2">
        <h1 className="text-2xl text-center p-4 font-bold">HKPL</h1>
        <Link href="/">
          <div className="w-full h-16 p-4 border-y-2 border-y-neutral-950/50 flex items-center justify-center hover:bg-yellow-100">
            <div className="mr-4 text-neutral-950">
              <BsGraphUp size={20}/>
            </div>
            <h1 className="text-neutral-950 text-xl">Go to Dashboard</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
