"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React, { useState, useEffect } from "react";
import { RiSearchLine, RiArrowDownSLine } from "react-icons/ri";

export default function Partner() {

  const cityData = {
    "Aceh": ["LPKA Banda Aceh", "Kelas IIA Lhokseumawe", "Banda Aceh"],
    "Sumatra Utara": [
      "Rutan Medan",
      "Kelas IIA Binjai",
      "Kelas IIA Pematangsiantar",
      "Kelas IIA Tanjungbalai",
      "Kelas IIA Labuhan Ruku",
      "Gunungsitoli",
      "Pancur Batu",
      "Rutan Balige",
      "Rutan Tarutung",
      "Rutan Padangsidimpuan",
    ],
    "Sumatra Barat": ["Kelas IIA Taluang Kati", "Rutan Padang", "Pariaman"],
    "Riau": [
      "Rutan Kelas IIB Pekanbaru",
      "Kelas IIA Pekanbaru",
      "Kelas IIA Bangkinang",
      "Kelas IIA Bengkalis",
      "Kelas IIA Dumai",
      "Kelas IIA Pasir Pengaraian",
    ],
    "Bengkulu": [
      "Kelas IIA Curup",
      "Kelas IIA Bengkulu",
      "Perempuan Kelas IIA Bengkulu",
      "Kelas IIB Arga Makmur",
      "Kelas IIB Manna",
      "Rutan Kelas IIB Bengkulu",
    ],
    "Bangka Belitung": ["Rutan Kelas IIB Muntok"],
    "Lampung": [
      "Rutan Bandar Lampung",
      "Kelas IIA Kotabumi",
      "Kelas IIA Kalianda",
      "Kelas IIA Way Kanan",
      "Kelas IIA Gunung Sugih",
      "Kelas IIA Kalianda",
      "Kelas IIA Metro",
    ],
    "DKI Jakarta": [
      "Kelas I Cipinang",
      "Perempuan Kelas IIA Jakarta",
      "Narkotika Kelas IIA Jakarta",
      "Salemba",
    ],
    "Banten": [
      "Wanita Tangerang",
      "Kelas I Tangerang",
      "Kelas IIA Serang",
      "Kelas IIA Cilegon",
    ],
    "Jawa Barat": [
      "Kelas I Sukamiskin",
      "Kelas IIA Gunung Sindur",
      "Kelas IIA Banceuy",
      "Kelas IIA Karawang",
      "Kelas IIA Bekasi",
      "Kelas IIA Cirebon",
    ],
    "Jawa Tengah": [
      "Kelas IIA Magelang",
      "Kelas I Semarang",
      "Kelas IIA Ambarawa",
      "Kelas IIA Purwokerto",
      "Kelas IIA Kendal",
    ],
    "Jawa Timur": [
      "Kelas I Surabaya",
      "Kelas I Malang",
      "Kelas IIA Kediri",
      "Kelas IIA Jember",
      "Kelas IIA Banyuwangi",
      "Rutan Kelas I Medaeng",
    ],
    "D.I. Yogyakarta": [
      "Kelas IIA Yogyakarta",
      "Kelas IIA Sleman",
      "Rutan Kelas IIB Yogyakarta",
    ],
    "Bali": ["Kelas IIA Kerobokan", "Kelas IIB Singaraja", "Kelas IIB Klungkung"],
    "Nusa Tenggara Barat": [
      "Rutan Kelas IIB Sumbawa",
      "Kelas IIA Mataram",
      "Kelas IIA Bima",
      "Kelas IIB Dompu",
    ],
    "Nusa Tenggara Timur": ["Kelas IIA Kupang", "Kelas IIB Atambua", "Kelas IIB Ende"],
    "Kalimantan Tengah": ["Kelas IIA Palangka Raya", "Kelas IIA Pangkalan Bun", "Kelas IIB Kapuas"],
    "Kalimantan Timur": ["Kelas IIA Samarinda", "Kelas IIA Balikpapan", "Kelas IIB Tenggarong"],
    "Kalimantan Selatan": ["Kelas IIA Banjarmasin", "Kelas IIA Banjarbaru", "Kelas IIA Kotabaru"],
    "Kalimantan Barat": ["Kelas IIA Pontianak", "Kelas IIA Singkawang", "Kelas IIA Ketapang"],
    "Sulawesi Selatan": ["Kelas I Makassar", "Kelas IIA Parepare", "Kelas IIA Palopo"],
    "Sulawesi Utara": ["Kelas IIA Manado", "Kelas IIB Bitung", "Kelas IIB Tomohon"],
    "Sulawesi Tengah": ["Kelas IIA Palu", "Kelas IIB Poso", "Kelas IIB Luwuk"],
    "Sulawesi Tenggara": ["Kelas IIA Kendari", "Kelas IIB Baubau", "Kelas IIB Kolaka"],
    "Maluku": ["Kelas IIA Ambon", "Kelas IIB Tual", "Kelas IIB Masohi"],
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      const filtered = Object.entries(cityData)
        .flatMap(([region, lapasList]) =>
          lapasList
            .filter((lapas) =>
              lapas.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((lapas) => ({ lapas, kota: region }))
        );
      setFilteredData(filtered);
    } else if (selectedLocation !== "") {
      const lapasList = cityData[selectedLocation] || [];
      const result = lapasList.map((lapas) => ({
        lapas,
        kota: selectedLocation,
      }));
      setFilteredData(result);
    } else {
      setFilteredData([]); // default state (tampilkan tabel manual)
    }
  }, [searchTerm, selectedLocation]);
  
  
  

    return (
      <div id="heroSection" className="w-full overflow-hidden">
        <Navbar/>
        <div className="flex flex-col my-10 md:my-36 xl:mt-32 items-center">
          <div 
            className="
              flex flex-col 
              justify-center
              gap-6
              text-[#002453]"
            >

              <h1 className="
              px-3 
              font-bold text-[#3D3D3D] text-700 text-5xl md:text-6xl
              text-center
              mb-6
              mx-auto">
                Partner Bisnis Kami
            </h1>
          </div>
            {/* Content */}
            <div className="flex items-center gap-8 mt-8 w-4/5 lg:w-3/5">
              {/* Search Bar */}
              <div className="flex items-center w-full bg-[#F1F6FE] rounded-full px-4 py-2 shadow-sm">
                <RiSearchLine className="text-[#616161] mr-2 text-sm md:text-lg" />
                <input
                  type="text"
                  placeholder="Cari Lapas, cth: Kelas IIA Wanita Lampung"
                  className="bg-transparent w-full outline-none placeholder-[#616161] text-base"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedLocation(""); // 🔄 Reset dropdown saat ngetik
                  }}
                />
              </div>

              {/* Dropdown Button */}
              <select
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  setSearchTerm(""); 
                }}
                className="text-base text-gray-700 bg-[#F1F6FE] rounded-xl px-4 py-2 shadow-sm cursor-pointer w-1/2 lg:w-1/3"
              >
                <option value="">Kantor Wilayah</option>
                {Object.keys(cityData).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

            </div>
  
            {/* table */}
            <div className="bg-[#F1F6FE]/40 backdrop-blur-lg rounded-2xl shadow-md p-6 md:p-10 border border-gray-200  w-4/5 lg:w-3/5 mt-10">
            <h2 className="text-3xl font-bold text-#3D3D3D mb-10">Lokasi Mitra Bisnis</h2>

            <div className="grid grid-cols-2 gap-8 font-semibold text-[#3D3D3D] mb-8 text-base">
              <span>Nama UPT</span>
              <span>Kanwil (Kantor Wilayah)</span>
            </div>

            <div className="space-y-2 text-base text-[#3D3D3D] border-t pt-6">
            {searchTerm === "" && selectedLocation === "" ? (
                <>
                  {/* Ini bagian default, copy dari manual datamu */}
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Kelas IIA Wanita Lampung</span>
                    <span>Lampung</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Pekanbaru</span>
                    <span>Riau</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Wanita Medan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Terbuka Mataram</span>
                    <span>Nusa Tenggara Barat</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Rutan Banda Aceh</span>
                    <span>Aceh</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Kelas IIA LHOKSEUMAWE</span>
                    <span>Aceh</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Rutan Medan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Anak Medan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Lhoksukun Ruku</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Rutan Pangkalan Brandan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Sibolga</span>
                    <span>Sumatra Utara</span>
                  </div>
                </>
              ) : filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-2 gap-8 px-2 py-1 text-xl ${
                      index % 2 === 0 ? "bg-[#E7F0FD] rounded-md" : ""
                    }`}
                  >
                    <span>{item.lapas}</span>
                    <span>{item.kota}</span>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">UPT tidak ditemukan.</div>
              )}
            </div>

          </div>

          
        </div>
        <Footer />
      </div>
    );
}