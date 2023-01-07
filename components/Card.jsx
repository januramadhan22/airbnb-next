import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="w-64 h-auto flex flex-col gap-2 cursor-pointer">
      {/* Image */}
      <img
        src="https://i.pinimg.com/564x/c3/bd/11/c3bd112c5d1209951ab76394b3583f61.jpg"
        className="w-64 h-64 rounded-lg shadow-md"
      />

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold">Bali, Indonesia</h3>
        <p className="text-base text-gray-600">Tersedia pada 12-17 Januari</p>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-base font-semibold text-red-500">
          Rp. 120.000/malam
        </h3>
      </div>
    </div>
  );
}

export default Card;
