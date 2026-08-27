"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const API_URL =
  "https://6a7e719e3183f5fd884a1755.mockapi.io/api/car";

export default function Car() {
  const [form, setForm] = useState({
    txt_carname: "",
    txt_brand: "",
    txt_model: "",
    txt_price: "",
  });

  const [isSaving, setIsSaving] = useState(false);

  // =========================
  // เปลี่ยนข้อมูลในฟอร์ม
  // =========================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ตรวจสอบข้อมูล
    if (
      !form.txt_carname.trim() ||
      !form.txt_brand.trim() ||
      !form.txt_model.trim() ||
      !form.txt_price.trim()
    ) {
      await Swal.fire({
        icon: "warning",
        title: "ข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอกข้อมูลรถให้ครบทุกช่อง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
      });

      return;
    }

    try {
      setIsSaving(true);

      console.log("กำลังเชื่อมต่อ API...");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carname: form.txt_carname,
          brand: form.txt_brand,
          model: form.txt_model,
          price: form.txt_price,
        }),
      });

      let result = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      // =========================
      // 201 สำเร็จ
      // =========================
      if (response.status === 201) {
        await Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ!",
          text: "เพิ่มข้อมูลรถเรียบร้อยแล้ว",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#22c55e",
        });

        setForm({
          txt_carname: "",
          txt_brand: "",
          txt_model: "",
          txt_price: "",
        });

        return;
      }

      // =========================
      // 400
      // =========================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#f59e0b",
        });

        return;
      }

      // =========================
      // 404
      // =========================
      if (response.status === 404) {
        await Swal.fire({
          icon: "error",
          title: "ไม่พบข้อมูล",
          text: "ไม่พบ Endpoint ที่ต้องการ",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });

        return;
      }

      // =========================
      // 500+
      // =========================
      if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เซิร์ฟเวอร์มีปัญหา (status: ${response.status})`,
          text:
            result.message ||
            "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });

        return;
      }

      // =========================
      // Error อื่น ๆ
      // =========================
      await Swal.fire({
        icon: "error",
        title: `เกิดข้อผิดพลาด (status: ${response.status})`,
        text:
          result.message ||
          "ไม่สามารถบันทึกข้อมูลได้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
      });
    } catch (error) {
      console.error("POST Car Error:", error);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text:
          "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ec4899",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* =========================
          BACKGROUND
      ========================= */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.96), rgba(0,0,0,0.75)), url('/dragon4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Green Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-green-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-10 w-96 h-96 bg-green-600/15 blur-[140px] rounded-full" />

      {/* =========================
          CONTENT
      ========================= */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-5 py-16">

        <div className="w-full max-w-2xl">

          {/* =========================
              HEADER
          ========================= */}
          <div className="text-center mb-8">

            <p className="text-green-400 font-bold tracking-[0.45em] text-sm mb-4">
              CARPARKING
            </p>

            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tight">
              ADD{" "}
              <span className="text-green-500">
                VEHICLE
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="w-12 h-[2px] bg-zinc-700" />

              <div className="w-3 h-3 rotate-45 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]" />

              <div className="w-12 h-[2px] bg-zinc-700" />
            </div>

            <p className="text-zinc-500 mt-5">
              เพิ่มข้อมูลรถสำหรับระบบเช่ารถ
            </p>

          </div>

          {/* =========================
              FORM CARD
          ========================= */}
          <div className="bg-zinc-950/90 backdrop-blur-xl border border-green-500/30 rounded-3xl shadow-[0_0_50px_rgba(34,197,94,0.12)] overflow-hidden">

            {/* Card Header */}
            <div className="px-7 md:px-10 py-5 border-b border-zinc-800 bg-black/40">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <span className="text-green-400 text-xl">
                    🚗
                  </span>
                </div>

                <div>
                  <h2 className="font-bold text-lg">
                    ข้อมูลรถ
                  </h2>

                  <p className="text-zinc-500 text-sm">
                    กรุณากรอกข้อมูลรถให้ครบถ้วน
                  </p>
                </div>

              </div>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-7 md:p-10 space-y-6"
            >

              {/* =========================
                  ชื่อรถ
              ========================= */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  ชื่อรถ
                </label>

                <input
                  type="text"
                  name="txt_carname"
                  value={form.txt_carname}
                  onChange={handleChange}
                  placeholder="เช่น Toyota GR86"
                  required
                  className="w-full bg-black/70 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 hover:border-zinc-500"
                />
              </div>

              {/* =========================
                  ยี่ห้อ
              ========================= */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  ยี่ห้อ
                </label>

                <input
                  type="text"
                  name="txt_brand"
                  value={form.txt_brand}
                  onChange={handleChange}
                  placeholder="เช่น Toyota"
                  required
                  className="w-full bg-black/70 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 hover:border-zinc-500"
                />
              </div>

              {/* =========================
                  รุ่น
              ========================= */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  รุ่น
                </label>

                <input
                  type="text"
                  name="txt_model"
                  value={form.txt_model}
                  onChange={handleChange}
                  placeholder="เช่น Yaris"
                  required
                  className="w-full bg-black/70 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 hover:border-zinc-500"
                />
              </div>

              {/* =========================
                  ราคา
              ========================= */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  ราคาเช่าต่อวัน
                </label>

                <div className="relative">

                  <input
                    type="number"
                    name="txt_price"
                    value={form.txt_price}
                    onChange={handleChange}
                    placeholder="เช่น 1500"
                    min="0"
                    required
                    className="w-full bg-black/70 border border-zinc-700 rounded-xl px-5 py-4 pr-20 text-white placeholder:text-zinc-600 outline-none transition duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 hover:border-zinc-500"
                  />

                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">
                    ฿ / วัน
                  </span>

                </div>
              </div>

              {/* =========================
                  DIVIDER
              ========================= */}
              <div className="border-t border-zinc-800 pt-6">

                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-black text-lg rounded-xl transition-all duration-300 hover:scale-[1.01] shadow-[0_0_30px_rgba(34,197,94,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving
                    ? "กำลังบันทึก..."
                    : "✓ บันทึกข้อมูลรถ"}
                </button>

              </div>

            </form>
          </div>

          {/* =========================
              FOOTER
          ========================= */}
          <div className="text-center mt-7">

            <p className="text-zinc-700 text-xs tracking-[0.35em]">
              RIDE WITH POWER
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}