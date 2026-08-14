"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.65), rgba(0,0,0,0.9)), url('/dragon4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Green Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/20 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-4xl">

            {/* Brand */}
            <p className="text-green-400 font-bold tracking-[0.4em] uppercase mb-6">
              Premium Vehicle Rental
            </p>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none">
              CAR
              <br />

              <span className="text-green-500">
                PARKING
              </span>

              <span className="text-white">
                👑
              </span>
            </h1>

            {/* Green Line */}
            <div className="mt-7 w-24 h-1 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">

              CARPARKING คือบริการเช่ารถที่พร้อมให้คุณเดินทาง
              <br />

              ได้อย่างมั่นใจและสะดวกสบาย

              <br /><br />


              ระบบเช่ารถใช้งานง่าย รวดเร็ว
              <br />

              เลือกรถที่ใช่สำหรับคุณ
              แล้วออกไปสัมผัสประสบการณ์ใหม่ในทุกเส้นทาง

            </p>

            {/* Slogan */}
            <div className="mt-9 flex items-center gap-4">

              <div className="w-12 h-1 bg-green-500" />

              <span className="text-green-400 font-black tracking-[0.25em]">
                RIDE WITH POWER
              </span>

            </div>

          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      </section>


      {/* ================= ABOUT ================= */}
      <section className="relative bg-black py-24">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-green-500 font-bold tracking-[0.3em]">
              ABOUT CARPARKING
            </p>

            <h2 className="text-4xl md:text-5xl font-black italic mt-4">

              YOUR
              <span className="text-green-500">
                {" "}JOURNEY
              </span>

              <br />

              STARTS HERE

            </h2>

            <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
              เรามุ่งมั่นสร้างประสบการณ์การเช่ารถที่ง่าย
              รวดเร็ว และตอบโจทย์ทุกการเดินทาง
            </p>

          </div>


          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="group p-8 bg-zinc-950 border border-zinc-800 hover:border-green-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">

              <div className="text-5xl mb-6">
                🏎️
              </div>

              <h3 className="text-2xl font-black mb-4">
                รถคุณภาพ
              </h3>

              <p className="text-gray-500 leading-relaxed">
                คัดสรรรถหลากหลายรุ่น
                ทั้งรถยนต์และรถจักรยานยนต์
                เพื่อให้เหมาะกับทุกสไตล์การเดินทาง
              </p>

            </div>


            {/* Card 2 */}
            <div className="group p-8 bg-zinc-950 border border-zinc-800 hover:border-green-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">

              <div className="text-5xl mb-6">
                ⚡
              </div>

              <h3 className="text-2xl font-black mb-4">
                เช่าง่าย รวดเร็ว
              </h3>

              <p className="text-gray-500 leading-relaxed">
                ระบบเช่ารถใช้งานง่าย
                เพียงเลือกรถที่ต้องการ
                และยืนยันการเช่าได้ทันที
              </p>

            </div>


            {/* Card 3 */}
            <div className="group p-8 bg-zinc-950 border border-zinc-800 hover:border-green-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">

              <div className="text-5xl mb-6">
                🛡️
              </div>

              <h3 className="text-2xl font-black mb-4">
                มั่นใจทุกการเดินทาง
              </h3>

              <p className="text-gray-500 leading-relaxed">
                ตรวจสอบรายการเช่าได้ง่าย
                พร้อมระบบจัดการข้อมูลการเช่า
                ที่ชัดเจนและสะดวก
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="relative py-28 overflow-hidden">

        {/* Green Background */}
        <div className="absolute inset-0 bg-green-600" />

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_55%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <p className="text-black/70 font-black tracking-[0.3em]">
            CARPARKING
          </p>

          <h2 className="text-5xl md:text-7xl font-black italic text-black mt-4">
            READY TO RIDE?
          </h2>

          <p className="text-black/70 text-lg mt-6">
            รถที่ใช่กำลังรอคุณอยู่
          </p>

          <Link
            href="/car"
            className="inline-block mt-9 px-10 py-4 bg-black text-green-400 font-black text-lg rounded-xl hover:bg-zinc-900 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            🏍️ เริ่มเลือกเช่ารถ
          </Link>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-zinc-800 py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            <div className="text-2xl font-black italic text-green-500">
              CARPARKING
              <span className="text-white ml-1">
                👑
              </span>
            </div>

            <p className="text-gray-600 text-sm">
              © 2026 Carparking. All rights reserved.
            </p>

            <p className="text-gray-600 text-sm">
              RENT. RIDE. REPEAT.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}