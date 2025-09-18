
import Link from "next/link";

const Sidebar = () => {

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white h-screen p-5 w-[300px] pt-10 ps-10">
        

        <nav className="flex flex-col gap-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/profile" className="hover:text-gray-300">
            Profile
          </Link>
          <Link href="/setting" className="hover:text-gray-300">
            Setting
          </Link>
        </nav>
      </div>

      
    </div>
  );
};

export default Sidebar;
