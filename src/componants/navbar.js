import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-green-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black italic tracking-wider text-green-600 hover:text-green-500 transition-all duration-300"
          >
            CARPARKING
            <span className="text-black ml-1">👑</span>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-2">

            {/* หน้าหลัก */}
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl text-gray-700 font-bold hover:bg-green-100 hover:text-green-700 transition-all duration-300"
            >
              🏠 หน้าหลัก
            </Link>

            {/* เช่ารถ */}
            <Link
              href="/car"
              className="px-5 py-2.5 rounded-xl text-gray-700 font-bold hover:bg-green-100 hover:text-green-700 transition-all duration-300"
            >
              🏍️ เพิ่มข้อมูลรถ
            </Link>

            {/* รายการเช่า */}
            <Link
              href="/show"
              className="px-5 py-2.5 rounded-xl text-gray-700 font-bold hover:bg-green-100 hover:text-green-700 transition-all duration-300"
            >
              📋 รายการรถ
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}