import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-pink-100 via-pink-50 to-fuchsia-100 border-b border-pink-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
           Story kitty
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-3">

            <Link
              href="/"
              className="px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-pink-200 hover:text-pink-600 transition-all duration-300"
            >
              หน้าแรก
            </Link>

            <Link
              href="/about"
              className="px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-pink-200 hover:text-pink-600 transition-all duration-300"
            >
              เกี่ยวกับ
            </Link>

            <Link
              href="/service"
              className="px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-pink-200 hover:text-pink-600 transition-all duration-300"
            >
              บริการ
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-pink-200 hover:text-pink-600 transition-all duration-300"
            >
              ติดต่อ
            </Link>

            <Link
              href="/register"
              className="ml-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-lg hover:shadow-pink-300 hover:scale-105 transition-all duration-300"
            >
              สมัครสมาชิก ✨
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}