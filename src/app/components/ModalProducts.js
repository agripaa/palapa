import Image from "next/image";

export default function ModalProducts({ isOpen, onClose, title, imageSrc, description }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md">
          {/* Header Modal */}
          <h2 className="text-lg font-bold text-center">{title}</h2>
  
          {/* Gambar */}
          <Image src={imageSrc} alt={title} className="w-full h-32 object-contain my-4 rounded-2xl shadow-[10px_-10px_35px_rgba(80,110,255,0.4)]" />
  
          {/* Deskripsi */}
          <p className="mt-3 text-xs md:text-sm text-[#000000]">{description}</p>
  
          {/* Button Close */}
          <div className="mt-6 flex justify-between text-xs md:text-sm">
            <button
              onClick={onClose}
              className="px-4 py-1 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Tutup
            </button>
            <button 
                className="px-4 py-1 md:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >Chat Admin</button>
          </div>
        </div>
      </div>
    );
  }
  