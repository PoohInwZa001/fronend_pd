async function getCars() {
  try {
    console.log("กำลังเชื่อมต่อ API...");

    const res = await fetch(
      "https://6a7e719e3183f5fd884a1755.mockapi.io/api/car",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("ไม่พบข้อมูลรถ (404 Not Found)");
      } else if (res.status === 500) {
        throw new Error("เซิร์ฟเวอร์มีปัญหา (500 Internal Server Error)");
      } else {
        throw new Error(
          `เกิดข้อผิดพลาดจากการเชื่อมต่อ (Status: ${res.status})`
        );
      }
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("เกิดข้อผิดพลาด:", error.message);

    if (error.name === "TypeError") {
      console.log("สาเหตุ: Network Error");
    } else {
      console.log("สาเหตุ:", error.message);
    }

    return [];
  }
}

export default async function ShowPage() {
  const cars = await getCars();

  console.log(cars);

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        รถเช่า
      </h1>

      {cars.length === 0 ? (
        <p className="text-gray-500">
          ยังไม่มีข้อมูลรถ
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md p-5"
            >

              <h2 className="text-2xl font-bold mb-3">
                {car.carname}
              </h2>

              <p>
                <b>ยี่ห้อ:</b> {car.brand}
              </p>

              <p>
                <b>รุ่น:</b> {car.model}
              </p>

              <p className="mt-2 text-green-600 font-bold">
                ราคาเช่า:{" "}
                {Number(car.price).toLocaleString()} บาท/วัน
              </p>

              <button
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
              >
                เช่ารถ
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}