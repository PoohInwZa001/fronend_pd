"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const API_URL =
  "https://6a7e719e3183f5fd884a1755.mockapi.io/api/car";

// =========================
// GET CARS
// =========================
async function getCars() {
  try {
    console.log("กำลังเชื่อมต่อ API...");

    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `เกิดข้อผิดพลาดจากการเชื่อมต่อ (Status: ${res.status})`
      );
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("เกิดข้อผิดพลาด:", error.message);

    return [];
  }
}

// =========================
// UPDATE STATUS
// =========================
async function updateCarStatus(id, status) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
      }),
    });

    if (!res.ok) {
      throw new Error(
        `เปลี่ยนสถานะไม่สำเร็จ (Status: ${res.status})`
      );
    }

    return true;
  } catch (error) {
    console.log("Update Status Error:", error.message);

    return false;
  }
}

// =========================
// DELETE CAR
// =========================
async function deleteCar(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(
        `ลบข้อมูลไม่สำเร็จ (Status: ${res.status})`
      );
    }

    return true;
  } catch (error) {
    console.log("เกิดข้อผิดพลาด:", error.message);

    return false;
  }
}

// =========================
// SHOW PAGE
// =========================
export default function ShowPage() {
  const router = useRouter();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD CARS
  // =========================
  useEffect(() => {
    async function loadCars() {
      const data = await getCars();

      // ถ้ารถคันไหนยังไม่มี status
      // ให้ถือว่าเป็น "ว่าง"
      const carsWithStatus = data.map((car) => ({
        ...car,
        status: car.status || "ว่าง",
      }));

      setCars(carsWithStatus);
      setLoading(false);
    }

    loadCars();
  }, []);

  // =========================
  // เช่ารถ
  // =========================
  async function handleRent(id, carname) {
    const car = cars.find((item) => item.id === id);

    if (!car) {
      return;
    }

    // ป้องกันการเช่าซ้ำ
    if (car.status === "เช่าแล้ว") {
      await Swal.fire({
        icon: "warning",
        title: "รถคันนี้ถูกเช่าแล้ว",
        text: `รถ ${carname} ไม่ว่างในขณะนี้`,
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
        background: "#09090b",
        color: "#fff",
      });

      return;
    }

    // ยืนยันการเช่า
    const result = await Swal.fire({
      title: "ยืนยันการเช่ารถ?",
      text: `ต้องการเช่า ${carname} ใช่หรือไม่`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "ยืนยันการเช่า",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#52525b",
      background: "#09090b",
      color: "#fff",
    });

    if (!result.isConfirmed) {
      return;
    }

    // เปลี่ยนสถานะใน API
    const success = await updateCarStatus(
      id,
      "เช่าแล้ว"
    );

    if (!success) {
      await Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถบันทึกสถานะการเช่าได้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
        background: "#09090b",
        color: "#fff",
      });

      return;
    }

    // เปลี่ยนสถานะในหน้าเว็บ
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id
          ? {
              ...car,
              status: "เช่าแล้ว",
            }
          : car
      )
    );

    // Popup เช่าสำเร็จ
    await Swal.fire({
      icon: "success",
      title: "เช่าสำเร็จ!",
      text: `คุณเช่า ${carname} เรียบร้อยแล้ว`,
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#22c55e",
      background: "#09090b",
      color: "#fff",
    });
  }

  // =========================
  // ยกเลิกการเช่า
  // =========================
  async function handleCancelRent(id, carname) {
    const result = await Swal.fire({
      title: "ยกเลิกการเช่า?",
      text: `ต้องการยกเลิกการเช่า ${carname} ใช่หรือไม่`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ยกเลิกการเช่า",
      cancelButtonText: "ไม่ยกเลิก",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#52525b",
      background: "#09090b",
      color: "#fff",
    });

    if (!result.isConfirmed) {
      return;
    }

    const success = await updateCarStatus(
      id,
      "ว่าง"
    );

    if (!success) {
      await Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเปลี่ยนสถานะรถได้",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
        background: "#09090b",
        color: "#fff",
      });

      return;
    }

    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id
          ? {
              ...car,
              status: "ว่าง",
            }
          : car
      )
    );

    await Swal.fire({
      icon: "success",
      title: "ยกเลิกการเช่าสำเร็จ",
      text: `รถ ${carname} กลับมาเป็นรถว่างแล้ว`,
      confirmButtonText: "ตกลง",
      confirmButtonColor: "#22c55e",
      background: "#09090b",
      color: "#fff",
    });
  }

  // =========================
  // DELETE
  // =========================
  async function handleDelete(id, carname) {
    const result = await Swal.fire({
      title: "ต้องการลบรถคันนี้?",
      text: `รถ "${carname}" จะถูกลบออกจากระบบ`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#52525b",
      confirmButtonText: "ลบข้อมูล",
      cancelButtonText: "ยกเลิก",
      background: "#09090b",
      color: "#fff",
    });

    if (!result.isConfirmed) {
      return;
    }

    const success = await deleteCar(id);

    if (success) {
      setCars((prevCars) =>
        prevCars.filter((car) => car.id !== id)
      );

      Swal.fire({
        title: "ลบสำเร็จ",
        text: "ลบข้อมูลรถเรียบร้อยแล้ว",
        icon: "success",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#22c55e",
        background: "#09090b",
        color: "#fff",
      });
    } else {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถลบข้อมูลรถได้",
        icon: "error",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#ef4444",
        background: "#09090b",
        color: "#fff",
      });
    }
  }

  // =========================
  // EDIT
  // =========================
  function handleEdit(id) {
    router.push(`/show/edit/${id}`);
  }

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />

          <p className="text-green-400 font-black tracking-[0.35em]">
            LOADING...
          </p>

          <p className="text-zinc-600 mt-2 text-sm">
            กำลังโหลดข้อมูลรถ
          </p>
        </div>
      </main>
    );
  }

  // =========================
  // SHOW
  // =========================
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.97), rgba(0,0,0,0.75)), url('/dragon4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Green Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-10 w-96 h-96 bg-green-600/10 blur-[140px] rounded-full" />

      {/* Content */}
      <section className="relative z-10 min-h-screen px-5 md:px-10 py-14">

        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">

            <p className="text-green-400 font-bold tracking-[0.45em] text-sm mb-4">
              CARPARKING
            </p>

            <h1 className="text-5xl md:text-7xl font-black italic uppercase">
              OUR{" "}
              <span className="text-green-500">
                VEHICLES
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 mt-6">

              <div className="w-16 h-[2px] bg-zinc-700" />

              <div className="w-3 h-3 rotate-45 bg-green-500 shadow-[0_0_18px_rgba(34,197,94,0.8)]" />

              <div className="w-16 h-[2px] bg-zinc-700" />

            </div>

            <p className="text-zinc-500 mt-5">
              รายการรถที่พร้อมให้บริการเช่า
            </p>

          </div>

          {/* Empty */}
          {cars.length === 0 ? (

            <div className="max-w-xl mx-auto">

              <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-12 text-center shadow-2xl">

                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">

                  <span className="text-4xl">
                    🚗
                  </span>

                </div>

                <h2 className="text-2xl font-black mb-2">
                  ยังไม่มีข้อมูลรถ
                </h2>

                <p className="text-zinc-500">
                  ยังไม่มีรถในระบบ
                </p>

              </div>

            </div>

          ) : (

            /* Car Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {cars.map((car) => (

                <div
                  key={car.id}
                  className="group bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 hover:border-green-500/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_35px_rgba(34,197,94,0.12)] transition-all duration-300 hover:-translate-y-1"
                >

                  {/* Card Top */}
                  <div className="relative px-6 pt-6">

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-70" />

                    <div className="flex items-center justify-between">

                      <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">

                        <span className="text-2xl">
                          🚗
                        </span>

                      </div>

                      {/* STATUS */}
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-black border ${
                          car.status === "เช่าแล้ว"
                            ? "bg-red-500/10 text-red-400 border-red-500/30"
                            : "bg-green-500/10 text-green-400 border-green-500/30"
                        }`}
                      >
                        {car.status === "เช่าแล้ว"
                          ? "● เช่าแล้ว"
                          : "● ว่าง"}
                      </span>

                    </div>

                    <span className="block text-xs font-bold tracking-widest text-zinc-600 mt-4">
                      ID #{car.id}
                    </span>

                  </div>

                  {/* Car Info */}
                  <div className="p-6">

                    <h2 className="text-2xl font-black uppercase mb-5 group-hover:text-green-400 transition">
                      {car.carname}
                    </h2>

                    <div className="space-y-3">

                      <div className="flex items-center justify-between bg-black/40 border border-zinc-800 rounded-xl px-4 py-3">
                        <span className="text-zinc-500 text-sm">
                          ยี่ห้อ
                        </span>

                        <span className="font-bold text-white">
                          {car.brand}
                        </span>
                      </div>

                      <div className="flex items-center justify-between bg-black/40 border border-zinc-800 rounded-xl px-4 py-3">
                        <span className="text-zinc-500 text-sm">
                          รุ่น
                        </span>

                        <span className="font-bold text-white">
                          {car.model}
                        </span>
                      </div>

                    </div>

                    {/* PRICE */}
                    <div className="mt-5 bg-green-500/5 border border-green-500/20 rounded-2xl p-4">

                      <p className="text-xs text-green-400 font-bold tracking-widest mb-1">
                        RENTAL PRICE
                      </p>

                      <div className="flex items-end gap-2">

                        <span className="text-3xl font-black text-green-400">
                          {Number(car.price).toLocaleString()}
                        </span>

                        <span className="text-zinc-500 font-bold pb-1">
                          บาท / วัน
                        </span>

                      </div>

                    </div>

                    {/* RENT / CANCEL BUTTON */}
                    {car.status === "เช่าแล้ว" ? (

                      <button
                        type="button"
                        onClick={() =>
                          handleCancelRent(
                            car.id,
                            car.carname
                          )
                        }
                        className="w-full mt-5 py-3.5 bg-red-500/10 hover:bg-red-500 border border-red-500/40 hover:border-red-500 text-red-400 hover:text-white font-black rounded-xl transition-all duration-300"
                      >
                        ✕ ยกเลิกการเช่า
                      </button>

                    ) : (

                      <button
                        type="button"
                        onClick={() =>
                          handleRent(
                            car.id,
                            car.carname
                          )
                        }
                        className="w-full mt-5 py-3.5 bg-green-500 hover:bg-green-400 text-black font-black rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]"
                      >
                        🚗 เช่ารถ
                      </button>

                    )}

                    {/* EDIT + DELETE */}
                    <div className="flex gap-3 mt-3">

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(car.id)
                        }
                        className="w-1/2 py-3 bg-zinc-900 border border-blue-500/30 hover:bg-blue-600 hover:border-blue-600 text-blue-400 hover:text-white font-bold rounded-xl transition"
                      >
                        ✎ แก้ไข
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(
                            car.id,
                            car.carname
                          )
                        }
                        className="w-1/2 py-3 bg-zinc-900 border border-red-500/30 hover:bg-red-600 hover:border-red-600 text-red-400 hover:text-white font-bold rounded-xl transition"
                      >
                        🗑 ลบ
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

          {/* Footer */}
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