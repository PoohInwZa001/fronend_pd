"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* =========================
          BACKGROUND
      ========================= */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.97), rgba(0,0,0,0.7)), url('/dragon4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Green Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-10 w-96 h-96 bg-green-600/10 blur-[140px] rounded-full" />

      {/* =========================
          CONTENT
      ========================= */}
      <section className="relative z-10 px-6 py-16 md:py-24">

        <div className="max-w-6xl mx-auto">

          {/* =========================
              HEADER
          ========================= */}
          <div className="text-center mb-16">

            <p className="text-green-400 font-bold tracking-[0.45em] text-sm mb-5">
              WELCOME TO
            </p>

            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tight">
              CAR
              <span className="text-green-500">
                PARKING
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-7">

              <div className="w-20 h-[2px] bg-zinc-700" />

              <div className="w-3 h-3 rotate-45 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.9)]" />

              <div className="w-20 h-[2px] bg-zinc-700" />

            </div>

            <p className="text-zinc-500 mt-6 text-lg">
              Premium Vehicle Rental
            </p>

          </div>

          {/* =========================
              ABOUT CARD
          ========================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

            {/* LEFT */}
            <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-green-500/40 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-7">

                <span className="text-3xl">
                  🚗
                </span>

              </div>

              <p className="text-green-400 text-sm font-black tracking-[0.3em] mb-3">
                ABOUT US
              </p>

              <h2 className="text-3xl md:text-4xl font-black mb-6">
                ขับให้สุด
                <span className="text-green-500">
                  {" "}ในทุกเส้นทาง
                </span>
              </h2>

              <p className="text-zinc-400 leading-8">
                CARPARKING คือเว็บไซต์สำหรับให้บริการเช่ารถ
                ที่ออกแบบมาเพื่อให้การค้นหาและเลือกเช่ารถ
                เป็นเรื่องง่าย รวดเร็ว และสะดวกสำหรับทุกคน
              </p>

              <p className="text-zinc-500 leading-8 mt-4">
                เรารวบรวมรถหลากหลายรุ่น พร้อมแสดงรายละเอียด
                ยี่ห้อ รุ่น และราคาเช่าต่อวัน เพื่อให้คุณสามารถ
                เลือกรถที่เหมาะกับการเดินทางของคุณได้ง่ายขึ้น
              </p>

            </div>

            {/* RIGHT */}
            <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl hover:border-green-500/40 transition-all duration-300">

              <p className="text-green-400 text-sm font-black tracking-[0.3em] mb-3">
                OUR MISSION
              </p>

              <h2 className="text-3xl md:text-4xl font-black mb-7">
                ทำให้การ
                <span className="text-green-500">
                  {" "}เช่ารถง่ายขึ้น
                </span>
              </h2>

              <div className="space-y-5">

                {/* ITEM */}
                <div className="flex gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <span className="text-xl">
                      ⚡
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      รวดเร็ว
                    </h3>

                    <p className="text-zinc-500 text-sm mt-1">
                      ค้นหาและเลือกรถที่ต้องการได้อย่างรวดเร็ว
                    </p>
                  </div>

                </div>

                {/* ITEM */}
                <div className="flex gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <span className="text-xl">
                      🛡️
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      เชื่อถือได้
                    </h3>

                    <p className="text-zinc-500 text-sm mt-1">
                      แสดงสถานะรถว่างและรถที่ถูกเช่าแบบชัดเจน
                    </p>
                  </div>

                </div>

                {/* ITEM */}
                <div className="flex gap-4">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <span className="text-xl">
                      💚
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      ใช้งานง่าย
                    </h3>

                    <p className="text-zinc-500 text-sm mt-1">
                      ออกแบบให้ใช้งานง่ายทั้งบนคอมพิวเตอร์และมือถือ
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* =========================
              FEATURES
          ========================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* CARD */}
            <div className="group bg-zinc-950/90 border border-zinc-800 rounded-3xl p-7 text-center hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition">

                <span className="text-3xl">
                  🚘
                </span>

              </div>

              <h3 className="text-xl font-black mb-2">
                รถหลากหลาย
              </h3>

              <p className="text-zinc-500 text-sm leading-6">
                มีรถหลายรุ่นให้เลือกตามความต้องการ
              </p>

            </div>

            {/* CARD */}
            <div className="group bg-zinc-950/90 border border-zinc-800 rounded-3xl p-7 text-center hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition">

                <span className="text-3xl">
                  💰
                </span>

              </div>

              <h3 className="text-xl font-black mb-2">
                ราคาชัดเจน
              </h3>

              <p className="text-zinc-500 text-sm leading-6">
                แสดงราคาเช่าต่อวันอย่างชัดเจน
              </p>

            </div>

            {/* CARD */}
            <div className="group bg-zinc-950/90 border border-zinc-800 rounded-3xl p-7 text-center hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition">

                <span className="text-3xl">
                  📋
                </span>

              </div>

              <h3 className="text-xl font-black mb-2">
                เช็กสถานะง่าย
              </h3>

              <p className="text-zinc-500 text-sm leading-6">
                ตรวจสอบได้ทันทีว่ารถว่างหรือถูกเช่าแล้ว
              </p>

            </div>

          </div>

          {/* =========================
              CTA
          ========================= */}
          <div className="relative overflow-hidden bg-green-500 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(34,197,94,0.15)]">

            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <p className="text-black/60 font-black tracking-[0.3em] text-sm mb-3">
                READY TO RIDE?
              </p>

              <h2 className="text-3xl md:text-5xl font-black italic text-black mb-4">
                FIND YOUR RIDE
              </h2>

              <p className="text-black/70 mb-7">
                เลือกรถที่ใช่ แล้วออกเดินทางไปกับเรา
              </p>

              <Link
                href="/show"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white font-black rounded-xl hover:bg-zinc-900 transition-all duration-300 hover:scale-105"
              >
                🚗 ดูรถทั้งหมด
              </Link>

            </div>

          </div>

          {/* =========================
              FOOTER TEXT
          ========================= */}
          <div className="text-center mt-14">

            <p className="text-zinc-700 text-xs tracking-[0.4em]">
              RIDE WITH POWER
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}