import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          NextJS
        </Link>

      {/* Search Bar */}
        <form className="ml-6 flex items-center bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 text-gray-800 outline-none w-40 sm:w-56"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-blue-400 text-black font-medium hover:bg-fuchsia-400 transition"
          >
            Search
          </button>
        </form>


        {/* Menu */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-gray-200 transition">
            Blog
          </Link>
          <Link href="/dashboard" className="hover:text-gray-200 transition">
            Dashboard
          </Link>
          <Link href="/login" className="hover:text-gray-200 transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;