  import { useState } from "react";
  import { FaTimes } from "react-icons/fa";
  import { RiTeamFill } from "react-icons/ri";


  const ModalKompeten = ({ isOpen, onClose }) => {
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
            <RiTeamFill className="w-72 h-72"/>
          </div>
          <div className="md:hidden absolute sm:bottom-[24] right-[10] text-[#E7F0FD] text-[200px] z-[-1]">
            <RiTeamFill className="w-48 h-48"/>
          </div>

          
          {/* Tombol Close */}
          <button 
            onClick={onClose} 
            className="absolute bg-blue-100 p-1 rounded-full top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md">
            <FaTimes size={10} />
          </button>

          {/* Header */}
          <h2 className="text-lg font-semibold text-[#000] mb-4">Budaya Harmonis untuk Kinerja Maksimal</h2>
          <hr />

          {/* Konten */}
          <div className="text-[#000] text-md flex gap-2 items-start mt-3">
            <h2 className="text-lg">•</h2>
            <div>  
              <h3 className="font-semibold mt-2 my-1">
              Komunikasi Terbuka & Saling Menghargai
              </h3>
              <p>Kami membangun lingkungan kerja yang penuh kepercayaan dengan komunikasi yang jujur dan sikap saling menghormati.
              </p>
            </div>
          </div>

          <div className="text-[#000] text-md flex gap-2 items-start mt-3">
            <h2 className="text-lg">•</h2>
            <div>  
              <h3 className="font-semibold mt-2 my-1">
              Kolaborasi untuk Inovasi
              </h3>
              <p>Harmoni dalam tim mendorong terciptanya ide-ide baru dan solusi terbaik bagi klien serta perusahaan.
              </p>
            </div>
          </div>
          
          <div className="text-[#000] text-md flex gap-2 items-start my-3">
            <h2 className="text-lg">•</h2>
            <div>  
              <h3 className="font-semibold mt-2 my-1">
              Produktivitas & Kinerja yang Optimal
              </h3>
              <p>Dengan kerja sama yang solid, kami memastikan setiap individu dapat berkembang dan memberikan kontribusi maksimal.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    );
  };

  export default ModalKompeten;
