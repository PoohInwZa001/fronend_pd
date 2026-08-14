"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Car() {
  const [form, setForm] = useState({
    txt_carname: "",
    txt_brand: "",
    txt_model: "",
    txt_price: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // ตรวจสอบข้อมูลก่อนส่ง API
  if (
    !form.txt_carname.trim() ||
    !form.txt_brand.trim() ||
    !form.txt_model.trim() ||
    !form.txt_price.trim()
  ) {
    await Swal.fire({
      icon: "warning",
      title: "ข้อมูลไม่ครบถ้วน (status: 400)",
      text: "กรุณากรอกข้อมูลรถให้ครบทุกช่อง",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#ff9900",
    });

    return;
  }

  console.log(form);

  try {
    console.log("กำลังเชื่อมต่อ API...");

    const response = await fetch(
      "https://6a7e719e3183f5fd884a1755.mockapi.io/api/car",
      {
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
      }
    );

    const result = await response.json();

    // 201 = เพิ่มข้อมูลสำเร็จ
    if (response.status === 201) {
      await Swal.fire({
        icon: "success",
        title: `บันทึกสำเร็จ (status: ${response.status})`,
        text: "เพิ่มข้อมูลรถเรียบร้อยแล้ว",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#16a34a",
      });

      setForm({
        txt_carname: "",
        txt_brand: "",
        txt_model: "",
        txt_price: "",
      });
    }

    // 400 = ข้อมูลไม่ถูกต้อง
    else if (response.status === 400) {
      await Swal.fire({
        icon: "warning",
        title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
        text: result.message || "กรุณาตรวจสอบข้อมูลที่กรอก",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ff9900",
      });
    }

    // 404 = ไม่พบ Endpoint
    else if (response.status === 404) {
      await Swal.fire({
        icon: "error",
        title: `ไม่พบข้อมูล (status: ${response.status})`,
        text: result.message || "ไม่พบ Endpoint ที่ต้องการ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fe0505",
      });
    }

    // 500+
    else if (response.status >= 500) {
      await Swal.fire({
        icon: "error",
        title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
        text: result.message || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fe0505",
      });
    }

    // Error อื่น ๆ
    else {
      await Swal.fire({
        icon: "error",
        title: `เกิดข้อผิดพลาด (status: ${response.status})`,
        text: result.message || "ไม่สามารถบันทึกข้อมูลได้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#e039ae",
      });
    }

  } catch (error) {
    console.error(error);

    await Swal.fire({
      icon: "warning",
      title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#fc006dcc",
    });
  }
};

  return (
    <div
      className="min-h-screen flex justify-center items-center p-6"
      style={{
        backgroundImage: "url('/dragon4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl w-full">
        <div className="bg-black/50 backdrop-blur-2xl rounded-3xl border-2 border-green-600 shadow-[0_0_40px_rgba(34,197,94,0.5)] overflow-hidden">

          {/* Header */}
          <div className="border-b border-white/40 px-6 py-4">
            <h1 className="text-3xl font-bold text-white text-center">
              ฟอร์มเพิ่มข้อมูลรถ
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-5"
          >

            {/* ชื่อรถ */}
            <div>
              <label className="text-white block mb-2"> ชื่อรถ</label>
              <input type="text"name="txt_carname"value={form.txt_carname}onChange={handleChange}className="w-full border text-white bg-black/30 border-white rounded-md px-4 py-2"placeholder="ชื่อรถ"required/></div>

            <div>
              <label className="text-white block mb-2">ยี่ห้อ</label>
              <input type="text"name="txt_brand"value={form.txt_brand}onChange={handleChange}className="w-full border text-white bg-black/30 border-white rounded-md px-4 py-2"placeholder="เช่น Toyota" /></div>

            <div>
              <label className="text-white block mb-2">รุ่น</label>

              <input type="text"name="txt_model" value={form.txt_model} onChange={handleChange}className="w-full border text-white bg-black/30 border-white rounded-md px-4 py-2"placeholder="เช่น Yaris"required /></div>


            <div>
              <label className="text-white block mb-2"> ราคาเช่าต่อวัน</label>
              <input type="number"name="txt_price"value={form.txt_price}onChange={handleChange}className="w-full border text-white bg-black/30 border-white rounded-md px-4 py-2"placeholder="ราคาเช่าต่อวัน"min="0"required/></div>

            <button
              type="submit"
              className="w-full py-3 bg-green-800 hover:bg-green-900 border border-green-950 transition duration-300 text-white font-bold rounded-lg shadow-lg"
            >
              บันทึกข้อมูลรถ
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}