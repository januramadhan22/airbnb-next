import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import { TiUser } from "react-icons/ti";
import Footer from "../../components/Footer";

function Detail() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <div className="w-full py-5 px-20 flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-3xl font font-semibold">Tok Dalang Homestay</h1>
          <div className="w-full flex gap-2">
            <p>4.85</p>
            <p>Reward</p>
            <p>Bali, Indonesia</p>
          </div>
        </div>
        <div className="w-full flex gap-2">
          <img
            src="https://a0.muscache.com/im/pictures/0c654870-50d9-4d1c-ba1d-f50b6e6cbdd5.jpg?im_w=720"
            className="w-1/2 rounded-bl-lg rounded-tl-lg hover:brightness-90"
          />
          <img
            src="https://a0.muscache.com/im/pictures/0c654870-50d9-4d1c-ba1d-f50b6e6cbdd5.jpg?im_w=720"
            className="w-1/2 rounded-br-lg rounded-tr-lg hover:brightness-90"
          />
        </div>
        <div className="w-1/2 flex justify-between items-center py-3">
          <div className="w-3/4 flex flex-col">
            <h2 className="text-2xl font font-semibold">
              Seluruh Villa Tuan Rumah: Handoko
            </h2>
            <div className="flex gap-2">
              <p>4.85</p>
              <p>Reward</p>
              <p>Bali, Indonesia</p>
            </div>
          </div>
          <TiUser className="w-12 h-12 p-2 bg-red-400 fill-white rounded-full" />
        </div>
        <span className="h-px w-1/2 bg-gray-200" />
        <div className="w-1/2 flex flex-col gap-4 py-3">
          <div className="w-full flex gap-2 items-start">
            <TiUser className="w-8 h-8" />
            <div>
              <p className="font-bold">Didesain Oleh</p>
              <p className="text-gray-500">Tok Dalang Ranggi</p>
            </div>
          </div>
          <div className="w-full flex gap-2 items-start">
            <TiUser className="w-8 h-8" />
            <div>
              <p className="font-bold">Area Khusus</p>
              <p className="text-gray-500">
                Kamar pribadi dengan wifi yang cocok untuk bekerja.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 items-start">
            <TiUser className="w-8 h-8" />
            <div>
              <p className="font-bold">Pembatalan Gratis Selama 48 Jam</p>
            </div>
          </div>
        </div>
        <span className="h-px w-1/2 bg-gray-200" />
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
