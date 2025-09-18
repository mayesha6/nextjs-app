import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          MyLogo
        </Link>

        {/* Menu */}
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-gray-200 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-200 transition">
            Contact
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