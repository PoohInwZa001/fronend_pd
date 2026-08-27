import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-green-500/30 shadow-[0_4px_30px_rgba(34,197,94,0.15)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-black italic tracking-wider text-white group-hover:text-green-400 transition-all duration-300">
                CAR
                <span className="text-green-500">PARKING</span>
              </h1>

              <p className="text-[9px] tracking-[0.35em] text-zinc-500 font-bold">
                RIDE WITH POWER
              </p>
            </div>

            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
              👑
            </span>
          </Link>

          {/* Menu */}
          <div className="flex items-center gap-2">

            {/* หน้าหลัก */}
            <Link
              href="/"
              className="group relative px-5 py-3 rounded-xl text-zinc-300 font-bold hover:text-green-400 transition-all duration-300"
            >
              <span className="relative z-10">
                🏠 หน้าหลัก
              </span>

              <span className="absolute inset-0 rounded-xl bg-green-500/0 group-hover:bg-green-500/10 border border-transparent group-hover:border-green-500/30 transition-all duration-300" />
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="group relative px-5 py-3 rounded-xl text-zinc-300 font-bold hover:text-green-400 transition-all duration-300"
            >
              <span className="relative z-10">
                ℹ️ เกี่ยวกับเรา
              </span>

              <span className="absolute inset-0 rounded-xl bg-green-500/0 group-hover:bg-green-500/10 border border-transparent group-hover:border-green-500/30 transition-all duration-300" />
            </Link>

            {/* เพิ่มข้อมูลรถ */}
            <Link
              href="/car"
              className="group relative px-5 py-3 rounded-xl text-zinc-300 font-bold hover:text-green-400 transition-all duration-300"
            >
              <span className="relative z-10">
                🚗 เพิ่มข้อมูลรถ
              </span>

              <span className="absolute inset-0 rounded-xl bg-green-500/0 group-hover:bg-green-500/10 border border-transparent group-hover:border-green-500/30 transition-all duration-300" />
            </Link>

            {/* รายการรถ */}
            <Link
              href="/show"
              className="group relative px-5 py-3 rounded-xl text-zinc-300 font-bold hover:text-green-400 transition-all duration-300"
            >
              <span className="relative z-10">
                📋 รายการรถ
              </span>

              <span className="absolute inset-0 rounded-xl bg-green-500/0 group-hover:bg-green-500/10 border border-transparent group-hover:border-green-500/30 transition-all duration-300" />
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}