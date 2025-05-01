import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";


const ModalIntegrity = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-start px-10 bg-black/30 backdrop-blur-sm z-50 
                  transition-opacity duration-300 ${isOpen || isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
                  md:text-xs
                  `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container Modal */}
      <div className="relative bg-white p-7 py-10 md:p-8 lg:px-10 text-[10px] md:text-[15px] w-[100%] md:w-[70%] max-w-3xl rounded-2xl shadow-lg border border-gray-200 text-left overflow-hidden z-[-2]">

                {/* Ikon di Background */}
        <div className="hidden md:flex absolute right-[32] text-[#E7F0FD] text-[200px] z-[-1]">
          <RiShieldCheckFill className="w-72 h-72"/>
        </div>
        <div className="md:hidden absolute sm:bottom-[24] right-[10] text-[#E7F0FD] text-[200px] z-[-1]">
          <RiShieldCheckFill className="w-48 h-48"/>
        </div>

        
        {/* Tombol Close */}
        <button 
          onClick={onClose} 
          className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
          <FaTimes size={10} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-bold md:font-semibold text-[#000] mb-4">Integritas sebagai Pilar Utama PT PALAPA</h2>
        <hr />

        {/* Konten */}
        <div className="text-[#000] text-md flex gap-2 items-start mt-3">
          <h2 className="text-lg">•</h2>
          <div>  
            <h3 className="font-semibold mt-2 my-1">
            Komitmen pada Kejujuran & Transparansi
            </h3>
            <p>Kami menjunjung tinggi prinsip keterbukaan dalam setiap aspek bisnis, 
              memastikan kepercayaan pelanggan dan mitra tetap terjaga.
            </p>
          </div>
        </div>

        <div className="text-[#000] text-md flex gap-2 items-start mt-3">
          <h2 className="text-lg">•</h2>
          <div>  
            <h3 className="font-semibold mt-2 my-1">
            Etika dalam Setiap Keputusan
            </h3>
            <p>Setiap langkah yang kami ambil didasarkan pada nilai moral yang kuat, 
              menciptakan bisnis yang adil dan bertanggung jawab.
            </p>
          </div>
        </div>
        
        <div className="text-[#000] text-md flex gap-2 items-start my-3">
          <h2 className="text-lg">•</h2>
          <div>  
            <h3 className="font-semibold mt-2 my-1">
            Membangun Kepercayaan Jangka Panjang
            </h3>
            <p>Dengan integritas sebagai fondasi, 
              kami berkomitmen membangun hubungan yang kokoh dan saling menguntungkan dengan semua pemangku kepentingan
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ModalIntegrity;
