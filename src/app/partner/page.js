"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import React, { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function Partner() {

  const cityData = {
    "Aceh": ["LPKA Banda Aceh", "Lapas Kelas IIA Lhokseumawe", "Lapas Banda Aceh"],
    "Sumatra Utara": [
      "Rutan Medan",
      "Lapas Kelas IIA Binjai",
      "Lapas Kelas IIA Pematangsiantar",
      "Lapas Kelas IIA Tanjungbalai",
      "Lapas Kelas IIA Labuhan Ruku",
      "Lapas Gunungsitoli",
      "Lapas Pancur Batu",
      "Rutan Balige",
      "Rutan Tarutung",
      "Rutan Padangsidimpuan",
    ],
    "Sumatra Barat": ["Lapas Kelas IIA Taluang Kati", "Rutan Padang", "Lapas Pariaman"],
    "Lapas Riau": [
      "Rutan Kelas IIB Pekanbaru",
      "Lapas Kelas IIA Pekanbaru",
      "Lapas Kelas IIA Bangkinang",
      "Lapas Kelas IIA Bengkalis",
      "Lapas Kelas IIA Dumai",
      "Lapas Kelas IIA Pasir Pengaraian",
    ],
    "Bengkulu": [
      "Lapas Kelas IIA Curup",
      "Lapas Kelas IIA Bengkulu",
      "Lapas Perempuan Kelas IIA Bengkulu",
      "Lapas Kelas IIB Arga Makmur",
      "Lapas Kelas IIB Manna",
      "Rutan Kelas IIB Bengkulu",
    ],
    "Bangka Belitung": ["Rutan Kelas IIB Muntok"],
    "Lampung": [
      "Rutan Bandar Lampung",
      "Lapas Kelas IIA Kotabumi",
      "Lapas Kelas IIA Kalianda",
      "Lapas Kelas IIA Way Kanan",
      "Lapas Kelas IIA Gunung Sugih",
      "Lapas Kelas IIA Kalianda",
      "Lapas Kelas IIA Metro",
    ],
    "DKI Jakarta": [
      "Lapas Kelas I Cipinang",
      "Lapas Perempuan Kelas IIA Jakarta",
      "Lapas Narkotika Kelas IIA Jakarta",
      "Lapas Salemba",
    ],
    "Banten": [
      "Lapas Wanita Tangerang",
      "Lapas Kelas I Tangerang",
      "Lapas Kelas IIA Serang",
      "Lapas Kelas IIA Cilegon",
    ],
    "Jawa Barat": [
      "Lapas Kelas I Sukamiskin",
      "Lapas Kelas IIA Gunung Sindur",
      "Lapas Kelas IIA Banceuy",
      "Lapas Kelas IIA Karawang",
      "Lapas Kelas IIA Bekasi",
      "Lapas Kelas IIA Cirebon",
    ],
    "Jawa Tengah": [
      "Lapas Kelas IIA Magelang",
      "Lapas Kelas I Semarang",
      "Lapas Kelas IIA Ambarawa",
      "Lapas Kelas IIA Purwokerto",
      "Lapas Kelas IIA Kendal",
    ],
    "Jawa Timur": [
      "Lapas Kelas I Surabaya",
      "Lapas Kelas I Malang",
      "Lapas Kelas IIA Kediri",
      "Lapas Kelas IIA Jember",
      "Lapas Kelas IIA Banyuwangi",
      "Rutan Kelas I Medaeng",
    ],
    "D.I. Yogyakarta": [
      "Lapas Kelas IIA Yogyakarta",
      "Lapas Kelas IIA Sleman",
      "Rutan Kelas IIB Yogyakarta",
    ],
    "Bali": ["Lapas Kelas IIA Kerobokan", "Lapas Kelas IIB Singaraja", "Lapas Kelas IIB Klungkung"],
    "Nusa Tenggara Barat": [
      "Rutan Kelas IIB Sumbawa",
      "Lapas Kelas IIA Mataram",
      "Lapas Kelas IIA Bima",
      "Lapas Kelas IIB Dompu",
    ],
    "Nusa Tenggara Timur": ["Lapas Kelas IIA Kupang", "Lapas Kelas IIB Atambua", "Lapas Kelas IIB Ende"],
    "Kalimantan Tengah": ["Lapas Kelas IIA Palangka Raya", "Lapas Kelas IIA Pangkalan Bun", "Lapas Kelas IIB Kapuas"],
    "Kalimantan Timur": ["Lapas Kelas IIA Samarinda", "Lapas Kelas IIA Balikpapan", "Lapas Kelas IIB Tenggarong"],
    "Kalimantan Selatan": ["Lapas Kelas IIA Banjarmasin", "Lapas Kelas IIA Banjarbaru", "Lapas Kelas IIA Kotabaru"],
    "Kalimantan Barat": ["Lapas Kelas IIA Pontianak", "Lapas Kelas IIA Singkawang", "Lapas Kelas IIA Ketapang"],
    "Sulawesi Selatan": ["Lapas Kelas I Makassar", "Lapas Kelas IIA Parepare", "Lapas Kelas IIA Palopo"],
    "Sulawesi Utara": ["Lapas Kelas IIA Manado", "Lapas Kelas IIB Bitung", "Lapas Kelas IIB Tomohon"],
    "Sulawesi Tengah": ["Lapas Kelas IIA Palu", "Lapas Kelas IIB Poso", "Lapas Kelas IIB Luwuk"],
    "Sulawesi Tenggara": ["Lapas Kelas IIA Kendari", "Lapas Kelas IIB Baubau", "Lapas Kelas IIB Kolaka"],
    "Maluku": ["Lapas Kelas IIA Ambon", "Lapas Kelas IIB Tual", "Lapas Kelas IIB Masohi"],
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
                  placeholder="Cari Lapas, cth: Lapas Kelas IIA Wanita Lampung"
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
                    <span>Lapas Kelas IIA Wanita Lampung</span>
                    <span>Lampung</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Lapas Pekanbaru</span>
                    <span>Riau</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Lapas Wanita Medan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Lapas Terbuka Mataram</span>
                    <span>Nusa Tenggara Barat</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Rutan Banda Aceh</span>
                    <span>Aceh</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Lapas Kelas IIA LHOKSEUMAWE</span>
                    <span>Aceh</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Rutan Medan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Lapas Anak Medan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Lapas Lhoksukun Ruku</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 px-2 py-1">
                    <span>Rutan Pangkalan Brandan</span>
                    <span>Sumatra Utara</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8 bg-[#E7F0FD] rounded-md px-2 py-1">
                    <span>Lapas Sibolga</span>
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