"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const API_URL =
  "https://6a7e719e3183f5fd884a1755.mockapi.io/api/car";

export default function FormEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const [form, setForm] = useState({
    carname: "",
    brand: "",
    model: "",
    price: "",
  });

  // ============================================================
  // ดึงข้อมูลรถ
  // ============================================================
  useEffect(() => {
    if (id) {
      fetchCar();
    }
  }, [id]);

  const fetchCar = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      console.log("กำลังโหลดข้อมูลรถ ID:", id);

      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }

      const data = await response.json();

      console.log("ข้อมูลรถ:", data);

      setForm({
        carname: data.carname ?? "",
        brand: data.brand ?? "",
        model: data.model ?? "",
        price: data.price ?? "",
      });
    } catch (error) {
      console.error("Fetch Car Error:", error);

      setIsError(true);

      await Swal.fire({
        icon: "error",
        title: "ไม่สามารถโหลดข้อมูลรถได้",
        text: "ไม่พบข้อมูลรถที่ต้องการแก้ไข",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ============================================================
  // เปลี่ยนข้อมูล Input
  // ============================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // ============================================================
  // ตรวจสอบข้อมูล
  // ============================================================
  const validateForm = () => {
    if (!form.carname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุชื่อรถ",
        text: "กรุณากรอกชื่อรถ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
      });

      return false;
    }

    if (!form.brand.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุยี่ห้อ",
        text: "กรุณากรอกยี่ห้อรถ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
      });

      return false;
    }

    if (!form.model.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุรุ่น",
        text: "กรุณากรอกรุ่นรถ",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
      });

      return false;
    }

    if (!form.price || Number(form.price) < 0) {
      Swal.fire({
        icon: "warning",
        title: "ราคาผิดพลาด",
        text: "กรุณาระบุราคาเช่าที่ถูกต้อง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
      });

      return false;
    }

    return true;
  };

  // ============================================================
  // UPDATE รถ
  // ============================================================
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSaving(true);

      console.log("กำลังแก้ไขข้อมูลรถ ID:", id);

      const payload = {
        carname: form.carname,
        brand: form.brand,
        model: form.model,
        price: form.price,
      };

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      // ========================================================
      // สำเร็จ
      // ========================================================
      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "แก้ไขสำเร็จ!",
          text: "แก้ไขข้อมูลรถเรียบร้อยแล้ว",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#22c55e",
        });

        router.push("/show");
        return;
      }

      // ========================================================
      // 400
      // ========================================================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "ข้อมูลที่ส่งไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ff9900",
        });

        return;
      }

      // ========================================================
      // 404
      // ========================================================
      if (response.status === 404) {
        await Swal.fire({
          icon: "error",
          title: "ไม่พบข้อมูลรถ",
          text: "ไม่พบรถที่ต้องการแก้ไข",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });

        return;
      }

      // ========================================================
      // 413
      // ========================================================
      if (response.status === 413) {
        await Swal.fire({
          icon: "error",
          title: "ข้อมูลมีขนาดใหญ่เกินไป",
          text: "ไม่สามารถบันทึกข้อมูลได้",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });

        return;
      }

      // ========================================================
      // 500+
      // ========================================================
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

      // ========================================================
      // Error อื่น ๆ
      // ========================================================
      await Swal.fire({
        icon: "error",
        title: `แก้ไขไม่สำเร็จ (status: ${response.status})`,
        text:
          result.message ||
          "ไม่สามารถแก้ไขข้อมูลรถได้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
      });
    } catch (error) {
      console.error("Update Car Error:", error);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text:
          "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fc006d",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================================
  // Loading
  // ============================================================
  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-5" />

          <p className="text-green-400 font-bold tracking-widest">
            LOADING...
          </p>
        </div>
      </main>
    );
  }

  // ============================================================
  // Error
  // ============================================================
  if (isError) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl shadow-xl text-center">
          <h1 className="text-xl font-bold text-red-500 mb-5">
            ไม่สามารถโหลดข้อมูลรถได้
          </h1>

          <button
            onClick={() => router.push("/show")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            กลับหน้ารถ
          </button>
        </div>
      </main>
    );
  }

  // ============================================================
  // หน้าแก้ไข
  // ============================================================
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.7)), url('/dragon4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Green Glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/20 blur-[130px] rounded-full" />

      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/10 blur-[130px] rounded-full" />

      {/* Content */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-2xl">

          {/* Header */}
          <div className="text-center mb-10">

            <p className="text-green-400 font-bold tracking-[0.4em] uppercase mb-4">
              CARPARKING
            </p>

            <h1 className="text-5xl md:text-6xl font-black italic uppercase">
              EDIT{" "}
              <span className="text-green-500">
                VEHICLE
              </span>
            </h1>

            <div className="w-20 h-1 bg-green-500 mx-auto mt-6 shadow-[0_0_20px_rgba(34,197,94,0.8)]" />

            <p className="text-gray-500 mt-5">
              แก้ไขข้อมูลรถของคุณ
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-7 md:p-10 shadow-2xl">

            <form
              onSubmit={handleUpdate}
              className="space-y-6"
            >

              {/* ชื่อรถ */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  ชื่อรถ
                </label>

                <input
                  type="text"
                  name="carname"
                  value={form.carname}
                  onChange={handleChange}
                  placeholder="เช่น Toyota GR86"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder:text-zinc-600"
                />
              </div>

              {/* ยี่ห้อ */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  ยี่ห้อ
                </label>

                <input
                  type="text"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="เช่น Toyota"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder:text-zinc-600"
                />
              </div>

              {/* รุ่น */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  รุ่น
                </label>

                <input
                  type="text"
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  placeholder="เช่น GR86"
                  className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 text-white outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder:text-zinc-600"
                />
              </div>

              {/* ราคา */}
              <div>
                <label className="block text-sm font-bold text-green-400 mb-2">
                  ราคาเช่าต่อวัน
                </label>

                <div className="relative">

                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="เช่น 1500"
                    min="0"
                    className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 pr-16 text-white outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 placeholder:text-zinc-600"
                  />

                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">
                    ฿/วัน
                  </span>

                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <button
                  type="button"
                  onClick={() => router.push("/show")}
                  disabled={isSaving}
                  className="w-full sm:w-1/2 py-4 rounded-xl border border-zinc-700 text-gray-400 font-black hover:bg-zinc-900 hover:text-white transition disabled:opacity-50"
                >
                  ← ยกเลิก
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full sm:w-1/2 py-4 rounded-xl bg-green-500 text-black font-black text-lg hover:bg-green-400 transition-all hover:scale-[1.02] shadow-[0_0_25px_rgba(34,197,94,0.25)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSaving
                    ? "กำลังบันทึก..."
                    : "✓ บันทึกการแก้ไข"}
                </button>

              </div>

            </form>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-zinc-700 text-xs tracking-[0.3em]">
              RIDE WITH POWER
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}   