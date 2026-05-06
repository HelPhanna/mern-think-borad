import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header
      data-theme="forest"
      className="bg-base-300 border-b border-base-content/10"
    >
      <div className="max-w-6xl mx-auto p-4 ">
        <div className="flex items-center justify-between">
          <h1 className="md:text-3xl text-2xl font-bold text-primary font-mono tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn btn-primary btn-sm md:btn-md">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;