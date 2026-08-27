"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.82) 100%), url('/dragon4.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Green Aura */}
        <div className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-green-500/20 blur-[160px] rounded-full" />

        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-green-400/20 blur-[110px] rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* LEFT */}
            <div className="max-w-3xl">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-12 h-[2px] bg-green-500" />

                <p className="text-green-400 font-black tracking-[0.4em] text-sm uppercase">
                  PREMIUM EXPERIENCE
                </p>

              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black italic uppercase leading-[0.85] tracking-tight">

                DRIVE

                <br />

                <span className="text-white">
                  BEYOND
                </span>

                <br />

                <span className="text-green-500 drop-shadow-[0_0_25px_rgba(34,197,94,0.45)]">
                  LIMITS.
                </span>

              </h1>

              <div className="mt-9 w-32 h-1 bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.9)]" />

              <p className="mt-7 text-lg md:text-xl text-zinc-300 leading-relaxed max-w-xl">
                เปลี่ยนทุกการเดินทาง
                <br />
                ให้กลายเป็นประสบการณ์ที่เหนือระดับ
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <div className="px-5 py-3 bg-white/5 border border-green-500/30 rounded-xl backdrop-blur-md">

                  <span className="text-green-400 font-black text-xl">
                    PREMIUM
                  </span>

                  <span className="text-zinc-500 text-sm ml-2">
                    DRIVE
                  </span>

                </div>

                <div className="px-5 py-3 bg-white/5 border border-zinc-700 rounded-xl backdrop-blur-md">

                  <span className="text-white font-black text-xl">
                    YOUR
                  </span>

                  <span className="text-zinc-500 text-sm ml-2">
                    NEXT RIDE
                  </span>

                </div>

              </div>

              <div className="mt-9 flex items-center gap-4">

                <div className="w-12 h-[2px] bg-green-500" />

                <span className="text-green-400 font-black tracking-[0.3em] text-sm">
                  OWN THE ROAD
                </span>

              </div>

            </div>

            {/* RIGHT LOGO */}
            <div className="relative flex justify-center lg:justify-end items-center mt-14 lg:mt-0 -mr-10 md:-mr-24 lg:-mr-40 xl:-mr-56">

              {/* Aura */}
              <div className="absolute w-[650px] h-[650px] bg-green-500/20 blur-[160px] rounded-full" />

              <div className="absolute w-[450px] h-[450px] bg-green-400/20 blur-[100px] rounded-full" />

              {/* Logo */}
              <img
                src="/logo.png"
                alt="CARPARKING Logo"
                className="relative z-10 w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] xl:w-[900px] max-w-none object-contain drop-shadow-[0_0_35px_rgba(34,197,94,0.7)] drop-shadow-[0_0_100px_rgba(34,197,94,0.45)]"
              />

            </div>

          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent" />

      </section>

      {/* PROMOTION */}
      <section className="relative bg-black py-24 overflow-hidden">

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[250px] bg-green-500/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <div className="text-center">

            <p className="text-green-500 font-black tracking-[0.4em] text-sm">
              THE NEXT LEVEL
            </p>

            <h2 className="text-4xl md:text-6xl font-black italic uppercase mt-4">

              MAKE EVERY

              <span className="text-green-500">
                {" "}MOMENT
              </span>

              <br />

              COUNT.

            </h2>

            <p className="text-zinc-500 mt-6 max-w-xl mx-auto leading-relaxed">
              ไม่ใช่แค่การเดินทาง
              <br />
              แต่คือความรู้สึกที่คุณจะจดจำ
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">

            <div className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 overflow-hidden hover:border-green-500/50 transition-all duration-300">

              <span className="text-green-500 text-sm font-black tracking-widest">
                01
              </span>

              <h3 className="text-2xl font-black italic mt-5">
                CHOOSE
              </h3>

              <p className="text-zinc-600 mt-3">
                เลือกสไตล์ที่สะท้อนตัวคุณ
              </p>

            </div>

            <div className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 overflow-hidden hover:border-green-500/50 transition-all duration-300">

              <span className="text-green-500 text-sm font-black tracking-widest">
                02
              </span>

              <h3 className="text-2xl font-black italic mt-5">
                RIDE
              </h3>

              <p className="text-zinc-600 mt-3">
                สัมผัสอิสระบนทุกเส้นทาง
              </p>

            </div>

            <div className="group relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 overflow-hidden hover:border-green-500/50 transition-all duration-300">

              <span className="text-green-500 text-sm font-black tracking-widest">
                03
              </span>

              <h3 className="text-2xl font-black italic mt-5">
                REPEAT
              </h3>

              <p className="text-zinc-600 mt-3">
                เพราะความสนุกไม่มีวันสิ้นสุด
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative py-28 bg-green-500 overflow-hidden">

        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[180px] md:text-[260px] font-black italic text-black/5 whitespace-nowrap">
          DRIVE
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <p className="text-black/60 font-black tracking-[0.4em]">
            YOUR JOURNEY STARTS NOW
          </p>

          <h2 className="text-5xl md:text-8xl font-black italic text-black mt-4">
            OWN THE
            <br />
            ROAD.
          </h2>

          <Link
            href="/show"
            className="inline-flex items-center gap-4 mt-8 px-8 py-4 bg-black text-green-400 rounded-xl font-black tracking-widest shadow-2xl hover:bg-zinc-900 transition-all duration-300"
          >
            RIDE WITH POWER
            <span className="text-xl">
              →
            </span>
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-800 py-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="text-xl font-black italic text-green-500">
            CARPARKING
            <span className="text-white ml-1">
              👑
            </span>
          </div>

          <p className="text-zinc-600 text-sm">
            © 2026 Carparking. All rights reserved.
          </p>

          <p className="text-zinc-600 text-sm tracking-widest">
            RIDE WITH POWER
          </p>

        </div>

      </footer>

    </main>
  );
}