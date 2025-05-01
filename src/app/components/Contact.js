import { FaMapMarkerAlt, FaPhoneAlt  } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";

export default function ContactSection() {
  return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#F2F6FC] md:bg-white rounded-[2rem] shadow-lg mt-2 md:mt-6 mb-2 md:mb-6 overflow-hidden">
        {/* Bagian Kiri: Informasi Kontak */}
        <div className="text-[#000000] p-6 md:pr-1 md:pl-8 lg:pl-10 xl:pl-14 md:py-6 lg:py-10">
          <h2 className="text-[#2E312D] text-xl md:text-xl lg:text-2xl xl:text-2xl text-center md:text-left xl:text-3xl md:pl-6 xl:pl-7 font-bold text-gray-900">Hubungi Kami</h2>
          <p className="text-gray-600 mt-3 text-sm md:text-[10px] lg:text-[13px] xl:text-lg mt-2 xl:mt-4 md:pl-6 xl:pl-7 hidden md:block">Silahkan hubungi kami untuk informasi lebih lanjut</p>

          <div className="mt-3 space-y-4 text-[12px] md:text-[10px] lg:text-[13px] xl:text-[14px]">
            {/* Alamat */}
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-[#4B5563] w-10 md:w-5 lg:w-5 h-10 md:h-5 lg:h-5 xl:w-6 xl:h-6" />
              <p className="text-[#000000] md:pr-7 xl:pr-12 ">
                <strong>Graha Pasopati Nusantara, Jl. Gempol Raya Kav. II No. 19 Ceger, Cipayung - Jakarta Timur 13820</strong>.
              </p>
            </div>

            {/* Telepon */}
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#4B5563] w-4 h-4 xl:w-5 xl:h-5" />
              <div>
                <p className="text-[#000000]"><strong>Telepon</strong></p>
                <p className="text-[#000000] mt-1">0821-3865-3070</p>
              </div>  
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 text-[12px] md:text-[10px] lg:text-[13px] xl:text-[14px] gap-0">
              <div className="flex items-start space-x-3 w-full">
                <IoLogoWhatsapp className="text-[#4B5563] w-5 h-5  xl:w-6 xl:h-6" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#000000]"><strong>Nomor WhatsApp</strong></p>
                  <p className="text-[#000000]">0812-1234-8615</p>
                  <a href="https://wa.me/081212348615" target="_blank" rel="noopener noreferrer" className="md:hidden mt-2 bg-blue-500 text-center text-white px-3 py-1 rounded-lg text-[10px] font-normal shadow-md hover:bg-green-600 w-[100%] md:w-[85%]">
              Chat Via Whatsapp
            </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 w-full" >
                <MdMarkEmailUnread className="text-[#4B5563] w-5 h-5 xl:w-6 xl:h-6" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#000000]"><strong>Email Us</strong></p>
                  <p className="text-[#000000]">palapateknologi@gmail.com</p>
                  <a href="mailto:palapateknologi@gmail.com" className="bg-blue-500 text-center text-white px-4 py-1 md:hidden rounded-lg text-[10px] font-normal shadow-md hover:bg-blue-600 w-[70%] md:w-[85%] mt-2">
              Chat Via Email
            </a>
                </div> 
              </div>
            </div>  
          </div>

          {/* Tombol CTA */}
          <div className="mt-3 flex space-x-8 lg:space-x-24 xl:space-x-32 pl-7 hidden md:flex">
            <a href="https://wa.me/081212348615" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 xl:py-2 rounded-lg text-[8px] md:text-[8px] lg:text-[10px] xl:text-[13px] font-normal shadow-md hover:bg-blue-600">
              Chat Via Whatsapp
            </a>
            <a href="mailto:palapateknologi@gmail.com" className="bg-blue-500 text-white px-5 lg:px-6 xl:px-8 py-2 xl:py-2 rounded-lg text-[8px] md:text-[8px] lg:text-[10px] xl:text-[13px] font-normal shadow-md hover:bg-blue-600">
              Chat Via Email
            </a>
          </div>
        </div>
        {/* Bagian Kanan: Google Maps */}
        <div className="relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6196948688334!2d106.89035037418397!3d-6.31358696178271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edfe6ea481f9%3A0xd2ded6731b79fb6!2sGRAHA%20PASOPATI%20NUSANTARA!5e0!3m2!1sid!2sid!4v1741107375046!5m2!1sid!2sid"
        loading="lazy" 
        className="w-full h-full  rounded-l-[2rem] md:rounded-l-[3rem] lg:rounded-l-[3rem]">
        </iframe>

          

          {/* Tombol lihat di Google Maps */}
          <a
            href="https://www.google.com/maps?q=Graha+Pasopati+Nusantara"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/3 transform -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-xs font-semibold shadow-md flex items-start justify-left space-x-2 hover:bg-gray-200"
          >
            <FaMapMarkerAlt className="text-gray-600" />
            <span>Lihat dari Google Maps</span>
          </a>
        </div>
      </div>
  );
}
