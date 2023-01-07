import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";
import { TiUser } from "react-icons/ti";

function Header() {
  const [dropDown, setDropDown] = useState(false);

  return (
    <header className="sticky top-0 w-full p-5 md:px-10 shadow-md bg-white flex items-center justify-between">
      {/* Left */}
      <div>
        <button className="text-2xl font-semibold text-red-400">airbnb</button>
      </div>

      {/* Center */}
      <form className="w-96 py-1.5 px-4 border box-border rounded-full flex gap-2">
        <input
          type={"text"}
          placeholder={"Cari destinasi"}
          className="focus:outline-none text-sm w-full"
        />
        <button
          type="submit"
          className="p-1 rounded-full bg-red-400 text-white hover:brightness-110 active:scale-90"
        >
          <TbSearch />
        </button>
      </form>

      {/* Right */}
      <div className="">
        <button
          onClick={() => setDropDown(!dropDown)}
          type="submit"
          className={`p-2 rounded-full bg-red-400 text-white hover:brightness-110 hover:shadow-md active:scale-90 ${
            dropDown && "shadow-md"
          }`}
        >
          <TiUser />
        </button>

        {/* Dropdown Item*/}
        {dropDown && (
          <div className="absolute border right-10 top-16 w-52 py-2 rounded-lg bg-white shadow-md flex flex-col items-start">
            <button className="w-full px-4 py-2 flex text-base font-normal hover:bg-red-50">
              Daftar
            </button>
            <button className="w-full px-4 py-2 flex text-base font-normal hover:bg-red-50 border-b">
              Masuk
            </button>
            <hr />
            <button className="w-full px-4 py-2 flex text-base font-normal hover:bg-red-50">
              Bantuan
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
