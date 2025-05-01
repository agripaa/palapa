import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiExchangeFill } from "react-icons/ri";


const ModalSinergi = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-end px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                  md:text-xs
                  `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Modal */}
      <div className="relative bg-white p-7 py-10 md:p-8 lg:px-10 text-[10px] md:text-[15px] w-[100%] md:w-[70%] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">

                {/* Ikon di Background */}
        <div className="flex md:hidden absolute sm:bottom-[24] right-[10] text-[#E7F0FD] text-[200px] z-[-1]">
          <RiExchangeFill className="w-48 h-48"/>
        </div>
        <div className="hidden md:flex absolute right-[32] text-[#E7F0FD] text-[200px] z-[-1]">
          <RiExchangeFill className="w-72 h-72"/>
        </div>
        

        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold text-[#000] mb-4">Sinergi untuk Kesuksesan Bersama</h2>
        <hr />

        {/* Konten */}
        <div className="text-[#000] text-md flex gap-2 items-start mt-3">
          <h2 className="text-lg">•</h2>
          <div>  
            <h3 className="font-semibold mt-2 my-1">
            Kerja Sama Tim yang Solid
            </h3>
            <p>Kami percaya bahwa pencapaian besar hanya dapat diraih melalui kolaborasi erat antar individu dan departemen.
            </p>
          </div>
        </div>

        <div className="text-[#000] text-md flex gap-2 items-start mt-3">
          <h2 className="text-lg">•</h2>
          <div>  
            <h3 className="font-semibold mt-2 my-1">
            Berbagi Ide & Sumber Daya
            </h3>
            <p>Setiap anggota tim didorong untuk berkontribusi dengan berbagi wawasan demi menciptakan solusi yang lebih inovatif dan efisien.
            </p>
          </div>
        </div>
        
        <div className="text-[#000] text-md flex gap-2 items-start my-3">
          <h2 className="text-lg">•</h2>
          <div>  
            <h3 className="font-semibold mt-2 my-1">
            Kolaborasi untuk Hasil Maksimal
            </h3>
            <p>Sinergi yang kuat dengan mitra dan pelanggan memungkinkan kami menghadapi tantangan dan meraih kesuksesan bersama.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ModalSinergi;
