import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { HiUsers } from "react-icons/hi";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header({ onDate, toogle }) {
  const [dropDown, setDropDown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.start);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full p-5 md:px-20 shadow-md bg-white grid grid-cols-6">
        {/* Left */}
        <div>
          <button className="text-2xl font-semibold text-red-400">
            airbnb
          </button>
        </div>
        {/* Center */}
        <div className="col-span-4 w-full flex flex-col items-center gap-2">
          <form className="w-2/4 py-1.5 pl-4 pr-2 border box-border rounded-full flex gap-2">
            <input
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={toogle}
              value={searchInput}
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

          {/* Date Picker */}
          {onDate && (
            <div className="flex flex-col p-2 shadow-md rounded-md">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                onChange={handleSelect}
              />
              <div className="w-full px-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Number of Guests</h2>
                <div className="flex items-center gap-2 ">
                  <HiUsers />
                  <input
                    type={"number"}
                    className="w-10 pl-1 py-1 border focus:outline-none rounded-md text-xs text-red-400"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right */}
        <div className="flex justify-end">
          <button
            onClick={() => setDropDown(!dropDown)}
            type="submit"
            className={`h-8 p-2 rounded-full bg-red-400 text-white hover:brightness-110 hover:shadow-md active:scale-90 ${
              dropDown && "shadow-md"
            }`}
          >
            <TiUser />
          </button>

          {/* Dropdown Item*/}
          {dropDown && (
            <div className="absolute border right-20 top-16 w-52 py-2 rounded-lg bg-white shadow-md flex flex-col items-start">
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
    </>
  );
}

export default Header;
